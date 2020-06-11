# Vanila JS App to edit images
Converts an image to a bitmap and draws onto a canvas (CanvasRenderingContext2D).

This will use ECMAScript's latest supported features (as of June 2020) and will not bundle/transpile/polyfill. 
The only libraries used are:
- [Browsersync](https://browsersync.io/) for a local dev server that auto reloads on file change
    - (JS modules are requested as CORS so couldn't use a locally loaded html file eg. `file://`)
- Jest for testing/TDD
- ESLint to keep code pretty and follow conventions

Hosted on github pages:
https://meselgroth.github.io/JavascriptImageEditor

Note: Only tested in Chrome.

## Todo
- Add Jest for testing and first tests: index-integration-spec, canvas-spec
- Change colour: Select a colour on canvas, select a new colour, change all of selected colour to new colour
    - Extend to allow for a range of colours
- Consider large images and add waits/notifications for
    - HTML <img> embed to complete
    - createImageBitmap to complete
- Refactor by extending HtmlElement
- Change to WebGL
- Add drag and drop feature