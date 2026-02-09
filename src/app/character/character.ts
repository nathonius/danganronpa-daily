import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
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
}
