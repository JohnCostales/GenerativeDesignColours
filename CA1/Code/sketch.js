var divergenceAngle = 137.5;
var c = 12;
var shapeSize = 8;
var x = 0;

function setup() {
    createCanvas(1240, 1748);
    angleMode(DEGREES); // Change angles to degrees
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
    background(250);
}

function draw() {
    y = 0;
    
    for (var n = 0; n < height; n++){
        var angle = n * divergenceAngle;
        var shapeFill = color((angle-r) % 255, 255, 255);

        //Formulae
        //Formula
        var r = c * sqrt(n);
        //Radius against an angle
        var x = r * cos(angle) + width / 2;
        var y = r * sin(angle) + height / 2;

        // Draw shapes
        fill(shapeFill);
        ellipse(x, y, shapeSize, shapeSize);

        // if every sqrt(n) is a natural number. grow scaling.
        //Change colour alpha?
        if (Number.isInteger(sqrt(n)) === true) {
//            shapeSize++;
//            c += 1;
        }
    }
    console.log(n);
    noLoop();
}

function phyllotaxis() {


}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + '_MouseX' + mouseX + '_MouseY' + mouseY, 'png');

    switch (key) {
        case '1': // Reset canvas variables and change
            setup();
            break;
        default:

    }
}
