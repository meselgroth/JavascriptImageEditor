export default class Canvas {
    constructor(canvasHtmlElement) {
        this.canvasHtmlElement = canvasHtmlElement;
        this.ctx = this.canvasHtmlElement.getContext('2d');
    }
    async Add(imgElement){
        let imageBitmap = await createImageBitmap(imgElement);
        this.ctx.drawImage(imageBitmap,0,0);
    }
    ChangeColour() {
        let ctx = this.ctx;
        ctx.fillStyle = 'green';
        ctx.fillRect(10, 10, 150, 100);
    }
}