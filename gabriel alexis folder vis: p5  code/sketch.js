//Creating VARIABLES - GLOBAL SCOPE (outside of function) 
// GABRIEL ALEXIS MTECH
    //let x 600; //x -position of circle
    //let y =0
  let x=0;
  let y=0;
function setup() {
  createCanvas (600,600);
  background(200); 
}
function draw(){
    // red circle
    background(200);
    fill(0,0,255);
    stroke(200,100,100);
    strokeWeight(20);
    circle(x,y, 50);
  x= x+1;
  y= y+1;

    line (pmouseX, pmouseY, mouseX, mouseY);
}

function mousePressed() {
    // CREATING VARIABLES
    let x=0;
    let y=0;
    // x=x +/- 25 moves the circle 25 pixels left/right when clicked no
}


function keyPressed() {
  x=400;
  y=100;
}
    