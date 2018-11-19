var n = 0; // Ordering number
var c = 8; // Scaling parameter
var angle = 0;
var divergenceAngle = 137.5;
var shapeSize = 8;

function setup() {
  createCanvas(1240, 1748);
  angleMode(DEGREES); // Change angles to degrees
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  background(0);
}

function draw() {
  angle = n * divergenceAngle;
  var shapeFill = color(n % 255, 255, 255);

  phyllotaxis();

  // Draw shapes
  fill(shapeFill);
  ellipse(x ,y ,shapeSize ,shapeSize);

  // if every sqrt(n) is a natural number. grow scaling.
  //Change colour alpha?
  if (Number.isInteger(sqrt(n)) === true) {
    // shapeSize++;
    // c+=1;
    console.log("N: " + n);
  }

  n++;
  // noLoop();
}

function phyllotaxis() {
  var r = c * sqrt(n);

  //Radius against an angle
  x = r * cos(angle) + width/2;
  y = r * sin(angle) + height/2;
  console.log("Radius: " + r);
}

function keyPressed() {
        if(key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX' + mouseX + '_MouseY' + mouseY,'png');

        switch (key) {
          case '1':
            // Reset canvas variables and change
            setup();
            break;
          default:

        }
    }
