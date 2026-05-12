import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoModel } from '../modelos/veiculo';
import { VeiculosService } from '../services/veiculos.service';

@Component({
  selector: 'app-veiculos',
  imports: [],
  templateUrl: './veiculos.html',
  styleUrl: './veiculos.css',
})
export class Veiculos {
  veiculos = signal<VeiculoModel[]>([]);

  constructor(
    private router: Router,
    private servico: VeiculosService,
  ) {
    this.obterVeiculos();
  }

  novo() {
    this.router.navigate(['/veiculos/novo']);
  }

  editar(veiculo: VeiculoModel) {
    this.router.navigate(['/veiculos/editar', veiculo.Id]);
  }

  excluir(veiculo: VeiculoModel) {
    this.servico.deletar(veiculo.Id!).subscribe({
      next: () => (this.obterVeiculos()),
      error: (msg) => (alert('Erro ao obter os veículos: ' + msg)),
    });

  }

  obterVeiculos() {
    this.servico.listar().subscribe({
      next: (dados) => this.veiculos.set(dados),
      error: (msg) => (console.error('Erro ao obter os veículos: ' + msg)),
    });
  }
}
