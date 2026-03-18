import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponente } from "./primeiro-componente/primeiro-componente";
import { SegundoComponente } from './segundo-componente/segundo-componente';
import { TerceiroComponente } from './terceiro-componente/terceiro-componente';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimeiroComponente, SegundoComponente, TerceiroComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula02-exercicio-componente');
}
