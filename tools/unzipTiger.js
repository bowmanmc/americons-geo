const fs = require('fs');
const unzip = require('unzip2');

const TIGER = require('../tiger.config.js');
const IN_DIR = 'zip';
const OUT_DIR = 'shp';

TIGER.files.forEach(file => {
    let inPath = `${IN_DIR}/${file.filename}.zip`;
    console.log(`Unzipping ${inPath} to ${OUT_DIR}...`);
    fs.createReadStream(inPath).pipe(unzip.Extract({
        path: OUT_DIR
    }));
});
