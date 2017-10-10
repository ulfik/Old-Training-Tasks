var wartosc1="";
var wartosc2="";
var znaker="";

function przypiszZnak(znaczek){
    znaker = znaczek;
    wyswietlLiczby();
}

function przypiszCyfre(number){
    if (znaker === "" ){
        wartosc1+=number;
    //  wartosc+=number1; to  wartosc=wartosc+number1;
    } else { 
        wartosc2+=number;
    }
    wyswietlLiczby();
}


function suma(){
    if (znaker === '+'){
        wartosc1 = parseInt(wartosc1) + parseInt(wartosc2);
    }
    wyswietlWynik();
}

function wyswietlLiczby(){
    document.getElementById("wynik").innerHTML= wartosc1 + " " + znaker + " " + wartosc2; 
}

function wyswietlWynik(){
    document.getElementById("wynik").innerHTML= wartosc1; 
}