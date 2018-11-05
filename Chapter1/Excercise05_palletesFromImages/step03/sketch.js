'use strict';

var img;
var colors = []; //  Empty colors array
var sortMode = null; // Color sort to default

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
    //  Define number of tiles
    var tileCount = 2;
    
    //  Width of each tile
    var rectSize = width/tileCount;
    
    img.loadPixels(); //load Pixel data for the image into the pixels[] array
    
    // Empty the colors aray for each tile
    colors = [];
    
    // If image width and height is 400px and tile count is 20 means tile width = 20px
    // The colors to grab are at 0, 20, 30, 60... etc
    
    for (var gridY =0; gridY < tileCount; gridY++){
        //  For each gridX value a colour is picked to be stored
        for (var gridX = 0; gridX < tileCount; gridX++){
            //  Find the pixel value in the x and y
            var px = int(gridX * rectSize);
            var py = int(gridY * rectSize);
            
            // Convert to the appropriate index value inside the pixel array
            var i = (py * img.width + px) * 4;
            
            //  Create a color object
            var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
            colors.push(c);
            
        }
    }
    console.log(colors); //img.pixels[i] will return the value for the color in the array
}

function keyReleased() {
}
