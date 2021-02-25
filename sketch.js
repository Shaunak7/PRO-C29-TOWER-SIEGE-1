const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var engine,world;
var ground
var Block1,Block2,Block3,Block4,Block5,Block6,Block7,Block8,Block9,Block10,Block11,Block12,Block13,Block14,Block15,Block16,Block17,Block18,Block19,Block20,Block21;
var polygon;

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
   
	ground1 = new Ground(450,390,900,20);

	Block1  = new Block(280, 275, 30, 40);
    Block2  = new Block(310, 275, 30, 40);
    Block3  = new Block(340, 275, 30, 40);
    Block4  = new Block(370, 275, 30, 40);
    Block5  = new Block(400, 275, 30, 40);
    Block6  = new Block(430, 275, 30, 40);
    Block7  = new Block(460, 275, 30, 40);
    Block8  = new Block(490, 275, 30, 40);
    Block9  = new Block(310, 235, 30, 40);
    Block10 = new Block(340, 235, 30, 40);
    Block11 = new Block(370, 235, 30, 40);
    Block12 = new Block(400, 235, 30, 40);
    Block13 = new Block(430, 235, 30, 40);
    Block14 = new Block(460, 235, 30, 40);
    Block15 = new Block(340, 195, 30, 40);
    Block16 = new Block(370, 195, 30, 40);
    Block17 = new Block(400, 195, 30, 40);
    Block18 = new Block(430, 195, 30, 40);
    Block19 = new Block(365, 155, 30, 40)
    Block20 = new Block(395, 155, 30, 40)
    Block21 = new Block(380, 115, 30, 40)
  
    Engine.run(engine);
}

function draw() {

    background(230);

    ground1.display();
   
	Block1.display()
    Block2.display()
    Block3.display()
    Block4.display()
    Block5.display()
    Block6.display()
    Block7.display()
    Block8.display()
    Block9.display()  
    Block10.display()
    Block11.display()
    Block12.display()
    Block13.display()
    Block14.display()
    Block15.display()
    Block16.display()
    Block17.display()
    Block18.display()
    Block19.display()
    Block20.display()
    Block21.display()

    polygon.display()






    
}