import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { VeiculoModel } from '../../modelos/veiculo';
import { AlertaService } from '../../services/alerta.service';
import { VeiculosService } from '../../services/veiculos.service';

@Component({
  selector: 'app-veiculo',
  imports: [FormsModule],
  templateUrl: './veiculo.html',
  styleUrl: './veiculo.css',
})
export class Veiculo {
  id: number = 0;
  // veiculo: VeiculoModel = {};
  //veiculo: VeiculoModel = {};
  veiculo = signal<VeiculoModel>({});

  constructor(
    private router: Router,
    private servico: VeiculosService,
    private route: ActivatedRoute,
    private alerta: AlertaService,
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      if (this.id) {
        //this.veiculo = this.servico.obterPorId(this.id)!;

        this.servico.obterPorId(this.id!).subscribe({
          next: (dados) => {
            //this.veiculo.set(dados)
            console.log(dados);
            this.veiculo.set(dados) ;
          },
          error: (msg) => this.alerta.erro('Erro ao excluir veículo: ' + msg),
        });
      }
    });
  }

  voltar() {
    this.router.navigate(['/veiculos']);
  }

  submit() {
    if (!this.veiculo().Marca || !this.veiculo().Modelo || !this.veiculo().Placa) {
      this.alerta.erro('Preencha Marca, Modelo e Placa.');
      return;
    }

    if(this.id) {//se existir id, é edição, senão é inserção
      this.servico.alterar(this.id, this.veiculo()).subscribe({
        next: () => {
          this.alerta.sucesso('Veículo alterado com sucesso.');
          this.voltar();
        },
        error: (msg) => this.alerta.erro('Erro ao alterar veículo: ' + msg),
      });
      return;
    }
    else {
      this.servico.inserir(this.veiculo()).subscribe({
        next: () => {
          this.alerta.sucesso('Veículo salvo com sucesso.');
          this.voltar();
        },
        error: (msg) => this.alerta.erro('Erro ao salvar veículo: ' + msg),
      });
    }
  }
}
