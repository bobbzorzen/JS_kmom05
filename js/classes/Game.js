window.Game = (function(){
    var canvas, ctx, player, animationLoopId;
 
    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    var getRandomArbitrary = function (min, max) {
        return Math.random() * (max - min) + min;
    };

    var win = function () {
        if(Game.win) {
            var d = new Date();
            var winTime = d.getTime();
            var score = Math.floor(1000000/(winTime - Game.startTime));
            Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
            console.log('Your score was: ' + score);
            var popup = window.confirm('Your score was: ' + score + "! Do you wish to continue?");
            if(popup) {
                reset();
            } 
            else {
                Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
                window.cancelAnimationFrame(Game.animationLoopId);
                Game.animationLoopId = undefined;
            }
            
        }
        
    }

    var spawnEnemies = function () {
        var nrOfEnemies = 50;
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
        if(Game.enemy.length === 0) {
            Game.win = true;
            win();
        }
        for(var i = 0; i < Game.enemy.length; i++) {
            if(Game.player.intersects(Game.enemy[i])) {
                Game.enemy.remove(i--);
            }else {
                Game.enemy[i].update(Game.player);
            }
            
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
        document.getElementById(canvasId).appendChild(Game.canvas);
        Game.ctx = Game.canvas.getContext("2d");
        Game.player = new Player(Game.canvas);
        Game.enemy = spawnEnemies(); //new Enemy(Game.canvas, 10);
        var d = new Date();
        Game.startTime = d.getTime();
    };

    var reset = function () {
        Key.reset();
        Game.win = false;
        Game.player = new Player(Game.canvas);
        Game.enemy = spawnEnemies();
        var d = new Date();
        Game.startTime = d.getTime();
    };

    var gameLoop = function () {
        lastGameTick = Date.now();
        Game.animationLoopId = requestAnimFrame(gameLoop);
        update();
        render();
    };
 
    return {
        'init': init,
        'gameLoop': gameLoop
    };
})();