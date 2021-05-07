
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1= new Bobclass(150,550,30);
bob2= new Bobclass(200,550,30);
bob3= new Bobclass(250,550,30);
bob4= new Bobclass(300,550,30);
bob5= new Bobclass(350,550,30);

roof= new Roof(150,350,100,15);

rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0);
rope2=new Rope(bob2.body,roof.body,-bobDiameter*2,0);
rope3=new Rope(bob3.body,roof.body,-bobDiameter*2,0);
rope4=new Rope(bob4.body,roof.body,-bobDiameter*2,0);
rope5=new Rope(bob5.body,roof.body,-bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 roof.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}



