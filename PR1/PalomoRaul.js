function show(){
    if(checkType()){
        document.getElementById("icon").setAttribute("src","img/ojoAbierto.png")
        document.getElementById("password").type="text"
    }
    else{
        document.getElementById("icon").setAttribute("src","img/ojoCerrado.png")
        document.getElementById("password").type="password"
    }
}
function checkType(){
    if(document.getElementById("password").type=="password"){
        return true;
    }
    else{
        return false;
    }
}
function check(){
     let password=document.getElementById("password").value;
     console.log (password);
     
     let length=checkLength(password);
     console.log(length);

     let mayusMin=checkMayusMinus(password);
     console.log(mayusMin);

     let number =checkNumber(password);
     console.log(number);

     let voidChar =checkVoidChar(password);
     console.log(voidChar);

     let threeRow =checkThreeRow(password);
     console.log(threeRow);

     let specialChar = checkSpecialChar(password);
     console.log(specialChar);

     if (specialChar && threeRow && voidChar && number && mayusMin && length){
        console.log("La contrasenya "+password+" és 100% segura")
        document.getElementById("div").style.display="none";
        document.getElementById("MsgContraSegura").style.display="flex";
     }
}
function checkLength(password){
    if (password.length<8 || password.length>20){
        document.getElementById("checkLength").style.color="red";
        return false;
    }
    else{
        document.getElementById("checkLength").style.color="green";
        return true;
    }

}
function checkMayusMinus(password){
    let mayusc = "QWERTYUIOPASDFÇGHJKLÑZXCVBNM"
    let majus=0;
    let minus=0;
    for (let char of password)
    {
        if (mayusc.includes(char)){
            majus++;
        }
        if (mayusc.toLowerCase().includes(char)){
            minus++;
        }
    }
    console.log(majus);
    console.log(minus);
    if (majus>=1 && minus>=2){
        document.getElementById("checkMajusMinus").style.color="green";
        return true;
    }
    else{
        document.getElementById("checkMajusMinus").style.color="red";
        return false;
    }
}
function checkNumber(password){
    let nums="1234567890"
    let count=0;
    for (let i=0;i<password.length;i++){
        if (nums.includes(password[i])){
            count++;
        }
    }
    if (count>=1){
        document.getElementById("checkNumber").style.color="green";
        return true;
    }
    else{
        document.getElementById("checkNumber").style.color="red";
        return false;
    }
}
function checkVoidChar(password){
    if (password.includes(" ")){
        document.getElementById("checkVoid").style.color="red";
        return false;
    }
    else{
        document.getElementById("checkVoid").style.color="green";
        return true;
    }
}
function checkThreeRow(password){
    threeInRow=false
    for(let i=0;i<password.length-2;i++){
        if(password[i]==password[i+1]&&password[i+2]==password[i]){
            threeInRow=true
        }
    }
    if(threeInRow){
        document.getElementById("checkThreeRow").style.color="red";
        return false;
    }
    else{
        document.getElementById("checkThreeRow").style.color="green";
        return true;
    }
}

function checkSpecialChar(password){
    let specialChars= "!¡?¿=()/&%$·#@|ºª`^*+[]¨{}_-.:,;'"
    let validate=false;
    for(let i=0;i<password.length;i++){
    if (specialChars.includes(password[i])){
        validate=true;
    }

    }
    if (validate){
        document.getElementById("checkSpecialChar").style.color="green";
        return true;
    }
    else{
        document.getElementById("checkSpecialChar").style.color="red";
        return false;
    }
}
