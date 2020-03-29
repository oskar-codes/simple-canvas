# simple-canvas
Simple Canvas makes the process of interacting with an HTML canvas faster, and easier. It also sets up a frame based coding environment, which makes animation and game development using canvas an easier task.

## Usage
Add the simple-canvas.js file to your HTML document, like so:
```html
<script type="text/javascript" src="https://raw.githubusercontent.com/oskar-codes/simple-canvas/master/simple-canvas.js"></script>
```

Then get a reference to your canvas and the 2D context, and finally execute setupCanvas with your context as the first parameter:
```javascript
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

setupCanvas(ctx);
```

You'll then be able to declare two functions; `init` and `update`. `init` is called when the canvas is first setup, and `update` is called every frame. Along with the update function comes the first parameter, which is the elapsed time in milliseconds since the last update call.

The following example draws a circle that moves to the right when pressing the spacebar.
```javascript
function init() {
  window.x = 100;  
}
function update() {
  cls();
  if (btn("Space")) x++;
  circ(x,200,20);
}
```

## API
The API reference and documentation is available [here](https://github.com/oskar-codes/simple-canvas/blob/master/api.md). Please note that this library is still in active development, and may lack certain features.
