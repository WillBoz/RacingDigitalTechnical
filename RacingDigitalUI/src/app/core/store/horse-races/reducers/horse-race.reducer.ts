import { createFeature, createReducer, on } from '@ngrx/store';
import { HorseRaceResult } from '../../../models/horse-race-result.model';
import {
  loadHorseRaceResults,
  loadHorseRaceResultsFailure,
  loadHorseRaceResultsSuccess,
  updateHorseRaceNotes,
} from '../actions/horse-race.actions';

export interface HorseRaceState {
  raceResults: HorseRaceResult[];
  loadingRaceResults: boolean;
  loadedRaceResults: boolean;
}

const initialState: HorseRaceState = {
  raceResults: [],
  loadingRaceResults: false,
  loadedRaceResults: false,
};

const reducer = createReducer(
  initialState,

  on(loadHorseRaceResults, (state) => ({
    ...state,
    loadingRaceResults: true,
  })),

  on(loadHorseRaceResultsSuccess, (state, { raceResults }) => {
    const horseRaceResults = raceResults.map((result, index) =>
      HorseRaceResult.fromInterface(result, index),
    );

    return {
      ...state,
      raceResults: horseRaceResults,
      loadingRaceResults: false,
      loadedRaceResults: true,
    };
  }),

  on(loadHorseRaceResultsFailure, (state, { error }) => {
    console.error('Error loading horse race results:', error);

    return {
      ...state,
      loadingRaceResults: false,
      loadedRaceResults: false,
    };
  }),

  on(updateHorseRaceNotes, (state, { id, notes }) => {
    const raceResult = state.raceResults.find((result) => result.id === id);

    if (!raceResult) {
      return state;
    }

    const updatedRaceResult = { ...raceResult, notes };

    const updatedRaceResults = state.raceResults.map((raceResult) => {
      const isUpdated = raceResult.id === id;

      return isUpdated ? updatedRaceResult : raceResult;
    });

    return {
      ...state,
      raceResults: updatedRaceResults,
    };
  }),
);

export const horseRacesFeature = createFeature({
  name: 'horseRaces',
  reducer,
});

export const {
  name: horseRacesFeatureKey,
  reducer: horseRacesReducer,
  selectHorseRacesState,
  selectRaceResults,
  selectLoadingRaceResults,
  selectLoadedRaceResults,
} = horseRacesFeature;
