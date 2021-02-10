var fairy,fairyImg;
var star, starImg;
var starnight,starnightImg;


function preload()
{
   //preload the images here
 fairyImg=loadAnimation("fairy1.png","fairy2.png");
 starImg=loadImage("star.png");
 starnightImg=loadImage("starnight.png");

   
}

function setup() {
  createCanvas(800, 750);
  fairy = createSprite(100,550,35,25);
fairy.addAnimation("fairy",fairyImg);
fairy.scale=0.2;

  star = createSprite(650,60,25,20);
  star.addImage(starImg);
  star.scale=0.15;

  
}


function draw() {
  background(starnightImg);
drawSprites();
 

if(keyDown(LEFT_ARROW)){
  fairy.x=fairy.x-5
}


if(keyDown(RIGHT_ARROW)){
  fairy.x=fairy.x+5
}

if(keyDown(DOWN_ARROW)){
 star.y=star.y+5
}

}
