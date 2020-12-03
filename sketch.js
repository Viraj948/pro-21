var bullet,thickness;
var wall;
var weight;
var speed;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,80);
  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapecolor=color(250);
  

   wall=createSprite(1100,200,60,1600/2);
   wall.shapeColor=color(80,80,80);

} 

function draw() {
  background(0);
  
 
  

 if(hasCollided(bullet,wall))
 {
 bullet.velocityX=0;
 var damage=0.5*speed*speed*weight/thickness*thickness*thickness;
 if(damage<10){
 wall.shapeColor=(255,0,0);

 }
  
   if(damage>10){
    wall.shapeColor =color(0,250,0) ;
     }
 }
 

 
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
  }
