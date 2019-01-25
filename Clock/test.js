// Two red Circles on the second hand are 15px and 25px in width respectively
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

let space = 10;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  minuteStrokeColor = color(30, 30, 30);
  minuteStrokeCap = SQUARE;

  hourStrokeColor = color(30, 30, 30);
  hourStrokeCap = SQUARE;

  translate(width / 2, height / 2);
}

function draw(){
    rotate(-90);
    var hr = hour();
    var mn = minute();
    var sc = sec();

    var hourAngle(map(hr, 0,12,0,360);
    var minuteAngle(map(mn, 0,12,0,360);
    var secondAngle(map(sc, 0,12,0,360);

    for(var i=0; i < 60; i++){
        push();
        rotate(map(i, 0, 60, 0, 360);
        if(i === 0 || i % 5 === 0){
            strokeWeight(hourStrokeWeight);
            line(0, clockRadius-hourStrokeLength, 0, clockRadius-space);
        } else {
            strokeWeight(minuteStrokeWeight);
            line(0, clockRadius-minuteStrokeLength, 0, clockRadius - space);
        }
        pop();
    }

    //hour
    push();
    rorate(hourAngle);
    beginShape();
    push();
    StrokeWeight(HandWidth);
    line(-hourHandOffset, 0, clockRadius-hourHandLength, 0);
    pop();
    push();
    strokeWeight();
}
