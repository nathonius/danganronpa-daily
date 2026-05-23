import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiGithubIcon } from '@semantic-icons/simple-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SiGithubIcon],
})
export class Footer {}
