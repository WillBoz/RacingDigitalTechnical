using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InfoController : ControllerBase
    {
        #region private fields
        private ILogger<InfoController> logger;
        #endregion

        #region public constructor
        public InfoController(ILogger<InfoController> logger)
        {
            this.logger = logger;
        }
        #endregion

        #region public methods
        /// <summary>
        /// Act as an endpoint to return infomation about the application.
        /// </summary>
        /// <returns>An <see cref="AppInfo"/> object containing version and description.</returns>
        [HttpGet(Name = "InfoRoot")]
        [ProducesResponseType(typeof(AppInfo), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<AppInfo> Root()
        {
            try
            {
                logger.LogInformation("Processing InfoRoot request at {Time}", DateTime.UtcNow);

                var apiInfo = new AppInfo
                {
                    Name = "Racing Digital API",
                    Version = "v1.0",
                    Description = "API providing racing data and services.",
                    Timestamp = DateTime.UtcNow,
                };

                return Ok(apiInfo);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error while generating app info");

                return StatusCode(
                    StatusCodes.Status500InternalServerError,
                    "An unexpected error occurred."
                );
            }
        }
        #endregion
    }
}
