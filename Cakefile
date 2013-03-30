require 'flour'

task 'build:coffee', ->
	compile 'js/main.coffee', 'js/main.js'

task 'build:stylus', ->
	compile 'css/main.styl', 'css/main.css'

task 'bundle:js', ->
	bundle [
		'js/resources/raf.js',
		'js/main.js'
	], 'js/main.js'

task 'build', ->
    invoke 'build:coffee'
    invoke 'build:stylus'
    invoke 'bundle:js'

task 'watch', ->
    invoke 'build:coffee'
    invoke 'bundle:js'
    invoke 'build:stylus'

    watch 'css/*.styl', ->
    	invoke 'build:stylus'
    watch 'js/*.coffee', ->
    	invoke 'build:coffee'