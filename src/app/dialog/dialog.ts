import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dialog {
  public readonly open = input.required<boolean>();
  public readonly dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');
  public constructor() {
    effect(() => {
      const open = this.open();
      const dialog = this.dialog();
      if (open) {
        dialog?.nativeElement.showModal();
      } else {
        dialog?.nativeElement.close();
      }
    });
  }
}
