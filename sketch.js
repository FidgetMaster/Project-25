
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var dust1,dust2,dust3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100,600,25);
	dust1 = new Dustbin(600,650,200,5);
	dust2 = new Dustbin(500,600,5,100);
	dust3 = new Dustbin(700,600,5,100);

	ground = new Ground(400,700,800,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ball.display();
  dust1.display();
  dust2.display();
  dust3.display();
  ground.display();

  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:85})
  }
}



