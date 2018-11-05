'use strict';

function setup() {
  createCanvas(720, 720);
  noCursor();

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(360, 100, 100);

  fill(130, 100, 100);
  rect(360, 360, 320, 320);
}