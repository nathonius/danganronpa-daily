import {
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterData, GAME } from '../../characters/interfaces';
import { Character } from '../character/character';
import { CHARACTER, CHARACTERS } from '../../characters';
import { DateTime } from 'luxon';
import { Dialog } from '../dialog/dialog';
import { Monokuma } from '../../characters/monokuma';
import { Monomi } from '../../characters/monomi';
import { AnswerService, SEED_DATES } from '../answer-service';
import { Hearts } from '../hearts';
import { datedKey, storageSignal } from '../storageSignal';

const MAX_GUESSES = 5;
const ATTRIBUTE_CLASSES = {
  correct: 'bg-success/50',
  partial: 'bg-warning/50',
  incorrect: 'bg-error/50',
};

@Component({
  selector: 'app-guessr',
  imports: [Character, Dialog, Hearts],
  templateUrl: './guessr.html',
})
export class Guessr {
  public readonly MAX_GUESSES = MAX_GUESSES;
  public readonly Monokuma = Monokuma;
  public readonly CHARACTERS = Object.values(CHARACTERS);
  public readonly GAME = GAME;
  public readonly genderModal = viewChild<ElementRef<HTMLDialogElement>>('gender');
  public readonly guessIds = storageSignal<CHARACTER[]>(
    datedKey('guessr.guesses'),
    [],
    (val) => Array.isArray(val) && val.every((v) => typeof v === 'string'),
  );
  public readonly guesses = computed(() => {
    const guessIds = this.guessIds();
    return guessIds.map((id) => CHARACTERS[id]);
  });
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
    const results = this.CHARACTERS.filter(
      (c) => c.name.toLowerCase().includes(query.toLowerCase()) && !guesses.includes(c),
    );
    return results;
  });
  public readonly answerService = inject(AnswerService);
  public readonly answer: CharacterData = this.answerService.getAnswer(SEED_DATES.guessr);
  public readonly hideGameOverDialog = signal(false);

  public guess(character: CHARACTER | null) {
    if (character) {
      const newGuesses = [...this.guessIds()];
      newGuesses.push(character);
      this.guessIds.set(newGuesses);
      this.characterQuery.set('');
    }
  }

  public attributeClass(character: CharacterData, attribute: keyof CharacterData): string {
    const value = character[attribute];
    const targetValue = this.answer[attribute];
    if (typeof value === 'boolean') {
      return value === targetValue ? ATTRIBUTE_CLASSES.correct : ATTRIBUTE_CLASSES.incorrect;
    } else if (typeof value === 'number' && typeof targetValue === 'number') {
      const diff = Math.abs(value - targetValue);
      return diff === 0
        ? ATTRIBUTE_CLASSES.correct
        : diff <= 10
          ? ATTRIBUTE_CLASSES.partial
          : ATTRIBUTE_CLASSES.incorrect;
    } else {
      return value === targetValue ? ATTRIBUTE_CLASSES.correct : ATTRIBUTE_CLASSES.incorrect;
    }
  }

  public attributeIcon(value: number | null, attribute: keyof CharacterData): string {
    const targetValue = this.answer[attribute];
    if (typeof targetValue !== 'number' || typeof value !== 'number' || value === targetValue) {
      return '';
    } else if (value > targetValue) {
      return '⬇️';
    } else {
      return '⬆️';
    }
  }

  public openGenderModal() {
    const genderModal = this.genderModal();
    if (genderModal) {
      genderModal.nativeElement.showModal();
    }
  }
}
