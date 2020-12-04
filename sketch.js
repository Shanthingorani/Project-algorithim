var moving_rect;
var fixed_rect;


function setup() {
  createCanvas(800,400);
  moving_rect=createSprite(400, 200, 50, 80);
  moving_rect.shapeColor="green";
  fixed_rect=createSprite(350,300,80,50);
  fixed_rect.shapeColor="green";
  
}

function draw() {
  background(255,255,255);  
moving_rect.x=World.mouseX;
moving_rect.y=World.mouseY;

if(moving_rect.x-fixed_rect.x<moving_rect.width/2+fixed_rect.width/2
  && fixed_rect.x-moving_rect.x<moving_rect.width/2+fixed_rect.width/2
  && moving_rect.y-fixed_rect.y<moving_rect.height/2+fixed_rect.height/2
  && fixed_rect.y-moving_rect.y<moving_rect.height/2+fixed_rect.height/2)
{
  moving_rect.shapeColor="red";
  fixed_rect.shapeColor="red";

}
else{
  moving_rect.shapeColor="blue";
  fixed_rect.shapeColor="blue";

}


  drawSprites();
}