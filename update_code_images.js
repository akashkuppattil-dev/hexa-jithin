const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    path.join('lib', 'products.ts'),
    path.join('lib', 'products-cleaned.ts')
];

filesToUpdate.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Replace image: "/images/products/..." with image: "/placeholder.svg"
        // Handle both double and single quotes
        const newContent = content.replace(/image:\s*["']\/images\/products\/.*?["']/g, 'image: "/placeholder.svg"');

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent);
            console.log(`Updated ${filePath}`);
        } else {
            console.log(`No changes needed for ${filePath}`);
        }
    } else {
        console.log(`File not found: ${filePath}`);
    }
});
