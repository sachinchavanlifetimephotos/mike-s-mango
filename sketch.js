const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var world,boy;
var stone1; 
var detectollision; 
var lmango, lstone; 
var sling1; 

function preload(){
	boy=loadImage("images/boy.png"); 
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30); 
	mango2=new mango(1200,200,30); 
	mango3=new mango(1000,100,30); 
	mango4=new mango(1100,200,30); 
	mango5=new mango(1100,300,30); 
  mango6=new mango(1000,200,30); 
	mango7=new mango(940,200,30); 

  stone1=new Stone(50,50,5); 

  sling1=new Sling(stone1.body,{x:170,y:100}); 

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20); 
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  treeObj.display();
  mango1.display(); 
  mango2.display(); 
  mango3.display();
  mango4.display(); 
  mango5.display(); 
  mango6.display(); 
  mango7.display(); 

  stone1.display(); 

  groundObject.display(); 

  detectollision(stone1,mango1); 
  
  detectollision(stone1,mango2);
  
  detectollision(stone1,mango3); 
  
  detectollision(stone1,mango4); 
  
  detectollision(stone1,mango5);
  
  detectollision(stone1,mango6); 
  
  detectollision(stone1,mango7);
} 
function mouseDragged(){ 
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
} 
function mouseReleased(){ 
  sling1.fly(); 
} 
function keyPressed(){ 
  if(keyCode===67){ 
    Sling.attach(Stone.body)
  }
} 
function detectollision(lstone,lmango){ 
	mangoBodyPosition=lmango.body.position; 
	stoneBodyPosition=lstone.body.position; 

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){ 
		Matter.Body.setStatic(lmango.body,false); 
	}
}