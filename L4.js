var pies = {
    dzwiek: "hau",
    dajDzwiek: function(){
        return this.dzwiek;
    }
}

var kot = {
    dzwiek: "miau",
    dajDzwiek: function(){
        return this.dzwiek;
    }
}

var krowa = {
    dzwiek: "muu",
    dajDzwiek: function(){
        return this.dzwiek;
    }
}

var zwierzeta = [pies, kot, krowa];

for (var i=0; i<zwierzeta.length; i++){
        console.log(zwierzeta[i].dajDzwiek());
};