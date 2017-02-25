document.addEventListener("DOMContentLoaded", function(event) {
  //identify starfield div container
  var background = document.getElementById('background');

  //initialize new starfield beep beep boop
  var starfield = new Starfield();

  //run initialize on initialized starfield
  starfield.initialize(background);

  //begin starfield loop
  starfield.start();


//---------------will receive from server---------
  var currentSnapshot = function() {
    return JSON.parse(game.snapshot())
  }
//------------------------------------------------

  //identify game canvas
  var canvas = document.getElementById("gameCanvas")

  //initialize renderer machinery *wa wa wa wa*
  render = new Renderer(canvas, currentSnapshot())

  //set game bounds
  render.initialize()

  //run gameloop on currentSnapshot
  render.gameLoop(currentSnapshot);

  //add listeners for key strokes for initialized game
  keyStrokeListeners(game)


})


// game.updateEntity({id: "jf9324j32", keys: [true, true, false, false]})
// ws.sendMessage(JSON.stringify({messageType: "entityUpdate", update: {id: "jf9324j32", keys: [true, true, false, false]}})
//sets up event listeners for up, down, left, right

function keyStrokeListeners() {
  //document event listener for keydown
  var keys = {keys: {up: false, down: false, left: false, right: false}}

  document.addEventListener('keydown', function(event){
    //listening for up
    if(event.keyCode === 38 && keys.keys.up === false) {
      keys.keys.up = true;
      // send json to server controller
      //SEND THIS!!! JSON.stringify(keys)
      websock.package = keys
      websock.sent = true

    }
    //listening for down
    if(event.keyCode === 40 && keys.keys.down === false ) {
      keys.keys.down = true;
      // send json to server controller
       //SEND THIS!!! JSON.stringify(keys)
       websock.package = keys
       websock.sent = true
    }

    //listening for left
    if(event.keyCode === 37 && keys.keys.left === false) {
      keys.keys.left = true;
      // send json to server controller
       //SEND THIS!!! JSON.stringify(keys)
       websock.package = keys
       websock.sent = true
    }

    // listening for right
    if(event.keyCode === 39 && keys.keys.right === false ) {
      keys.keys.right = true;
      // send json to server controller
      //SEND THIS!!! JSON.stringify(keys)
      websock.package = keys
      websock.sent = true
    }
  });

  //document event listener for keydown to reset keys to false
  document.addEventListener('keyup', function(event){
    if(event.keyCode === 38) {
      keys.keys.up = false;
       //SEND THIS!!! JSON.stringify(keys)
       websock.package = keys
       websock.sent = true
    }
    if(event.keyCode === 40) {
      keys.keys.down = false;
       //SEND THIS!!! JSON.stringify(keys)
       websock.package = keys
       websock.sent = true
    }
    if(event.keyCode === 37) {
      keys.keys.left = false;
       //SEND THIS!!! JSON.stringify(keys)
       websock.package = keys
       websock.sent = true
    }
    if(event.keyCode === 39) {
      keys.keys.right = false;
       //SEND THIS!!! JSON.stringify(keys)
       websock.package = keys
       websock.sent = true
    }
    if(event.keyCode === 32) {
      // send a missle json that is stamped with a user id
      //SEND THIS!!!! "fire"
      websock.package = {fire:"pew"}
    }
  });
}
