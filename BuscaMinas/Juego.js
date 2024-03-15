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
        tablero.colocarBombas();
        tablero.calcularAdyacentes();
        pintarTablero(tablero);
        
    }
    console.log(correct)

})


function pintarTablero(tablero){
    let taula = document.getElementById("taula");
    taula.innerHTML="";
    //for(let i = hasta tablero.X)
    //crea en DOm una div
    //for(j hasta tablero.y)
    //cre en dom una celda (div)
    //celda.setAttrubute(coord_x,i)
    //celda.innerHTML=
    //celda.addEventListener(clik)
    for(let i=0; i<tablero.rows;i++){
        let fila = document.createElement("div")
        fila.style.display="flex";
        for(let j=0; j<tablero.cols;j++){
            let celda =document.createElement("div")
            celda.style.width=25+"px"
            celda.style.height=25+"px"
            celda.style.backgroundColor="green"
            celda.style.margin=2+"px"
            celda.id= "casilla"+i+"x"+j+"y"
            console.log(celda.id)

            celda.addEventListener("click",function(callCelda){
                for(let i=0;i<tablero.rows; i++){
                    for(let j=0;j<tablero.cols; j++){
                        if(celda.id=="casilla"+i+"x"+j+"y"&&tablero.matriz[i][j].revelada==false&&tablero.matriz[i][j].marcada==false){
                            console.log(celda.id)
                            tablero.DestaparCasilla(i,j);
                            ActualizaTabla(tablero)
                        }
                    }
                }
                
            })
            celda.addEventListener("contextmenu",function(callCelda){
                console.log("bandera")
                for(let i=0;i<tablero.rows; i++){
                    for(let j=0;j<tablero.cols; j++){
                        if(celda.id=="casilla"+i+"x"+j+"y"){
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
function ActualizaTabla(tablero){
    
    for(let i=0;i<tablero.rows; i++){
        for(let j=0;j<tablero.cols; j++){
            if(tablero.matriz[i][j].revelada==true){
                if(tablero.matriz[i][j].mina==1){
                    document.getElementById("casilla"+i+"x"+j+"y").style.backgroundColor="red";
                    document.getElementById("casilla"+i+"x"+j+"y").innerHTML="<img src=\"./img/bomba.png\" width=\"25 px\">"
                }
                else if(tablero.matriz[i][j].minasAdyacentes==0){
                    document.getElementById("casilla"+i+"x"+j+"y").style.backgroundColor="lightskyblue";
                }
                else{
                    document.getElementById("casilla"+i+"x"+j+"y").style.backgroundColor="lightgreen";
                    document.getElementById("casilla"+i+"x"+j+"y").innerHTML=tablero.matriz[i][j].minasAdyacentes
                    document.getElementById("casilla"+i+"x"+j+"y").style.textAlign="center"
                    document.getElementById("casilla"+i+"x"+j+"y").style.alignItems="center"
                }
            }
            else if(tablero.matriz[i][j].marcada==true){
                document.getElementById("casilla"+i+"x"+j+"y").innerHTML="<img src=\"./img/bandera.png\" width=\"25 px\">"
            }
            else{
                document.getElementById("casilla"+i+"x"+j+"y").innerHTML=""
            }
        }
    }
}
