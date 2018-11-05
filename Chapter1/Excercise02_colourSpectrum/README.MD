# Exercise 02
This colour spectrum is composed of coloured rectangles. Each tile is assigned a hue on the horizontal axis and a saturation value on the vertical. the colour resolution can be reduced by enlarging the rectangles, so that the primary colours in the spectrum become clearer.

## Colour spectrum in a grid
The grid is created by two nested for loops. In the outer loop, the y-position is increased step by step. The inner loop then draws a line by increasing the value for the rectangle's x-position, step by step, until the entire width is processed. the step size is set by the value of the mouse position and is locaed in the variables stepX and stepY. It also determines the length and width of the rectangles.

The display size is set using size(). The values defined her can be retrieved at any time using the system variables width and height.
```
size(800,400);
```

The value range for hue and saturation is set at 800 or 400 using the command colorMode(). Hude is no longer defined as a number between 0 and 360 but rather as one between 0 and 800. The same is true of the saturation value.
```
colorMode(HSB, width, height, 100);
```

The addition of 2 prevents stepX or stepY from being too small, which would lead to longer display times.
```
stepX = mouseX + 2;
stepY = mouseY + 2;
```

With the help of two nested loops, all the positions in the grid will now be processed. The y-position of the rectangle to be drawn is defined by gridU in the outer loop. the value increases only when the inner loop has been processed (i.e. once a complete row of rectangles has been drawn).
```
for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      ...
    }
}
```

The variables gridX and gridY are used not only to positiion the tile but also to define the fill colour. The hue is determined by gridX. Saturation value decreases proportionally to increases in the value gridY.
```
fill(gridX, height - gridY, 100);
rect(gridX, gridY, stepX, stepY);
```

## Building
Here are the following steps followed in developing the final code structure.

### Step 1
Hue is equivalent to x positioning of the tile while the saturation lowers depending on the y positioning

### Final
Number of rows and columns are changed depending on the mouse positioning. WARNING: Could cause browser to crash.