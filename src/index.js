import tesseract from 'node-tesseract';
import path from 'path';

const imageToOcr = path.join(__dirname, '\\teste.jpg')
//const imageToOcr = path.join(__dirname, '\\img.png')

tesseract.process(imageToOcr, function (err, text) {
    if (err) {
        console.log(err);
    } else {
        console.log(text);
    }
});




