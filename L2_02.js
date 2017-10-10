function obliczWTyl(n){
    var dupa = "";
    for(var i=n; i>=1; i--){
        dupa += " " + i;
    }
    return(dupa);
};
console.log(obliczWTyl(7));