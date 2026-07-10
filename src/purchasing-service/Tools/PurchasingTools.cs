using System.ComponentModel;
using System.Text.Json;
using Microsoft.Extensions.AI;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using ModelContextProtocol.Server;
using PurchasingService.Configuration;
using PurchasingService.Data;
using PurchasingService.Graph;
using PurchasingService.Models;
using PurchasingService.Services;

namespace PurchasingService;

[McpServerToolType]
internal class PurchasingTools
{
    private readonly IOfferRandomizer _offerRandomizer;
    private readonly GraphHelper _graphHelper;
    private readonly IChatClient _chatClient;
    private readonly OfferRandomizerOptions _randomizerOptions;
    private readonly ILogger<PurchasingTools> _logger;

    public PurchasingTools(
        IOfferRandomizer offerRandomizer,
        GraphHelper graphHelper,
        IChatClient chatClient,
        IOptions<OfferRandomizerOptions> randomizerOptions,
        ILogger<PurchasingTools> logger)
    {
        _offerRandomizer = offerRandomizer ?? throw new ArgumentNullException(nameof(offerRandomizer));
        _graphHelper = graphHelper ?? throw new ArgumentNullException(nameof(graphHelper));
        _chatClient = chatClient ?? throw new ArgumentNullException(nameof(chatClient));
        _randomizerOptions = randomizerOptions?.Value ?? throw new ArgumentNullException(nameof(randomizerOptions));
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    [McpServerTool]
    [Description("Returns the list of all available suppliers")]
    public SupplierCollection ListSuppliers()
    {
        return new SupplierCollection { Suppliers = SupplierStore.GetSuppliers().ToList() };
    }

    [McpServerTool]
    [Description("Gets a supplier by their numeric ID")]
    public string GetSupplierById(
        [Description("The numeric ID of the supplier")] int supplierId)
    {
        var supplier = SupplierStore.GetSupplierById(supplierId);
        if (supplier is null)
            return $"Supplier with ID {supplierId} was not found.";

        return JsonSerializer.Serialize(supplier);
    }

    [McpServerTool]
    [Description("Gets a supplier by company name (case-insensitive exact match)")]
    public string GetSupplierByName(
        [Description("The company name of the supplier")] string name)
    {
        var supplier = SupplierStore.GetSupplierByName(name);
        if (supplier is null)
            return $"Supplier with name '{name}' was not found.";

        return JsonSerializer.Serialize(supplier);
    }

    [McpServerTool]
    [Description("Lists all products available for ordering with their base prices")]
    public string ListProducts()
    {
        if (_randomizerOptions.BasePrices is null || _randomizerOptions.BasePrices.Count == 0)
            return "No products are currently configured.";

        var lines = _randomizerOptions.BasePrices
            .OrderBy(kvp => kvp.Key)
            .Select(kvp => $"{kvp.Key}: {kvp.Value:F2}");

        return string.Join(Environment.NewLine, lines);
    }

    [McpServerTool]
    [Description("Generates a purchasing offer for a supplier. Products are provided as semicolon-separated 'ProductName:Quantity' pairs (e.g. 'Chai:10;Chang:5'). Optionally sends the offer by email.")]
    public async Task<OfferResponse> GenerateOffer(
        [Description("The numeric ID of the supplier")] int supplierId,
        [Description("A unique identifier for this offer request")] string requestId,
        [Description("Semicolon-separated product name and quantity pairs, e.g. 'Chai:10;Chang:5'")] string products,
        [Description("Optional email address to send the generated offer to")] string? email = null)
    {
        var supplier = SupplierStore.GetSupplierById(supplierId);
        if (supplier is null)
            throw new ArgumentException($"Supplier with ID {supplierId} was not found.", nameof(supplierId));

        var offerDetails = ParseProducts(products);
        var offerLines = new List<OfferResponseDetail>(offerDetails.Count);

        foreach (var detail in offerDetails)
        {
            offerLines.Add(_offerRandomizer.GenerateOffer(detail.ProductName, detail.RequestedAmount));
        }

        var response = new OfferResponse
        {
            RequestId = requestId,
            SupplierId = supplierId,
            TransportationCost = _offerRandomizer.TransportationCost,
            Timestamp = DateTimeOffset.UtcNow,
            OfferDetails = offerLines,
            Email = email?.Trim()
        };

        await ResponseHandler.TrySendOfferAsync(_graphHelper, _chatClient, response).ConfigureAwait(false);

        return response;
    }

    private static List<OfferRequestDetail> ParseProducts(string products)
    {
        if (string.IsNullOrWhiteSpace(products))
            throw new ArgumentException("At least one product must be provided.", nameof(products));

        var result = new List<OfferRequestDetail>();

        foreach (var entry in products.Split(';', StringSplitOptions.RemoveEmptyEntries))
        {
            var parts = entry.Split(':', 2);
            if (parts.Length != 2)
                throw new ArgumentException($"Invalid product entry '{entry.Trim()}'. Expected format: 'ProductName:Quantity'.", nameof(products));

            var productName = parts[0].Trim();
            if (!int.TryParse(parts[1].Trim(), out var quantity) || quantity <= 0)
                throw new ArgumentException($"Invalid quantity for '{productName}'. Must be a positive integer.", nameof(products));

            result.Add(new OfferRequestDetail { ProductName = productName, RequestedAmount = quantity });
        }

        if (result.Count == 0)
            throw new ArgumentException("At least one product must be provided.", nameof(products));

        return result;
    }
}
