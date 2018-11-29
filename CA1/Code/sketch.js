var divergenceAngle = 137.5;
var c = 10;
var shapeSize = 8;

var dim;

function setup() {
    createCanvas(1240, 1748);
    angleMode(DEGREES); // Change angles to degrees
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
    background(0);
}

function draw() {
    background(0);
    noLoop();

    var hueValue = 255;
    var saturationValue = 100;
    var brightnessValue = 100;
    for (var n = 0; n < width; n++) {

        var angle = n * divergenceAngle;
        var r = c * sqrt(n);
        //Radius against an angle
        var x = r * cos(angle) + width / 1.5;
        var y = r * sin(angle) + height / 1.5;

        // Draw shapes
        //        var shapeFill = color((angle - r) % 150, saturation, brightness);
        drawEllipse(x, y, n, hueValue, saturationValue, brightnessValue);

        // if every sqrt(n) is a natural number. grow scaling.
        //Change colour alpha?
        if (Number.isInteger(sqrt(n)) === true) {
            shapeSize += 2;
            c += 1;
        }
        if (Number.isInteger(Math.pow(n, 3)) === true) {
            brightnessValue -= 0.15;
        }
        //        console.log(y);
    }

    noLoop();
}

function drawEllipse(x, y, n, hV, sV, bV) {
    var shapeFill = color(n % hV, sV, bV);
    fill(shapeFill);
    ellipse(x, y, shapeSize, shapeSize);
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + '_MouseX' + mouseX + '_MouseY' + mouseY, 'png');

}
