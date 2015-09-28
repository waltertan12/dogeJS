(function () {
  if (typeof Blocks === "undefined") {
    window.Blocks = {};
  }

  var Block = Blocks.Block = function(x, y, length, color) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.color = color;
    var phrases = [
      "wow",
      "such javascript",
      "dogeJS",
      "very html",
      "much start up",
      "h4ckerlyfe",
      "such disruptive",
      "time2market",
      "status quo",
      "plz no tech bubble",
      "yComb spring 2069",
      "wow",
      "wow",
      "wow",
      "wow",
      "social missnz",
      "unicorn valuation",
      "its the snapechat of facebook",
      "many mvp",
      "wow",
      "wow"
    ];
    var phrasesLength = phrases.length;
    this.phrase = phrases[Math.floor(Math.random() * phrasesLength)];
  };

  Block.randomBlock = function(maxX, maxY, numBlocks) {
    return new Block(
      maxX * Math.random(),
      maxY * Math.random(),
      30,
      Block.randomColor()
    );
  };

  var HEX_DIGITS = "0123456789ABCDEF"
  Block.randomColor = function () {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += HEX_DIGITS[Math.floor((Math.random() * 16))];
    }

    return color;
  };

  Block.prototype.moveRandom = function(maxX, maxY) {
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

  Block.prototype.render = function(canvas) {
    canvas.fillStyle = this.color;
    canvas.font = 40 + "pt Comic Sans MS";
    canvas.fillText(this.phrase, this.x, this.y);
  };

})();