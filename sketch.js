var backgroundImg,sea;
var ship,ship_float;
function preload(){
ship_float=loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
backgroundImg=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200)
  sea.addImage('bg',backgroundImg)
  ship=createSprite(80,250);
  ship.addAnimation("running",ship_float);
  ship.scale=0.25
  sea.velocityX=-2
}

function draw() {
  background(0);

 drawSprites()
}