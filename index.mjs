import Canvas from './canvas.mjs';
import Bitmap from './bitmap.js';

let imgElement = document.getElementById('img-bitmap');
const canvasElement = document.getElementById('canvas');
let canvas = new Canvas(canvasElement);

canvasElement.onmousemove = e => canvas.GetColour(e.x, e.y);
document.getElementById('button-add').onclick = () => canvas.Add(imgElement);
document.getElementById('button-colour').onclick = canvas.ChangeColour.bind(canvas);
document.getElementById('div-filename').textContent = `(${imgElement.getAttribute('src')})`;

let bitmap = new Bitmap(imgElement);
document.getElementById('button-bitmap').onclick = () => bitmap.CopyAndChangeColour();
