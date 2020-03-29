# simple-canvas
Simple Canvas makes the process of interacting with an HTML canvas faster, and easier. It also sets up a frame based coding environment,
which makes animation and game development using canvas an easier task.

### Usage
Add the simple-canvas.js file to your HTML document, like so:
```html
<script type="text/javascript" src=""></script>
```

Then get a reference to your canvas and the 2D context, and finally execute setupCanvas with your context as the first parameter:
```javascript
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

setupCanvas(ctx);
```

You'll then be able to declare two functions; `init` and `update`. `init` is called when the canvas is first setup, and `update` is called
every frame.
