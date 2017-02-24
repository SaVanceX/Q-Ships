///////////////////////contoller////////////////////////////////
document.addEventListener("DOMContentLoaded", function(event) {

  //identify starfield div container
  var background = document.getElementById('background');

  //initialize new starfield beep beep boop
  var starfield = new Starfield();

  //run initialize on initialized starfield
  starfield.initialize(background);
  starfield.start();


  //identify game canvas
  var canvas = document.getElementById("gameCanvas")

  //initialize renderer machinery *wa wa wa wa*
  render = new Renderer(canvas, assets)
  render.initialize()

  //draw canvas
  render.draw()
})



///////////////////////models//////////////////////////////////


//constructor definition
function Renderer(canvas, snapshotAssets){

  //grab given html canvas object
  this.canvas = canvas;

  //start lawn mower
  this.ctx = this.canvas.getContext("2d");

  //pipeline assets saved in renderer
  this.objectsArray = snapshotAssets.items;
  delete(snapshotAssets["items"]);
  this.gameSetting = snapshotAssets;
}




//define canvas dimensions (grabbed from pipeline in definition)
Renderer.prototype.initialize = function() {
  this.canvas.height = this.gameSetting.height;
  this.canvas.width = this.gameSetting.width
};


//draw each pipeline object
Renderer.prototype.draw = function(){
  for(var i = 0; i < this.objectsArray.length; i++){
    var currentObject = this.objectsArray[i];

    var dims = this.dimensions(currentObject)
    this.ctx.fillStyle ="white";



    this.ctx.translate(dims.midpointX, dims.midpointY)
    this.ctx.rotate(dims.rad)
    this.ctx.fillRect(dims.width/(-2),dims.height/(-2), dims.width, dims.height);
    this.ctx.rotate(dims.rad/-1)
    this.ctx.translate(dims.midpointX/-1, dims.midpointY/-1)
  }
};

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


//////////////////////////keys////////////////////////////////
var itemKey = {
  ship: {width: 10, height: 20},
  merg: {width: 15, height: 25}
}
/////////////////////////////////input///////////////////////////
var assets =
  {
    width:1000,
    height:1000,
    state:0,
    items: [
      {x:400, y:600, rad:1.6, type:"ship"},
      {x:400, y:300, rad:1.6, type:"merg"}
    ]
  }



