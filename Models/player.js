var PLAYER_STATE = {
  start: 0,
  alive: 1,
  dead: 2
}

//  player constructor takes in uuid and pass it to the ship
function Player(uuid) {
  this.state = PLAYER_STATE.start;
  this.uuid = uuid;
  this.ship = new Ship(uuid);
}

// function uuid() {
//   function s4() {
//     return Math.floor((1 + Math.random()) * 0x10000)
//       .toString(16)
//       .substring(1);
//   }
//   return s4() + s4() + 'pew' + s4() + 'pew' + s4() + 'pew' +
//     s4() + 'pew' + s4() + s4() + s4();
// }
