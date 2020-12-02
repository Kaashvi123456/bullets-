var bullet,wall;
var thickness,speed,weight

function setup() {
  createCanvas(800,400);
bullet=createSprite(500, 200, 50, 50);
 wall=createSprite(1200, 200, 60, 100);

bullet.velocityX=-1;

 speed=random(25,31);
 weight=random(400,1500);
 thickness=random(22,83);


}

function draw() {
  background("orange");  

  if(hasCollided(bullet,wall))
  {bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
    if(deformation>180)
    {
   car.shapeColor=("yellow");
   wall.shapeColor=("white");

    }
    if(thickness<10)
 {

wall.shapeColor=("white")

    }

  }
 
drawSprites();

hasCollided(Lbullet,Lwall)

}



function hasCollided() {

bulletRightEdge=lbullet.x+lbullet.width;
bulletLefttEdge=lbullet.x;

if(bulletRightEdge>=wallLefttEdge)
{
  return true
}
{
  return false;
}




}






