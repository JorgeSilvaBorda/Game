# Game

Juego en desarrollo con la idea de utilizar el motor de juegos PIXI.js
Para poder aplicarlo, se debe descargar previamente NW.js (https://nwjs.io/) y copiar la carpeta Game dentro de nw.js descomprimido.

## package.json

El archivo package.json a generar en la raíz de nw.js debe contener lo siguiente:

```javascript
{
  "name": "Game",
  "description": "Juego en desarrollo de pruebas",
  "version": "0.0.1",
  "main": "Game/index.html",
  "repository": {
    "type": "git",
    "url": "https://github.com/JorgeSilvaBorda/Game.git"
  },
  "keywords": [],
  "author": "Jorge Silva Borda",
  "homepage": "https://github.com/JorgeSilvaBorda/Game",
  "window":{
    
    "frame": true,
    "min_width": 800,
    "min_height": 600
  }
}
```