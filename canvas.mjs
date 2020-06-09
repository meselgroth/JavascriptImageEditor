export default class Canvas {
    constructor(canvasHtmlElement) {
        this.canvasHtmlElement = canvasHtmlElement;
        this.ctx = this.canvasHtmlElement.getContext('2d');
    }
    Draw() {
        let ctx = this.ctx;
        ctx.fillStyle = 'green';
        ctx.fillRect(10, 10, 150, 100);
    }
}