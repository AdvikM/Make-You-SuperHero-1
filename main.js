var canvas=new fabric.Canvas("myCanvas");
var blockHeight =30;
var blockWidth =30;
var playerX = 10;
var playerY = 10;
var playerObject = "";
var blockObject = 0;

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(img){
        playerObject=img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY, left:playerX
        });
        canvas.add(playerObject);
    });
}