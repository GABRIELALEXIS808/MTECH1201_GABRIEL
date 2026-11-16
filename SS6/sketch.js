//Gabriel.Alexis Assignment


let xPositions = [];
let yPositions = [];
let colors = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20);
  fill ("yellow")
  ellipse (0,0,220,220) 

  for (let i = 0; i < xPositions.length; i++) {
    yPositions[i] += 1;
    fill("blue");
    circle(xPositions[i], yPositions[i], 20);
  }
image(img,200,200,100,100)
  textSize(20);
textFont("Times New Roman");
fill("white")

  text("Click to see raindrops...", 200,100);
}

function mousePressed() {
  xPositions.push(mouseX);
  yPositions.push(mouseY);

}

function preload (){
img = loadImage ("gbe.jpeg");
}
