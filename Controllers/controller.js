document.addEventListener("DOMContentLoaded", function(event) {

//-------------------background------------------------
  //identify starfield div container
  var background = document.getElementById('background');
  //initialize new starfield beep beep boop
  var starfield = new Starfield();
  //run initialize on initialized starfield
  starfield.initialize(background);
  //begin starfield loop
  starfield.start();
//-----------------------------------------------------


//------------------render initialization--------------
  //identify game canvas
  var canvas = document.getElementById("gameCanvas")
  //initialize renderer machinery *wa wa wa wa*
  render = new Renderer(canvas)
  //start your engines
  render.tickTock()
//-----------------------------------------------------


//-----------------websocket initialization------------
  var socket;
  var url = "ws://localhost:8087/";

  // player connects to the server through websocket
  function connectToServer(render){
    socket = new WebSocket(url);

    // server sends json package
    socket.onmessage = function (msg){
      //update renderer snapshotAssets
      console.log(msg.data)
      render.objectsArray = msg.items;
    }
  }
//----------------------------------------------------
  connectToServer(render);
  keyStrokeListeners();

// sending message to the server controller
function sendMessage(message){
  console.log("did you get here?")
  console.log(message);
  socket.send(JSON.stringify(message));
}

function keyStrokeListeners() {
  //json package ready for editing
  var keys = {keys: {up: false, down: false, left: false, right: false}}

  //document event listener for keydown
    document.addEventListener('keydown', function(event){
    //listening for up
    if(event.keyCode === 38 && keys.keys.up === false) {
      keys.keys.up = true;
      sendMessage(keys);
    }
    //listening for down
    if(event.keyCode === 40 && keys.keys.down === false ) {
      keys.keys.down = true;
      sendMessage(keys);
    }

    //listening for left
    if(event.keyCode === 37 && keys.keys.left === false) {
      keys.keys.left = true;
      sendMessage(keys);
    }

    // listening for right
    if(event.keyCode === 39 && keys.keys.right === false ) {
      keys.keys.right = true;
      sendMessage(keys);
    }
  });

  //document event listener for keydown to reset keys to false
  document.addEventListener('keyup', function(event){
    if(event.keyCode === 38) {
      keys.keys.up = false;
      sendMessage(keys);
    }
    if(event.keyCode === 40) {
      keys.keys.down = false;
      sendMessage(keys);
    }
    if(event.keyCode === 37) {
      keys.keys.left = false;
      sendMessage(keys);
    }
    if(event.keyCode === 39) {
      keys.keys.right = false;
      sendMessage(keys);
    }
    if(event.keyCode === 32) {
      // send a missle json that is stamped with a user id
      sendMessage({fire: "pew"});
    }
  });
}
})

