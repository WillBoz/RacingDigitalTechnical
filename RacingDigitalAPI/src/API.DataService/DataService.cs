using System.Collections.Generic;
using System.Globalization;
using API.DataService.Interface;
using API.FileService.Interface;
using API.HorseRacing.Interface;
using CsvHelper;
using CsvHelper.Configuration;
using Microsoft.Extensions.Logging;

namespace API.DataService
{
    public class DataService : IDataService
    {
        #region private properties
        private IFileService fileService;
        private ILogger<DataService> logger;
        #endregion

        #region public constructor
        public DataService(IFileService fileService, ILogger<DataService> logger)
        {
            this.fileService = fileService;
            this.logger = logger;
        }
        #endregion

        #region public methods
        /// <summary>
        /// Gets results from the file service and processes them into a list of HorseRaceResults.
        /// </summary>
        /// <returns>A list of HorseRaceResults</returns>
        public async Task<List<HorseRaceResults>> GetRaceResults()
        {
            using FileStream resultsFileStream = await fileService.GetResultsFileStream();

            List<HorseRaceResults> raceResults = ProcessRaceResults(resultsFileStream);

            return raceResults;
        }

        /// <summary>
        /// Processed results from a file stream into a list of HorseRaceResults.
        /// </summary>
        /// <returns>A list of HorseRaceResults</returns>
        public List<HorseRaceResults> ProcessRaceResults(FileStream fileStream)
        {
            try
            {
                logger.LogInformation("Starting to process race results.");

                using StreamReader streamReader = new StreamReader(fileStream);
                CsvConfiguration config = new CsvConfiguration(new CultureInfo("en-GB"))
                {
                    HasHeaderRecord = true,
                    Delimiter = ",",
                };
                using CsvReader csvReader = new CsvReader(streamReader, config);

                List<HorseRaceResults> raceResults = csvReader
                    .GetRecords<HorseRaceResults>()
                    .ToList();

                logger.LogInformation("Returning processed race results.");

                return raceResults;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error processing race results.");
                throw;
            }
        }
        #endregion
    }
}
