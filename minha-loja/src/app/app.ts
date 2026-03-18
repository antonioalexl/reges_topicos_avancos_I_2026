import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { Header } from './header/header';
import { Home } from './home/home';
import { CardProduto } from './card-produto/card-produto';
import { FormularioProduto } from './formulario-produto/formulario-produto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Footer, Header, CardProduto, FormularioProduto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('minha-loja');

  onComprar(nome: string): void {
    alert('Você comprou: ' + nome);
  }
}
