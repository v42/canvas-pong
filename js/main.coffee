app = (->
    init = () ->
        bgc = document.getElementById 'background'
        gmc = document.getElementById 'player'
        gic = document.getElementById 'gui'

        bg = bgc.getContext '2d'
        game = gmc.getContext '2d'
        gui = gic.getContext '2d'
        return
    init : init
)()
app.init()