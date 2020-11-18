
var monkey, monkeyrunning;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
 monkeyrunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400);

  monkey = createSprite(30,340,10,10);
  monkey.addAnimation("moving",monkeyrunning);
  monkey.scale = 0.1;
  
  ground = createSprite(10,380,1000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
  
  
  bananaGroup = createGroup();
  score=0;
}


function draw() {
background("white")
  
  textSize(20);
  stroke("yellow");
  text("Survival Time : "+score, 200,20); 
 

  
  
  if(ground.x<0){
    ground.x = ground.width/2
  }

   score = score + Math.ceil(getFrameRate()/60);
 

  
  if(keyDown("space")){
    monkey.velocityY = -12
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  Obstacles();
  Bananas();
  drawSprites();
  
}

function Bananas() {
  
  if (frameCount % 80 === 0) {
    banana = createSprite(600,200,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,250));
    banana.scale = 0.1;
    banana.velocityX = -3;
    bananaGroup.add(banana)
    
    //assigning lifetime to the variable
    banana.lifetime = 200
    
    //adjust the depth
    banana.depth = monkey.depth
    monkey.depth = monkey.depth + 1;
    }
}

function Obstacles() {
  
  if (frameCount % 400 === 0) {
    obstacle = createSprite(600,325,40,10);
    obstacle.addImage(obstacleImage);
     obstacle.scale = 0.3;
    obstacle.velocityX = -4;
    bananaGroup.add(banana)
    obstacle.lifetime = 200
    
    
    }
}




