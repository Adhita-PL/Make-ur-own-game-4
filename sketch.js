var gameState = "start";
var bg;
function preload() {
  logoImg = loadImage("images/The last survivor.jpg");
  normalBg = loadImage("normalBG/background.png");
  graveyardBG = loadImage("Graveyard/gravetileset.jpg");
  /*if(gameState === "play") {
    //background(normalBg);
    bg = "normalBG/background.png"
  } else if(gameState === "level2") {
    //background(graveyardBG);
    bg = "Graveyard/gravetileset.jpg"
  }*/

  alanStand = loadAnimation("../Alan/Idle__000.png","../Alan/Idle__001.png");
  alanRun = loadAnimation("Alan/Run__000.png","Alan/Run__001.png","Alan/Run__002.png","Alan/Run__003.png","Alan/Run__004.png","Alan/Run__005.png","Alan/Run__006.png");
  alanJump = loadAnimation("Alan/Jump__000.png","Alan/Jump__001.png","Alan/Jump__002.png","Alan/Jump__003.png","Alan/Jump__004.png","Alan/Jump__005.png","Alan/Jump__006.png","Alan/Jump__007.png","Alan/Jump__008.png","Alan/Jump__009.png");
  alanAttack = loadAnimation("Alan/Attack__000.png","Alan/Attack__001.png","Alan/Attack__002.png","Alan/Attack__003.png","Alan/Attack__004.png","Alan/Attack__005.png","Alan/Attack__006.png","Alan/Attack__007.png","Alan/Attack__008.png","Alan/Attack__009.png");
  alanDead = loadAnimation("Alan/Dead__000.png","Alan/Dead__001.png","Alan/Dead__002.png","Alan/Dead__003.png","Alan/Dead__004.png","Alan/Dead__005.png","Alan/Dead__006.png","Alan/Dead__007.png","Alan/Dead__008.png","Alan/Dead__009.png");
  
  sophiaStand = loadAnimation("../Sophia/Idle__000.png","../Sophia/Idle__001.png");
  sophiaRun = loadAnimation("Sophia/Run__000.png","Sophia/Run__001.png","Sophia/Run__002.png","Sophia/Run__003.png","Sophia/Run__004.png","Sophia/Run__005.png","Sophia/Run__006.png","Sophia/Run__007.png","Sophia/Run__008.png","Sophia/Run__009.png");
  sophiaJump = loadAnimation("Sophia/Jump__000.png","Sophia/Jump__001.png","Sophia/Jump__002.png","Sophia/Jump__003.png","Sophia/Jump__004.png","Sophia/Jump__005.png","Sophia/Jump__006.png","Sophia/Jump__007.png","Sophia/Jump__008.png","Sophia/Jump__009.png");

  coinsImg = loadAnimation("../goldCoins/1.png","../goldCoins/2.png","../goldCoins/3.png","../goldCoins/4.png","../goldCoins/5.png","../goldCoins/6.png");
  
  elephantLeft = loadAnimation("Animals/ele1.png","Animals/ele2.png","Animals/ele3.png");
  elephantRight = loadAnimation("Animals/ele4.png","Animals/ele5.png","Animals/ele6.png");
}

function setup() {
  createCanvas(1200,800);
  normal = createSprite(600,400);
  normal.addImage(normalBg);
  normal.scale = 1.2;;

  graveyard = createSprite(600,400,windowWidth, windowHeight);
  graveyard.addImage(graveyardBG);
  graveyard.scale = 1.4 ;
  
  logo = createSprite(600,50);
  logo.addImage("logo",logoImg);

  inviground1 = createSprite(50,685,500,10);
  inviground2 = createSprite(685,610,450,10);
  inviground3 = createSprite(285,430,230,10);
  inviground4 = createSprite(150,170,300,10);
  inviground5 = createSprite(1000,675,150,10);
  inviground6 = createSprite(530,280,150,5);
  inviground7 = createSprite(710,480,300,10);
  inviground8 = createSprite(750,200,150,10);
  inviground9 = createSprite(1100,170,250,10);
  inviground1.visible = false;
  inviground2.visible = false;
  inviground3.visible = false;
  inviground4.visible = false;
  inviground5.visible = false;
  inviground6.visible = false;
  inviground7.visible = false;
  inviground8.visible = false;
  inviground9.visible = false;

  alan = createSprite(30,610);
  alan.addAnimation("stand",alanStand);
  alan.addAnimation("jump", alanJump);
  alan.addAnimation("run",alanRun);
  alan.scale = 0.15;

  sophia = createSprite(70,645);
  sophia.addAnimation("sophia",sophiaStand);
  sophia.addAnimation("jump", sophiaJump);
  sophia.addAnimation("run",sophiaRun);
  sophia.scale =  0.15;

  elephant = createSprite(525,580);
  elephant.addAnimation("right",elephantRight);
  elephant.addAnimation("left",elephantLeft);
  elephant.velocityX = 2;

  coins = createSprite(50,30);
  coins.addAnimation("coins",coinsImg);
  coins.scale = 0.01;

  coin1 = createSprite(1000,620);
  coin1.addAnimation("coins",coinsImg);
  coin1.scale = 0.01;
}

