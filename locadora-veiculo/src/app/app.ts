import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Veiculos } from "./veiculos/veiculos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Veiculos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('locadora-veiculo');
}
