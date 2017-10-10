function tabliczka(n){
   var dupa = "";
    for(var i=1; i<=n; i++){
        for(var j=1; j<=n; j++){
            dupa = dupa + " " + i*j;
        }
        dupa = dupa + "\n";
    }
    return(dupa);
};
console.log(tabliczka(4));