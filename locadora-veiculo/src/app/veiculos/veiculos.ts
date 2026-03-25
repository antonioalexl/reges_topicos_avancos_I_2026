import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoModel } from '../modelos/veiculo';
import { Servico } from './servico';

@Component({
  selector: 'app-veiculos',
  imports: [],
  templateUrl: './veiculos.html',
  styleUrl: './veiculos.css',
})
export class Veiculos {
  veiculos: Array<VeiculoModel> = [];

  constructor(private router: Router, private servico: Servico) {
    this.obterVeiculos();
  }

  novo(){
    this.router.navigate(['/veiculos/novo']);
  }

  editar(veiculo:VeiculoModel){
    this.router.navigate(['/veiculos/editar', veiculo.Id]);
  }

  excluir(veiculo:VeiculoModel){
    this.servico.excluirVeiculo(veiculo.Id!);
    this.obterVeiculos();
  }

  obterVeiculos(){
    this.veiculos = this.servico.obterVeiculos();
  }
}
