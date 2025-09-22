import { DateHelpers } from '../helpers/date-helpers';
import { IHorseRaceResult } from '../interfaces/horse-race-result.interface';

export class HorseRaceResult {
  public id!: number;
  public race!: string;
  public raceDate!: string;
  public raceTime!: number;
  public racecourse!: string;
  public raceDistance!: number;
  public jockey!: string;
  public trainer!: string;
  public horse!: string;
  public finishingPosition!: number;
  public distanceBeaten!: number;
  public timeBeaten!: number;
  public notes?: string;

  constructor(horseRaceResults: IHorseRaceResult, index: number) {
    Object.assign(this, horseRaceResults);

    this.raceDate = DateHelpers.formatStringToDate(horseRaceResults.raceDate);
    this.id = index;
  }

  public static fromInterface(iHorseRaceResult: IHorseRaceResult, index: number): HorseRaceResult {
    return new HorseRaceResult(iHorseRaceResult, index);
  }

  public static toInterface(horseRaceResults: HorseRaceResult): IHorseRaceResult {
    return {
      race: horseRaceResults.race,
      raceDate: horseRaceResults.raceDate,
      raceTime: horseRaceResults.raceTime,
      racecourse: horseRaceResults.racecourse,
      raceDistance: horseRaceResults.raceDistance,
      jockey: horseRaceResults.jockey,
      trainer: horseRaceResults.trainer,
      horse: horseRaceResults.horse,
      finishingPosition: horseRaceResults.finishingPosition,
      distanceBeaten: horseRaceResults.distanceBeaten,
      timeBeaten: horseRaceResults.timeBeaten,
    };
  }
}
