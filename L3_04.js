function zamienCzarne(tablica){
    for(var i=0; i<tablica.length; i++){
        if(tablica[i] === "czarny"){
            tablica[i] = "biały";//tablica.splice(i,1,"biały");
        }
    }
    return(tablica);
};
console.log(zamienCzarne(["czarny", "niebieski", "biały", "czarny"]));