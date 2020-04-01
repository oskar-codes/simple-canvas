function setupCanvas(ctx) {
  function loop(timestamp) {
    if (lastRender === 0) {
      try {
        init();
      } catch(e) {
        // usually init is not defined
      }
    }
    var progress = timestamp - lastRender
  
    try {
      update(progress);
    } catch(e) {
      // usually update is not defined
    }
  
    lastRender = timestamp
    window.requestAnimationFrame(loop)
  }
  
  var lastRender = 0
  window.requestAnimationFrame(loop);
  
  /*** GLOBAL FUNCTIONS ***/
  window.btn = (k) => {
    try {
      return KEY[k][1];
    } catch(e) {
      console.error(`Key "${k}" is not a valid key.`);
    }
  }
  window.cls = () => ctx.clearRect(0,0,ctx.canvas.clientWidth,ctx.canvas.clientHeight);
  window.rect = function(a,b,c,d,e,f) {
    e = (!!e ? e : "#000000");
    f = (!!f ? f : 1);
    ctx.strokeStyle = e;
    ctx.lineWidth = f;
    ctx.strokeRect(a,b,c,d);
  }
  window.rectfill = function(a,b,c,d,e) {
    e = (!!e ? e : "#000000");
    ctx.fillStyle = e;
    ctx.fillRect(a,b,c,d);
  }
  window.circ = function(x,y,r,c,s) {
    c = (!!c ? c : "#000000");
    s = (!!s ? s : 1);
    ctx.beginPath();
    ctx.strokeStyle = c;
    ctx.lineWidth = s;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
  }
  window.circfill = function(x,y,r,c) {
    c = (!!c ? c : "#000000");
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = c;
    ctx.fill();
  }
  window.line = function(x1,y1,x2,y2,c,s) {
    c = (!!c ? c : "#000000");
    s = (!!s ? s : 1);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = c;
    ctx.lineWidth = s;
    ctx.stroke();
  }
  window.text = function(t,x,y,c,s,f) {
    c = (!!c ? c : "#000000");
    s = (!!s ? s : 16);
    f = (!!f ? f : "sans-serif");
    ctx.font = s + "px " + f;
    ctx.fillStyle = c;
    ctx.fillText(t,x,y);
  }
  window.pset = function(x,y,c) {
    c = (!!c ? c : "#000000")
    ctx.fillStyle = c;
    ctx.fillRect(x,y,1,1);
  }
  window.pget = function(x,y,t) {
    var data = ctx.getImageData(x,y,1,1).data;
    switch (t) {
      case 0: return `rgba(${data[0]},${data[1]},${data[2]},${data[3]})`;
      case 1: return rgba2hex(`rgba(${data[0]},${data[1]},${data[2]},${data[3]})`);
      case 2: return [data[0],data[1],data[2],data[3]];
    }
  }
  window.img = function(src,x,y,w,h) {
    var img = new Image();
    img.src = src;
    if (!!w && !!h) {
      ctx.drawImage(img,x,y,w,h);
    } else {
      ctx.drawImage(img,x,y);
    }
  }
  window.mouse = function(canvas, evt) {
    return [mouseX, mouseY];
  }
  var mouseX = 0;
  var mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    var rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left
    mouseY = e.clientY - rect.top;
  });
  window.mousedown = (id) => (id === 0 ? lmbDown : (id === 1 ? (rmbDown && prevContextMenus) : false));
  window.preventcontextmenus = () => { prevContextMenus = true };

  /*** HANDLE INPUT ***/
  var KEY = {
    BACKSPACE: 8,
    TAB:       9,
    RETURN:   13,
    ESC:      27,
    SPACE:    32,
    PAGEUP:   33,
    PAGEDOWN: 34,
    CTRL:     17,
    SHIFT:    16,
    ALT:      18,
    END:      35,
    HOME:     36,
    LEFT:     37,
    UP:       38,
    RIGHT:    39,
    DOWN:     40,
    INSERT:   45,
    DELETE:   46,
    ZERO:     48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56, NINE: 57,
    A:        65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90,
    TILDA:    192
  };
  var keys = Object.keys(KEY);
  for (var i = 0; i<keys.length; i++) {
    KEY[keys[i]] = [KEY[keys[i]],false];
  }
  
  document.addEventListener('keydown', (e) => {
    var keys = Object.keys(KEY);
    for (var i = 0; i<keys.length; i++) {
      if (KEY[keys[i]][0] === e.keyCode) {
        KEY[keys[i]][1] = true;
      }
    }
  }, false);
  document.addEventListener('keyup', (e) => {
    var keys = Object.keys(KEY);
    for (var i = 0; i<keys.length; i++) {
      if (KEY[keys[i]][0] === e.keyCode) {
        KEY[keys[i]][1] = false;
      }
    }
  }, false);
  var lmbDown = false;
  var rmbDown = false;
  var prevContextMenus = false;
  document.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
      lmbDown = true;
    } else if (e.button === 2 && prevContextMenus) {
      e.preventDefault();
      rmbDown = true;
    }
  });
  document.addEventListener('mouseup', (e) => {
    if (e.button === 0) {
      lmbDown = false;
    } else if (e.button === 2) {
      rmbDown = false;
    }
  });
  window.addEventListener("contextmenu", function(e) {
    if (prevContextMenus) {
      e.preventDefault();
    }
  });
  
  function rgba2hex(orig) {
    var a, isPercent,
      rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
      alpha = (rgb && rgb[4] || "").trim(),
      hex = rgb ? 
      (rgb[1] | 1 << 8).toString(16).slice(1) +
      (rgb[2] | 1 << 8).toString(16).slice(1) +
      (rgb[3] | 1 << 8).toString(16).slice(1) : orig;
        if (alpha !== "") {
          a = alpha;
        } else {
          a = 01;
        }

        a = Math.round(a * 100) / 100;
          var alpha = Math.round(a * 255);
          var hexAlpha = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
          hex = hex + hexAlpha;

      return hex;
  }
}
