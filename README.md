# simple-canvas
Simple Canvas makes the process of interacting with an HTML canvas faster, and easier. It also sets up a frame based coding environment, which makes animation and game development a truly easier task.

## Usage
Download the <a id="raw-url" href="https://raw.githubusercontent.com/oskar-codes/simple-canvas/master/simple-canvas.js">simple-canvas.js</a> file, add it to your project directory, and include it to your HTML document like so:
```html
<script type="text/javascript" src="simple-canvas.js"></script>
```
Make sure that this file is included **before** your web app's JavaScript code.

Then get a reference to your canvas and the 2D context, and finally execute setupCanvas with your context as the first parameter:
```javascript
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

setupCanvas(ctx);
```

You'll then be able to declare two functions; `init` and `update`. `init` is called when the canvas is first setup, and `update` is called every frame. Along with the update function comes the first parameter, which is the elapsed time in milliseconds since the last update call.

The following example draws a circle that moves to the right when pressing the spacebar. It is available online [here](https://oskar-codes.github.io/simple-canvas/examples/example1.html).
```javascript
function init() {
  window.x = 100;
}
function update() {
  cls();
  if (btn("SPACE")) {
    x++;
  }
  circ(x, 200, 20, "red");
}
```

## API
The API reference and documentation is available [here](https://github.com/oskar-codes/simple-canvas/blob/master/api.md). Please note that this library is still in active development, and may lack certain features. Feel free to make a feature requset in that case.

## Game development using Simple Canvas
Simple canvas makes developing online JavaScript browser games easy, as it automatically sets up a game loop for you to use; the `update` function. However, the frame rate of that update function might not be consistent depending on your player's devices, and may cause issues where for example different players move at different speeds in your game. To solve this issue, Simple Canvas calls the `update` function with a single parameter that holds the time between the current frame and the previous one, also known as the deltaTime, that you can then use to ensure that gameplay values are stable and consistent.
Here's an example, available online [here](https://oskar-codes.github.io/simple-canvas/examples/example2.html):
```javascript
function init() {
  window.x = 100;
  window.spd = 0.5;
}
function udpate(deltaTime) {
  cls();
  if (btn("SPACE")) {
    x += spd * deltaTime;
  }
  text("deltaTime: " + deltaTime,30,30);
  circ(x, 200, 20, "red");
}
```

## Examples
- [Rendering showcase](https://oskar-codes.github.io/simple-canvas/examples/rendering.html) \[[code](https://github.com/oskar-codes/simple-canvas/blob/master/examples/rendering.html)\]
- [Platformer game prototype](https://oskar-codes.github.io/simple-canvas/examples/platformer.html) \[[code](https://github.com/oskar-codes/simple-canvas/blob/master/examples/platformer.html)\]
- [Keyboard and mouse input demo](https://oskar-codes.github.io/simple-canvas/examples/input.html) \[[code](https://github.com/oskar-codes/simple-canvas/blob/master/examples/input.html)\]
