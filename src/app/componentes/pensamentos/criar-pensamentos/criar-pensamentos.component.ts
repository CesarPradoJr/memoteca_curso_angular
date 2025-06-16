import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamentos',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  }


constructor(private service: PensamentoService, private router: Router) { }


ngOnInit(): void {}

criarPensamento(){
  this.service.criar(this.pensamento).subscribe(() => {
    this.router.navigate(['/listarPensamento'])
  })
}
cancelarPensamento(){
  this.router.navigate(['/listarPensamento'])
}
}
