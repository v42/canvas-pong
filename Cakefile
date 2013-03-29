require 'flour'

task 'build:coffee', ->
	compile 'js/main.coffee', 'js/main.js'

task 'build:stylus', ->
	compile 'css/main.styl', 'css/main.css'

task 'build', ->
    invoke 'build:coffee'
    invoke 'build:stylus'

task 'watch', ->
    invoke 'build:coffee'
    invoke 'build:stylus'

    watch 'css/*.styl', -> invoke 'build:stylus'
    watch 'js/*.coffee', -> invoke 'build:coffee'