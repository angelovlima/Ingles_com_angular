export class Coracao{
    constructor(
        public cheio:boolean,
        public urlCheio:string = "/assets/cheio.png",
        public urlVazio:string = "/assets/vazio.png"
    ){}

    public exibeCoracao(){
        if(this.cheio){
            return this.urlCheio
        }
        else{
            return this.urlVazio
        }
    }
}