export default class Canvas {
    constructor(canvasHtmlElement) {
        this.canvasHtmlElement = canvasHtmlElement;
        this.ctx = this.canvasHtmlElement.getContext('2d');
    }
    async Add(imgElement) {
        this.imageBitmap = await createImageBitmap(imgElement);
        this.ctx.drawImage(this.imageBitmap, 0, 0);
    }
    ChangeColour() {
        let ctx = this.ctx;

        let imageData = ctx.getImageData(0, 0, 100, 100); // Get RGBA bytes
        for (let i = 0; i < imageData.data.length; i++) {
            if ((i+1) % 4 === 0) continue; // skip alpha values
            imageData.data[i] = imageData.data[i] >> 1; // left shift RGB values by 1 bit
        }
        ctx.putImageData(imageData, 0, 0);
    }
    GetColour(x, y) {
        let ctx = this.ctx;
        let data = ctx.getImageData(0, 0, 100, 100).data;

        let byteIndex = (x + (y-100) * 100) * 4;  // y starts at 100 for some reason
        console.log('RGBA:', data[byteIndex], data[byteIndex + 1], data[byteIndex + 2], data[byteIndex + 3]);
    }
}