import fs from 'fs';
import path from 'path';

const productsPath = 'f:/Free Lancing/HEXA-1/hehehe_hexa/lib/products.ts';
const productsDir = 'f:/Free Lancing/HEXA-1/hehehe_hexa/public/images/products';

const content = fs.readFileSync(productsPath, 'utf-8');

// Simple regex to find blocks of products
const productBlocks = content.split('  {').slice(1);

const missing = [];
const existingFiles = fs.readdirSync(productsDir);

productBlocks.forEach(block => {
    const nameMatch = block.match(/name:\s*"([^"]+)"/);
    const imageMatch = block.match(/image:\s*"\/images\/products\/([^"]+)"/);

    if (nameMatch && imageMatch) {
        const name = nameMatch[1];
        const image = imageMatch[1];

        if (!existingFiles.includes(image)) {
            missing.push({ name, image });
        }
    }
});

console.log(JSON.stringify(missing, null, 2));
