import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { VeiculoModel } from '../../modelos/veiculo';
import { Servico } from '../servico';

@Component({
  selector: 'app-veiculo',
  imports: [FormsModule],
  templateUrl: './veiculo.html',
  styleUrl: './veiculo.css',
})
export class Veiculo {
  id: number = 0;
  veiculo: VeiculoModel = {};

  constructor(
    private router: Router,
    private servico: Servico,
    private route: ActivatedRoute,
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      if (this.id) {
        this.veiculo = this.servico.obterPorId(this.id)!;
      }
    });
  }


  voltar() {
    this.router.navigate(['/veiculos']);
  }

  submit() {
    /* if(this.veiculo.Id){
      //ALTERAR
    }
    else{
      //INSERIR
      this.servico.inserirVeiculo(this.veiculo);
      this.voltar();
    }*/

    //INSERIR
    this.servico.inserirVeiculo(this.veiculo);
    this.voltar();
  }
}
