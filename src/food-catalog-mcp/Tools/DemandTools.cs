#nullable enable
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using FoodApp.Services;
using Microsoft.AspNetCore.Hosting;
using ModelContextProtocol.Extensions.Apps;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;

namespace FoodCatalogMcp
{
    [McpServerToolType]
    internal class DemandTools(IFoodCatalogService foodService, IWebHostEnvironment env)
    {
        private static readonly object Gate = new();
        private static readonly List<DemandRecord> Demands = new();
        private static readonly JsonSerializerOptions Camel = new(JsonSerializerDefaults.Web);

        private sealed record DemandLineRecord(int FoodId, string Name, int Quantity);

        private sealed record DemandRecord(string DemandId, DateTimeOffset SubmittedAt, IReadOnlyList<DemandLineRecord> Lines, int TotalItems);

        [McpServerTool(Name = "open_demand_form")]
        [McpAppUi(ResourceUri = "ui://food-catalog/demand-form.html", Visibility = [McpUiToolVisibility.Model, McpUiToolVisibility.App])]
        [McpMeta("openai/outputTemplate", "ui://food-catalog/demand-form.skybridge.html")]
        [Description("Opens the demand form: an interactive form listing every dish of the food catalog with a quantity field, so the user can enter how many portions of each dish are needed and submit the demand. Call this when the user wants to submit or enter a demand. Not for reading catalog data; use the get_* tools for that.")]
        public async Task<CallToolResult> OpenDemandForm()
        {
            var items = (await foodService.GetAllFoodItemsAsync())
                .Select(i => new { id = i.ID, name = i.Name, price = i.Price, inStock = i.InStock, minStock = i.MinStock })
                .ToList();
            var html = await DemandFormResource.ReadHtml(env);
            return new CallToolResult
            {
                Content =
                [
                    new TextContentBlock { Text = $"Demand form opened with {items.Count} dishes. Waiting for the user to enter quantities and submit." },
                    new EmbeddedResourceBlock { Resource = new TextResourceContents { Uri = "ui://food-catalog/demand-form.html", MimeType = McpApps.HtmlMimeType, Text = html } },
                    new ResourceLinkBlock { Uri = "ui://food-catalog/demand-form.html", Name = "demand-form", MimeType = McpApps.HtmlMimeType }
                ],
                StructuredContent = JsonSerializer.SerializeToElement(new { items }, Camel)
            };
        }

        [McpServerTool(Name = "submit_demand")]
        [Description("Records a demand: how many portions of which dishes are needed. foodIds and quantities are parallel arrays of the same length, the quantity at position n belongs to the food id at position n. Lines with a quantity of 0 or less are dropped. Returns the demand id and the recorded lines.")]
        public async Task<CallToolResult> SubmitDemand(
            [Description("Food item ids, e.g. [1, 6]. Same length and order as quantities.")] int[] foodIds,
            [Description("Requested portions per food id, e.g. [3, 2]. Same length and order as foodIds. Entries of 0 or less are ignored.")] int[] quantities)
        {
            var lines = new List<DemandLineRecord>();
            for (var i = 0; i < foodIds.Length && i < quantities.Length; i++)
            {
                if (quantities[i] <= 0) continue;
                var item = await foodService.GetFoodItemByIdAsync(foodIds[i]);
                if (item is null) continue;
                lines.Add(new DemandLineRecord(item.ID, item.Name, quantities[i]));
            }

            DemandRecord demand;
            lock (Gate)
            {
                demand = new DemandRecord($"D-{Demands.Count + 1:0000}", DateTimeOffset.UtcNow, lines, lines.Sum(l => l.Quantity));
                Demands.Add(demand);
            }

            var summary = lines.Count == 0 ? "no items" : string.Join(", ", lines.Select(l => $"{l.Quantity} x {l.Name}"));
            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = $"Demand {demand.DemandId} noted: {summary}." }],
                StructuredContent = JsonSerializer.SerializeToElement(demand, Camel)
            };
        }
    }
}
