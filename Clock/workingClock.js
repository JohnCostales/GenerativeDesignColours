let minuteStrokeLength = 10;
let minuteStrokeWeight = 4;
let minuteStrokeColor;
let minuteStrokeCap;

let hourStrokeLength = 30;
let hourStrokeWeight = 10;
let hourStrokeColor;
let hourStrokeCap;

let clockRadius = 200;

let hourHandsTaper = 6;
let hourHandLength = 195;
let hourHandOffset = 80;
let hourHandStartWidth = 20;

let minuteHandsTaper = 6;
let minuteHandLength = 155;
let minuteHandOffset = 80;
let minuteHandStartWidth = 20;

let secondHandsTaper = 2;
let secondHandLength = 155;
let secondHandOffset = 80;
let secondHandStartWidth = 10;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  minuteStrokeColor = color(30, 30, 30);
  minuteStrokeCap = SQUARE;

  hourStrokeColor = color(30, 30, 30);
  hourStrokeCap = SQUARE;
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  //ticks of the clock
  for (let i = 0; i < 60; i++) {
    push();
    rotate(map(i, 0, 60, 0, 360));
    if (i === 0 || i % 5 === 0) {
      //hours
      strokeWeight(hourStrokeWeight);
      strokeCap(hourStrokeCap);
      fill(hourStrokeColor);
      line(0, clockRadius - hourStrokeLength, 0, clockRadius);
    } else {
      strokeWeight(minuteStrokeWeight);
      strokeCap(minuteStrokeCap);
      fill(minuteStrokeColor);
      line(0, clockRadius - minuteStrokeLength, 0, clockRadius);
    }
    pop();
  }

  //begin rotation for 12 oclock
  rotate(-90);

  // Set time
  let hr = hour();
  let mn = minute();
  let sc = second();

  // Map the angle of time variables to amount of ticks and a full circle
  let hourAngle = map(hr, 0, 12, 0, 360);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  let secondAngle = map(sc, 0, 60, 0, 360);

  //hour hand
  push();
  fill(0);

  rotate(hourAngle);
  beginShape();
  vertex(-hourHandOffset, -hourHandStartWidth / 2);
  vertex(hourHandLength, -hourHandStartWidth / 2 + hourHandsTaper);
  vertex(hourHandLength, hourHandStartWidth / 2 - hourHandsTaper);
  vertex(-hourHandOffset, hourHandStartWidth / 2);
  endShape();
  pop();

  //minute hand
  push();
  fill(0);

  rotate(minuteAngle);
  beginShape(); //i didnt use taper because it wouldnt fid on the line same values used
  vertex(-minuteHandOffset, -minuteHandStartWidth / 2);
  vertex(minuteHandLength, -minuteHandStartWidth / 2 + minuteHandsTaper);
  vertex(minuteHandLength, minuteHandStartWidth / 2 - minuteHandsTaper);
  vertex(-minuteHandOffset, minuteHandStartWidth / 2);
  endShape();
  pop();

  //second hand
  push();
  noStroke();
  fill("red");

  rotate(secondAngle);
  beginShape(); //used taper here to aknowledge it is there
  vertex(-secondHandOffset, -secondHandStartWidth / 2);
  vertex(secondHandLength, -secondHandStartWidth / 2 + secondHandsTaper);
  vertex(secondHandLength, secondHandStartWidth / 2 - secondHandsTaper);
  vertex(-secondHandOffset, secondHandStartWidth / 2);
  endShape();

  //ellipse on second hand
  ellipse(0, 0, 15, 15);
  ellipse(secondHandLength, 0, 25, 25);
  pop();
}
