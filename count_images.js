const fs = require('fs');
const path = require('path');

const productsTsPath = path.join('f:', 'Free Lancing', 'hexamech', 'hexa-jithin', 'lib', 'products.ts');
const content = fs.readFileSync(productsTsPath, 'utf8');

const matches = content.match(/image:\s*["'](.*?)["']/g);
console.log('Total images in products.ts:', matches ? matches.length : 0);
if (matches) {
    matches.forEach((m, i) => {
        if (i < 5 || i > matches.length - 6) {
            console.log(m);
        }
    });
}
