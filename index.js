import Canvas from './canvas.js';
import Bitmap from './bitmap.js';

const imgElement = document.getElementById('img-bitmap');
const canvasElement = document.getElementById('canvas');
const canvas = new Canvas(canvasElement);
const rgbFromElements = {
    red: document.getElementById('text-from-red'),
    green: document.getElementById('text-from-green'),
    blue: document.getElementById('text-from-blue'),
    set redValue(v) { this.red.value = v; },
    set greenValue(v) { this.green.value = v; },
    set blueValue(v) { this.blue.value = v; },
};
canvasElement.onclick = e => canvas.GetColour(e.x, e.y, rgbFromElements);
document.getElementById('button-darken').onclick = () => {
    // right shift RGB values by 1 bit
    document.getElementById('text-to-red').value = rgbFromElements.red.value >> 1;
    document.getElementById('text-to-green').value = rgbFromElements.green.value >> 1;
    document.getElementById('text-to-blue').value = rgbFromElements.blue.value >> 1;
};

document.getElementById('button-add').onclick = () => canvas.Add(imgElement);
document.getElementById('button-colour').onclick = canvas.ChangeColour.bind(canvas);
document.getElementById('div-filename').textContent = `(${imgElement.getAttribute('src')})`;


const bitmap = new Bitmap(imgElement);
document.getElementById('button-bitmap').onclick = async () => {
    const newImg = await bitmap.CopyAndChangeColour();

    newImg.className = 'border';
    document.body.appendChild(newImg);
};
