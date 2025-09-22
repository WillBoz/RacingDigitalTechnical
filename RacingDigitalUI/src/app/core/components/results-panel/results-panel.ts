import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DrawerModule } from 'primeng/drawer';
import { TextareaModule } from 'primeng/textarea';
import { HorseRaceResult } from '../../models/horse-race-result.model';

@Component({
  selector: 'app-results-panel',
  templateUrl: './results-panel.html',
  styleUrl: './results-panel.css',
  imports: [CommonModule, FormsModule, DrawerModule, TextareaModule],
})
export class ResultsPanelComponent {
  public selectedResult = input<HorseRaceResult | null>(null);

  public closePanel = output<boolean>();
  public updateResultNote = output<string>();

  public showPanel = computed(() => this.selectedResult() !== null);

  public hidePanel() {
    this.closePanel.emit(true);
  }

  public editResultNote(event: Event) {
    const note = (event.target as HTMLTextAreaElement).value;

    this.updateResultNote.emit(note);
  }
}
