import fs from 'fs';
import path from 'path';

const productsPath = 'f:/Free Lancing/HEXA-1/hehehe_hexa/lib/products.ts';
const productsDir = 'f:/Free Lancing/HEXA-1/hehehe_hexa/public/images/products';

const content = fs.readFileSync(productsPath, 'utf-8');

// Match image: "/images/products/..."
const imageMatches = content.matchAll(/image:\s*"\/images\/products\/([^"]+)"/g);
const productNames = content.matchAll(/name:\s*"([^"]+)"/g);

const names = [...productNames].map(m => m[1]);
const images = [...imageMatches].map(m => m[1]);

const missing = [];
const existing = fs.readdirSync(productsDir);

images.forEach((img, index) => {
    if (!existing.includes(img)) {
        missing.push({ name: names[index], image: img });
    }
});

console.log(JSON.stringify(missing, null, 2));
