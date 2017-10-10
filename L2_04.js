function odliczWTyl(n){
    var dupa = "";
    while(n>=0){
        dupa = dupa + " " + n;
        n--;
    }
    return(dupa);
};
console.log(odliczWTyl(7));