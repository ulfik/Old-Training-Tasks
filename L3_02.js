function zliczCzarneIBiale(tablica){
    var c = 0;
    var b = 0;
    for (var i=0; i<tablica.length; i++){
        if (tablica[i]==="czarny"){
            c++; //c=c+1;
        } else if (tablica[i]==="biały") {
            b++; //b=b+1;
        }
    }
    var guwno = {
        bialy: b,
        czarny: c,
    }

    return(guwno);
};
console.log(zliczCzarneIBiale(["biały", "czarny", "zielony", "czarny"]));