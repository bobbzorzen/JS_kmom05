function Enemy(canvas, speed, xDir, yDir) {
	speed = speed ? speed : 2;
	xDir = xDir ? xDir : -1;
	yDir = yDir ? yDir : -1;
	this.canvas = canvas;
	this.size = 5;
	this.speed = speed;
	this.xDir = xDir;
	this.yDir = yDir;
	this.x = (canvas.width/2)+this.size;
	this.y = (canvas.height/2)+this.size;
}
Enemy.prototype = new DefaultElement();
Enemy.prototype.draw = function(context) {
	context.beginPath();
	context.arc(this.x + this.size, this.y + this.size, this.size, 0, 2 * Math.PI);
	context.stroke();
};

Enemy.prototype.update = function(p) {
	if((this.x + this.size*2 >= this.canvas.width) || this.x <= 0) {this.xDir *= -1;}
	if((this.y + this.size*2 >= this.canvas.height) || this.y <= 0) {this.yDir *= -1;}
  	this.x += this.xDir * this.speed;
  	this.y += this.yDir * this.speed;
};