import Canvas from './canvas.js';

describe('Canvas', () => {
    beforeEach(() => {

    });
    it('Change colour should ', () => {
        let element = {};
        let newImageData = {};
        element.getContext = () => ({
            getImageData: () => ({ data: [1, 2, 3] }),
            putImageData: (imageData) => { newImageData = imageData; }
        });
        let canvas = new Canvas(element);

        canvas.ChangeColour({ r: 1, g: 2, b: 3 }, { r: 4, g: 5, b: 6 });

        expect(newImageData.data).toEqual([4, 5, 6]);
    });
});