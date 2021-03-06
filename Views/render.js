// ----------------------MODELS-----------------------------

//constructor definition
function Renderer(canvas){

  //grab given html canvas object
  this.canvas = canvas;

  //start lawn mower
  this.ctx = this.canvas.getContext("2d");
}

//iterate through all of the snapshot assets and run draw and each one
Renderer.prototype.populateUniverse = function(){

  //clear the canvas before very frame
  this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)

  //check if there is any input from WS
  if(this.objectsArray){

    //iterate through all the objects set in controller from on message WS
    for(var i = 0; i < this.objectsArray.length; i++){

      //run draw function for each individual object
      this.draw(this.objectsArray[i]);
    }
  }
};

// for an individual asset, run canvas methods to place on canvas
Renderer.prototype.draw = function(object){

  //get dimensions from earlier function
  var dims = this.dimensions(object)

  // paste object accounting for it's angle using canvas rotate function
  this.ctx.fillStyle ="white";
  this.ctx.translate(dims.midpointX, dims.midpointY);
  this.ctx.rotate(dims.rad-(Math.PI/2));
  this.ctx.fillRect(dims.width/(-2),dims.height/(-2), dims.width, dims.height);
  this.ctx.rotate((dims.rad-(Math.PI/2))/-1);
  this.ctx.translate(dims.midpointX/-1, dims.midpointY/-1);
}

// takes in a snapshot asset (each asset has an x, y, rad - width and height are accessed from itemKey object literal)
Renderer.prototype.dimensions = function(currentAsset){
  return {
    width: itemKey[currentAsset.type].width,
    height: itemKey[currentAsset.type].height,
    rad: currentAsset.rad,
    x: currentAsset.x,
    y: currentAsset.y,
    midpointX: currentAsset.x + (itemKey[currentAsset.type].width/2),
    midpointY: currentAsset.y + (itemKey[currentAsset.type].height/2)
  }
}

//runs populateUniverse in a repeated loop
//takes in a snapshotAssetArray to update itself
Renderer.prototype.tickTock = function(){
  var self = this;
  function execute(){
  window.requestAnimationFrame(execute);
    self.populateUniverse();
  }
  execute();
}


// ----------------------KEYS-----------------------------
var itemKey = {
  ship:     {width: 20, height: 40},
  merg:     {width: 15, height: 25},
  pew:      {width:4, height: 10},
  shrapnel: {width:3, height:3}
}
