import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import BrandShape from '../ui/BrandShape';
import './GallerySection.css';

export default function GallerySection() {
  const galleryItems = [
    {
      id: 'item-1',
      aspectRatio: '16/9',
      label: 'Early Intervention Activities',
      sublabel: 'Play-based communication and sensory exploration',
      badge: 'Therapy & Play',
      theme: 'azure',
      className: 'col-span-2'
    },
    {
      id: 'item-2',
      aspectRatio: '3/4',
      label: 'Individualised Support',
      sublabel: 'One-on-one speech and audiology guidance',
      badge: 'Individual Care',
      theme: 'green',
      className: 'row-span-2'
    },
    {
      id: 'item-3',
      aspectRatio: '4/3',
      label: 'Inclusive Preschool Learning',
      sublabel: 'ZION Academy collaborative classroom environment',
      badge: 'Early Learning',
      theme: 'lime',
      className: ''
    },
    {
      id: 'item-4',
      aspectRatio: '1/1',
      label: 'Sensory Motor Development',
      sublabel: 'Fine and gross motor coordination exercises',
      badge: 'Motor Skills',
      theme: 'warm',
      className: ''
    },
    {
      id: 'item-5',
      aspectRatio: '16/9',
      label: 'Family Partnership & Workshops',
      sublabel: 'Parents and professionals working collaboratively',
      badge: 'Parent Training',
      theme: 'azure',
      className: 'col-span-2'
    }
  ];

  return (
    <SectionWrapper id="gallery" background="azure" padding="default">
      {/* Decorative Organic Accents */}
      <BrandShape type="blob-lime" size="lg" style={{ top: -60, right: -60, opacity: 0.35 }} className="animate-float" />
      <BrandShape type="blob-green" size="md" style={{ bottom: -40, left: -40, opacity: 0.3 }} className="animate-float-delayed" />
      <BrandShape type="dots" style={{ top: 40, left: '5%', opacity: 0.45 }} />

      <Container>
        <SectionHeading
          eyebrow="Moments of Growth"
          title="OUR GALLERY"
          tagline="A Glimpse Into Life at ZION"
          description="Take a look at our learning spaces, activities, and the moments that make every milestone matter."
          align="center"
        />

        <div className="gallery-masonry-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className={`gallery-item-wrapper hover-lift ${item.className}`}>
              <ImagePlaceholder
                aspectRatio={item.aspectRatio}
                label={item.label}
                sublabel={item.sublabel}
                badge={item.badge}
                theme={item.theme}
              />
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
