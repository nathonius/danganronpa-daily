import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Monokuma } from '../../characters/monokuma';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  host: {
    class: 'flex gap-4 items-center justify-center',
  },
})
export class Header {
  protected readonly Monokuma = Monokuma;
  protected readonly sprite = this.Monokuma.sprite.find((s) => s.default === true)?.path ?? '';
}
