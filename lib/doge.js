(function() {
  if (typeof Doges === "undefined") {
    window.Doges = {};
  }

  var Doge = Doges.Doge = function(x, y) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = "http://i.imgur.com/P5t9JNF.png";
  };

  Doge.prototype.render = function(canvas) {
    canvas.drawImage(this.image, this.x, this.y);
  };

  Doge.doge = function(maxX, maxY) {
    return new Doge(
      maxX * Math.random(),
      maxY * Math.random()
    );
  }

  Doge.prototype.moveRandom = function(maxX, maxY) {
    var xdir, ydir;
    if (Math.random() > .5) {
      xdir = -1;
    }
    else {
      xdir = 1;
    }
    if (Math.random() > .5) {
      ydir = -1;
    }
    else {
      ydir = 1;
    }
    var dx = (Math.random() * xdir) ;
    var dy = (Math.random() * ydir);
    this.x = dx + this.x;
    this.y = dy + this.y;
  }
})();