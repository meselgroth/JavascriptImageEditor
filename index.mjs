import Canvas from './canvas.mjs';

let imgElement = document.getElementById('img-bitmap');
let canvas = new Canvas(document.getElementById('canvas'));
document.getElementById('button-add').addEventListener('click', () => canvas.Add(imgElement));
document.getElementById('button-colour').addEventListener('click', () => canvas.Draw());
document.getElementById('div-filename').textContent = '(asdf.bmp)';