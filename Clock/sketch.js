'use strict'
var radius = 250;
var line1 = 40; //length of hour line
var line2 = 20; //length of second line
var space = 10; // gap between lines

function setup() { createCanvas(600, 600); }

function draw() {
    strokeCap(SQUARE);
    translate(width / 2, height / 2);
    angleMode(DEGREES); 
    rotate(-90); // begin rotation at 12 o'clock mark
    
    // Variables indicating current time
    var hr = hour();
    var mn = minute();
    var sc = second();

    //remap values in ranges of 0 to 60/12 and 0 to 360
    var secondAngle = map(sc, 0, 60, 0, 360);
    var minuteAngle = map(mn, 0, 60, 0, 360);
    var hourAngle = map(hr, 0, 12, 0, 360);

    // Clock
    push();
    noStroke();
    ellipse(0, 0, radius * 2, radius * 2);
    pop();

    // Parameter lines
    for (let i = 0; i < 60; i++) {
        push();
        rotate(map(i, 0, 60, 0, 360));
        if (i === 0 || i % 5 === 0) { //Check if hour mark
            strokeWeight(10);
            line(0, radius - line1, 0, radius - space);
        } else {
            strokeWeight(4);
            line(0, radius - line2, 0, radius - space);
        }
        pop();
    }

    // Clock hands
    //hours
    push();
    rotate(hourAngle);
    strokeWeight(13);
    line(-50, 0, radius - 70, 0); //line (x1-50, y1, from center - length, y2)
    pop();

    //minutes
    push();
    rotate(minuteAngle);
    strokeWeight(10);
    line(-50, 0, radius - 30, 0);
    pop();

    //seconds
    push();
    rotate(secondAngle);
    strokeWeight(5);
    stroke("red");
    line(-50, 0, radius - 70, 0);

    fill("red");
    ellipse(0, 0, 10, 10);
    ellipse(radius - 70, 0, 30, 30);
    pop();

}
