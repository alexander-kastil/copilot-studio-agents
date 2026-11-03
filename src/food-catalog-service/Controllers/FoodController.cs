using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoodApp
{
    [Route("[controller]")]
    [ApiController]
    public class FoodController(FoodDBContext ctx, AILogger logger) : ControllerBase
    {

        [HttpGet()]
        public async Task<IEnumerable<CatalogItem>> GetFood()
        {
            logger.LogEvent("GetFood", "test");
            return await ctx.Food.ToArrayAsync();
        }

        [HttpGet("{id}")]
        public async Task<CatalogItem> GetById(int id)
        {
            return await ctx.Food.FirstOrDefaultAsync(v => v.ID == id);
        }

        [HttpPost()]
        public async Task<CatalogItem> CreateFood(CatalogItem item)
        {
            ctx.Food.Add(item);
            await ctx.SaveChangesAsync();
            return item;
        }

        [HttpPut()]
        public async Task<CatalogItem> UpdateFood(CatalogItem item)
        {
            ctx.Food.Attach(item);
            ctx.Entry(item).State = EntityState.Modified;
            await ctx.SaveChangesAsync();
            return item;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteFood(int id)
        {
            var item = await GetById(id);
            if (item != null)
            {
                ctx.Remove(item);
                await ctx.SaveChangesAsync();
            }
            return Ok();
        }
    }
}