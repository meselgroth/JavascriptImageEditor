import Canvas from './canvas.mjs';

let canvasHandler = new Canvas(document.getElementById('canvas'));
document.getElementById('button-colour').addEventListener('click', () => canvasHandler.Draw());
