import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HorseRaceResult } from '../../models/horse-race-result.model';

@Component({
  selector: 'app-results-grid',
  templateUrl: './results-grid.html',
  styleUrl: './results-grid.css',
  imports: [CommonModule, TableModule],
})
export class ResultsGridComponent {
  public raceResults = input<HorseRaceResult[] | []>([]);
  public racesLoading = input<boolean>();
  public racesLoaded = input<boolean>();

  public resultSelected = output<HorseRaceResult>();

  public gridHeaders = computed(() => {
    const results = this.raceResults();

    if (!results || results.length === 0) {
      return [];
    }

    const headers = Object.keys(results[0]);
    const filteredHeaders = headers.filter((h) => h !== 'id' && h !== 'notes');

    return filteredHeaders;
  });

  public formatHeader(header: string): string {
    const withSpaces = header.replace(/([A-Z])/g, ' $1');
    const withUpperCase = withSpaces.replace(/^./, (c) => c.toUpperCase());

    return withUpperCase;
  }

  public selectResult(raceResult: HorseRaceResult): void {
    this.resultSelected.emit(raceResult);
  }
}
