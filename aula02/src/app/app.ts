import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Primeiro } from "./primeiro/primeiro";
import { Segundo } from "./segundo/segundo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Primeiro, Segundo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula02');
}
