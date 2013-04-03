require 'flour'

task 'build:stylus', ->
	compile 'css/main.styl', 'css/main.css'

task 'bundle:js', ->
	bundle [
		'js/resources/raf.js',
		'js/game.js'
	], 'js/main.js'

task 'build', ->
    invoke 'build:stylus'
    invoke 'bundle:js'

task 'watch', ->
    invoke 'bundle:js'
    invoke 'build:stylus'

    watch 'css/*.styl', ->
    	invoke 'build:stylus'