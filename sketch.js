const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var df = 'Start';
var gamestate = "on";

var engine, world, ball,ground,ground1,ground2,ground3;
var rope1, g1, c1,c2,c3,h1,h2,h3,h4;

function setup() {
  createCanvas(1500,1000);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(750,1000,1500,20);
  ground1 = new Ground(750,0,1500,20);
  ground2 = new Ground(0,500,20,1500);
  ground3 = new Ground(1500,500,20,1500);

  
  ball = new Ball(200,500,30);
  rope1 = new Rope(ball.body, {x:200,y:500});
  g1 = new Ground(1300,700,200,20);
  c1 = new Cup(1250,640,20,100);
  c2 = new Cup(1350,640,20,100);
  c3 = new Cup(1300,680,120,20);
  h1=new Helper(1425,500,15,125,45);
  h2=new Helper(1000,650,15,125,-45);
  h3=new Helper(1625,500,15,125,45);
  h4=new Helper(1600,650,15,125,45);

  
}

function draw() {
  background("black");
  Engine.update(engine);

  preGame();
  allGame();
  levels();


  drawSprites();
}

function mouseDragged(){
  if(gamestate==="on"){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  if(df === "Easy"){
    rope1.throw();
    gamestate="off";
  }
  if(df === "Medium"){
    rope1.throw();
    gamestate="off";
  }
  if(df === "Hard"){
    rope1.throw();
    gamestate="off";
  }
}

function keyPressed(){
  if(df === "Easy" && keyCode === 82){
    Matter.Body.setPosition(ball.body,{x:200,y:500})
    rope1.attach(ball.body);
    gamestate="on";
  }
  if(df === "Medium" && keyCode === 82){
    Matter.Body.setPosition(ball.body,{x:200,y:500})
    rope1.attach(ball.body);
    gamestate="on";
  }

  if(df === "Hard" && keyCode === 82){
    Matter.Body.setPosition(ball.body,{x:200,y:500})
    rope1.attach(ball.body);
    gamestate="on";
  }
}

function preGame(){
  if(df === "Start"){
    
    fill("blue");
    textSize(50);
    text("Welcome to Cup Pong",450,300);
    text("Press E for Easy Difficulty",450,400);
    text("Press M for Medium Difficulty",450,500);
    text("Press H for Hard Difficulty",450,600);
    fill("red");
    text("Made By SurajMali",450,200);
   

    if(keyCode===69 && df === "Start"){
      df = "Easy"
    }
    
    if(keyCode===77 && df === "Start"){
      df = "Medium"
    }

    if(keyCode===72 && df === "Start"){
      df = "Hard"
    }
  }
}

function allGame(){
  if(df === "Easy" || df === "Medium" || df === "Hard"){
    fill("blue");
    textSize(20);
    text("Instructions:",20,60);
    text("Drag your mouse back and shoot the ball towards the cup",20,90);
    text("Take as many tries as you need by pressing R to retry",20,120);
    text("Once your done, Hit space to go back to the home screen to do a different level",20,150);
    fill("red")
    text("Made By SurajMali",20,30)
    ground.display();
    ground1.display();
    ground2.display();
    ground3.display();
    if(keyCode === 32){
      df = "Start";
    }
    ball.display();
    rope1.display();
    g1.display();
    c1.display();
    c2.display();
    c3.display();
    h1.display();
    h2.display();
    h3.display();
    h4.display();
  }
}

function levels(){
  if(df==="Easy"){
    Body.setPosition(g1.body,{x:1300,y:700});

    Body.setPosition(c1.body,{x:1250,y:640});
    Body.setPosition(c2.body,{x:1350,y:640});
    Body.setPosition(c3.body,{x:1300,y:680});

    Body.setPosition(h2.body,{x:1000,y:650});
    Body.setPosition(h1.body,{x:1425,y:500});
    Body.setPosition(h3.body,{x:1600,y:650});
    Body.setPosition(h4.body,{x:1625,y:500});
  }

  if(df === "Medium"){

    Body.setPosition(c1.body,{x:1150,y:940});
    Body.setPosition(c2.body,{x:1250,y:940});
    Body.setPosition(c3.body,{x:1200,y:980});

    Body.setPosition(h2.body,{x:1320,y:850});
    Body.setPosition(h1.body,{x:1080,y:850});

    Body.setPosition(g1.body,{x:1700,y:850});
  } 
  if(df === "Hard"){

    Body.setPosition(c1.body,{x:1050,y:940});
    Body.setPosition(c2.body,{x:1150,y:940});
    Body.setPosition(c3.body,{x:1100,y:980});

    Body.setPosition(h2.body,{x:800,y:800});
    Body.setPosition(h1.body,{x:600,y:600});
    Body.setPosition(h3.body,{x:500,y:200});
    Body.setPosition(h4.body,{x:1300,y:700});

    Body.setPosition(g1.body,{x:1900,y:750});
  } 
}