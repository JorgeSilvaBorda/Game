var gui = require('nw.gui');

var win = gui.Window.get();
win.on('resize', function(){
	app.renderer.resize(window.innerWidth, window.innerHeight);
});
win.on('minimize', function(){
	app.renderer.resize(window.innerWidth, window.innerHeight);
});
win.on('maximize', function(){
	app.renderer.resize(window.innerWidth, window.innerHeight);
});