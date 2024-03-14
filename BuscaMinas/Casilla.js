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
    set marca(marcada){
        this.marcada=marcada;
    }
    Revelar(){
        
        
        this.revelada=true

        
    }
}