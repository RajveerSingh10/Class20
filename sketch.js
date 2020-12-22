var movingRect,fixedRect;
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(100,100,40,40);
  movingRect.shapeColor="red";
  movingRect.debug=true;
  fixedRect=createSprite(400,200,40,80);
  fixedRect.shapeColor="red";
  fixedRect.debug=true;
  
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2  ){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }
  else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }

  drawSprites();
}