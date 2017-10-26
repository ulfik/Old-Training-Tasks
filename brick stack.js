var brickStack=[];
var limit = 5;

function addBrick(){
    if (brickStack.length < limit){
        brickStack.push("brick");
        var pic = document.createElement("IMG");
        pic.setAttribute("src", "brick.png");
        document.getElementById("stack").appendChild(pic);
    }else{    
    }
}

function removeBrick(){
    var removedBrick = brickStack.pop();
}
