var brickStack=[];


function addBrick(){
  var pic = document.createElement("IMG");
  pic.setAttribute("src", "https://terraria.gamepedia.com/media/terraria.gamepedia.com/0/05/Red_Brick_%28placed%29.png?version=60eb8d0cd23dd0a2e844c343182c2d99");
  document.body.appendChild(pic);
  var stackSize = brickStack.push("brick");
}

function removeBrick(){
  var removedBrick = brickStack.pop();
}


