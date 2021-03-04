
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boll1,boll2,boll3,boll4,boll5,boll6,boll7,boll8;
var box1,box2;
var mouse1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	mouse1 = new Mouse(200,200,100,20)

	//Create the Bodies Here.
	boll1 = new Boll(400,350,30,30)
	boll2 = new Boll(400,350,30,30)
	boll3 = new Boll(400,350,30,30)
	boll4 = new Boll(410,350,30,30)
	boll5 = new Boll(400,350,30,30)
	boll6 = new Boll(400,350,30,30)
	boll7 = new Boll(400,350,30,30)
	boll8 = new Boll(400,350,30,30)

	box1 = new Box(600,350,100,50)
	box2 = new Box(200,350,100,100)

	ground = new Ground(600,height,1200,20)







	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

 
   
  mouse1.display();

  

  boll1.display();
  boll2.display();
  boll3.display();
  boll4.display();
  boll5.display();
  boll6.display();
  boll7.display();
  boll8.display();


  box1.display();
  box2.display();

  ground.display();
  
  drawSprites();
 
}




