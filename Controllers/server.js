// var WebSocketServer = require('ws').Server;
// var PORT = 8080;
// var wss = new WebSocketServer({port: PORT});

// debugger

  var game = new Game()

  var player = new Player();
  game.players.push(player);

  console.log(game);
  game.gameLoop();


  //for testing
  // setInterval(function(){
  //  if (websock.sent === true){
      // game.updateEntity(websock.package);
  //    websock.sent = false
  //  }
  // },1000/50)




// // the moment a new socket is established
// wss.on('connection', function(ws){
//   // messages.forEach(function(message){
//     // ws.send(message);
//   // });

//   //

//   ws.on('message', function(message){
//     // messages.push(message);
//     // console.log('Message Received: %s', message);

//     // experimenting
//     // var obj = JSON.parse(message);
//     // console.log(obj.user);



//     // &&&&&&&&&&&&&&&&&&&&&&&&&&&&& SERVER SIDE CONTROLLER &&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//     // in this block, we interact with the game engine update that shiet;
//     // snatch a snap shot and then broadcast to all de clients;

//     // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&





//     // broadcast the game universe snapshot to each client
//     wss.clients.forEach(function(conn){
//       conn.send(message);
//     })
//   })
// });
