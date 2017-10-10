function odlicz(n){
    var dupa = " ";
    for(var i=1; i<=n; i++){
      dupa = dupa + " " + i;
    }
    return(dupa);
};
console.log(odlicz(5));