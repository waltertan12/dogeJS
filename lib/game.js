(function() {
  if (typeof Blocks === "undefined") {
    window.Blocks = {};
  }


  var Game = Blocks.Game = function(xDim, yDim) {
    this.xDim = xDim;
    this.yDim = yDim;
    this.blocks = [];
    this.doges = [];

    var i;

    for(i = 0; i < Game.NUM_BLOCKS; i++) {
      this.blocks.push(
        Blocks.Block.randomBlock(xDim, yDim, Game.NUM_BLOCKS)
      );
    }
    for(i = 0; i < Game.NUM_DOGES; i++) {
      this.doges.push(
        Doges.Doge.doge(xDim, yDim)
      );
    }
  }

  Game.NUM_BLOCKS = 20;
  Game.NUM_DOGES = 10;

  Game.prototype.render = function(canvas) {
    canvas.clearRect(0, 0, this.xDim, this.yDim);
    this.blocks.forEach(function(block) {
      block.render(canvas);
    });
    this.doges.forEach(function(doge) {
      doge.render(canvas);
    });
  };

  Game.prototype.moveBlocksAndDoges = function() {
    var game = this;
    this.blocks.forEach(function(block) {
      block.moveRandom(game.xDim, game.yDim);
    });
    this.doges.forEach(function(doge) {
      doge.moveRandom(game.xDim, game.yDim);
    });
  }

  Game.prototype.start = function(canvasElement) {
    var canvasE = canvasElement.getContext('2d');
    var game = this;

    window.setInterval(function() {
      console.log(game);
      game.moveBlocksAndDoges();
      game.render(canvasE);
    }, 1000 / 100);
  };
})();