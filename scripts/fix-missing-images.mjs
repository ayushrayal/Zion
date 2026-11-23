import fs from 'fs';
import path from 'path';
import heicConvert from 'heic-convert';

async function checkAndFix(file) {
  console.log(`\n--- Checking ${file} ---`);
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  let missingCount = 0;
  for (const line of lines) {
    const match = line.match(/import\s+.*?\s+from\s+['"](.*?)['"]/);
    if (match) {
      const relPath = match[1];
      if (!relPath.startsWith('.')) continue;
      const fullPath = path.resolve(path.dirname(file), relPath);
      if (!fs.existsSync(fullPath)) {
        missingCount++;
        console.log('MISSING:', relPath);
        const parsed = path.parse(fullPath);
        const heicPath = path.join(parsed.dir, parsed.name + '.HEIC');
        const heicPathLower = path.join(parsed.dir, parsed.name + '.heic');
        const targetHeic = fs.existsSync(heicPath) ? heicPath : (fs.existsSync(heicPathLower) ? heicPathLower : null);
        
        if (targetHeic) {
          console.log('Converting HEIC:', targetHeic, '->', fullPath);
          const buf = fs.readFileSync(targetHeic);
          const converted = await heicConvert({ buffer: buf, format: 'JPEG', quality: 0.92 });
          fs.writeFileSync(fullPath, Buffer.from(converted));
          console.log('Successfully created:', fullPath);
        } else {
          const files = fs.readdirSync(parsed.dir);
          const found = files.find(f => f.toLowerCase() === parsed.base.toLowerCase());
          if (found) {
            console.log('Found with different case:', found);
            fs.copyFileSync(path.join(parsed.dir, found), fullPath);
            console.log('Copied to:', fullPath);
          } else {
            console.error('ERROR: NOT FOUND AT ALL:', parsed.base);
          }
        }
      }
    }
  }
  console.log(`--- Finished ${file}: ${missingCount} missing fixed ---`);
}

async function run() {
  await checkAndFix('src/data/websiteImages.js');
  await checkAndFix('src/data/slideshowData.js');
  await checkAndFix('src/data/teamData.js');
}

run().catch(console.error);
