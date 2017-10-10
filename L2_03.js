function obliczWTylCoDrugi(n){
    var dupa = "";
    for(var i=n; i>=1; i-=2){
        dupa += " " + i;
    }
    return(dupa);
};
console.log(obliczWTylCoDrugi(7));