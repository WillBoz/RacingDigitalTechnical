using API.FileService.Interface;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace API.FileService
{
    public class FileService : IFileService
    {
        #region private properties
        private string resultsDirectory;
        private string resultsFileName;
        private ILogger<FileService> logger;
        #endregion

        #region public constructor
        public FileService(IConfiguration configuration, ILogger<FileService> logger)
        {
            resultsDirectory =
                configuration["Directories:Data"]
                ?? throw new InvalidOperationException("Results directory not configured.");
            resultsFileName =
                configuration["Files:RacingResults"]
                ?? throw new InvalidOperationException("Results file name not configured.");
            this.logger = logger;
        }
        #endregion

        #region public methods
        /// <summary>
        /// Reads the contents of the results file and returns it as a file stream.
        /// </summary>
        /// <returns>A file stream containing the results file contents.</returns>
        public async Task<FileStream> GetResultsFileStream()
        {
            try
            {
                if (string.IsNullOrWhiteSpace(resultsDirectory))
                    throw new ArgumentException("Results directory is not set.");

                if (string.IsNullOrWhiteSpace(resultsFileName))
                    throw new ArgumentException("Results file name is not set.");

                string filePath = Path.Combine(resultsDirectory, resultsFileName);
                bool fileExists = File.Exists(filePath);

                if (!fileExists)
                {
                    logger.LogWarning("Results file not found: {Path}", filePath);
                    throw new FileNotFoundException("File not found.", filePath);
                }

                logger.LogInformation("Reading results file from {Path}", filePath);

                FileStream fileStream = File.OpenRead(filePath);

                logger.LogInformation("Returning results stream.");

                return await Task.FromResult(fileStream);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error reading results file {Path}", resultsFileName);
                throw;
            }
        }
        #endregion
    }
}
