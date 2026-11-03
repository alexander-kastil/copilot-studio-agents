using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.FeatureManagement;

namespace FoodApp
{
    [Route("[controller]")]
    [ApiController]
    public class ConfigController(IConfiguration cfg, IFeatureManager featureManager) : ControllerBase
    {

        [HttpGet]
        public ActionResult GetConfig()
        {
            var useSQLite = cfg.GetValue<string>("AppSettings:UseSQLite");

            var config = cfg.Get<AppConfig>();
            return Ok(config);
        }

        [HttpGet("getEnvVars")]
        public ActionResult GetEnvVars()
        {
            var val = Environment.GetEnvironmentVariables();
            return Ok(val);
        }

        [HttpGet("getFeatureFlags")]
        public async Task<ActionResult> GetFeatureFlags()
        {
            var flags = new Dictionary<string, bool>();
            var featureNames = new[] { "PremiumFeature" };

            foreach (var featureName in featureNames)
            {
                flags[featureName] = await featureManager.IsEnabledAsync(featureName);
            }

            return Ok(flags);
        }
    }
}