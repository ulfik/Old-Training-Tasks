function wyswietlBezN(a,b,n){
    var dupa = "";
    for (var i=a; i<=b; i++) {
        if (i===n){
           continue;
        } else {
        dupa = dupa + " " + i;
        };
    }
    return(dupa);
};
console.log(wyswietlBezN(3,8,6));