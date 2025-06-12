import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { CommonModule } from '@angular/common';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterModule, PensamentoComponent, CommonModule],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {

  @Input() listaPensamentos: Pensamento[] = []

}
