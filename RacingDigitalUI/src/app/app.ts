import { Component, inject, OnInit, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeroComponent } from './core/components/hero/hero';
import { ResultsGridComponent } from './core/components/results-grid/results-grid';
import { ResultsPanelComponent } from './core/components/results-panel/results-panel';
import { HorseRaceResult } from './core/models/horse-race-result.model';
import {
  loadHorseRaceResults,
  updateHorseRaceNotes,
} from './core/store/horse-races/actions/horse-race.actions';
import {
  getHorseRaceResults,
  getLoadedRaceResults,
  getLoadingRaceResults,
} from './core/store/horse-races/selectors/horse-race.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [HeroComponent, ResultsGridComponent, ResultsPanelComponent],
})
export class App implements OnInit {
  private store = inject(Store);

  public raceResults: Signal<HorseRaceResult[]> = this.store.selectSignal(getHorseRaceResults);
  public racesLoading: Signal<boolean> = this.store.selectSignal(getLoadingRaceResults);
  public racesLoaded: Signal<boolean> = this.store.selectSignal(getLoadedRaceResults);

  public selectedResult: HorseRaceResult | null = null;

  public ngOnInit(): void {
    this.store.dispatch(loadHorseRaceResults());
  }

  public resultSelected(raceResult: HorseRaceResult): void {
    this.selectedResult = raceResult;
  }

  public resultDeselected(): void {
    this.selectedResult = null;
  }

  public updateResultNote(note: string): void {
    if (!this.selectedResult) {
      return;
    }

    this.store.dispatch(updateHorseRaceNotes({ id: this.selectedResult.id, notes: note }));
  }
}
