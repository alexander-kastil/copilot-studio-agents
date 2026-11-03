using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace FoodApp
{
    [Route("[controller]")]
    [ApiController]
    public class HealthController(ILogger<HealthController> logger) : ControllerBase
    {
        private static List<string> logs = new List<string>();

        private void LogProbe(string message)
        {
            Console.WriteLine("Healt Controller: " + message);
            logger.LogInformation(message);
        }

        [HttpGet("liveness")]
        public IActionResult GetLiveness()
        {
            LogProbe($"{DateTime.UtcNow} -- Liveness {logs.Count}");
            if (logs.Count <= 10)
                return Ok();
            else
                return BadRequest();
        }

        [HttpGet("readiness")]
        public IActionResult GetReadiness()
        {
            LogProbe($"{DateTime.UtcNow} -- Readiness {logs.Count}");
            return Ok();
        }

        [HttpGet("startup")]
        public IActionResult GetStartup()
        {
            LogProbe($"{DateTime.UtcNow} -- Startup {logs.Count}");
            return Ok();
        }
    }
}