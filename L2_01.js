function odliczCoDrugi(n){
    var dupa = "";
    for(var i=0; i<=n; i+=2){  //i+=2 to to samo co i=i+2
        dupa += " " + i;   //dupa = dupa + " " + i;
    }       
    return(dupa);
}
console.log(odliczCoDrugi(7));