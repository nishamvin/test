const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world;
var groundObject,ball;
function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  var options={
   //friction : 0.1,
   isStatic : true
  }
  var ballOptions={
   // restitution : 1.0,
    isStatic : true
  }

  ball=Bodies.circle(200,200,50,ballOptions);
  groundObject=Bodies.rectangle(400,600,400,50,options);
  World.add(world,groundObject);
  World.add(world,ball);
}

function draw() {
  background('black');
Engine.update(engine);
//console.log(object);
rectMode(CENTER);
groundObject.debug=true;
//rect(250,150,50,50)
ellipse(ball.position.x,ball.position.y,50);



if(keyDown("SPACE")){
 Body.setStatic(ball,false);
}


  fill('blue');
  rect(groundObject.position.x, groundObject.position.y, 400, 50);
  drawSprites();
}