var trex, trex_running, trex_collided;

var score=0
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var Ob 
var obstacleImage1,obstacleImage2,obstacleImage3,obstacleImage4,obstacleImage5,obstacleImage6

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  obstacleImage1=loadImage("obstacle1.png")
  obstacleImage2=loadImage("obstacle2.png")
  obstacleImage3=loadImage("obstacle3.png")
  obstacleImage4=loadImage("obstacle4.png")
  obstacleImage5=loadImage("obstacle5.png")
  obstacleImage6=loadImage("obstacle6.png")
  
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  score=score+Math.round(frameCount/160)
  text("score : "+score,500,50)
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstacles()
  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 190
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnObstacles(){
  if(frameCount % 60 === 0){
    Ob=createSprite(600,165,10,40)
    Ob.velocityX=-6
    var r=Math.round(random(1,6))
    switch(r){
      case 1:Ob.addImage(obstacleImage1);break;
      case 2:Ob.addImage(obstacleImage2);break;
      case 3:Ob.addImage(obstacleImage3);break;
      case 4:Ob.addImage(obstacleImage4);break;
      case 5:Ob.addImage(obstacleImage5);break;
      case 6:Ob.addImage(obstacleImage6);break;
      
    }
    Ob.scale=0.5
    Ob.lifetime=190
  }
}

