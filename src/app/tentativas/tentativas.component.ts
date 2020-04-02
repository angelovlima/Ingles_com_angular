import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  vazio:string ="/assets/vazio.png"
  cheio:string ="/assets/cheio.png"
  constructor() { }

  ngOnInit() {
  }

}
