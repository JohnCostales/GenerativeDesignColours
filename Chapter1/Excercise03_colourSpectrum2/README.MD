# Exercise 03
There are numerous models for organizing colours. The colour spectrum arranged in a circle (colour wheel) is a popular model for comparing harmonies, contrast, and colour tones. You can control the number of circle sefments, as well as their brightness and saturation values, allowing you to better understand colour arrangement in HSB mode.

## Colour Spectrum in a circle
The colour-wheel segments are arranged in the shape of a fan. The individual verticles are computed from the cosine and the sine values of the corresponding angle. A Processing method mode can be used that makes it especially easy to create the wheel segments. The individual points have to be set in the following order: first the middle point, and then the outer ones sequentially.

The ranges of for saturation and brightness are adjusted in such a way that mouse coordinates can be taken as their values.

```
colorMode(HSB, 360, width, height);
```

The angle increment depends on how many segments are to be drawn (segmentcount).
```
var angleStep = 360 / segmentCount;
```

The first vertex point is in the middle of the display
```
vertex(width / 2, height / 2);
```

For the other verices, angle has to be converted from degrees (0-360) to radians (0-2π) because the functions cos() and sin() require the angle be input this way.
```
var vx = width / 2 + cos(radians(angle)) * radius;
var vy = height / 2 + sin(radians(angle)) * radius;
```

The fill colour for the next segment is defined: the value of angle as hue, mouseX as saturation, and mouseu as brightness.
```
fill(angle, mouseX, mouseY);
```

The countruction of the colour segment is ended with endShape().
```
endShape();
```

## Building
Here are the following steps followed in developing the final code structure.

### Step 1
Making a traingle fan creating a diamond shape.

### Step 2
n/a

### Step 2
The fan is devided into 360 segments creating a wheel. The fill of each segments changes with different angles. 

### Final
Saturation and brightness is manipulated depending on mouse position and key switches added to change the segment count.