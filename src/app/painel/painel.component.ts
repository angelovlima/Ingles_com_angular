import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { Frases } from './frase-mock'


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  frases: Frase[] = Frases;
  resposta:string;

  rodada: number = 0;
  rodadaFrase:Frase;
  progresso: number = 0

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];

  }

  ngOnInit() {
  }

  atualizaResposta(resposta: Event){
    this.resposta = ((<HTMLInputElement>resposta.target).value)

  }

  verificarResposta(){


    if (this.resposta == this.rodadaFrase.frasePT){
      alert("Tradução correta")
      //rodada
      this.rodada++;
      //altera a frase (objeto)
      this.rodadaFrase = this.frases[this.rodada]
      //altera valor de progresso para barra
      this.progresso = this.progresso + (100/ this.frases.length)
    }
    else{
      alert("Tu é burro em")
    }
  }


}
