namespace API.HorseRacing.Interface
{
    public class HorseRaceResults
    {
        #region public properties
        public required string Race { get; set; }
        public required DateTime RaceDate { get; set; }
        public required int RaceTime { get; set; }
        public required string Racecourse { get; set; }
        public required int RaceDistance { get; set; }
        public required string Jockey { get; set; }
        public required string Trainer { get; set; }
        public required string Horse { get; set; }
        public required int FinishingPosition { get; set; }
        public required decimal DistanceBeaten { get; set; }
        public required decimal TimeBeaten { get; set; }
        #endregion
    }
}
