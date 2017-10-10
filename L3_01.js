function zliczCzarne(tablica){
    var n = 0;
    for (var i=0; i<tablica.length; i++){
        if (tablica[i]==="czarny"){
            n=n+1;
        }
    }
    return(n);
};
console.log(zliczCzarne(["biały", "czarny", "zielony", "czarny"]));