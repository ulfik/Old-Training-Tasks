function wyswietlDoN(a,b,n){
    var dupa = "";
    for (var i=a; i<=b; i++) {
        if (i===n){
           break;
        } else {
        dupa = dupa + " " + i;
        };
    }
    return(dupa);
};
console.log(wyswietlDoN(3,8,6));