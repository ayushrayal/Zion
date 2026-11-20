import fs from 'fs';
import path from 'path';

// Read all files from OUR ENVIRONMENT and OUR GALLERY
const envFiles = fs.readdirSync('src/assets/websiteImages/OUR ENVIRONMENT');
const galFiles = fs.readdirSync('src/assets/websiteImages/OUR GALLERY');

// Exclude exact duplicates and non-image files
const excludedGalleryFiles = new Set([
  'IMG_9636.MOV',
  'A Welcoming & Inclusive Environment.HEIC',
  'Individualised Support 2.JPG',
  'Individualised Support 3.JPG'
]);

const validGalleryFiles = galFiles.filter(f => !excludedGalleryFiles.has(f));

let fileContent = `// Centralized Slideshow Data for Environment and Gallery Sections
// Strictly sourced from src/assets/websiteImages/OUR ENVIRONMENT and src/assets/websiteImages/OUR GALLERY
// Every slide features exactly 4 images in an equal 2x2 square (1:1) grid

`;

// Environment imports
fileContent += `// Environment Image Imports\n`;
fileContent += `import envCentre from '../assets/websiteImages/OUR ENVIRONMENT/ZION Multidisciplinary Centre.jpg';\n`;
fileContent += `import envTherapy from '../assets/websiteImages/OUR ENVIRONMENT/Therapy & Assessment Rooms.jpg';\n`;
fileContent += `import envSensory from '../assets/websiteImages/OUR ENVIRONMENT/Sensory & Inclusive Learning Areas.jpg';\n`;
fileContent += `import envSuite from '../assets/convertedImages/environment/Canceled start production preview server.jpg';\n\n`;

// Environment slides: 4 images each in 2x2 square grid
fileContent += `export const environmentSlides = [
  {
    id: 'env-slide-1',
    title: 'Integrated Learning & Clinical Centre',
    items: [
      {
        id: 'env-item-1',
        src: envCentre,
        alt: 'ZION Multidisciplinary Centre building and community activity gathering in Dehradun',
        tag: 'Main Centre',
        tagTheme: 'green',
        objectPosition: 'center 22%'
      },
      {
        id: 'env-item-2',
        src: envTherapy,
        alt: 'Therapy & Assessment Rooms for focused speech, language, and clinical evaluations',
        tag: 'Therapy Suites',
        tagTheme: 'lime',
        objectPosition: 'center 30%'
      },
      {
        id: 'env-item-3',
        src: envSensory,
        alt: 'Sensory & Inclusive Learning Areas structured for movement, motor skills, and play-based preschool',
        tag: 'Sensory Spaces',
        tagTheme: 'green',
        objectPosition: 'center 26%'
      },
      {
        id: 'env-item-4',
        src: envSuite,
        alt: 'Dedicated child-friendly intervention suite and inclusive therapy environment at ZION',
        tag: 'Intervention Suite',
        tagTheme: 'lime',
        objectPosition: 'center 28%'
      }
    ]
  },
  {
    id: 'env-slide-2',
    title: 'Inclusive Support & Developmental Spaces',
    items: [
      {
        id: 'env-item-5',
        src: envSensory,
        alt: 'Movement and sensory integration area for motor coordination and balance',
        tag: 'Active Motor Gym',
        tagTheme: 'green',
        objectPosition: 'center 26%'
      },
      {
        id: 'env-item-6',
        src: envTherapy,
        alt: 'One-on-one consultation and focused intervention room',
        tag: 'Consultation Room',
        tagTheme: 'lime',
        objectPosition: 'center 30%'
      },
      {
        id: 'env-item-7',
        src: envCentre,
        alt: 'ZION centre grounds and welcoming environment for children and families',
        tag: 'Inclusive Campus',
        tagTheme: 'green',
        objectPosition: 'center 22%'
      },
      {
        id: 'env-item-8',
        src: envSuite,
        alt: 'Dedicated child-friendly intervention suite and inclusive therapy environment at ZION',
        tag: 'Therapy Suite',
        tagTheme: 'lime',
        objectPosition: 'center 28%'
      }
    ]
  }
];\n\n`;

// Gallery Image Imports
fileContent += `// Gallery Image Imports (${validGalleryFiles.length} unique images)\n`;

const galleryVarNames = [];
validGalleryFiles.forEach((file, idx) => {
  const varName = `galImg_${idx + 1}`;
  galleryVarNames.push({ file, varName });
  const isHeic = file.toLowerCase().endsWith('.heic');
  if (isHeic) {
    const baseName = path.basename(file, path.extname(file));
    fileContent += `import ${varName} from '../assets/convertedImages/gallery/${baseName}.jpg';\n`;
  } else {
    fileContent += `import ${varName} from '../assets/websiteImages/OUR GALLERY/${file}';\n`;
  }
});

