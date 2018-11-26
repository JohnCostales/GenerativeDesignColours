var divergenceAngle = 137.5;
var c = 10;
var shapeSize = 8;
var x = 0;
var n = 0;

function setup() {
    createCanvas(1240, 1748);
    angleMode(DEGREES); // Change angles to degrees
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
    background(0);
}

function draw() {
    x = 0;
    var saturation = 255;
    var brightness = 255;
    for (n = 0; n < width; n++) {
        var angle = n * divergenceAngle;
        //        var shapeFill = color((angle - r) % 255, saturation, brightness);
        var shapeFill = color(n % 255, saturation, brightness);

        //Formula
        var r = c * sqrt(n);
        //Radius against an angle
        var x = r * cos(angle) + width / 1.5;
        var y = r * sin(angle) + height / 1.5;

        // Draw shapes
        fill(shapeFill);
        ellipse(x, y, shapeSize, shapeSize);

        // if every sqrt(n) is a natural number. grow scaling.
        //Change colour alpha?
        if (Number.isInteger(sqrt(n)) === true) {
            shapeSize++;
            c += 1;
        }
        console.log(n);
    }

    noLoop();
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
