//Gabriel Alexis
let img2;
let img;
let ballX=0;
let ballY=300;
let speedX=2;
let speedY=3;
let state=1;
let dog;
let dogX = 100;
let dogY = 30;
let farm;
let farmX=20
let farmY=300
let target; 
let win;

function setup(){
    createCanvas (600, 600);
}


function draw(){

  if (state=== 1){
  runScene1();
} 
if (state === 2)
  runScene2();

if (state=== 3)
  runScene3();

/*
    background('lightblue');
    fill ("yellow")
    ellipse (0,0,120,120) 
    fill('light gray')
    noStroke();
    ellipse(550,40,80,50)
    ellipse(500,40,80,50)
    ellipse(450,40,80,50)
    ellipse(400,40,80,50)
    ellipse(350,40,80,50)
    ellipse(300,40,80,50)
    ellipse(250,40,80,50)
    ellipse(200,40,80,50)
    ellipse(150,40,80,50)
    ellipse(100,40,80,50)
    fill('green')
    rect (0,400,width,400)




    
  
    image(img,200,355,50,50);
    display();
    move();
    bounce();*/
}

function preload(){
  pepsi=loadImage("Pepsiball.png")
  dog=loadImage("gg.png")
  farm=loadImage ("farm.png")
  target=loadImage("target.png")
  win=loadImage("win.png")
}
function move(){
  ballX += speedX;
  ballY += speedY;
}

function bounce(){
  if(ballX > width|| ballX < 0){
    speedX = speedX *-1;
  
  }
  if (ballY > height || ballY < 0){
    speedY = speedY *-1;
  }
}

function display () {
    fill(100, 150, 130);
    image(pepsi,ballX,ballY,50,60);
   
}
function runScene1(){
    background('lightblue');
    fill ("yellow")
    ellipse (0,0,220,220) 
    fill('light gray')
    noStroke();
    ellipse(550,40,80,50)
    ellipse(500,40,80,50)
    ellipse(450,40,80,50)
    ellipse(400,40,80,50)
    ellipse(350,40,80,50)
    ellipse(300,40,80,50)
    ellipse(250,40,80,50)
    ellipse(200,40,80,50)
    ellipse(150,40,80,50)
    ellipse(100,40,80,50)
    fill('green')
    rect (0,400,width,400)
    image(dog,dogX,dogY,200,100)
    
    if(dogX > 500 || dogX < 0) {
    speeding = -1 * random (1,5)

    if (speeding> 10 || dog < 0)
      speeding=5;

}
dogX=dogX+5





    
  
   
    display();
    move();
    bounce();
}

function mousePressed(){
  state = state + 1;
  print(state)
}
function runScene2(){
  background("lightblue");
   fill ("yellow")
    ellipse (0,0,220,220) 
image(farm,farmX, farmY,100,100);
}



function keyPressed(){
if (key === ' ') {
  print("SPACEBAR ENTERED");
  farmX=farmX+20
  farmY=farmY-30
  if (farmY < 20)  {
    farmX=farmX+20
  farmY=farmY+30
  }
}
}

function runScene3(){
background("white")
fill(0,239, 300)
rect(0,0,500,250,255)
image(target, 100,200,300,500)
  image(win, 100,200,300,400)
  text("press 7 to complete",150,550,550)
  textSize(30)
}
 function mousePressed(){
  state = state + 1;
  print(state)}
  image(target, 100,200,300,500)
  image(win, 10,200,30,100)

  function keyPressed () {
    if (key=== '7')
      state =1
  }
