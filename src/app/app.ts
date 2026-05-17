import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  imports: [RouterOutlet, Header, Footer],
  host: {
    class: 'h-full flex flex-col gap-4 p-8 overflow-auto',
  },
})
export class App {}
