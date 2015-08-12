/**
 @constructor
 @abstract
 */
function DefaultElement() {
	this.x = 0;
	this.y = 0;
	this.size = 0;
	this.speed = 0;
}

DefaultElement.prototype.moveLeft = function() {
	this.x -= this.speed;
};

DefaultElement.prototype.moveRight = function() {
	this.x += this.speed;
};

DefaultElement.prototype.moveUp = function() {
	this.y -= this.speed;
};

DefaultElement.prototype.moveDown = function() {
	this.y += this.speed;
};

/**
 @abstract
 */
DefaultElement.prototype.draw = function(context) {
};

/**
 @abstract
 */
DefaultElement.prototype.update = function() {
};