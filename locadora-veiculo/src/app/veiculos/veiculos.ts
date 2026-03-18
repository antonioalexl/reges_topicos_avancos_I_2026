import { Component } from '@angular/core';
import { Veiculo } from '../modelos/veiculo';

@Component({
  selector: 'app-veiculos',
  imports: [],
  templateUrl: './veiculos.html',
  styleUrl: './veiculos.css',
})
export class Veiculos {
  veiculos: Array<Veiculo> = [];


  novo(){

  }

  editar(veiculo:Veiculo){}

  excluir(veiculo:Veiculo){}
}
