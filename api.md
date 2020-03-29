### cls()
clears the entire canvas

### rect(x1,y1,w,h,[color],[strokeWidth])
draws a rectangle from x1,y1 of width w and height h using the optional color and strokeWidth. Color is black if ommited. StrokeWidth is 1 if ommited.

### rectFill(x1,y1,x2,y2,[color])
draws a filled rectangle from x1,y1 to x2,y2, using the optional color. Color is black if ommited.

### circ(x,y,r,[color],[strokeWidth])
draws a circle at coordinates x,y of radius r, using the optional color and strokeWidth. Color is black if ommited. StrokeWidth is 1 if ommited.

### circFill(x,y,r,[color])
draws a filled circle at coordinates x,y of radius r, using the optional color. Color is black if ommited.

### line(x1,y1,x2,y2,[color],[strokeWidth])
draws a line from coordinates x1,y1 to x2,y2, using the optional color, and the optional strokeWidth. Color is black if ommited. StrokeWidth is 1 if ommited.

### pset(x,y,[color])
draws a single pixel at coordinates x,y using the optional color. Color is black if ommited.

### pget(x,y)
returns the rgba color value of the pixel located at the specified coordinates.

### print(text,x,y,[color],[size],[font])
draws text at the specified coordinates (bottom left corner) using the optional color, font size, and font name. Color is black if ommited. Size is 16 if ommited. Font is sans-serif if ommited.

### btn(key)
return a boolean value representing the pressed state of the key passed as a parameter during the current frame. Available keys are BACKSPACE, TAB, RETURN, ESC, SPACE, PAGEUP, PAGEDOWN, CTRL, SHIFT, ALT, END, HOME, LEFT, UP, RIGHT, DOWN, INSERT, DELETE, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, and TILDA.
