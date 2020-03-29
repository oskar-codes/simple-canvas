### cls()
clears the entire canvas

### rect(x1,y1,w,h,[color],[strokeWidth])
draws a rectangle from x1,y1 of width w and height h using the optional color and strokeWidth. Color is black if ommited. StrokeWidth is 1 if ommited.
```javascript
rect(100,100,50,30,"red",10); // red rectangle of size 50x30 with a 10px border width
rect(20,30,100,200,"#3498db"); // lightblue rectangle of size 100x200 with the default border width
```

### rectFill(x1,y1,x2,y2,[color])
draws a filled rectangle from x1,y1 to x2,y2, using the optional color. Color is black if ommited.
```javascript
rectfill(100,100,50,30,"red"); // red filled rectangle of size 50x30
rectfill(20,30,100,200); // filled rectangle of size 100x200 with the default color
```

### circ(x,y,r,[color],[strokeWidth])
draws a circle at coordinates x,y of radius r, using the optional color and strokeWidth. Color is black if ommited. StrokeWidth is 1 if ommited.
```javascript
circ(100,100,20,"grey",5); // grey circle of radius 20, with a 5px border width
circ(300,250,30); // circle of radius 30 with the default color and border width
```

### circFill(x,y,r,[color])
draws a filled circle at coordinates x,y of radius r, using the optional color. Color is black if ommited.
```javascript
circfill(100,100,25); // filled circle of radius 25, using the default color 
circfill(20,30,10,"rgb(255,255,0)"); // yellow filled circle of radius 10
```

### line(x1,y1,x2,y2,[color],[strokeWidth])
draws a line from coordinates x1,y1 to x2,y2, using the optional color, and the optional strokeWidth. Color is black if ommited. StrokeWidth is 1 if ommited.
```javascript
line(32,32,128,128,"red"); // red line going from 32,32 to 128,128, using the default stroke width
line(20,30,100,200,"salmon",5); // salmon colored line going from 20,30 to 100,200 of stroke width 5px
```

### pset(x,y,[color])
draws a single pixel at coordinates x,y using the optional color. Color is black if ommited.
```javascript
pset(64,128,"white"); // white pixel at 64,128
pset(0,0); // pixel at 0,0, using the default color
```

### pget(x,y)
returns the rgba color value of the pixel located at the specified coordinates.
```javascript
pset(20,20,"blue");
pget(20,20) // returns "rgba(0,0,255,0)"
```

### print(text,x,y,[color],[size],[font])
draws text at the specified coordinates (bottom left corner) using the optional color, font size, and font name. Color is black if ommited. Size is 16 if ommited. Font is sans-serif if ommited.
```javascript
print("Hello World!",20,40,"red",24,"courier"); // prints "Hello World!" at 20,40 in red with a font-size of 24px and the "courier" font
print("Simple Canvas",32,128,"rgb(255,0,255)"); // prints "Simple Canvas" at 32,128 in purple with a the default font-size and the default font 
```

### img(src,x,y,[sx],[sy])
draws an image from a source file at the specified x,y coordinates. If sx and sy are specified, it is scaled to match that size in pixels. Otherwise it is drawn using the source image dimensions.
```javascript
img("my-image.png",0,0); // draws the "my-image.png" file at 0,0, using the source image dimensions
img("somefile.jpeg",30,20,100,100) // draws the "somefile.jpeg" file at 30,20, and scaled to match a resolution of 100x100
```

### btn(key)
return a boolean value representing the pressed state of the key passed as a parameter during the current frame. Available keys are BACKSPACE, TAB, RETURN, ESC, SPACE, PAGEUP, PAGEDOWN, CTRL, SHIFT, ALT, END, HOME, LEFT, UP, RIGHT, DOWN, INSERT, DELETE, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, and TILDA.
```javascript
if (btn("A")) x++ // increments the x variable when the A key is pressed
print(btn("SPACE") ? "Hello" : "World",50,50) // prints "Hello" or "World" depending on wether the spacebar is being pressed or not 
```

### mouse()
returns the mouse cursor coordinates as an array \[mouseX, mouseY\], relative to the canvas position on the page.
```javascript
print(mouse()[0] + " / " + mouse()[1],50,50) // prints the mouse coordinates
circfill(mouse()[0],mouse()[1],20,"blue"); // draws a blue circle behind the mouse cursor
```
