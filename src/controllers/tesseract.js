import tesseract from 'node-tesseract';
import path from 'path';
import buffer from 'buffer';
import fs from 'fs';

export async function recognize(req, res) {
    const { base64 } = req.body;
    try {
        console.log(`entrou`);
        decode_base64(base64, 'carPlate.jpg', res);
    } catch (err) {
        res.status(500).send({ message: "Error." });
    }
}

async function decode_base64(base64str, filename, res) {

    var buf = Buffer.from(base64str, 'base64');

    fs.writeFile(path.join('./src/imgs/', filename), buf, function (error) {
        if (error) {
            throw error;
        } else {
            console.log('File created from base64 string!');
            tesseractRecognizer(res);
        }
    });

}

async function tesseractRecognizer(res) {
    console.log(`reconhecendo`);
    const imageToOcr = path.join(__dirname, '../imgs/carPlate.jpg');
    console.log(imageToOcr);

    tesseract.process(imageToOcr, function (err, text) {
        if (err) {
            res.status(500).send({ message: err });
        } else {
            res.status(200).send(text);
        }
    });
}


