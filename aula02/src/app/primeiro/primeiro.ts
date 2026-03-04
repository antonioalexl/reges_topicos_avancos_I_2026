import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primeiro',
  imports: [FormsModule],
  templateUrl: './primeiro.html',
  styleUrl: './primeiro.css',
})
export class Primeiro {
  minhaClasseCSS = 'azul';
  usarCSS = true;
  minhaCor = 'pink';

  clicar() {
    this.minhaClasseCSS = 'vermelho';
    this.usarCSS = false;
    this.minhaCor = 'green';
    console.error('clicou');
  }
}
