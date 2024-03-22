document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("form").style.display="flex";
    document.getElementById("form").style.width = 200 + "px"
    if (document.cookie.includes("jugadorInfo")) {
        jugadorJson=document.cookie.substring(12)
        let jugador= JSON.parse(jugadorJson)
        console.log(jugador)
        let date= jugador.fechanacimento.substring(0,10)
        document.getElementById("cols").value=jugador.columnas;
        document.getElementById("rows").value=jugador.filas;
        document.getElementById("mines").value=jugador.minas;
        document.getElementById("apellido").value=jugador.apellido;
        document.getElementById("nick").value=jugador.nick;
        document.getElementById("email").value=jugador.mail;
        document.getElementById("date").value=date;
        document.getElementById("nombre").value=jugador.nombre;
    }
        
});
document.getElementById("formulari").addEventListener("submit", function (getTablero) {
    event.preventDefault();
    let correct = true;
    let cols = document.getElementById("cols").value;
    let rows = document.getElementById("rows").value;
    let mines = document.getElementById("mines").value;
    if (rows * cols < mines) { correct = false; alert("No puede haber más minas que casillas!!!") }
    const fechaNacimiento = new Date(document.getElementById("date").value);
    const fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    if (fechaActual.getMonth() < fechaNacimiento.getMonth() || (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    if (edad < 18) { correct = false; alert("Tienes que ser mayor de edad"); }
    if (correct) {
        let tablero = new Tablero(rows, cols, mines);
        tablero.colocarBombas();
        tablero.calcularAdyacentes();
        pintarTablero(tablero);
        let nom=document.getElementById("nombre").value;
        let apellido=document.getElementById("apellido").value;
        let nick=document.getElementById("nick").value;
        let email=document.getElementById("email").value;
        let jugador = new Jugador(nom, apellido,fechaNacimiento,nick,email,rows,cols,mines);
        
        const jugadorInfo = JSON.stringify(jugador);
        document.cookie = `jugadorInfo=${jugadorInfo}; expires=Wed, 16 Apr 2025 12:00:00 UTC; path=/`;
    }



});


/*document.getElementById("submit").addEventListener("click", function (getTablero) {
    if(document.getElementById("formulari").checkValidity()){

    
    let cols = document.getElementById("cols").value;
    let rows = document.getElementById("rows").value;
    let mines = document.getElementById("mines").value;
    let toValidate = cols + rows + mines;
    let correct = true;
    let ABC = "qwertyuiopasdfghjklñzxcvbnmç?¡¿'^`*+[]{}¨´-_:;/()$%&·#!"
    toValidate = toValidate.toLowerCase();
    for (let i = 0; i < toValidate.length; i++) {
        if(cols==0||rows==0||mines==0){
            correct = false;
        }
        if (ABC.includes(toValidate[i])) {

            correct = false;

        }
    }
    if (!correct) {
        alert("Los campos no pueden ser nulos ni permiten letras o caràcteres especiales")

    }
    else {
        let tablero = new Tablero(rows, cols, mines);
        tablero.colocarBombas();
        tablero.calcularAdyacentes();
        pintarTablero(tablero);

    }
    console.log(correct)
}
})*/

document.getElementById("config").addEventListener("click", function (form) {

    if (document.getElementById("form").style.display == "none") {
        document.getElementById("form").style.display = "flex"
        document.getElementById("form").style.width = 200 + "px"
    }
    else {
        document.getElementById("form").style.display = "none"
        document.getElementById("form").style.width = 25 + "px"
    }
})

function pintarTablero(tablero) {
    let taula = document.getElementById("taula");
    taula.innerHTML = "";

    for (let i = 0; i < tablero.rows; i++) {
        let fila = document.createElement("div")
        fila.style.display = "flex";
        for (let j = 0; j < tablero.cols; j++) {
            let celda = document.createElement("div")
            celda.style.width = 25 + "px"
            celda.style.height = 25 + "px"
            celda.style.backgroundColor = "green"
            celda.style.margin = 0.5 + "px"
            celda.id = "casilla" + i + "x" + j + "y"
            console.log(celda.id)

            celda.addEventListener("click", function (callCelda) {
                for (let i = 0; i < tablero.rows; i++) {
                    for (let j = 0; j < tablero.cols; j++) {
                        if (celda.id == "casilla" + i + "x" + j + "y" && tablero.matriz[i][j].revelada == false && tablero.matriz[i][j].marcada == false) {
                            console.log(celda.id)
                            tablero.DestaparCasilla(i, j);
                            ActualizaTabla(tablero)
                        }
                    }
                }

            })
            celda.addEventListener("contextmenu", function (callCelda) {
                console.log("bandera")
                for (let i = 0; i < tablero.rows; i++) {
                    for (let j = 0; j < tablero.cols; j++) {
                        if (celda.id == "casilla" + i + "x" + j + "y") {
                            tablero.matriz[i][j].Marcar()
                            ActualizaTabla(tablero)
                        }
                    }
                }
                event.preventDefault()
            })
            fila.appendChild(celda);
        }
        taula.appendChild(fila)

    }


}

function ActualizaTabla(tablero) {
    let countMinas = 0;
    let countReveladas = 0;
    if (tablero.finish == false) {
        for (let i = 0; i < tablero.rows; i++) {
            for (let j = 0; j < tablero.cols; j++) {
                if (tablero.matriz[i][j].revelada == true) {
                    if (tablero.matriz[i][j].mina == 1) {
                        document.getElementById("casilla" + i + "x" + j + "y").style.backgroundColor = "red";
                        document.getElementById("casilla" + i + "x" + j + "y").innerHTML = "<img src=\"./img/bomba.png\" width=\"25 px\">"
                        countMinas++
                    }
                    else if (tablero.matriz[i][j].minasAdyacentes == 0) {
                        document.getElementById("casilla" + i + "x" + j + "y").style.backgroundColor = "lightskyblue";
                        countReveladas++
                    }
                    else {
                        document.getElementById("casilla" + i + "x" + j + "y").style.backgroundColor = "lightgreen";
                        document.getElementById("casilla" + i + "x" + j + "y").innerHTML = tablero.matriz[i][j].minasAdyacentes
                        document.getElementById("casilla" + i + "x" + j + "y").style.textAlign = "center"
                        document.getElementById("casilla" + i + "x" + j + "y").style.alignItems = "center"
                        countReveladas++;
                    }
                }
                else if (tablero.matriz[i][j].marcada == true) {
                    document.getElementById("casilla" + i + "x" + j + "y").innerHTML = "<img src=\"./img/bandera.png\" width=\"25 px\">"
                }
                else {
                    document.getElementById("casilla" + i + "x" + j + "y").innerHTML = ""
                }
            }
        }
        AcabaJuego(countMinas, countReveladas, tablero)
        event.preventDefault()
    }



}

function AcabaJuego(countMinas, countReveladas, tablero) {
    if (countMinas > 0) {
        let msg = document.createElement("div")
        msg.innerHTML = "Has perdido :/, crea otro tablero para jugar"
        msg.style.textAlign = "center"
        taula.appendChild(msg)
        tablero.finish = true;
        event.preventDefault()
        return true
    }
    else if (countReveladas == tablero.rows * tablero.cols - tablero.mines) {
        let msg = document.createElement("div")
        msg.innerHTML = "Has Ganado :), crea otro tablero para jugar"
        msg.style.textAlign = "center"
        taula.appendChild(msg)
        tablero.finish = true;
        event.preventDefault()
        return true
    }
    else {
        return false
    }
}
