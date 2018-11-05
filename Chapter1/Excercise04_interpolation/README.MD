# Exercise 04
In each colour model, colours have their clearly defined place. the direct path from one colour to another always has precisely definably gradiations, which will vary depending on the specific model. Using this interpolation you can create colour groups in every gradiation, as well as locate individual intermediate nuances.

## Colour Palettes through interpolation

Because a colour is not defined by a single number but by several values, it is necessary to interpolate between these values. Depending on the chosen colour model, RGB or HSB, the same colour is defined by different values, there by cause the path from one another to lead past different colours. In the HSB colour model for instance, a detour is made past the colour wheel. This difference is due to the characteristics of the colour models, both of which can be very useful depending on the situation. It is there for important to choose appropriate colour model to solve a specific problem.

The number of color gradiations tileCountX and the number of rows tilecountY are determind by the position of the mouse
```
tileCountX = int(map(mouseX, 0, width, 2, 100));
tileCountY = int(map(mouseY, 0, height, 2, 10));
```

Drawing the grid row by row.
```
for (var gridY = 0; gridY < tileCountY; gridY++){
...
}
```

The colours for the left and right columns are set in the arrays colorsLeft and colorsRight.
```
var col1 = colorsLeft[gridY];
var col2 = colorsRight[gridY];
```

The intermidiary colours are calculated with lerpColor(). This function performs the interpolation between the  individual colour values. The variable amount, a value between 0 and 1, specidies the position between the start and end colour.
```
interCol = lerpColor(col1, col2, amount);
```

## Building
Here are the following steps followed in developing the final code structure.