var ob2, ob1,a,b;

function setup() {
  createCanvas(1200,800);
  ob2 = createSprite(600, 400, 50, 80);
  ob2.shapeColor = "green";
  ob2.debug = true;
  ob1 = createSprite(400,400,80,30);
  ob1.shapeColor = "green";
  ob1.debug = true;
  ob1.velocityX=4;
  a = createSprite(600, 200, 50, 80);
  a.shapeColor = "pink";
  b = createSprite(400, 200, 50, 80);
  b.shapeColor = "purple";
}

function draw() {
  background(0,0,0);  
  bounceOff(ob1,ob2);

 
  drawSprites();
}
