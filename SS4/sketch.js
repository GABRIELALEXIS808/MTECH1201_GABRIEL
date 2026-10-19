//Gabriel Alexis Spiderman Lizard concept
let spiderman;
let lizard;
let spidermanX;
let spidermanY;
let lizardX;
let lizardY;
let ms;
let chase; 
// runs before setup, to load our images & asset
function preload(){
    spiderman=loadImage('spiderman.jpeg');
    lizard=loadImage('lizard.jpg');
    //myFont = loadFont(myfont.otf) replace filmname
}

function setup(){ 
    createCanvas(800,800);
    x=0;
    y=0;
    spidermanX = 400;
    spidermanY = 400;
    lizardX = 200;
    lizardY = 200;
    chase = false; 
} 

function draw (){
  ms=millis()
  
    background ("red");
    //rectMode(CENTER);
    //rect(400, 400);
    imageMode(CENTER);
    image(spiderman, spidermanX, spidermanY, 100, 100);
    image(lizard, lizardX,lizardY,100,100) 
   // text( "spiderman",200,200)
    textSize(20);
    textFont ("Impact");
    textAlign(CENTER)

    if (ms>3000){ 
      text( "spidermanVsLizard", 400, 600)
      let img 
      let threshold = 30;
       let accChangeX = 0;
let accChangeY = 0;

  }

    if (chase) {
      spidermanX = spidermanX + 5;
     spidermanY=spidermanY +5;
     lizardX = lizardX -5;
    lizardY = lizardY -5;

    } 
  
}

function mousePressed()  
{
  chase = true; 
}

