var sea,ship;
var seaImg,shipImg1;

function preload(){
 shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");
  
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip", shipImg1);
  ship.scale = 0.25;

  
  
}

function draw() {
  background("blue");

//codigo para reiniciar el fondo.
if (sea.x <0){
  sea.x=sea.widht/2;
}

  sea.velocityX = -3;

    if(keyDown("UP_ARROW")) {
    ship.velocityY = -1;
  }
  if(keyDown("DOWN_ARROW")) {
    ship.velocityY = +1;
  }
  

 
 drawSprites();
}