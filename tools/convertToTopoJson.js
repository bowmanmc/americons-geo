const fs = require('fs');
const glob = require('glob');
const mkdirp = require('mkdirp');
const topojson = require('topojson')

const IN_DIR = 'json';
const OUT_DIR = 'json';


const matcher = 'json/**.json';

glob(matcher, function(err, files) {
    files.forEach(file => {

        let geoJson = JSON.parse(fs.readFileSync(file, 'utf8'));
        console.log('Number of features: ' + geoJson.features.length);
        let topo = topojson.topology(geoJson, 1e5);
        let simplified = topojson.simplify(topo);

        let outFile = file.replace(/\.json$/, '.topo.json');
        console.log('writing file: ' + outFile);
        fs.writeFileSync(outFile, JSON.stringify(simplified));
    });
});
