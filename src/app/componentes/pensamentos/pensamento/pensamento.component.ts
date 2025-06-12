import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pensamento',
  imports: [CommonModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'Angular é incrível!',
    autoria: 'Joao',
    modelo: 'modelo1'
  }

  larguraPensamento(): string{
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
      return 'pensamento-p';
  }
}
