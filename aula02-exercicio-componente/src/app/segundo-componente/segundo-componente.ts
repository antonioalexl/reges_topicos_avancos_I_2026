import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-segundo-componente',
  imports: [FormsModule],
  templateUrl: './segundo-componente.html',
  styleUrl: './segundo-componente.css',
})
export class SegundoComponente {
valor: string = '';
}
