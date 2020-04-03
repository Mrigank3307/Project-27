
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

 


  var holder_options={
   isStatic: true
  }

holder = Bodies.rectangle(200,100,400,10,holder_options);
World.add(world,holder);

ball  = Bodies.circle(220,200,40);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.4 ,
  length : 90
}
var string = Constraint.create(options);
World.add(world,string);

fill("black");
}


function draw() {
  background(255); 
  Engine.update(engine);


  
 
  fill ("black");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,400,10);

fill(0);



fill("black");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("green");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)



if(keyDown("space")){
ball.position.y = mouseY;
ball.position.x = mouseX;
}


text("Press space bar to make the pendulum oscillate",50,220);
}







