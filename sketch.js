
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var blocks1
var blocks2
var blocks3
var chao



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
engine = Engine.create();
	world = engine.world;

  var blocks1_options = {
restitution:0.5,
friction:0.02,
frictionAir:0
}
var blocks2_options = {
restitution: 0.7,
friction:0.01,
frictionAir:0.1
}
var blocks3_options = {
restitution:0.01,
friction:1,
frictionAir:0.3
}
var chao_options = {
  isStatic : true

}


  

	
	//Crie os Corpos Aqui.
blocks1 = Bodies.circle(220,10,10,blocks1_options);
World.add(world,blocks1);

blocks2 = Bodies.rectangle(110,50,10,10,blocks2_options);
World.add(world,blocks2);

blocks3 = Bodies.rectangle(350,50,10,10,blocks3_options);
World.add(world,blocks3);

chao = Bodies.rectangle(300, 600, 500, 20,chao_options);
World.add(world,chao);
  

rectMode(CENTER);
ellipseMode(RADIUS);

}



function draw() {
  background(51);
  Engine.update(engine);

  ellipse(blocks1.position.x,blocks1.position.y,10);
  

  ellipse(blocks2.position.x,blocks2.position.y,10,10);
 

  ellipse(blocks3.position.x,blocks3.position.y,10,10);
 rect(chao.position.x,chao.position.y,500, 20);







  
 drawSprites();
}



