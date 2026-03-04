import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primeiro-componente',
  imports: [FormsModule],
  templateUrl: './primeiro-componente.html',
  styleUrl: './primeiro-componente.css',
})
export class PrimeiroComponente {
  inputValue: string = '';
  inputTexto: string = '';
  mudeCor: boolean = false;

  clicar() {
    this.inputTexto = this.inputValue;
  }
  mudarCor() {
    this.mudeCor = !this.mudeCor;
  }
}
