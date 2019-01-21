'use strict'
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  translate(width/2, height/2);
  rotate(-HALF_PI);
  
  var hr = hour();
  var mn = minute();
  var sc = second();

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  var secondAngle = map(sc, 0, 60, 0, 360);

  stroke(150, 100, 255);
  var minuteAngle = map(mn, 0, 60, 0, 360);

  stroke(150, 255, 100);
  var hourAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(secondAngle);
  stroke("red");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);
}
  //  fill(255);
  //  noStroke();
  //  text(hr + ':' + mn + ':' + sc, 10, 200);
