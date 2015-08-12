window.Game = (function(){
    var canvas, ctx, player;
 
    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    var getRandomArbitrary = function (min, max) {
        return Math.random() * (max - min) + min;
    };

    var spawnEnemies = function () {
        var nrOfEnemies = 100;
        var enemies = [];
        var speed, xDir, yDir;
        for(var i = 0; i < nrOfEnemies; i++) {
            speed = getRandomArbitrary(0.5, 2.5);
            xDir = getRandomArbitrary(-1.5, 1.5);
            yDir = getRandomArbitrary(-1.5, 1.5);
            enemies.push(new Enemy(Game.canvas, speed, xDir, yDir));
        }
        return enemies;
    };

    var update = function () {
        Game.player.update();
        for(var i = 0; i < Game.enemy.length; i++) {
            Game.enemy[i].update();
        }
    };

    var render = function () {
        Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
        for(var i = 0; i < Game.enemy.length; i++) {
            Game.enemy[i].draw(Game.ctx);
        }
        Game.player.draw(Game.ctx);
    };

    var init = function (canvasId) {
        Game.canvas = document.createElement("canvas");
        Game.canvas.width = 512;
        Game.canvas.height = 480;
        document.body.appendChild(Game.canvas);
        Game.ctx = Game.canvas.getContext("2d");
        Game.player = new Player(Game.canvas);
        Game.enemy = spawnEnemies(); //new Enemy(Game.canvas, 10);
    };

    var gameLoop = function () {
        lastGameTick = Date.now();
        requestAnimFrame(gameLoop);
        update();
        render();
    };
 
    return {
        'init': init,
        'gameLoop': gameLoop
    };
})();