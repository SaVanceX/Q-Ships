
var WebSocketServer = require('ws').Server;
var PORT = 8087;
var wss = new WebSocketServer({port: PORT});

// instantiate the game
 //
// console.log(game);
// console.log("did you get here?")
//   var player = new Player();
//   game.players.push(player);

//   game.gameLoop();


  // for testing
  // setInterval(function(){
  //  if (websock.sent === true){
  //     game.updateEntity(websock.package);
  //    websock.sent = false
  //  }
  // },1000/50)




// user establishes a socket connection
wss.on('connection', function(ws){

  // user receives data from the client side, in response...
  ws.on('message', function(message){


    // server send to each client the snap shot of the current game state
    wss.clients.forEach(function(conn){
      console.log("hay")
      conn.send(message);
    })
  })
});
