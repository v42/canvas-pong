app = (->
    init = () ->
        console.log 'hello coffee module pattern'
    init : init
)()
app.init()