function draw() {
  background(0);  
  if(gameState === "start") {
    normal.visible = false;
    graveyard.visible = false;
    alan.visible = false;
    sophia.visible = false;
    elephant.visible = false;
    textSize(30);
    fill("red");
    text("Alan and sophia were travelling through a forest. In their way they found a map. The map ",25,200);
    text("shows a way to a secret place where there's a lot of money. They thought to go to ",25, 230);
    text("the place and collect the money for the purpose of devoloping their village.",25,260);
    text("So, help Alan and sophia to collect the money!",25,330);
    text("The one with more money at the end will be the hero of the village", 25,360);
    text("(HINT : Press Arrow keys to control Alan and press A,S,D,W keys for Sophia)",25,390);
    textSize(35);
    text("Press Space to start the game",300,500);
    if(keyCode === 32) {
      gameState = "play";
    }
  }
  if(gameState === "play") {
    logo.visible = false;
    graveyard.visible = false;
    normal.visible  = true;
    elephant.visible = true;
    alan.visible = true;
    sophia.visible = true;
    background(255);
    //background(bg);

    if(keyDown("LEFT_ARROW")) {
      alan.x = alan.x - 3;
      alan.mirrorX*-1;
      alan.changeAnimation("run", alanRun)
    }else {
      alan.changeAnimation("stand", alanStand);
    }
    if(keyDown("RIGHT_ARROW")) {
      alan.x = alan.x + 3;
      alan.changeAnimation("run", alanRun);
    }else {
      alan.changeAnimation("stand", alanStand);
    }
    if(keyDown("UP_ARROW")) {
      alan.velocityY = -5;
      alan.changeAnimation("jump", alanJump);
    }
    alan.velocityY = alan.velocityY + 0.5;
    alan.collide(inviground1);
    alan.collide(inviground2);
    alan.collide(inviground3);
    alan.collide(inviground4);
    alan.collide(inviground5);
    alan.collide(inviground6);
    alan.collide(inviground7);
    alan.collide(inviground8);
    alan.collide(inviground9);
    //sophia
    if(keyDown("a")) {                                 // A
      sophia.x = sophia.x - 3;
      sophia.mirrorX*-1;
      sophia.changeAnimation("run", sophiaRun)
    }else {
      sophia.changeAnimation("stand", sophiaStand);
    }
    if(keyDown("d")) {                                       // d
      sophia.x = sophia.x + 3;
      sophia.changeAnimation("run", sophiaRun);
    }else {
      sophia.changeAnimation("stand", sophiaStand);
    }                                                          
    if(keyDown("w")) {                                  // w
      sophia.velocityY = -5;
      sophia.changeAnimation("jump", sophiaJump);
    }
    sophia.velocityY = sophia.velocityY + 0.5;
    
    sophia.collide(inviground1);
    sophia.collide(inviground2);
    sophia.collide(inviground3);
    sophia.collide(inviground4);
    sophia.collide(inviground5);
    sophia.collide(inviground6);
    sophia.collide(inviground7);
    sophia.collide(inviground8);
    sophia.collide(inviground9);
    
    if(elephant.x >= 890) {
      elephant.changeAnimation("left",elephantLeft);
      elephant.velocityX = -2;
    }
    if(elephant.x <= 580) {
      elephant.changeAnimation("right",elephantRight);
      elephant.velocityX = 2;
    }
    if(alan.isTouching(coins)) {
      coins.destroy();
    }
    if(alan.isTouching(coin1)) {
      coin1.destroy();
    }
    if(sophia.isTouching(coins)) {
      coins.destroy();
    }
    if(sophia.isTouching(coin1)) {
      coin1.destroy();
    }
    //if((alan.x >=60 && alan.y <= 610) ) {//&& (sophia.x >= 1150 && sophia.y <= 170)) {
      //gameState = "level2";
    //}
    if(gameState === "level2") {   
      clear();
      background(255);
      alan.x = 20;
      alan.y = 490;
      sophia.x = 60;
      sophia.y = 490;
      //background(bg);
      graveyard.visible = true;
      normal.visible = false;
      block1 = createSprite(0,500,500,5);
      block2 = createSprite(0,200,500,5);
      block3 = createSprite(515,300,335,5);
      block4 = createSprite(730,500,250,5);
      block5 = createSprite(985,600,250,5);
      block6 = createSprite(475,700,250,5);
      block7 = createSprite(1075,200,250,5);
      
      alan.collide(block1);
      alan.collide(block2);
      alan.collide(block3);
      alan.collide(block4);
      alan.collide(block5);
      alan.collide(block6);
      alan.collide(block7);

      // sophia
      if(keyDown("a")) {                                 // A
        sophia.x = sophia.x - 3;
        sophia.mirrorX*-1;
        sophia.changeAnimation("run", sophiaRun)
      }else {
        sophia.changeAnimation("stand", sophiaStand);
      }
      if(keyDown("d")) {                                       // d
        sophia.x = sophia.x + 3;
        sophia.changeAnimation("run", sophiaRun);
      }else {
        sophia.changeAnimation("stand", sophiaStand);
      }                                                          
      if(keyDown("w")) {                                  // w
        sophia.velocityY = -5;
        sophia.changeAnimation("jump", sophiaJump);
      }
      sophia.velocityY = sophia.velocityY + 0.5;
      //sophia.velocityY = sophia.velocityY + 0.5;
      sophia.collide(block1);
      sophia.collide(block2);
      sophia.collide(block3);
      sophia.collide(block4);
      sophia.collide(block5);
      sophia.collide(block6);
      sophia.collide(block7);
    }
  }
  drawSprites();
  textSize(20);
  fill("red");
  text(mouseX + ',' + mouseY, 10, 15);
}

