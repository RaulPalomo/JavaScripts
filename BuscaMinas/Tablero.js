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
                
                if(this.matriz[i][j].mina==1){
                    
                    if(this.matriz[i]==0&&this.matriz[j]==0){
                        this.matriz[i+1][j].minasAdyacentes+1
                        this.matriz[i][j+1].minasAdyacentes+1
                        this.matriz[i+1][j+1].minasAdyacentes+1
                    }
                    else if(this.matriz[i]==0&&this.matriz[j]==this.cols){
                        this.matriz[i+1][j].minasAdyacentes+1
                        this.matriz[i+1][j-1].minasAdyacentes+1
                        this.matriz[i][j-1].minasAdyacentes+1
                    }
                    else if(this.matriz[i]==this.rows&&this.matriz[j]==0){
                        this.matriz[i-1][j].minasAdyacentes+1
                        this.matriz[i-1][j+1].minasAdyacentes+1
                        this.matriz[i][j+1].minasAdyacentes+1
                    }
                    else if(this.matriz[i]==this.rows&&this.matriz[j]==this.cols){
                        this.matriz[i-1][j].minasAdyacentes+1
                        this.matriz[i-1][j+1].minasAdyacentes+1
                        this.matriz[i][j-1].minasAdyacentes+1 
                    }

                }
                console.log(i +""+j)
            }
            
        }
        console.log(this.matriz[0][0].minasAdyacentes)
        console.log(this.matriz[0][1].minasAdyacentes)
        console.log(this.matriz[1][1].minasAdyacentes)
        console.log(this.matriz[1][0].minasAdyacentes)
    }
    
}