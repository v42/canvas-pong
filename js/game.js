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

		var player = function (){
			this.x =  0
		    this.y =  HEIGHT/2 - 30
            this.w =  10
            this.h =  60
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

		var update = function() {

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