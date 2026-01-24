const fs = require('fs');
const path = require('path');

const productsTsPath = path.join('lib', 'products.ts');
const content = fs.readFileSync(productsTsPath, 'utf8');

const images = content.match(/image:\s*["'](.*?)["']/g);
const ids = content.match(/id:\s*["'](.*?)["']/g);

console.log('Total images:', images ? images.length : 0);
console.log('Total products (ids):', ids ? ids.length : 0);

if (images) {
    const uniqueImages = [...new Set(images.map(m => m.match(/image:\s*["'](.*?)["']/)[1]))];
    console.log('Unique image paths:', uniqueImages.length);
    fs.writeFileSync('product_images_list.txt', uniqueImages.join('\n'));
}
