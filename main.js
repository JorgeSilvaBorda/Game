var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var OPCIONES = {
	width: WIDTH,
	height: HEIGHT,
	antialias: true,
	transparent: false,
	resolution: 1
};

var app = new PIXI.Application(OPCIONES);
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;


document.body.appendChild(app.view);