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

        
        this.revelada = true


    }
    Marcar() {
        if (this.revelada == false) {
            
            if (this.marcada == false) {
                this.marcada = true
                console.log(this.marcada)
            }
            else{
                this.marcada = false
                console.log(this.marcada)
            }
            
        }
    }
}