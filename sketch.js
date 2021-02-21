const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var box1, box2, box3, box4, box4, box5, box6, box7, box8, box9,box10,box11, box12, box13, box14, box15, box16, box17, box18, box19,
box20, box21, box22;
var Hexagon;
var world,engine;
var ground;
var chain;

function setup() {
    createCanvas(1600,400);
   
  
    engine = Engine.create();
    world = engine.world;
  
    ground = new Ground(750, 380, 300, 5)
  
   
    box1 = new box(600, 370, 50, 50); 
    box2 = new box(650, 370, 50, 50); 
    box3 = new box(700, 370, 50, 50); 
    box4 = new box(750, 370, 50, 50); 
    box5 = new box(800, 370, 50, 50); 
    box6 = new box(850, 370, 50, 50); 
    box7 = new box(900, 370, 50, 50); 
    box8 = new box(625, 300, 50, 50); 
    box9 = new box(675, 300, 50, 50); 
    box10 = new box(725, 300, 50, 50); 
    box11 = new box(775, 300, 50, 50); 
    box12 = new box(825, 300, 50, 50); 
    box13 = new box(875, 300, 50, 50);
    box14 = new box(650, 230, 50, 50);
    box15 = new box(700, 230, 50, 50);
    box16 = new box(750, 230, 50, 50);
    box17 = new box(800, 230, 50, 50);
    box18 = new box(850, 230, 50, 50);
    box19 = new box(675, 160, 50, 50);
    box20 = new box(725, 160, 50, 50);
    box21 = new box(775, 160, 50, 50);
    box22 = new box(825, 160, 50, 50);

    Hexagon = new hexagon(150, 150, 30, 30);

    chain = new Slingshot(Hexagon.body, {x:120, y:130})

    gameState = "onsling";

}


function draw(){
    
background(255, 250, 250); 
Engine.update(engine);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
Hexagon.display();





ground.display();

chain.display();
}

function mouseDragged(){
        Matter.Body.setPosition(Hexagon.body, {x:mouseX, y:mouseY});
    
    
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if(keyCode===32){
        chain.attach(Hexagon.body);
        Matter.Body.setPosition(Hexagon.body, {x:150, y:150});


    }
}