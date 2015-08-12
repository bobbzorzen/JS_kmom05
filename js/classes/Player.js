function Player(canvas) {
	this.canvas = canvas;
	this.size = 10;
	this.speed = 5;
}
Player.prototype = new DefaultElement();
Player.prototype.draw = function(context) {
	context.beginPath();
	context.arc(this.x + this.size, this.y + this.size, this.size, 0, 2 * Math.PI);
	context.stroke();
};

Player.prototype.update = function() {
  if (Key.isDown(Key.UP)) this.moveUp();
  if (Key.isDown(Key.LEFT)) this.moveLeft();
  if (Key.isDown(Key.DOWN)) this.moveDown();
  if (Key.isDown(Key.RIGHT)) this.moveRight();
  if(this.x + this.size*2 > this.canvas.width) {this.x = this.canvas.width - + this.size*2;}
  if(this.x < 0) {this.x = 0;}
  if(this.y + this.size*2 > this.canvas.height) {this.y = this.canvas.height - + this.size*2;}
  if(this.y < 0) {this.y = 0;}
};