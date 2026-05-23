import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'guessr',
    loadComponent: async () => await import('./guessr/guessr').then((m) => m.Guessr),
  },
  {
    path: 'character-art',
    loadComponent: async () =>
      await import('./character-art/character-art').then((m) => m.CharacterArt),
  },
  {
    path: '',
    loadComponent: async () =>
      await import('./mode-selection/mode-selection').then((m) => m.ModeSelection),
  },
];
