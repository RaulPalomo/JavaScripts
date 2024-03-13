class Tablero {
    matriz;
    constructor(rows, cols, mines) {
        this.rows = rows;
        this.cols = cols;
        this.mines = mines;
        this.matriz = this.generarTablero();
    }
    generarTablero() {

        let matrizTablero = [];

        for (let i = 0; i < this.rows; i++) {

            let fila = []

            for (let j = 0; j < this.cols; j++) {

                let casilla = new Casilla(i, j, 0, false, false, false, 0)

                fila.push(casilla)
                console.log("casilla: " + casilla.x + casilla.y)
            }
            matrizTablero.push(fila)

        }
        return matrizTablero;

    }
    colocarBombas() {
        for (let i = 0; i < this.mines; i++) {

            var x = Math.floor(Math.random() * this.rows);
            var y = Math.floor(Math.random() * this.cols);

            if (this.matriz[x][y].mina == 0) {

                this.matriz[x][y].mina++;

            }
            else {
                i--;
            }
        }

    }
    calcularAdyacentes() {

        for (let i = 0; i < this.rows; i++) {


            for (let j = 0; j < this.cols; j++) {

                if (this.matriz[i][j].mina == 1) {
                    this.calcCaso(i, j);

                }

            }

        }


        for (let i = 0; i < this.rows; i++) {


            for (let j = 0; j < this.cols; j++) {


                console.log(this.matriz[i][j].minasAdyacentes)
            }
        }

    }
    calcCaso(i, j) {
        console.log("aaaaaa")
        if (i == 0 && j == 0) {
            console.log("a")
            this.matriz[i + 1][j].minasAdyacentes++
            this.matriz[i][j + 1].minasAdyacentes++
            this.matriz[i + 1][j + 1].minasAdyacentes++
        }
        else if (i == 0 && j == this.cols - 1) {
            console.log("b")
            this.matriz[i + 1][j].minasAdyacentes++
            this.matriz[i + 1][j - 1].minasAdyacentes++
            this.matriz[i][j - 1].minasAdyacentes++
        }
        else if (i == this.rows - 1 && j == 0) {
            console.log("c")
            this.matriz[i - 1][j].minasAdyacentes++
            this.matriz[i - 1][j + 1].minasAdyacentes++
            this.matriz[i][j + 1].minasAdyacentes++
        }
        else if (i == this.rows - 1 && j == this.cols - 1) {
            console.log("d")
            this.matriz[i - 1][j].minasAdyacentes++
            this.matriz[i - 1][j - 1].minasAdyacentes++
            this.matriz[i][j - 1].minasAdyacentes++
        }
        else if (i==0){
            this.matriz[i][j+1].minasAdyacentes++
            this.matriz[i][j-1].minasAdyacentes++
            this.matriz[i+1][j+1].minasAdyacentes++
            this.matriz[i+1][j-1].minasAdyacentes++
            this.matriz[i+1][j].minasAdyacentes++
        }
        else if (i==this.rows-1){
            this.matriz[i][j-1].minasAdyacentes++
            this.matriz[i][j+1].minasAdyacentes++
            this.matriz[i-1][j-1].minasAdyacentes++
            this.matriz[i-1][j+1].minasAdyacentes++
            this.matriz[i-1][j].minasAdyacentes++
        }
        else if (j==0){
            this.matriz[i][j+1].minasAdyacentes++
            this.matriz[i+1][j+1].minasAdyacentes++
            this.matriz[i+1][j].minasAdyacentes++
            this.matriz[i-1][j+1].minasAdyacentes++
            this.matriz[i-1][j].minasAdyacentes++
        }
        else if (j== this.cols-1){
            this.matriz[i][j-1].minasAdyacentes++
            this.matriz[i+1][j-1].minasAdyacentes++
            this.matriz[i+1][j].minasAdyacentes++
            this.matriz[i-1][j-1].minasAdyacentes++
            this.matriz[i-1][j].minasAdyacentes++
        }
        else{
            this.matriz[i][j-1].minasAdyacentes++
            this.matriz[i+1][j-1].minasAdyacentes++
            this.matriz[i+1][j].minasAdyacentes++
            this.matriz[i-1][j-1].minasAdyacentes++
            this.matriz[i-1][j].minasAdyacentes++
            this.matriz[i][j+1].minasAdyacentes++
            this.matriz[i+1][j+1].minasAdyacentes++
            this.matriz[i-1][j+1].minasAdyacentes++
        }
    }

}