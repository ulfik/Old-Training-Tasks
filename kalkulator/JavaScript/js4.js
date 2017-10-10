var wartosc = 0;
var wartosc1 = 0;
var wartosc2 = 0;
var wartosc3 = "";
var znak;

function wynik(){
    document.getElementById("wynik").innerHTML = oblicz();
}

function dodajZnak(znaczek){
    znak = znaczek;
}

function oblicz(){
    if(znak === "plus"){
        return wartosc1 + wartosc2;
    } else if(znak === "minus") {
        return wartosc1 - wartosc2;
    } else {
        // nie podano znaku
        return wartosc1;
    }
}

function addNumber(number) {  
    if(znak === undefined){
        wartosc1 = number;
    } else {
        wartosc2 = number;
    }
}

function pokaz(number1){
   wartosc3 = number1 + " ";
   document.getElementById("wynik").innerHTML = wartosc3;

}







