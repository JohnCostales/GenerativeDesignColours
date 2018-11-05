# Exercise 01
The ability to directly influence millions of colours gives users an amazing freedom. Simultaneous contrast - whithout which it would be impossible to perceive colour is illustrated here by jextaposing a number of colour combinations. Our perception of a colour is affected by its neighboring colour and the shifting proportions of the colour to its background.

## Colour Contrast
The horizontal postion of the mouse controls the size of the colour fireld. Starting in the center, the coloured area is depicted with a height and width of 1 to 720 pizels. the vertical mouse position controls the hue. the background passes through the colour spectrum from 0 to 360, while the colour field passes through the spectrum in the opposite direction, from 360 to 0.

The setup() function sets the size of the display window and makes the cursor invisible.
```
function setup() {
  createCanvas(720, 720);
  noCursor();
  ...
}
```

The colours should pass through the hue spectrum in this program. For this reason, colorMode() allows users to change the way colour value is interpreted. HSB specifies the colour model, and the three values following it specify the repective range. Hue, for example, can only be specified by vlues between 0 and 360.

```
colorMode(HSB, 360, 100, 100);
```

The y-value of the mouse position is divided by 2 to get values from 0 to 360 on the colour wheel.
```
background(mouseY / 2, 100, 100);
```

The havled y-value of the mouse position is subtracted from 360, creating values from 360 to 0.
```
fill(360 - mouseY / 2, 100, 100);
```

The size of the colour field changed relative to the x-value of the mouse position, with a side length between 1 and 720 pixels.
```
rect(360, 360, mouseX + 1, mouseX + 1);
```

## Building
Here are the following steps followed in developing the final code structure.

### Step 1
Creating a square in the center of the canvas using the HSB colour to fill.

### Step 2
Changing the square size and colours using the mouse position. Notice that the background colour is the direct opposite of the square on the HSB spectrum

### Final
When 'S' key is pressed. A snapshot of the canvas is take and saved as a .png file.
