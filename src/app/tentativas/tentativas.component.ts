import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  erro:string ="/assets/erro.png"
  coracao:string ="/assets/cheio.png"
  constructor() { }

  ngOnInit() {
  }

}
