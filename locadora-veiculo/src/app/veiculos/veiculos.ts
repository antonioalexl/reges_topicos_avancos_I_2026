import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoModel } from '../modelos/veiculo';
import { AlertaService } from '../services/alerta.service';
import { VeiculosService } from '../services/veiculos.service';

@Component({
  selector: 'app-veiculos',
  imports: [],
  templateUrl: './veiculos.html',
  styleUrl: './veiculos.css',
})
export class Veiculos implements OnInit {
  veiculos = signal<VeiculoModel[]>([]);

  constructor(
    private router: Router,
    private servico: VeiculosService,
    private alerta: AlertaService,
  ) { }

  ngOnInit() {
    this.obterVeiculos();
  }

  novo() {
    this.router.navigate(['/veiculos/novo']);
  }

  editar(veiculo: VeiculoModel) {
    this.router.navigate(['/veiculos/editar', veiculo.Id]);
  }

  async excluir(veiculo: VeiculoModel) {
    const resultado = await this.alerta.confirmar(
      'Excluir veículo?',
      `${veiculo.Marca} ${veiculo.Modelo} (${veiculo.Placa}) será removido.`,
    );

    if (!resultado.isConfirmed) return;

    this.servico.deletar(veiculo.Id!).subscribe({
      next: () => {
        this.alerta.sucesso('Veículo excluído com sucesso.');
        this.obterVeiculos();
      },
      error: (msg) => this.alerta.erro('Erro ao excluir veículo: ' + msg),
    });
  }

  obterVeiculos() {
    this.servico.listar().subscribe({
      next: (dados) => this.veiculos.set(dados),
      error: (msg) => this.alerta.erro('Erro ao obter veículos: ' + msg),
    });
  }
}
