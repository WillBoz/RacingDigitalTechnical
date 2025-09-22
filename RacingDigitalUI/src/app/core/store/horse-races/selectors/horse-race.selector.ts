import { createSelector } from '@ngrx/store';
import { HorseRaceResult } from '../../../models/horse-race-result.model';
import { horseRacesFeature } from '../reducers/horse-race.reducer';

export const getHorseRaceResults = createSelector(
  horseRacesFeature.selectRaceResults,
  (raceResults): HorseRaceResult[] => {
    const hasResults = raceResults && raceResults.length > 0;

    if (!hasResults) {
      return [];
    }

    return raceResults;
  },
);

export const getLoadingRaceResults = createSelector(
  horseRacesFeature.selectLoadingRaceResults,
  (loadingRaceResults): boolean => loadingRaceResults,
);

export const getLoadedRaceResults = createSelector(
  horseRacesFeature.selectLoadedRaceResults,
  (loadedRaceResults): boolean => loadedRaceResults,
);
