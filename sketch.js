
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof; 
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here 
	
    roof=new Ground(400,100,500,25)
	bobObject1=new Bob(240,100,40)
	bobObject2=new Bob(320,100,40)
	bobObject3=new Bob(400,100,40)
	bobObject4=new Bob(480,100,40)
	bobObject5=new Bob(560,100,40)

	rope1=new Chain(bobObject1.body,roof.body,-160,0)
	rope2=new Chain(bobObject2.body,roof.body,-80,0)
	rope3=new Chain(bobObject3.body,roof.body,0,0)
	rope4=new Chain(bobObject4.body,roof.body,80,0)
	rope5=new Chain(bobObject5.body,roof.body,160,0)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}
function keyPressed() {
     if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y: -40})

	 }

}


