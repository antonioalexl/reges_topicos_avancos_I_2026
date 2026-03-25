import { Routes } from '@angular/router';

export const routes: Routes = [
{path: 'veiculos', loadComponent: () => import('./veiculos/veiculos').then(m => m.Veiculos) },
{path: 'veiculos/novo', loadComponent:()=> import('./veiculos/veiculo/veiculo').then(m => m.Veiculo) },
{path: 'veiculos/editar/:id', loadComponent:()=> import('./veiculos/veiculo/veiculo').then(m => m.Veiculo) },

];
