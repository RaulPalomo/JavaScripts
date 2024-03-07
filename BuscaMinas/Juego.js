document.getElementById("submit").addEventListener("click", function (getTablero) {
    let cols = document.getElementById("cols").value;
    let rows = document.getElementById("rows").value;
    let mines = document.getElementById("mines").value;
    let toValidate = cols + rows + mines;
    let correct = true;
    let ABC = "qwertyuiopasdfghjklñzxcvbnmç?¡¿'^`*+[]{}¨´-_:;/()$%&·#!"
    toValidate = toValidate.toLowerCase();
    for (let i = 0; i < toValidate.length; i++) {

        if (ABC.includes(toValidate[i])) {

            correct = false;

        }
    }
    if (!correct) {
        alert("Los campos no pueden ser nulos ni permiten letras o caràcteres especiales")

    }
    else {
        let tablero = new Tablero(rows, cols, mines);
        pintarTablero(tablero);
        
    }
    console.log(correct)

})


function pintarTablero(tablero){
    let taula = document.getElementById("taula");

    //for(let i = hasta tablero.X)
    //crea en DOm una div
    //for(j hasta tablero.y)
    //cre en dom una celda (div)
    //celda.setAttrubute(coord_x,i)
    //celda.innerHTML=
    //celda.addEventListener(clik)
    for(let i=0; i<tablero.rows;i++){
        let fila = document.createElement("div")
        
        for(let j=0; j<tablero.cols;j++){
            let celda =document.createElement("div")
            
            celda.innerHTML+="a"
            fila.appendChild(celda);
        }
        taula.appendChild(fila)
    }


}