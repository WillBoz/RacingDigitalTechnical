import { createAction, props } from '@ngrx/store';
import { IHorseRaceResult } from '../../../interfaces/horse-race-result.interface';

export const loadHorseRaceResults = createAction('[HorseRaces] Load Horse Race Results');
export const loadHorseRaceResultsSuccess = createAction(
  '[HorseRaces] Load Horse Race Results Success',
  props<{ raceResults: IHorseRaceResult[] }>(),
);
export const loadHorseRaceResultsFailure = createAction(
  '[HorseRaces] Load Horse Race Results Failure',
  props<{ error: Error }>(),
);

export const updateHorseRaceNotes = createAction(
  '[HorseRaces] Update Horse Race Notes',
  props<{ id: number; notes: string }>(),
);
