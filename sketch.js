var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var divisions = [];
var particles 
var plinkos = [];

var divisionHeight=300;
var score = 0;
var count = 0;

var gameState = "start"

function setup() {
  createCanvas(810, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  text("500", 5, 550)
  text("500", 90, 550)
  text("500", 170, 550)
  text("500", 260, 550)
  text("100", 350, 550)
  text("100", 440, 550)
  text("100", 510, 550)
  text("200", 580, 550)
  text("200", 650, 550)
  text("200", 730, 550)

  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   if(particles != null){
     particles.display()
     if(particles.body.position.y > 760){
      if(particles.body.position.x < 300){
        score = score + 500
        particles = null
        if(count >= 5){
          gameState = "end"
        }        
      }
      else
        if(particles.body.position.x < 600 && particles.body.position.x > 301){
          score = score + 100
          particles = null
          if(count >= 5){
            gameState = "end"
       }
      }
      else
        if(particles.body.position.x < 900 && particles.body.position.x > 601){
          score = score + 200
          particles = null
          if(count >= 5){
            gameState = "end"
       }
      }
     }
   }

   if(gameState == "end"){
     text("GAME OVER", 400, 400)
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState !== "end"){
    count++

    particles = new Particle(mouseX, 10, 10, 10);
  }
}