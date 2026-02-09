import { CharacterData } from './interfaces';

export const Monokuma: CharacterData = {
  link: 'https://danganronpa.fandom.com/wiki/Monokuma',
  id: 'monokuma',
  name: 'Monokuma',
  affiliations: [],
  ancestry: 'Robot',
  debutIn: 'Danganronpa',
  blackened: false,
  ultimateTalent: null,
  sprite: 'monokuma.webp',
  gender: 'Male',
  heightCm: 75,
  weightKg: null,
  status: 'Inactive',
} as const;
