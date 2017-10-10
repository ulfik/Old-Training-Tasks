var wartosc1 = "";
var wartosc2 = "";
var wartosc3="";

var znak="";


function przypiszZnak(znaczek){
    if(znaczek==="-" && wartosc1==="" && wartosc2===""){
        wartosc1=znaczek;
    } else {
        znak = znaczek;
    }
    
}

function przypiszCyfre(cyfra){  
    if (znak === ""){
    wartosc1 += cyfra;
    //w artosc1 = wartosc1 + cyfra
    }else{
    wartosc2 +=cyfra;
    }
    pokazObliczenia();
}

function oblicz(){
    if(wartosc1 !== "" && wartosc2 !== ""){
        if (znak === '+') {
            wartosc1 = parseInt(wartosc1) + parseInt(wartosc2);
        } else {
            wartosc1 = parseInt(wartosc1) - parseInt(wartosc2);
            } 
        pokazWynik();
    }
}

function pokazObliczenia(){
    document.getElementById("wynik").innerHTML = wartosc1 + znak + wartosc2;
    } 

function pokazWynik(){

    document.getElementById("wynik").innerHTML=wartosc1;
    wartosc2 = "";
    
}

