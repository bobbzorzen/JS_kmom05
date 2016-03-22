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

DefaultElement.prototype.intersects = function(obj) {
    r1 = {
        left: this.x,
        right: this.x + this.size*2,
        top: this.y,
        bottom: this.y + this.size*2
    };
    r2 = {
        left: obj.x,
        right: obj.x + obj.size*2,
        top: obj.y,
        bottom: obj.y + obj.size*2
    };

    return !(r2.left > r1.right || 
           r2.right < r1.left || 
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
};

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