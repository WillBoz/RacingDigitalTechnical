import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IHorseRaceResult } from '../../../interfaces/horse-race-result.interface';
import { HorseRaceService } from '../../../services/horse-race.service';
import {
  loadHorseRaceResults,
  loadHorseRaceResultsFailure,
  loadHorseRaceResultsSuccess,
} from '../actions/horse-race.actions';

@Injectable()
export class HorseRaceEffects {
  private actions$ = inject(Actions);
  private horseRaceService = inject(HorseRaceService);

  loadHorseRaceResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHorseRaceResults),
      mergeMap(() =>
        this.horseRaceService.getRaceResults().pipe(
          map((raceResults: IHorseRaceResult[]) =>
            loadHorseRaceResultsSuccess({
              raceResults,
            }),
          ),
          catchError((error) =>
            of(
              loadHorseRaceResultsFailure({
                error,
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
