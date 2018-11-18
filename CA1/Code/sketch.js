function setup() {
  createCanvas(800, 600);
  colorMode(HSB);
  background(55);
  pixelDensity(1);
}

function draw() {
  loadPixels();

  for (let x = 0; x <= width; x++ ) {
    for (let y = 0; y <= height; y++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = x;
      pixels[index + 1] = random(255);
      pixels[index + 2] = y;
      pixels[index + 3] = 255;
    }
  }
      updatePixels();

}

function keyPressed() {
        if(key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX' + mouseX + '_MouseY' + mouseY,'png');
    }
