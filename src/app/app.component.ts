import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  resultado: boolean;

  jogoRodando: boolean = true

  encerrarJogo(tipo: string){
    this.jogoRodando = false
    if (tipo == "vitoria"){
      this.resultado = true
      //alert("Você venceu! ^-^")
    }
    else{
      this.resultado = false
      //alert("Você perdeu ;-;")
    }
  }

  reiniciarJogo(){
    this.jogoRodando = true
  }
}
