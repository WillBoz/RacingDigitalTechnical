import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { HorseRaceEffects } from './core/store/horse-races/effects/horse-race.effect';
import {
  horseRacesFeatureKey,
  horseRacesReducer,
} from './core/store/horse-races/reducers/horse-race.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    // Angular Core
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Routing
    provideRouter(routes),

    // HTTP
    provideHttpClient(),

    // NgRx State Management
    provideStore({
      [horseRacesFeatureKey]: horseRacesReducer,
    }),
    provideEffects([HorseRaceEffects]),

    // UI
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
};
