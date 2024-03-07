class Tablero {
    matriz;
    constructor(rows, cols, mines) {
        this.rows = rows;
        this.cols = cols;
        this.mines = mines;
        this.matriz = this.generarTablero();
    }
    generarTablero() {
        
        let matrizTablero= [];
        
        for (let i = 0; i < this.rows; i++) {
            
            let fila = []
            
            for (let j = 0; j < this.cols; j++) {
                
                let casilla=new Casilla(i,j,0,false,false,false,0)
                
                fila.push(casilla)
                console.log("casilla: "+casilla.x+casilla.y)
            }
            matrizTablero.push(fila)
            
        }
        return matrizTablero;

    }
}