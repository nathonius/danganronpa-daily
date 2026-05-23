import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Pixelate } from './pixelate';
import { Sakura } from '../../characters/sakura';
import { Celestia } from '../../characters/celestia';
import { Teruteru } from '../../characters/teruteru';

@Component({
  selector: 'app-character-art',
  imports: [Pixelate],
  templateUrl: './character-art.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterArt {
  protected readonly Sakura = Sakura;
  protected readonly Celestia = Celestia;
  protected readonly Teruteru = Teruteru;
}
