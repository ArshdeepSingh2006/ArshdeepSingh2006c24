const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1, wall2, wall3;
var engine, world, ball;
var ground, ball, dustbin;

function setup() {
	createCanvas(800, 400);
    rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);



	ball = new Ball(100,300,10);
	ground = new Ground(400,height,800,20);

	wall1Sprite=createSprite(640,350,10,80);
	wall1Sprite.shapeColor=color("red");

	wall2Sprite=createSprite(780,350,10,80);
	wall2Sprite.shapeColor=color("red");

	wall3Sprite=createSprite(710,385,140,10);
	wall3Sprite.shapeColor=color("red");
    
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x: 85,y: -85});
	   
	}
}

