var car,wall;
var car1,wall1;

var speed,weight;
var speed1,weight1;

function setup() {
  createCanvas(2100,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,50,50);
  car1 = createSprite(100,200,50,50);
  wall1 = createSprite(2000,200,50,50);

  speed=random(55,90);
  weight=random(400,1500);
  speed1 = random(55,90);
  weight1 = random(400,1500)

  car.velocityX = speed;
  car1.velocityX = speed1;
  
}

function draw() {
  background(255,255,255);  
  drawSprites();


  if(wall.x - car.x < (wall.width/2 + car.width/2))
  {
    car.velocityX = 0;
    var deformation = 0.5  *  weight  *  speed * speed/22509;

    if(deformation > 180)
    
    {
     car.shapeColor = "Red";
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor = "Yellow";
    }

    if(deformation<100)
    {
      car.shapeColor = "Green";
    }

  }

  if(wall1.x - car1.x < (wall1.width/2 + car1.width/2))
  {
    car1.velocityX = 0;
    var deformation = 0.5  *  weight1  *  speed1 * speed/22509;

    if(deformation > 180)
    
    {
     car1.shapeColor = "Red";
    }

    if(deformation<180 && deformation>100)
    {
      car1.shapeColor = "Yellow";
    }

    if(deformation<100)
    {
      car1.shapeColor = "Green";
    }

  }
}