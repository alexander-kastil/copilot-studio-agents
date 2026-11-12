#nullable enable
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using ModelContextProtocol.Extensions.Apps;
using ModelContextProtocol.Server;

namespace FoodCatalogMcp
{
    [McpServerResourceType]
    internal class DemandFormResource
    {
        public static Task<string> ReadHtml(IWebHostEnvironment env) =>
            File.ReadAllTextAsync(Path.Combine(env.WebRootPath ?? Path.Combine(env.ContentRootPath, "wwwroot"), "widgets", "demand-form.html"));

        [McpServerResource(UriTemplate = "ui://food-catalog/demand-form.html", Name = "demand-form", MimeType = McpApps.HtmlMimeType)]
        public static Task<string> Read(IWebHostEnvironment env) => ReadHtml(env);

        [McpServerResource(UriTemplate = "ui://food-catalog/demand-form.skybridge.html", Name = "demand-form-skybridge", MimeType = "text/html+skybridge")]
        public static Task<string> ReadSkybridge(IWebHostEnvironment env) => ReadHtml(env);
    }
}
