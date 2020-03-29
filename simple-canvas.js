function setupCanvas(ctx) {
  function loop(timestamp) {
    if (lastRender === 0) init();
    var progress = timestamp - lastRender
  
    update(progress);
  
    lastRender = timestamp
    window.requestAnimationFrame(loop)
  }
  
  var lastRender = 0
  window.requestAnimationFrame(loop);
  
  /*** HANDLE INPUT ***/
  var KEY = {
    BACKSPACE: 8,
    TAB:       9,
    RETURN:   13,
    ESC:      27,
    SPACE:    32,
    PAGEUP:   33,
    PAGEDOWN: 34,
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
  
  /*** GLOBAL FUNCTIONS ***/
  window.btn = (k) => KEY[k][1];
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
  window.print = function(t,x,y,c,s,f) {
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
}
