import React, { useState, useRef, useEffect } from 'react';
import { FiMaximize2, FiX } from 'react-icons/fi';
import { initScrollAnimation, animateSectionReveal } from '../../animations/gsap';
import heroImg from '../../assets/images/hero-children.jpg';
import aboutImg from '../../assets/images/about-zion.jpg';
import sensoryImg from '../../assets/images/facility-sensory.jpg';
import classroomImg from '../../assets/images/facility-learning.jpg';
import founderImg from '../../assets/images/founder-portrait.jpg';
import './Gallery.css';

const galleryItems = [
  {
    id: 1,
    image: heroImg,
    caption: 'Interactive Group Learning & Early Preschool Initiative',
    category: 'Early Education',
    spanClass: 'col-span-2 row-span-2'
  },
  {
    id: 2,
    image: aboutImg,
    caption: 'One-on-One Developmental Intervention',
    category: 'Individual Support',
    spanClass: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    image: sensoryImg,
    caption: 'Sensory Integration Therapy Area & Calibrated Equipment',
    category: 'Therapy & Rehabilitation',
    spanClass: 'col-span-1 row-span-2'
  },
  {
    id: 4,
    image: classroomImg,
    caption: 'Inclusive Preschool Classroom Environment (Commenced April 2026)',
    category: 'Environment',
    spanClass: 'col-span-1 row-span-1'
  },
  {
    id: 5,
    image: founderImg,
    caption: 'Compassionate Staff & Dedicated Guidance at ZION',
    category: 'ZION Community',
    spanClass: 'col-span-1 row-span-1'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const cleanup = initScrollAnimation(galleryRef, () => {
      animateSectionReveal('.gallery-item-anim', galleryRef.current, { stagger: 0.1 });
    });
    return () => cleanup();
  }, []);

  // Lock body scroll when modal is open & add Escape key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="section section--alt" ref={galleryRef}>
      <div className="container">
        {/* Section Header */}
        <div className="gallery-header">
          <span className="section-label">OUR GALLERY</span>
          <h2 className="section-heading font-display">
            A Glimpse Into <span className="text-highlight-terracotta">Life at ZION</span>
          </h2>
          <p className="section-subheading">
            Moments of discovery, milestones achieved, and joyful inclusive learning in action at Ajabpur, Dehradun.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`gallery-item ${item.spanClass} gallery-item-anim`}
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedImage(item); }}
              aria-label={`View photo: ${item.caption}`}
            >
              <div className="gallery-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.caption} 
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-zoom-badge" aria-hidden="true">
                    <FiMaximize2 />
                  </div>
                  <span className="gallery-category">{item.category}</span>
                  <p className="gallery-caption">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)} role="dialog" aria-modal="true">
          <div className="lightbox-backdrop"></div>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close-btn" 
              onClick={() => setSelectedImage(null)}
              aria-label="Close photo preview"
            >
              <FiX size={24} />
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.caption} 
              className="lightbox-image"
            />
            <div className="lightbox-caption-box">
              <span className="lightbox-category">{selectedImage.category}</span>
              <p className="lightbox-caption-text">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
