;(function() {
    var Game = (function() {
        var bg
            , gui
            , game
            , WIDTH = 800
            , HEIGHT = 600
            , player
            , p1
            , p2
            , ball
            , point_pause = false

        var player = function() {
            this.x =  0
            this.y =  HEIGHT/2 - 30
            this.w =  10
            this.h =  60
            this.up = false
            this.down = false
            this.speed = 10
            this.points = 0
        }

        var ball = {
            x: WIDTH/2 - 5
          , y: HEIGHT/2 - 5
          , w: 10
          , h: 10
          , speedX: 3
          , speedY: 0
          , reset: function(player){
                this.x = WIDTH/2 - 5;
                this.y = HEIGHT/2 - 5;
                this.speedX = player == 2 ? -3 : 3;
                this.speedY = 0;
            }
        }

        var init = function() {
            var gic, gmc, guc

            bgc = document.getElementById('background')
            gmc = document.getElementById('game')
            gic = document.getElementById('gui')

            bgc.width = gmc.width = gic.width = WIDTH
            bgc.height = gmc.height = gic.height = HEIGHT

            bg = bgc.getContext('2d')
            game = gmc.getContext('2d')
            gui = gic.getContext('2d')

            p1 = new player()
            p1.x = 10

            p2 = new player()
            p2.x = WIDTH - p2.w - 10

            bindKeys()
            drawBG()
            
            //haxx to load the font on browser before writing it on the first time
            document.getElementById('wrapper').style.fontFamily = "Rationale";
            window.setTimeout(function(){
                updatePoints()
            }, 100)

            loop()
        }

        var loop = function() {
            update()
            draw()
            window.requestAnimationFrame(loop)
        }

        var drawBG = function(){
            bg.fillStyle = "rgb(255,255,255)"
            for (var i=0; i < 28; i++) {
                bg.fillRect (397, i*21 + 10, 6, 15)
            }
        }

        var bindKeys = function() {
            window.onkeydown = function(event){
                var event = event || window.event
                switch(event.keyCode){
                    case 87:
                        p1.up = true
                        break
                    case 83:
                        p1.down = true
                        break
                    case 38:
                        p2.up = true
                        break
                    case 40:
                        p2.down = true
                        break
                }
            }

            window.onkeyup = function(event){
                var event = event || window.event
                switch(event.keyCode){
                    case 87:
                        p1.up = false
                        break
                    case 83:
                        p1.down = false
                        break
                    case 38:
                        p2.up = false
                        break
                    case 40:
                        p2.down = false
                        break
                }
            }
        }

        var update = function() {
            //player 1 movement
            if(p1.up || p1.down){
                if(p1.up && !p1.down && p1.y >= 10 + p1.speed) p1.y -= p1.speed
                if(p1.down && !p1.up && p1.y <= HEIGHT - p1.h - p1.speed - 10) p1.y += p1.speed
            }
            //player 2 movement
            if(p2.up || p2.down){
                if(p2.up && !p2.down && p2.y >= 10 + p2.speed) p2.y -= p2.speed
                if(p2.down && !p2.up && p2.y <= HEIGHT - p2.h - p2.speed - 10) p2.y += p2.speed
            }
            //ball wall collision
            if(ball.y <= 10 || ball.y >= HEIGHT - 10 - ball.h) {
                ball.speedY = -ball.speedY
            }

            if(!point_pause){
                //ball movement
                ball.x += ball.speedX
                ball.y += ball.speedY

                //ball player 1 collision
                if(ball.speedX < 0 && (ball.x <= p1.x + p1.w) && (-ball.speedX > ball.w || ball.x >= p1.x)) {
                    if(ball.y + ball.h >= p1.y && ball.y <= p1.y + p1.h){
                        if (ball.x < (p1.x + p1.w)){
                            ball.x = p1.x + p1.w;
                        }
                        ball.speedX = -ball.speedX + 1
                        ball.speedY -= ((p1.y + p1.h/2) - (ball.y + ball.h/2)) / 5
                    }
                }

                //ball player 2 collision
                if(ball.speedX > 0 && (ball.x + ball.w >= p2.x) && (ball.speedX > ball.w || ball.x + ball.w <= p2.x + p2.w)) {
                    if(ball.y + ball.h >= p2.y && ball.y <= p2.y + p2.h){
                        if (ball.x > p2.x){
                            ball.x = p2.x;
                        }
                        ball.speedX = -ball.speedX - 1
                        ball.speedY -= ((p2.y + p2.h/2) - (ball.y + ball.h/2)) / 5
                    }
                }
            }

            //player 1 point
            if(ball.x >= WIDTH + ball.w){
                p1.points++
                ball.reset()
                updatePoints()
            }

            //player 2 point
            if(ball.x <= 0 - ball.w){
                p2.points++
                ball.reset(2)
                updatePoints()
            }
        }

        var draw = function() {
            game.clearRect(0, 0, WIDTH, HEIGHT)
            game.fillStyle = "rgb(255,255,255)"

            //drawing ball
            game.fillRect (ball.x, ball.y, ball.w, ball.h)

            //drawing player 1
            game.fillRect (p1.x, p1.y, p1.w, p1.h)

            //drawing player 2
            game.fillRect (p2.x, p2.y, p2.w, p2.h)
        }

        var updatePoints = function(scored){
            gui.clearRect(0, 0, WIDTH, HEIGHT)
            gui.fillStyle = "rgb(255,255,255)"
            gui.font = "bold 60px Rationale, sans-serif"

            gui.fillText(p1.points, WIDTH/2 - 120, 50);
            gui.fillText(p2.points, WIDTH/2 + 100, 50);

            if(scored){
                point_pause = true
                window.setTimeout(function(){
                    point_pause = false
                }, 2000)
            }
        }

        return {
            init: init
        }

    })()
    Game.init()
})()