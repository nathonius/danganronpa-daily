import { Component, computed, ElementRef, signal, TemplateRef, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterData, GAME } from '../characters/interfaces';
import { Character } from './character/character';
import { CHARACTER, CHARACTERS } from '../characters';
import { DateTime } from 'luxon';
import { Dialog } from './dialog/dialog';

const MAX_GUESSES = 7;
const ATTRIBUTE_CLASSES = {
  correct: 'bg-success/50',
  partial: 'bg-warning/50',
  incorrect: 'bg-error/50',
};

@Component({
  selector: 'app-root',
  imports: [Character, Dialog],
  templateUrl: './app.html',
})
export class App {
  public readonly CHARACTERS = Object.values(CHARACTERS);
  public readonly GAME = GAME;
  public readonly genderModal = viewChild<ElementRef<HTMLDialogElement>>('gender');
  public readonly answer: CharacterData = this.getAnswer();
  public readonly guesses = signal<CharacterData[]>([]);
  public readonly gameStatus = computed(() => {
    const guesses = this.guesses();
    if (guesses.some((g) => g.id === this.answer.id) && guesses.length <= MAX_GUESSES) {
      return 'WIN';
    } else if (guesses.length >= MAX_GUESSES) {
      return 'LOSE';
    }
    return 'PLAYING';
  });
  public readonly hearts = computed(() => {
    const guesses = this.guesses();
    const heartCount = Math.max(0, MAX_GUESSES - guesses.length);
    const emptyHeartCount = MAX_GUESSES - heartCount;
    let hearts = ``;
    for (let i = 0; i < heartCount; i += 1) {
      hearts = `${hearts}❤️`;
    }
    for (let i = 0; i < emptyHeartCount; i += 1) {
      hearts = `${hearts}🖤`;
    }
    console.log(hearts);
    return hearts;
  });
  public readonly characterQuery = signal<string>('');
  public readonly characterOptions = computed<CharacterData[]>(() => {
    const query = this.characterQuery();
    if (query.trim() === '') {
      return [];
    }
    const results = this.CHARACTERS.filter((c) =>
      c.name.toLowerCase().includes(query.toLowerCase()),
    );
    return results.slice(0, 5);
  });

  public guess(character: CHARACTER | null) {
    if (character) {
      const newGuesses = [...this.guesses()];
      newGuesses.push(CHARACTERS[character]);
      this.guesses.set(newGuesses);
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

  public getAnswer() {
    const seed = DateTime.now().startOf('day').toSeconds();
    const answerIndex = seed % this.CHARACTERS.length;
    return this.CHARACTERS[answerIndex];
  }

  public openGenderModal() {
    const genderModal = this.genderModal();
    if (genderModal) {
      genderModal.nativeElement.showModal();
    }
  }
}
