app = (->

    init = () ->
        bgc = document.getElementById 'background'
        gmc = document.getElementById 'game'
        gic = document.getElementById 'gui'

        bg = bgc.getContext '2d'
        game = gmc.getContext '2d'
        gui = gic.getContext '2d'

        gameLoop()

        return

    gameLoop = () ->
        console.log 'looping...'
        window.requestAnimationFrame gameLoop
        return

    init : init
)()
app.init()
