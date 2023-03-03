var fixedRect, movingRect;

function setup() {
  createCanvas(800,600);
  
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor= 'green';
  movingRect=createSprite(400,200,80,40);
  movingRect.shapeColor='green';
}

function draw() {
  background(0);  
  movingRect.x= mouseX;
  movingRect.y= mouseY;
  console.log(movingRect.y - fixedRect.y);
  if(movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width / 2 &&
     fixedRect.x - movingRect.x < movingRect.width / 2 + fixedRect.width / 2 && 
     movingRect.y-fixedRect.y< movingRect.height / 2 + fixedRect.height / 2 &&
     fixedRect.y-movingRect.y < movingRect.height / 2 + fixedRect.height / 2 ) {
     fixedRect.shapeColor = "red";
      movingRect.shapeColor = "red";
     } else { 
       fixedRect.shapeColor = "green";
        movingRect.shapeColor = "green";
       }

  drawSprites();
}