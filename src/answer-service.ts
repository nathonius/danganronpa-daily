import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { ALL_CHARACTERS } from './characters';

export const SEED_DATES: Record<'guessr' | 'characterArt', DateTime> = {
  guessr: DateTime.fromObject({ year: 2026, month: 1, day: 1 }),
  characterArt: DateTime.fromObject({ year: 2026, month: 1, day: 20 }),
} as const;

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  public getAnswer(seedDate: DateTime) {
    // Get days since start of the year
    const days = Math.abs(Math.round(seedDate.diffNow().as('days')));
    const answerIndex = days % ALL_CHARACTERS.length;

    return ALL_CHARACTERS[answerIndex];
  }
}
