var movingrect,fixedrect;

function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(400, 600, 80, 50);
  fixedrect = createSprite(200,200,80,50);
  movingrect.shapeColor = "Green";
 fixedrect.shapeColor = "Green";
  movingrect.velocityX = -2;
  movingrect.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  //movingrect.x = World.mouseX;
  //movingrect.y = World.mouseY;
  /*if(movingrect.x-fixedrect.x< fixedrect.width/2+movingrect.width/2&&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 )
    {
     //movingrect.shapeColor = "Red";
     //fixedrect.shapeColor = "Red";
     movingrect.velocityX = movingrect.velocityX*(-1);
  }*/
  if(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2&&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
      movingrect.velocityY = movingrect.velocityY*(-1);
    }
 
  drawSprites();
}