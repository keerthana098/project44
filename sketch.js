var background1, backgroundImage;
var player, playerImage
var ground;
var level1, level2, endLevel, levelsImage;
var portal, portalImage;

function preload(){
backgroundImage = loadImage("newbackground.png");
playerImage = loadImage("green girl.png");
levelsImage = loadImage("floors.jpg");
portalImage = loadImage("portalImg.png");

}

function setup() {
  createCanvas(1400,1000);

  player = createSprite(100,800,50,50);
  player.addImage(playerImage);
  player.scale = 0.3;

  ground = createSprite(700,870,1400,50)
  ground.shapeColor = "black";

  level1 = createSprite(600,600,1200,30);
  level1.shapeColor = "brown";

  level2 = createSprite(800,370,1200,30);
  level2.shapeColor = "brown";

  endLevel = createSprite(150,190,300,30);
  endLevel.shapeColor = "brown";

  portal = createSprite(150,100,50,50);
  portal.addImage(portalImage);
  portal.scale = 0.2;
}

function draw() { 
  background(backgroundImage);

  player.collide(ground);
  portal.collide(endLevel);

  drawSprites();
}
