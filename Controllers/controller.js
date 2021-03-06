document.addEventListener("DOMContentLoaded", function(event) {

  //identify starfield div container
  var background = document.getElementById('background');

  //initialize new starfield beep beep boop
  var starfield = new Starfield();

  //run initialize on initialized starfield
  starfield.initialize(background);

  //begin starfield loop
  starfield.start();


//------------will receive from server------------
  var currentSnapshot = function() {
    return JSON.parse(game.snapshot())
  }
//------------------------------------------------

  //identify game canvas
  var canvas = document.getElementById("gameCanvas")

  //initialize renderer machinery *wa wa wa wa*
  render = new Renderer(canvas);

  setInterval(function(){
    render.objectsArray = currentSnapshot().items
  },1000/50)

function uuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + 'pew' + s4() + 'pew' + s4() + 'pew' + s4() + 'pew' + s4() + s4() + s4();
}
var playerId = 12345;
  //run game loop
  //*** Don't forget to render.objectsArray = msg.data.items ws.onMessage ***
  render.tickTock();

  //add listeners for key strokes for initialized game
  keyStrokeListeners(playerId)
})

// connecToServer Function({
  // onOpen = function(){ socket.send(JSON.stringify(uuid))}
  //onMessage({
      // render.objectsArray = JSON.parse(msg).items
  // })
// })

function keyStrokeListeners(uuid) {
  //json package ready for editing
  var keys = {uuid: uuid, keys: {up: false, down: false, left: false, right: false}}

  //document event listener for keydown
    document.addEventListener('keydown', function(event){
    //listening for up
    if(event.keyCode === 38 && keys.keys.up === false) {
      keys.keys.up = true;
      // send json to server controller
      websock.package = JSON.stringify(keys)
      websock.sent = true

    }
    //listening for down
    if(event.keyCode === 40 && keys.keys.down === false ) {
      keys.keys.down = true;
      // send json to server controller
      websock.package = JSON.stringify(keys)
      websock.sent = true
    }

    //listening for left
    if(event.keyCode === 37 && keys.keys.left === false) {
      keys.keys.left = true;
      // send json to server controller
      websock.package = JSON.stringify(keys)
      websock.sent = true
    }

    // listening for right
    if(event.keyCode === 39 && keys.keys.right === false ) {
      keys.keys.right = true;
      // send json to server controller
      websock.package = JSON.stringify(keys)
      websock.sent = true
    }
  });

  //document event listener for keydown to reset keys to false
  document.addEventListener('keyup', function(event){
    if(event.keyCode === 38) {
      keys.keys.up = false;
      websock.package = JSON.stringify(keys)
      websock.sent = true
    }
    if(event.keyCode === 40) {
      keys.keys.down = false;
      websock.package = JSON.stringify(keys)
      websock.sent = true
    }
    if(event.keyCode === 37) {
      keys.keys.left = false;
      websock.package = JSON.stringify(keys)
      websock.sent = true
    }
    if(event.keyCode === 39) {
      keys.keys.right = false;
      websock.package = JSON.stringify(keys)
      websock.sent = true
    }
    if(event.keyCode === 32) {
      // send a missle json that is stamped with a user id
      //SEND THIS!!!! "fire"
      // debugger

      websock.package = JSON.stringify({uuid: uuid, fire:"pew"})
      websock.sent = true
    }
  });
}
