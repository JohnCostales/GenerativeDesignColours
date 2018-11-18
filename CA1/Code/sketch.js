function setup() {

}

function draw() {

    
}

function keyPressed() {
        if(key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX' + mouseX + '_MouseY' + mouseY,'png');
    }
