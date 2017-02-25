document.addEventListener("DOMContentLoaded", function(event) {

  //identify starfield div container
  var background = document.getElementById('background');
  //initialize new starfield beep beep boop
  var starfield = new Starfield();
  //run initialize on initialized starfield
  starfield.initialize(background);
  //begin starfield loop
  starfield.start();


//-----------------Server Side----------------------
  var game = new Game();
  game.players.push(new Player)
  game.players[0].ship = new Ship
//--------------------------------------------------


  //identify game canvas
  var canvas = document.getElementById("gameCanvas")
  //initialize renderer machinery *wa wa wa wa*
  var currentSnapshot = function() {
    return JSON.parse(game.snapshot())
  }
  render = new Renderer(canvas, currentSnapshot())
  //set game bounds
  render.initialize()
  //start of the game loop (running draw at 50fps)
  //update the assets per loop


  //snapshot is captured
  //TODO


  // render.gameLoop(currentSnapshot());
  render.gameLoop(currentSnapshot);
  //add listeners for key strokes for initialized game
  keyStrokeListeners(game)

  



  Game.prototype.loop = function() {
    self = this;
    setInterval(function(){
    var ship = self.players[0].ship
      ship.navigateTheStars()
      ship.x += ship.dx
      ship.y += ship.dy
    
    },1000/50);
  }

  game.loop()



})


// game.updateEntity({id: "jf9324j32", keys: [true, true, false, false]})
// ws.sendMessage(JSON.stringify({messageType: "entityUpdate", update: {id: "jf9324j32", keys: [true, true, false, false]}})
//sets up event listeners for up, down, left, right


function keyStrokeListeners(game) {
  //document event listener for keydown
  var keys = {up: false, down: false, left: false, right: false}

  document.addEventListener('keydown', function(event){
    //listening for up
    if(event.keyCode === 38 && keys.up === false) {
      keys.up = true;
      // send json to server controller
      //SEND THIS!!! JSON.stringify(keys)
      // debugger
      console.log(game.players[0].ship.y)
      game.players[0].ship.keys.up = true
      // game.players[0].ship.navigateTheStars()
    }
    //listening for down
    if(event.keyCode === 40 && keys.down === false ) {
      keys.down = true;
      // send json to server controller
       //SEND THIS!!! JSON.stringify(keys)
      console.log(game.players[0].ship.y)
      game.players[0].ship.keys.down = true
      // game.players[0].ship.navigateTheStars()
    }

    //listening for left
    if(event.keyCode === 37 && keys.left === false) {
      keys.left = true;
      // send json to server controller
       //SEND THIS!!! JSON.stringify(keys)
      console.log(game.players[0].ship.x)
      game.players[0].ship.keys.left = true
      // game.players[0].ship.navigateTheStars()
    }

    // listening for right
    if(event.keyCode === 39 && keys.right === false ) {
      keys.right = true;
      // send json to server controller
      //SEND THIS!!! JSON.stringify(keys)
      console.log(game.players[0].ship.x)
      game.players[0].ship.keys.right = true
    }
  });

  //document event listener for keydown to reset keys to false
  document.addEventListener('keyup', function(event){
    if(event.keyCode === 38) {
      keys.up = false;
       //SEND THIS!!! JSON.stringify(keys)
      game.players[0].ship.keys.up = false
    }
    if(event.keyCode === 40) {
      keys.down = false;
       //SEND THIS!!! JSON.stringify(keys)
      game.players[0].ship.keys.down = false
    }
    if(event.keyCode === 37) {
      keys.left = false;
       //SEND THIS!!! JSON.stringify(keys)
       game.players[0].ship.keys.left = false
    }
    if(event.keyCode === 39) {
      keys.right = false;
       //SEND THIS!!! JSON.stringify(keys)
       game.players[0].ship.keys.right = false
    }
    if(event.keyCode === 32) {
      // send a missle json that is stamped with a user id
      //SEND THIS!!!! "fire"
    }
  });
}
