class Tablero {
    matriz;
    constructor(rows, cols, mines) {
        this.rows = rows;
        this.cols = cols;
        this.mines = mines;
        this.matriz = this.generarTablero();
        this.finish =false;
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
    DestaparCasilla(i, j) {


        if (this.matriz[i][j].mina == 1) {
            this.matriz[i][j].Revelar()
            for (let x = 0; x < this.rows; x++) {
                for (let y = 0; y < this.cols; y++) {
                    if (this.matriz[x][y].mina == 1) {
                        this.matriz[x][y].Revelar();
                    }
                }
            }

            
        }
        else if (this.matriz[i][j].minasAdyacentes == 0) {
            this.matriz[i][j].Revelar()
            if (i > 0 && j > 0 && this.matriz[i - 1][j - 1].revelada == false) {
                this.DestaparCasilla(i - 1, j - 1);
            }
            if (i > 0 && this.matriz[i - 1][j].revelada == false) {
                this.DestaparCasilla(i - 1, j);
            }
            if (i > 0 && j < this.cols - 1 && this.matriz[i][j + 1].revelada == false) {
                this.DestaparCasilla(i - 1, j + 1);
            }
            if (j > 0 && this.matriz[i][j - 1].revelada == false) {
                this.DestaparCasilla(i, j - 1);
            }
            if (j < this.cols - 1 && this.matriz[i][j + 1].revelada == false) {
                this.DestaparCasilla(i, j + 1);
            }
            if (i < this.rows - 1 && j > 0 && this.matriz[i + 1][j - 1].revelada == false) {
                this.DestaparCasilla(i + 1, j - 1);
            }
            if (i < this.rows - 1 && this.matriz[i + 1][j].revelada == false) {
                this.DestaparCasilla(i + 1, j);
            }
            if (i < this.rows - 1 && j < this.cols - 1 && this.matriz[i + 1][j + 1].revelada == false) {
                this.DestaparCasilla(i + 1, j + 1);
            }

        }
        else if (this.matriz[i][j].minasAdyacentes > 0) {
            this.matriz[i][j].Revelar()
        }
    }
    calcCaso(i, j) {

        if (i > 0 && j > 0) {
            this.matriz[i - 1][j - 1].minasAdyacentes++;
        }
        if (i > 0) {
            this.matriz[i - 1][j].minasAdyacentes++;
        }
        if (i > 0 && j < this.cols - 1) {
            this.matriz[i - 1][j + 1].minasAdyacentes++;
        }
        if (j > 0) {
            this.matriz[i][j - 1].minasAdyacentes++;
        }
        if (j < this.cols - 1) {
            this.matriz[i][j + 1].minasAdyacentes++;
        }
        if (i < this.rows - 1 && j > 0) {
            this.matriz[i + 1][j - 1].minasAdyacentes++;
        }
        if (i < this.rows - 1) {
            this.matriz[i + 1][j].minasAdyacentes++;
        }
        if (i < this.rows - 1 && j < this.cols - 1) {
            this.matriz[i + 1][j + 1].minasAdyacentes++;
        }
    }


}