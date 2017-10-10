function sumator(){
var a = parseInt(document.getElementById("value1").value);
var b = parseInt(document.getElementById("value2").value);
return a+b;
}

function wynik(){
    document.getElementById("wynik").innerHTML = sumator();
    }