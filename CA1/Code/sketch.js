var n = 0; // Ordering number
var c = 8; // Scaling parameter

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES); // Change angles to degrees
  colorMode(HSB);
  background(0);
}

function draw() {

  var angle = n * 137.3;
  var radius = c * sqrt(n);

  //Radius against an angle
  var x = radius * cos(angle) + width/2;
  var y = radius * sin(angle) + height/2;

  fill(255);
  ellipse(x,y,8,8);
  n++
}

function keyPressed() {
        if(key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX' + mouseX + '_MouseY' + mouseY,'png');
    }
