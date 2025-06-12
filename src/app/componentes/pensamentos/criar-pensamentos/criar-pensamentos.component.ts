import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamentos',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  }


constructor(){

}
ngOnInit(): void {

}

criarPensamento(){
  alert('Pensamento criado com sucesso!');
}
cancelarPensamento(){
  alert('Pensamento cancelado!');
}

}
