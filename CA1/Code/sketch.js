var n = 0; // Ordering number
var c = 0; // Scaling parameter
var angle = 0;
var divergenceAngle = 137.5;
var shapeSize = 1;



function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES); // Change angles to degrees
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  background(255);
}

function draw() {

  angle = n * divergenceAngle;
  var radius = c * sqrt(n);

  var shapeFill = color(n % 255, 255, 255);
  //Radius against an angle
  x = radius * cos(angle) + width/2;
  y = radius * sin(angle) + height/2;

  fill(shapeFill);
  // ellipse(x ,y ,shapeSize ,shapeSize);

  console.log("Radius: " + radius);
  console.log("N: " + n);

  // if every sqrt(n) is a natural number. grow scaling.
  //Change colour alpha?
  if (Number.isInteger(sqrt(n)) === true) {
    shapeSize++;
    c+=1;
  }

  n++;
  // noLoop();
}


function keyPressed() {
        if(key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX' + mouseX + '_MouseY' + mouseY,'png');

        switch (key) {
          case '1':
            // Reset canvas variables and change
            break;
          default:

        }
    }
