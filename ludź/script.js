function setBodyColor(colorName){
    var elements = document.getElementsByClassName("bodyColor");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = colorName;
    }
}

function create(){
    var yourName = document.getElementById("yourName").value;
    document.getElementById("yourNameOutput").innerHTML = yourName;

    var black = document.getElementById("black");
    var white = document.getElementById("white");
    var asian = document.getElementById("asian");

    if(black.checked === true){
       //sposob 1
        setBodyColor("brown");
        
        /*
        // sposob2
        var elements = document.getElementsByClassName("bodyColor");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "brown";
        }*/
    }else if(white.checked === true){
        var elements = document.getElementsByClassName("bodyColor");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "white";
        }
    }else{
        var elements = document.getElementsByClassName("bodyColor");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "yellow";
        }
    }

    var select = document.getElementById("select").value;

    var img = document.createElement("img");

    if(select ==="batman"){
        img.src = "batman.png";
        document.getElementById("secretID").appendChild(img);
    }else if (select === "superman"){
        img.src = "superman.png";
        document.getElementById("secretID").appendChild(img); 
    }else{
        img.src = "spiderman.png"
        document.getElementById("secretID").appendChild(img); 
    }
}

