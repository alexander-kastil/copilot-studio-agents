#nullable enable
using System.ComponentModel;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using FoodApp.Services;
using ModelContextProtocol.Extensions.Apps;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;

namespace FoodCatalogMcp
{
    [McpServerToolType]
    internal class CatalogTools(IFoodCatalogService foodService)
    {
        [McpServerTool(Name = "show_food_catalog")]
        [McpAppUi(ResourceUri = "ui://food-catalog/food-catalog.html", Visibility = [McpUiToolVisibility.Model, McpUiToolVisibility.App])]
        [Description("Shows the food catalog as an interactive table inside the conversation. Columns: name, price, in stock, minimum stock. The user can sort by any column and open a row to see its description and whether stock is below the minimum. Use this when the user wants to look at, browse, sort or compare the catalog or its stock levels. Call get_all_food_items instead when only raw data is needed without a table.")]
        public async Task<CallToolResult> ShowFoodCatalog()
        {
            var items = (await foodService.GetAllFoodItemsAsync())
                .Select(f => new
                {
                    id = f.ID,
                    name = f.Name,
                    price = f.Price,
                    inStock = f.InStock,
                    minStock = f.MinStock,
                    description = f.Description,
                    belowMinimum = f.InStock < f.MinStock
                })
                .ToList();

            var low = items.Where(i => i.belowMinimum).Select(i => i.name).ToList();
            var summary = low.Count == 0
                ? $"{items.Count} items in the catalog, none below minimum stock."
                : $"{items.Count} items in the catalog, {low.Count} below minimum stock: {string.Join(", ", low)}.";

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = summary }],
                StructuredContent = JsonSerializer.SerializeToElement(new { items }, new JsonSerializerOptions(JsonSerializerDefaults.Web))
            };
        }
    }
}
