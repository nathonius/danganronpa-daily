export const GAME = {
  Danganronpa: 'Danganronpa: Trigger Happy Havoc',
  Danganronpa2: 'Danganronpa 2: Goodbye Despair',
  Danganronpa3: 'Danganronpa V3: Killing Harmony',
} as const;
export type GAME = keyof typeof GAME;

export const ANCESTRY = {
  Human: 'Human',
  Robot: 'Robot',
  Ai: 'Artificial Intelligence',
} as const;
export type ANCESTRY = keyof typeof ANCESTRY;

export const GENDER = {
  Male: 'Male',
  Female: 'Female',
  Unknown: 'Unknown',
  None: 'None',
} as const;
export type GENDER = keyof typeof GENDER;

export const CHARACTER_STATUS = {
  Dead: 'Dead',
  Alive: 'Alive',
  Inactive: 'Inactive',
} as const;
export type CHARACTER_STATUS = keyof typeof CHARACTER_STATUS;

export interface CharacterData {
  id: string;
  name: string;
  debutIn: GAME;
  ultimateTalent: string | null;
  ancestry: ANCESTRY;
  affiliations: string[];
  blackened: boolean;
  sprite: string;
  gender: GENDER;
  heightCm: number | null;
  weightKg: number | null;
  link: string;
  status: CHARACTER_STATUS;
}
