function zliczKolory(tablica){
    var b = 0;
    var c = 0;
    var i = 0;
    for (var dupa=0; dupa<tablica.length; dupa++){
        switch(tablica[dupa]){
        case "biały":
            b++;
            break;
        case "czarny":
            c++;
            break;
        default:
            i++;
    }
        var kupa = {
            bialy: b,
            czarny: c,
            inny: i,
        }
    }
    return(kupa);
};
console.log(zliczKolory(["biały", "czarny", "zielony", "czarny", "niebieski"]));