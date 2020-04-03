alert("Press The Neck To Make It Move Down And Press Space To Move It Up Again");
var robotHead,robotHead_image,robotNeck,robotNeck_image,robotBody,robotBody_image,robotBase,robotBase_image,num_value,invisible_1,invisible_2,wall_1,wall_2;

function preload(){
  robotHead_image = loadImage("robot_head.png");
  robotNeck_image = loadImage("robot_neck.png");
  robotBody_image = loadImage("robot_body.png");
  robotBase_image = loadImage("robot_lower.png");
  
}
function setup() {
  createCanvas(400, 400);
  robotHead = createSprite(200,100,20,20);
  robotHead.addImage("head",robotHead_image);
  robotHead.scale = 0.6;
  robotNeck = createSprite(213.5,155,5,5);
  robotNeck.addImage("neck", robotNeck_image);
  robotNeck.scale = 0.15;
  robotBody = createSprite(192.5,213,80,40);
  robotBody.addImage("body",robotBody_image);
  robotBody.scale = 0.3;
  robotBase = createSprite(205,210,60,40);
  robotBase.addImage("base",robotBase_image);
  robotBase.scale = 0.8;
  numValue = 1;
  invisible_1 = createSprite(200,68,400,1);
  invisible_1.visible = false;
  invisible_2 = createSprite(200,128,400,1);
  invisible_2.visible = false;
  wall_1 = createSprite(200,210,400,1);
  wall_1.visible = false;
  wall_2 = createSprite(200,157,400,1);
  wall_2.visible = false;
}

function draw() {
  background(220);
  robotHead.x = World.mouseX;
  robotNeck.x = robotHead.x + 13.5;
  robotBody.x = robotHead.x - 7.5;
  robotBase.x = robotHead.x + 5;
  createEdgeSprites();
  robotHead.collide(invisible_1);
  robotNeck.collide(invisible_2);
  robotNeck.collide(wall_1);
  robotHead.collide(wall_2);
  
  
  if(mousePressedOver(robotNeck)){
     robotNeck.y += 2.5;
     robotHead.y += 2.5;
  }
  
  if(keyDown("space")){
      robotHead.y -= 2.5;
      robotNeck.y -= 2.5;
  }
    
  drawSprites();
}