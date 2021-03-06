function Shrapnel(x,y){
	this.x = x;
	this.y = y;
	this.dx = (Math.floor(Math.random()*5)) * (Math.round(Math.random()) * 2 - 1)
	this.dy = (Math.floor(Math.random()*5)) * (Math.round(Math.random()) * 2 - 1)
	this.isExpired = false;
	this.persistenceFactor = (Math.floor(Math.random()*3))
	this.destructionTimer();
	this.rad = 0;
};


Shrapnel.prototype.destructionTimer = function() {
  var self = this
  setTimeout(function() {
    self.isExpired = true
  }, 500*this.persistenceFactor);
}


Shrapnel.prototype.move = function(width, height) {
  this.x += this.dx;
  this.y += this.dy;
  if (this.x > width) {
    this.x = this.x - width;
  } else if (this.x < 0) {
    this.x = this.x + width;
  }
  if (this.y > height) {
    this.y = this.y - height;
  } else if (this.y < 0) {
    this.y = this.y + height;
  }
}


Shrapnel.prototype.snapshot = function() {
  return {
    x: this.x,
    y: this.y,
    rad: this.rad,
    type: "shrapnel"
  }
}
