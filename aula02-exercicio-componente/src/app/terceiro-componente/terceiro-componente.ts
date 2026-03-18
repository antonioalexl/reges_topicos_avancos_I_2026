import { CurrencyPipe, DatePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-terceiro-componente',
  imports: [FormsModule,CurrencyPipe,DatePipe,UpperCasePipe,TitleCasePipe, SlicePipe],
  templateUrl: './terceiro-componente.html',
  styleUrl: './terceiro-componente.css',




})
export class TerceiroComponente {

  texto = 'angular framework';
valor = 1234567.89;
hoje = new Date();
percentual = 0.854;
obj = { id: 1, nome: 'Produto A' };

statusPedido: 'aguardando' | 'processando' |
'enviado' | 'entregue' | 'cancelado'
= 'enviado';
tipoUsuario: 'admin' | 'editor' | 'viewer' = 'editor';

  onSubmit(event: Event) {

  }

}
