import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Pixelate } from './pixelate';
import { Hearts } from '../hearts';
import { AnswerService, SEED_DATES } from '../answer-service';
import { ALL_CHARACTERS, CHARACTER, CHARACTERS } from '../../characters';
import { CharacterData } from '../../characters/interfaces';
import { Dialog } from '../dialog/dialog';
import { Character } from '../character/character';

const PIXEL_STEPS = [90, 75, 55, 35, 25];
const MAX_GUESSES = 5;

@Component({
  selector: 'app-character-art',
  imports: [Pixelate, Hearts, Dialog, Character],
  templateUrl: './character-art.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterArt {
  public readonly MAX_GUESSES = MAX_GUESSES;
  public readonly guesses = signal<CharacterData[]>([]);
  public readonly pixelSize = computed(() => {
    const guessesMade = this.guesses().length;
    if (guessesMade >= MAX_GUESSES) {
      return 1;
    }
    return PIXEL_STEPS[guessesMade];
  });
  public readonly answerService = inject(AnswerService);
  public readonly answer = this.answerService.getAnswer(SEED_DATES.characterArt);
  public readonly gameStatus = computed(() => {
    const guesses = this.guesses();
    if (guesses.some((g) => g.id === this.answer.id) && guesses.length <= MAX_GUESSES) {
      return 'WIN';
    } else if (guesses.length >= MAX_GUESSES) {
      return 'LOSE';
    }
    return 'PLAYING';
  });
  public readonly characterQuery = signal<string>('');
  public readonly characterOptions = computed<CharacterData[]>(() => {
    const query = this.characterQuery();
    const guesses = this.guesses();

    if (query.trim() === '') {
      return [];
    }
    const results = ALL_CHARACTERS.filter(
      (c) => c.name.toLowerCase().includes(query.toLowerCase()) && !guesses.includes(c),
    );
    return results;
  });

  public guess(character: CHARACTER | null) {
    if (character) {
      const newGuesses = [...this.guesses()];
      newGuesses.push(CHARACTERS[character]);
      this.guesses.set(newGuesses);
      this.characterQuery.set('');
    }
  }
}
