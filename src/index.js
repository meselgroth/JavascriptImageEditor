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
const rgbToElements = {
    red: document.getElementById('text-to-red'),
    green: document.getElementById('text-to-green'),
    blue: document.getElementById('text-to-blue')
};
canvasElement.onclick = e => canvas.GetColour(e.x, e.y, rgbFromElements);

document.getElementById('button-darken').onclick = () => {
    // right shift RGB values by 1 bit
    rgbToElements.red.value = rgbFromElements.red.value >> 1;
    rgbToElements.green.value = rgbFromElements.green.value >> 1;
    rgbToElements.blue.value = rgbFromElements.blue.value >> 1;
};

document.getElementById('button-add').onclick = () => canvas.Add(imgElement);
document.getElementById('button-colour').onclick = () => canvas.ChangeColour(
    { r: rgbFromElements.red.value, g: rgbFromElements.green.value, b: rgbFromElements.blue.value },
    { r: rgbToElements.red.value, g: rgbToElements.green.value, b: rgbToElements.blue.value });
document.getElementById('div-filename').textContent = `(${imgElement.getAttribute('src')})`;


const bitmap = new Bitmap(imgElement);
document.getElementById('button-bitmap').onclick = async () => {
    const newImg = await bitmap.CopyAndChangeColour();

    newImg.className = 'border';
    document.body.appendChild(newImg);
};
