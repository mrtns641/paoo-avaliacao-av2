import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-recomendacao-inserir',
    templateUrl:'./recomendacao-inserir.component.html',
    styleUrls: ['./recomendacao-inserir.component.css']
})
export class RecomendacaoInserirComponent {

    @Output() recomendacaoInserida = new EventEmitter();

    recomendacao: string
    descricao: string

    onRecomendacaoInserida(){
       const recomendacao = {
           recomendacao: this.recomendacao,
           descricao: this.descricao
       }
       this.recomendacaoInserida.emit(recomendacao)
    }
}