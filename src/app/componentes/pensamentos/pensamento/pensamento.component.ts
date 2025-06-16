import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  imports: [CommonModule, RouterModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent implements OnInit{

  @Input() pensamento: Pensamento = {
    id: '',
    conteudo: 'Angular é incrível!',
    autoria: 'Joao',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string{
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
      return 'pensamento-p';
  }
}
