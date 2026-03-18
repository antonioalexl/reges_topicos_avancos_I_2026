import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-produto',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './formulario-produto.html',
  styleUrl: './formulario-produto.css',
})
export class FormularioProduto {
  nome: string = '';
  preco: number = 0;
  produtos: { nome: string; preco: number }[] = [];

  salvar(): void {
    debugger;
    this.produtos.push({ nome: this.nome, preco: this.preco });
    this.nome = '';
    this.preco = 0;
  }
}
