import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideSearch, LucideImage, LucideNotepadText } from '@lucide/angular';

@Component({
  selector: 'app-mode-selection',
  imports: [RouterLink, LucideSearch, LucideImage],
  templateUrl: './mode-selection.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModeSelection {}
