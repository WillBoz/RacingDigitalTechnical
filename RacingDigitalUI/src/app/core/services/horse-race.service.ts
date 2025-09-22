import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHorseRaceResult } from '../interfaces/horse-race-result.interface';

@Injectable({
  providedIn: 'root',
})
export class HorseRaceService {
  private readonly baseUrl = 'https://localhost:7248';

  private http = inject(HttpClient);

  getRaceResults(): Observable<IHorseRaceResult[]> {
    return this.http.get<IHorseRaceResult[]>(`${this.baseUrl}/Data/RaceResults`);
  }
}
