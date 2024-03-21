class Casilla {
    constructor(x, y, mina, marcada, revelada, bandera, minasAdyacentes) {
        this.x = x;
        this.y = y;
        this.mina = mina;
        this.marcada = marcada;
        this.revelada = revelada;
        this.bandera = bandera;
        this.minasAdyacentes = minasAdyacentes;
    }
    
    Revelar() {

        if(!this.marcada){
            this.revelada = true;
        }
        


    }
    Marcar() {
        if (this.revelada == false) {
            
            this.marcada=!this.marcada;
            
        }
    }
}