using Azure;
using Azure.AI.OpenAI;
using Microsoft.Extensions.AI;
using Microsoft.Extensions.Options;
using ModelContextProtocol.Server;
using PurchasingService.Configuration;
using PurchasingService.Graph;
using PurchasingService.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<IRandomProvider, SecureRandomProvider>();
builder.Services.Configure<OfferRandomizerOptions>(builder.Configuration.GetSection("OfferRandomizer"));
builder.Services.Configure<GraphOptions>(builder.Configuration.GetSection("Graph"));
builder.Services.Configure<AzureOpenAIOptions>(builder.Configuration.GetSection("AzureOpenAI"));
builder.Services.AddSingleton<GraphHelper>();
builder.Services.AddSingleton<IChatClient>(sp =>
{
    var aiOptions = sp.GetRequiredService<IOptions<AzureOpenAIOptions>>().Value;

    var client = new AzureOpenAIClient(
        new Uri(aiOptions.Endpoint),
        new AzureKeyCredential(aiOptions.ApiKey));

    return client.GetChatClient(aiOptions.Model).AsIChatClient();
});
builder.Services.AddSingleton<IOfferRandomizer>(sp =>
{
    var options = sp.GetRequiredService<IOptions<OfferRandomizerOptions>>().Value;
    var random = sp.GetRequiredService<IRandomProvider>();
    return new OfferRandomizer(random, options);
});

builder.Services.AddMcpServer()
    .WithHttpTransport()
    .WithToolsFromAssembly();

var app = builder.Build();

app.MapMcp();

app.Run();
