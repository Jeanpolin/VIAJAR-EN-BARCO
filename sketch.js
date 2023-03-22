var ship,shipImg1;
var seaImg,sea,InvisibleSea;

function preload(){
 shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  ship = createSprite(50,180,20,50);
  ship.addAnimation("running", shipImg1);

  ship.scale = 0.2;
  ship.x = 100

  sea = createSprite(200,200,200,200);
  sea.addImage(seaImg);
  
}

function draw() {
  background(220);
  if(keyDown("UP_ARROW")) {
    ship.velocityY = -10;
  }
  if(keyDown("DOWN_ARROW")) {
    ship.velocityY = +10;
  }
  //codigo para reiniciar el fondo.
    if (sea.x <0){
    sea.x=sea.widht/2;
  }

  sea.velocityX = sea.velocityX + 0.5

  
 drawSprites();
}