function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="Red"
  movingRect=createSprite(300,200,50,80);
  movingRect.shapeColor="Pink"
  
}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX;
   movingRect.y=World.mouseY;
console.log(movingRect.x-fixedRect.x);
   if(movingRect.x-fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x-movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    
    movingRect.y-fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y-movingRect.y <= fixedRect.height/2 + movingRect.height/2 
     )
     
   {
movingRect.shapeColor="orange"
fixedRect.shapeColor="blue"
   }
   else
   {
movingRect.shapeColor="Pink"
fixedRect.shapeColor="Red"  


   }
  drawSprites();
}