import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  numberAttribute,
} from '@angular/core';

@Component({
  selector: 'app-hearts',
  template: `{{ redHearts() }}{{ emptyHearts() }}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.font-size]': 'size()',
  },
})
export class Hearts {
  public readonly maximum = input.required({ transform: numberAttribute });
  public readonly guessesMade = input.required({ transform: numberAttribute });
  public readonly size = input<string>('1rem');

  public readonly redHearts = computed(() => {
    const maximum = this.maximum();
    const guessesMade = this.guessesMade();
    const heartCount = Math.max(0, maximum - guessesMade);
    return new Array(heartCount).fill('❤️').join('');
  });

  public readonly emptyHearts = computed(() => {
    const maximum = this.maximum();
    const guessesMade = this.guessesMade();
    const heartCount = Math.max(0, maximum - (maximum - guessesMade));
    return new Array(heartCount).fill('🖤').join('');
  });
}
