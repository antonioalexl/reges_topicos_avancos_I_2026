import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  imports: [],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css',
})
export class CardProduto implements OnInit {
  // Forma alternativa (decorator clássico):

  // @Input() nome: string = '';
  // @Input() preco: number = 0;
  // @Input() disponivel: boolean = true;

  nome = input.required<string>();
  preco = input<number>(0);
  disponivel = input<boolean>(true);
  
  comprar = output<string>();

  ngOnInit(): void {
    console.log('Card carregado: ' + this.nome());
  }

  onComprar(): void {
    this.comprar.emit(this.nome());
  }
}
