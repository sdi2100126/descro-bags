const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '..', 'public', 'images');
const backupDir = path.join(__dirname, '..', 'public', 'images-original');

// Ensure backup directory exists
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

// Read all files in imageDir
const files = fs.readdirSync(imageDir);

const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

console.log(`Found ${pngFiles.length} PNG images to convert.`);

let completed = 0;

for (const file of pngFiles) {
  const inputPath = path.join(imageDir, file);
  const outputPath = path.join(imageDir, path.basename(file, '.png') + '.webp');

  // Copy original to backup if not already backed up
  const backupPath = path.join(backupDir, file);
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(inputPath, backupPath);
    console.log(`Backed up ${file} to ${backupPath}`);
  }

  // Convert to webp with quality 80
  sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => {
      console.log(`Converted ${file} to webp`);
      completed++;
      if (completed === pngFiles.length) {
        console.log('Image conversion complete.');
      }
    })
    .catch(err => {
      console.error(`Error converting ${file}:`, err);
    });
}