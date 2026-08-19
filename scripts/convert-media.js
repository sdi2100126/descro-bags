const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const conversions = [
  { src: 'public/media/Amara/17920621088964762.jpg', dest: 'public/images/amara-main.webp' },
  { src: 'public/media/Amara/18060927964880291.jpg', dest: 'public/images/amara-2.webp' },
  { src: 'public/media/Sirena/18073043125687451.jpg', dest: 'public/images/sirena-main.webp' },
  { src: 'public/media/Sirena/17999792801774048.jpg', dest: 'public/images/sirena-2.webp' },
  { src: 'public/media/Mirae/17974794044916940.jpg', dest: 'public/images/mirae-main.webp' },
  { src: 'public/media/Mirae/18047501351367331.jpg', dest: 'public/images/mirae-2.webp' },
  { src: 'public/media/Mirae/18110079304528194.jpg', dest: 'public/images/mirae-3.webp' },
  { src: 'public/media/Divina/17860685130389237.jpg', dest: 'public/images/divina-main.webp' },
  { src: 'public/media/Divina/17902289913157436.jpg', dest: 'public/images/divina-2.webp' },
  { src: 'public/media/Cleo/18090981943597511.jpg', dest: 'public/images/cleo-main.webp' },
  { src: 'public/media/Cleo/18044347430612870.jpg', dest: 'public/images/cleo-2.webp' },
  { src: 'public/media/18138667927393209.jpg', dest: 'public/images/airpod-case-main.webp' }
];

async function convert() {
  console.log('Current directory:', process.cwd());
  for (const { src, dest } of conversions) {
    const absoluteSrc = path.resolve(__dirname, '..', src);
    const absoluteDest = path.resolve(__dirname, '..', dest);
    if (!fs.existsSync(absoluteSrc)) {
      console.error(`❌ Source file not found: ${absoluteSrc}`);
      continue;
    }
    try {
      await sharp(absoluteSrc)
        .resize({ width: 1600 })
        .webp({ quality: 80 })
        .toFile(absoluteDest);
      console.log(`✅ ${src} → ${dest}`);
    } catch (err) {
      console.error(`❌ Failed to convert ${src}:`, err.message);
    }
  }
}

convert();