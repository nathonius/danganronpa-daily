import {
  Component,
  effect,
  ElementRef,
  inject,
  input,
  OnChanges,
  signal,
  SimpleChanges,
} from '@angular/core';
import { Jimp } from 'jimp';

@Component({
  selector: 'app-pixelate',
  templateUrl: './pixelate.html',
})
export class Pixelate {
  public readonly src = input.required<string>();
  public readonly pixelSize = input.required<number>();
  protected readonly imgData = signal<string | null>(null);
  protected readonly widthPx = signal<number>(200);
  protected readonly heightPx = signal<number>(200);

  public constructor() {
    effect(async () => {
      const src = this.src();
      const pixelSize = this.pixelSize();

      const img = await Jimp.read(src);
      this.widthPx.set(img.width);
      this.heightPx.set(img.height);
      img.pixelate(pixelSize);

      this.imgData.set(await img.getBase64('image/png'));
    });
  }
}
