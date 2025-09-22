using API.DataService.Interface;
using API.HorseRacing.Interface;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataController : ControllerBase
    {
        #region private properties
        private IDataService dataService;
        private ILogger<DataController> logger;
        #endregion

        #region public constructor
        public DataController(IDataService dataService, ILogger<DataController> logger)
        {
            this.dataService = dataService;
            this.logger = logger;
        }
        #endregion


        #region public methods
        /// <summary>
        /// Acts as an endpoint to return infomation about the endpoint.
        /// </summary>
        /// <returns>
        /// Returns a sentence to explain the use of the endpoints.
        /// </returns>
        [HttpGet(Name = "DataRoot")]
        [ProducesResponseType(typeof(string), 200)]
        public ActionResult<string> Root()
        {
            logger.LogInformation("Processing DataRoot request at {Time}", DateTime.UtcNow);

            string apiInfo =
                "DataController: This endpoint returns horse racing data that can be used for analysis.";

            return Ok(apiInfo);
        }

        /// <summary>
        /// Acts as an endpoint to retrieve horse race results.
        /// </summary>
        /// <returns>
        /// A list of <see cref="HorseRaceResults"/> objects.
        /// </returns>
        [HttpGet("RaceResults", Name = "RaceResults")]
        [ProducesResponseType(typeof(List<HorseRaceResults>), 200)]
        [ProducesResponseType(500)]
        public async Task<ActionResult<List<HorseRaceResults>>> GetRaceResults()
        {
            try
            {
                logger.LogInformation("Processing GetResults request at {Time}", DateTime.UtcNow);

                List<HorseRaceResults> raceResults = await dataService.GetRaceResults();

                return Ok(raceResults);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error while processing RaceResults request");

                return StatusCode(
                    StatusCodes.Status500InternalServerError,
                    "An unexpected error occurred."
                );
            }
        }

        #endregion
    }
}
