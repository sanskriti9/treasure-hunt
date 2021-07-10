var bg,bg2,form,system,code,security;
var treasureImg;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg");
  bg2 = loadImage("aladdin_cave2.jpg");
  treasureImg = loadImage("treasure.jpg");

  //load image for the treasure background
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("PURPLE")
    textSize(40);
    text("!_!TREASURE UNLOCKED!_!",250, 200);
  }

  drawSprites()
}