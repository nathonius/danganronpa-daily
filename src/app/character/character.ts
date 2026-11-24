import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { CharacterData } from '../../characters/interfaces';

@Component({
  selector: 'app-character',
  imports: [],
  templateUrl: './character.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Character {
  public readonly data = input.required<CharacterData>();
  public readonly selected = output();
  public readonly defaultSprite = computed(() => {
    const data = this.data();
    return data.sprite.find((s) => s.default === true)?.path ?? '';
  });
}
