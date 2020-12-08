var fixedRect,movingRect


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="purple"

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="purple"
}

function draw() {
  background("black");
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2
    &&fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2){
  movingRect.shapeColor="blue"
  fixedRect.shapeColor="blue"



  }
  else{
  movingRect.shapeColor="pink"
  fixedRect.shapeColor="pink"


  }

  drawSprites();
}