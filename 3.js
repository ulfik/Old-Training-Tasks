function multiOdliczCenzo(n,m){
    var dupa = "";
    for(var i=1; i<=m; i++){
        for(var j=1; j<=n; j++){
            if (j % 2 === 0){
                dupa = dupa + " " + "x";
            } else {
                dupa = dupa + " " + j;
            }
        }
        dupa = dupa + "\n";
    }
    return(dupa);
};
console.log(multiOdliczCenzo(5,3));