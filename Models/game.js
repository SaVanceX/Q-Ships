//Game Class and associated functions
function Game() {
 this.width = 1000;
 this.height = 1000;
 this.players = [];
}

Game.prototype.items = function() {
  var gameItems = [];
  for (var i = 0; i < this.players.length; i++) {
    gameItems.push(this.players[i].ship.snapshot())
    for (var j = 0; j < this.players[i].ship.pewBay.length; j++) {
      gameItems.push(this.players[i].ship.pewBay[j].snapshot())
    }
  }
  return gameItems;
}


Game.prototype.snapshot = function() {
  gameAssets = []
  gameAssets.push({
    width: this.width,
    height: this.height,
    state: this.state,
    items: this.items()
  })

  return JSON.stringify(gameAssets[0]);
}

Game.prototype.addPlayer = function() {
  //ws connection created
  this.players.push(new Player())
}

Game.prototype.removePlayer = function(uuid) {
  //when ws connection broken
  var quitter;
  for (var i = 0; i < this.players.length; i++) {
    if (this.players[i].uuid === uuid) {
      quitter = i;
      break;
    }
  }
  this.players.splice(quitter, 1);
}

//
Game.prototype.newFrame = function() {
  for (var i = 0; i < this.players.length; i++) {
    this.players[i].ship.navigateTheStars();
    this.players[i].ship.move();
    for (var j = 0; j < this.players[i].ship.pewBay.length; j++) {
      this.players[i].ship.pewBay[j].move();
    }
  }
}


//game loop will run 50 fps and run new frame and checkers
Game.prototype.gameLoop = function() {
  self = this;
  setInterval(function(){
    self.newFrame();
    self.checkers();
  },1000/50);
}

//will check for any pews that need to be removed
//will eventually check for any collisions
Game.prototype.checkers = function() {
  for(var i=0;i< this.players.length;i++){
    this.players[i].ship.removePew()
  };
  //add other checkers
    //collision detection
};



Game.prototype.updateEntity = function(package){
  if(package.up){
    console.log("hello")
  }
};