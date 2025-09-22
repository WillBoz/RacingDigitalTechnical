using API.HorseRacing.Interface;

namespace API.DataService.Interface
{
    public interface IDataService
    {
        #region public methods
        Task<List<HorseRaceResults>> GetRaceResults();
        List<HorseRaceResults> ProcessRaceResults(FileStream fileStream);
        #endregion
    }
}
