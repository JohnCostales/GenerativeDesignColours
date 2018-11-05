'use strict';

var img;
var colors = []; //  Empty colors array
var sortMode = null; // Color palette to default

// Asynchronous loading handler for external files
function preload() {
    img = loadImage('../images/pic1.jpg');
}

function setup() {
    createCanvas(600, 600);
    noCursor();
    noStroke();
    noLoop();
}

function draw() {
    img.loadPixels(); //load Pixel data for the image into the pixels[] array
    
    console.log(img.pixels[1]); //img.pixels[i] will return the value for the color in the array
    console.log(img); //return the image data

}

function keyReleased() {
}
