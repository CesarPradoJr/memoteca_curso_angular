import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamentos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento = {
    id: '1',
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
