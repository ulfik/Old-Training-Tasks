function obliczWhileBezIf(a,b){
    var dupa = "";
    while (a <=b){
        dupa = dupa + a + ", ";
        a++;
    }
    return(dupa);
};
console.log(obliczWhileBezIf(2,6));