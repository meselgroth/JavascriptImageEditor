import Canvas from './canvas.mjs';

let imgElement = document.getElementById('img-bitmap');
let canvas = new Canvas(document.getElementById('canvas'));
document.getElementById('button-add').onclick = () => canvas.Add(imgElement);
document.getElementById('button-colour').onclick = canvas.ChangeColour.bind(canvas);
document.getElementById('div-filename').textContent = '(asdf.bmp)';