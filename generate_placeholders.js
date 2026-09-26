const fs = require('fs');
const path = require('path');

const files = [
  'hero-rice.jpg', 'rice-koshihikari.jpg', 'rice-kinumusume.jpg',
  'soil-cattle.jpg', 'soil-oyster-shell.jpg', 'ama-rice-field.jpg',
  'producer-group.jpg', 'gift-package.jpg'
];

const svgTemplate = (name) => `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#E5E0D6"/>
  <text x="50%" y="50%" font-family="sans-serif" font-size="24" fill="#888" text-anchor="middle" dominant-baseline="middle">${name} (Placeholder)</text>
</svg>`;

files.forEach(file => {
  const filePath = path.join(__dirname, 'public/images', file.replace('.jpg', '.svg'));
  fs.writeFileSync(filePath, svgTemplate(file));
});
