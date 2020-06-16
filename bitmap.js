export default class Bitmap{
    constructor(imgHtmlElement){
        this.imgHtmlElement = imgHtmlElement;
    }
    async CopyAndChangeColour(){
        let imgData = await fetch(this.imgHtmlElement.src);
        let blob = await imgData.blob(); // Read response ReadableStream to completion. This could be improved by modifying bytes as stream is read.
        let arrayBuffer = await blob.arrayBuffer(); // get binary data

        // modify bitmap bytes

        await this.AddImageElementWithCanvas(blob);
        await this.AddImageElementFromBytes(arrayBuffer);
    }

    async AddImageElementWithCanvas(blob) {
        let newImgData = await createImageBitmap(blob);
        const newCanvasElement = document.createElement('canvas');
        newCanvasElement.height = this.imgHtmlElement.height;
        newCanvasElement.width = this.imgHtmlElement.width;
        newCanvasElement.getContext('2d').drawImage(newImgData, 0, 0);
        let newImg = new Image();
        newImg.src = newCanvasElement.toDataURL();
        newImg.className = 'border';
        document.body.appendChild(newImg);
    }

    async AddImageElementFromBytes(arrayBuffer) {
        let uInt8Array = new Uint8Array(arrayBuffer);  // Get 8bit bytes (1 byte per element)
        let utf8ByteString = '';
        for (let i = 0; i < uInt8Array.length; i++) {
            utf8ByteString += String.fromCharCode(uInt8Array[i]);  // get UTF-16 encoding (same as UTF-8 for 8bit bytes and Ascii for latin letters)
        }
        let b64 = btoa(utf8ByteString);  // Encode ascii string to base64 string
        let newImg = new Image();
        newImg.src = `data:image/bmp;base64,${b64}`;
        newImg.className = 'border';
        document.body.appendChild(newImg);
    }
}