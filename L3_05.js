function dodajCzarne(tablica){
    for (var i=0; i<=tablica.length; i++){
        if(tablica[i] === "bialy"){
            tablica.push("czarny");
        }
    }
    return(tablica);
}
console.log(dodajCzarne(["bialy", "zielony", "bialy"]));