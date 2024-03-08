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
    colocarBombas(){
        for(let i=0; i<this.mines; i++){

            var x= Math.floor(Math.random()*this.rows);
            var y= Math.floor(Math.random()*this.cols);

            if(this.matriz[x][y].mina==0){
                
                this.matriz[x][y].mina++;

            }
            else{
                i--;
            }  
        }
        
    }
    calcularAdyacentes(){
        for (let i = 0; i < this.rows; i++) {
            
            
            for (let j = 0; j < this.cols; j++) {
                if(this.matrix[i][j].mina==1){
                    if(this.matrix[i]==0&&this.matrix[j]==0){
                        this.matrix[i-1][j].minasAdyacentes++
                    }
                }
              
            }
            
        }
    }
}