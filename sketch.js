const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground1;
var pig1;
var box2;
var log1;
var box3;
var box4;
var pig2;
var log2;
var bird1;
var box5;
var box6;
var pig3;
var log3;
var box7;
var log4;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    ground1 = new ground(200,350,400,20);
    pig1 = new pig(250,300,30,30);
    box2 = new Box(300,300,50,50);
    log1 = new log(250,250,180,PI/2);
    box3 = new Box(200,200,50,50);
    box4 = new Box(300,200,50,50);
    pig2 = new pig(250,200,30,30);
    log2 = new log(250,150,180,PI/2);
    bird1 = new bird(50,200);
    box5 = new Box(200,100,50,50);
    box6 = new Box(300,100,50,50);
    pig3 = new pig(250,150,30,30);
    log3 = new log(250,50,180,PI/2);
    box7 = new Box(250,10,50,50);
    log4 = new log(212,30,120,PI/9)

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   ground1.display();
   pig1.display();
   box2.display();
   log1.display();
   box3.display();
   box4.display();
   pig2.display();
   log2.display();
   bird1.display();
   box5.display();
   box6.display();
   pig3.display();
   log3.display();
   box7.display();
   log4.display();
}