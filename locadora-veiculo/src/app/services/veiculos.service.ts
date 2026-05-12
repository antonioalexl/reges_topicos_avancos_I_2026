import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { VeiculoModel } from '../modelos/veiculo';

@Injectable({
  providedIn: 'root',
})
export class VeiculosService {
  private http = inject(HttpClient);
  private url = ' https://localhost:7111/api/veiculo';

  listar() {
    return this.http.get<VeiculoModel[]>(this.url);
  }

  obterPorId(id: number) {
    return this.http.get<VeiculoModel>(`${this.url}/${id}`);
  }

  alterar(id: number, veiculo: VeiculoModel) {
    return this.http.put<VeiculoModel>(`${this.url}/${id}`, veiculo);
  }
  deletar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  inserir(veiculo: VeiculoModel) {
    return this.http.post<VeiculoModel>(this.url, veiculo);
  }
}
