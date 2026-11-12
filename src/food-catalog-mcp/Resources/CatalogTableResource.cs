#nullable enable
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using ModelContextProtocol.Extensions.Apps;
using ModelContextProtocol.Server;

namespace FoodCatalogMcp
{
    [McpServerResourceType]
    internal class CatalogTableResource
    {
        [McpServerResource(UriTemplate = "ui://food-catalog/food-catalog.html", Name = "food-catalog", MimeType = McpApps.HtmlMimeType)]
        public static Task<string> Read(IWebHostEnvironment env) =>
            File.ReadAllTextAsync(Path.Combine(env.WebRootPath ?? Path.Combine(env.ContentRootPath, "wwwroot"), "widgets", "food-catalog.html"));
    }
}
