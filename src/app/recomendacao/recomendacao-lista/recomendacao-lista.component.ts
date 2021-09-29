import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomendacao-lista',
  templateUrl: './recomendacao-lista.component.html',
  styleUrls: ['./recomendacao-lista.component.css']
})
export class RecomendacaoListaComponent implements OnInit {
  
  @Input() recomendacoes = []

  constructor() { }

  ngOnInit(): void {
  }

}
