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
            x: 0
          , y: 0
          , w: 10
          , h: 10
          , speedX: 10
          , speedY: 10 
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
			loop()
		}

		var loop = function() {
			update()
			draw()
			window.requestAnimationFrame(loop)
		}

		var drawBG = function(){
			bg.fillStyle = "rgb(255,255,255)"
			for (var i=0; i < 31; i++) {
				bg.fillRect (395, i*20 + 5, 5, 15)
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
            if(p1.up || p1.down){
                if(p1.up && !p1.down && p1.y >= 10 + p1.speed) p1.y -= p1.speed
                if(p1.down && !p1.up && p1.y <= HEIGHT - p1.h - p1.speed - 10) p1.y += p1.speed
            }
            if(p2.up || p2.down){
                if(p2.up && !p2.down && p2.y >= 10 + p2.speed) p2.y -= p2.speed
                if(p2.down && !p2.up && p2.y <= HEIGHT - p2.h - p2.speed - 10) p2.y += p2.speed
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

		return {
			init: init
		}

	})()
	Game.init()
})()