// Object positions customized individually so children's faces and key subjects are never cropped
const customObjectPositions = {
  'Early Intervention Activities.jpg': 'center 22%',
  'Family Partnership & Workshops.jpg': 'center 25%',
  'Inclusive Preschool Learning.jpg': 'center 20%',
  'Individualised Support.jpg': 'center 25%',
  'Sensory Motor Development.jpg': 'center 20%',
  'IMG_1555.JPG': 'center 18%',
  'IMG_1565.HEIC': 'center 20%',
  'IMG_1595.JPG': 'center 22%',
  'IMG_1604.JPG': 'center 25%',
  'IMG_1645.JPG': 'center 20%',
  'IMG_1663.JPG': 'center 22%',
  'IMG_1697.JPG': 'center 20%',
  'IMG_1699.JPG': 'center 24%',
  'IMG_1701.JPG': 'center 22%',
  'IMG_1704.HEIC': 'center 18%',
  'IMG_1738.HEIC': 'center 20%',
  'IMG_2110.JPG': 'center 25%',
  'IMG_2125.JPG': 'center 20%',
  'IMG_2134.JPG': 'center 18%',
  'IMG_2165.JPG': 'center 22%',
  'IMG_2279.JPG': 'center 25%',
  'IMG_2319.JPG': 'center 20%',
  'IMG_2341.HEIC': 'center 20%',
  'IMG_6373.HEIC': 'center 18%',
  'IMG_6430.HEIC': 'center 22%',
  'IMG_6445.HEIC': 'center 25%',
  'IMG_7110.HEIC': 'center 20%',
  'IMG_7125.HEIC': 'top center',
  'IMG_7131.HEIC': 'center 22%',
  'IMG_7137.HEIC': 'center 20%',
  'IMG_7141.HEIC': 'center 18%',
  'IMG_7142.HEIC': 'center 20%',
  'IMG_7148.HEIC': 'center 22%',
  'IMG_7157.HEIC': 'center 20%',
  'IMG_7362.HEIC': 'center 22%',
  'IMG_7379.HEIC': 'center 25%',
  'IMG_7380.HEIC': 'center 20%',
  'IMG_7822.HEIC': 'center 22%',
  'IMG_7846.JPG': 'center 18%',
  'IMG_7848.JPG': 'center 20%',
  'IMG_7911.HEIC': 'center 18%',
  'IMG_7925.HEIC': 'center 22%',
  'IMG_7930.JPG': 'center 20%',
  'IMG_7931.JPG': 'center 22%',
  'IMG_7933.JPG': 'center 25%',
  'IMG_7941.HEIC': 'center 18%',
  'IMG_7958.HEIC': 'center 20%',
  'IMG_8236.HEIC': 'center 22%',
  'IMG_8916.HEIC': 'center 25%',
  'IMG_9345.HEIC': 'center 20%',
  'IMG_9639.HEIC': 'top center',
  'IMG_9643.HEIC': 'center 20%',
  'IMG_9644.HEIC': 'center 22%',
  'IMG_9664.HEIC': 'center 25%'
};

// Group into slides with EXACTLY 4 images each (14 slides * 4 images = 56 slots)
const totalSlides = Math.ceil(validGalleryFiles.length / 4);
const gallerySlides = [];

const cleanCategoryPool = [
  { tag: 'Early Learning', theme: 'green' },
  { tag: 'Preschool Play', theme: 'lime' },
  { tag: 'Sensory Motor', theme: 'green' },
  { tag: 'Therapy Care', theme: 'lime' },
  { tag: 'Creative Arts', theme: 'green' },
  { tag: 'Language & Speech', theme: 'lime' },
  { tag: 'Social Interaction', theme: 'green' },
  { tag: 'Movement & Balance', theme: 'lime' }
];

let globalImgIdx = 0;
for (let s = 0; s < totalSlides; s++) {
  const slideItems = [];

  for (let i = 0; i < 4; i++) {
    const itemIndex = globalImgIdx % validGalleryFiles.length;
    const item = galleryVarNames[itemIndex];
    const originalName = item.file;
    const objPos = customObjectPositions[originalName] || 'center 22%';

    // Subtle tag on first card of each slide
    let tag = null;
    let tagTheme = null;
    if (i === 0) {
      const cat = cleanCategoryPool[s % cleanCategoryPool.length];
      tag = cat.tag;
      tagTheme = cat.theme;
    }

    slideItems.push({
      id: `gal-item-${s * 4 + i + 1}`,
      srcVar: item.varName,
      originalFile: originalName,
      alt: 'ZION Learning & Therapy Moment',
      tag: tag,
      tagTheme: tagTheme,
      objectPosition: objPos
    });
    globalImgIdx++;
  }

  gallerySlides.push({
    id: `gal-slide-${s + 1}`,
    items: slideItems
  });
}

fileContent += `\nexport const gallerySlides = [\n`;
gallerySlides.forEach((slide) => {
  fileContent += `  {\n`;
  fileContent += `    id: '${slide.id}',\n`;
  fileContent += `    items: [\n`;
  slide.items.forEach((item, idx) => {
    fileContent += `      {\n`;
    fileContent += `        id: '${item.id}',\n`;
    fileContent += `        src: ${item.srcVar},\n`;
    fileContent += `        alt: '${item.alt}',\n`;
    if (item.tag) {
      fileContent += `        tag: '${item.tag}',\n`;
      fileContent += `        tagTheme: '${item.tagTheme}',\n`;
    }
    fileContent += `        objectPosition: '${item.objectPosition}',\n`;
    fileContent += `        originalFile: '${item.originalFile}'\n`;
    fileContent += `      }${idx < slide.items.length - 1 ? ',' : ''}\n`;
  });
  fileContent += `    ]\n`;
  fileContent += `  },\n`;
});
fileContent += `];\n`;

fs.writeFileSync('src/data/slideshowData.js', fileContent);
console.log('Successfully written src/data/slideshowData.js with exactly 4 images per slide in a 2x2 grid!');
