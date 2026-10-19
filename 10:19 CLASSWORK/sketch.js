//Gabriel Alexis
let img2;
let img;
let ballX=0;
let ballY=300;
let speedX=2;
let speedY=3;
let state=1;

function setup(){
    createCanvas (600, 600);
}


function draw(){

  if (state=== 1){
  runScene1();
} 
if (state === 2)
  runScene2();

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
  img2=loadImage("Pepsiball.png")
  img=loadImage("gg.png")
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
    image(img2,ballX,ballY,50,60);
   
}
function runScene1(){
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
    bounce();
}
function mousePressed(){
  if (state===1) {
    state = 2
  }
}
function runScene2(){
  background("green");
}