import { Injectable } from '@angular/core';
import { VeiculoModel } from '../modelos/veiculo';

@Injectable({
  providedIn: 'root',
})
export class Servico {

  veiculos: Array<VeiculoModel > = [];

  obterVeiculos(){
    return this.veiculos;
  }
  inserirVeiculo(veiculo: VeiculoModel){
    veiculo.Id = this.veiculos.length + 1;

    this.veiculos.push(veiculo);
  }

  obterPorId(id:number){
    return this.veiculos.find(v => v.Id === id);
  }

  excluirVeiculo(id:number){
    this.veiculos = this.veiculos.filter(v => v.Id !== id);
  }
}
