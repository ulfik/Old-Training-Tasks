function multiOdlicz(n,m){
    var dupa = "";
    for(var i=1; i<=m; i++){
        for(var j=1; j<=n; j++){
            dupa = dupa + " " + j;
        }
        dupa = dupa + "\n";
    }
    return(dupa);
};
console.log(multiOdlicz(5,3));