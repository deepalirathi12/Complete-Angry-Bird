var string = "This is a sentence";
console.log(string);

var number = 100;
console.log(number);

var bool  = false;
console.log(bool);

var o1;
console.log(o1);

o1 = null;
console.log(o1);

var a1 = [1,2,3,4,5];
console.log(a1[1]);

//var a2 = [[1,2,3], "Hello", a1, 150]
//console.log(a2);

var a3 = [[1,2,3], ["a","b"], [4,5]];
//console.log(a3);
//console.log(a3[2]);
//console.log(a3[2][0]);

a3.push("I am Deepali");
console.log(a3);

a3.pop();
console.log(a3);














const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState = "onsling";
function preload() {

    gettingtime()
   // backgroundImg = loadImage("sprites/bg.png");
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){

  if(backgroundImg){
   background(backgroundImg);
  }
  //  background(backgroundImg);
    //background("black")
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
   //gettingtime()
}

function mouseDragged(){
    if(gameState === "onsling"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
  //  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched"
}

function keyPressed(){
    if(keyCode === 32){
      //  slingshot.attach(bird.body);
    }
}

async function gettingtime(){
 var res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
 //console.log(res)
 var resJSON = await res.json()
 //console.log(resJSON);
 var dt = resJSON.datetime;
 //console.log(dt)
 var hour = dt.slice(11,13)
 console.log(hour)

 if(hour>=06  && hour <=22){
   bg = "sprites/bg1.png";
 }
 else{
  bg = "sprites/bg2.jpg";
 }

 backgroundImg = loadImage(bg) 
}