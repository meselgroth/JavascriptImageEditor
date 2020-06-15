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
            if (i !== 0 && i % 4 === 0) continue; // skip alpha values
            imageData.data[i] = imageData.data[i]>>1; // left shift RGB values by 1 bit
        }
        ctx.putImageData(imageData, 0, 0);
    }
}