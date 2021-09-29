import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avaliacao-av2';
  recomendacoes = []
  onRecomendacaoInserida (recomendacao){
    this.recomendacoes = [...this.recomendacoes, recomendacao]
  }
}
