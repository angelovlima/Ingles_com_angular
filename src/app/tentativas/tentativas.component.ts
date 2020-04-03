import { Coracao } from '../shared/coracao.model';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  //caveira: string = "/assets/parabens.gif"


  @Input() tentativas: number;

  coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ]

  constructor() { }

  ngOnChanges(){
    if (this.tentativas != this.coracoes.length){
      this.coracoes[this.tentativas].cheio = false
    }
  }

  ngOnInit() {

  }


}
