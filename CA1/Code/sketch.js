var divergenceAngle = 137.5;
var c = 24;
var shapeSize = c - 1;
//var hV = 360;
var sV = 100;
var bV = 100;
var aV = 1;
var changeAlpha = 0.0008;

function setup() {
    createCanvas(1240, 1748);
    angleMode(DEGREES); // Change angles to degrees
    colorMode(HSB);
    noStroke();
}

function draw() {
    background(0);
    translate(width / 1.5, height / 1.5);

    for (var n = 0; n < width; n++) {
        var angle = n * divergenceAngle;
        var r = c * sqrt(n);

        //Radius against an angle
        var x = r * cos(angle);
        var y = r * sin(angle);

        // Draw shapes
        var hV = noise(n * 0.01) * 360;
        var shapeFill = color(hV, sV, bV, aV);
        //        var shapeFill = color(n % hV, sV, bV, aV);
        fill(shapeFill);
        ellipse(x, y, shapeSize, shapeSize);

        // Decrease Alpha values every sqrt(n) to the power of 2 is a natural number.
        if (Number.isInteger(sqrt(Math.pow(n, 2))) === true) {
            aV -= changeAlpha;
        }
        //        console.log(y);
    }
    noLoop();
}

function keyPressed() {
    if (key == "s" || key == "S")
        saveCanvas(gd.timestamp() + "_MouseX" + mouseX + "_MouseY" + mouseY, "png");
}