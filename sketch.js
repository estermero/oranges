let image1;

function setup() {
  createCanvas(1920, 1080);
  background(250);
  image1 = 
loadImage('O.png')
}

function mouseDragged() {
image( image1,mouseX ,mouseY, 
30, 30)
}