function tabliczkaCenzo(n){
   var dupa = "";
    for(var i=1; i<=n; i++){
        for(var j=1; j<=n; j++){
            if(i*j%2 !== 0){
            dupa = dupa + " " + i*j;
            } else {
            dupa = dupa + " " + "x";
            }
        }
        dupa = dupa + "\n";
    }
    return(dupa);
};
console.log(tabliczkaCenzo(4));