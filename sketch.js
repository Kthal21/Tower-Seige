const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground, ball,ground2,g3;
var box1,box2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26;
var ground;

function setup(){
    var canvas = createCanvas(800,700);
    
    engine = Engine.create();
    world = engine.world;
ground= new Ground(400,650,1000,10);
//ground2= new Ground (200,630,300,10)
//g3= new Ground(600,500,100,10)
//tower1
// bottom 
box1= new Box(220,500,50,50);
box2= new Box(265,500,50,50);
b3= new Box (310.300,50,50);
b4= new Box (355.300,50,50);
b5= new Box (400.300,50,50);
b6= new Box (445.300,50,50);

}


function draw(){
    background(255);
       Engine.update(engine);
       
ground.display();
box1.display();
box2.display();
b3.display();
//ground2.display();
//g3.display();

}
