import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import BrandShape from '../ui/BrandShape';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  const reviews = [
    {
      id: 'review-1',
      name: 'Dr. Neerul Pandita HIMS,SRHU',
      rating: 5,
      paragraphs: [
        'Hello friends, this is one of the best centre to provide your child holistic approach towards treatment.',
        'They have all the resources available which are required for growth of your child. The expert guidance of teachers will sway away your queries.',
        'I would personally recommend you all to avail the services provided by this centre.'
      ]
    },
    {
      id: 'review-2',
      name: 'Rachna Chauhan',
      rating: 5,
      paragraphs: [
        'Very Nice environment.',
        'All things are properly planned and systematic according to child need.',
        'Thanks to Kanika mam for OT session, in just few days my son has started following instructions and his eye contact also improved, I believe on her other behaviours also will be settle down with her guidance and support. I also want to thank Sarita mam she has improved my son speech now he is giving answer of family members name also he has started functional language. I have trust on all the therapist they will help my child and he will improve.'
      ]
    },
    {
      id: 'review-3',
      name: 'Mamta Rawat',
      rating: 5,
      paragraphs: [
        'Divyank has really shown great progress in speech since I joined zion within few months.',
        'He started speaking in sentences and can communicate well. All thanks to Nitika ma\'am for the guidance and efforts and also to the team. I had a good experience here.',
        'Thankyou zion for such helping us.'
      ]
    },
    {
      id: 'review-4',
      name: 'Vinita giri giri',
      rating: 5,
      paragraphs: [
        'I have found a new hope after join to zion therapy center. I started my son speech therapy here 2 months ago and within a short span of time my son has improved alot. Thank to anjali ma\'am and special thanks to sapna ma\'am for understanding my son issues and work on that. This is the best therapy center in dehradun if you are searching a therapy for your children you can go ahead without a single thought. Once again thanks anjali ma\'am and her dedicating staff.'
      ]
    },
    {
      id: 'review-5',
      name: 'kanchan dimri',
      rating: 5,
      paragraphs: [
        'I have seen lots of improvement in my child thanks to Nitika ma\'am for ur support had great experience in zion speech and hearing clinic.'
      ]
    },
    {
      id: 'review-6',
      name: 'Neha bisht',
      rating: 5,
      paragraphs: [
        'Highly recommend Zion Speech Therapy Centre, Dehradun.',
        'The team is dedicated, knowledgeable, and truly caring toward children. They make therapy sessions engaging and comfortable. Special thanks to Anjali Mam, Neha mam and Rajat Sir. Their approach feels thoughtful and supportive, and the overall environment is warm and welcoming. A very good place for speech and developmental support.'
      ]
    }
  ];

  return (
    <SectionWrapper id="testimonials" background="azure" padding="default">
      {/* Decorative Organic Accents */}
      <BrandShape type="blob-lime" size="xl" style={{ top: -100, right: -100, opacity: 0.3 }} className="animate-float" />
      <BrandShape type="blob-green" size="lg" style={{ bottom: -80, left: -80, opacity: 0.35 }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-lemon-lime)" style={{ top: 40, left: '10%' }} className="animate-spin-slow" />
      <BrandShape type="sparkle" color="var(--color-white)" style={{ bottom: 50, right: '8%' }} />

      <Container>
        <SectionHeading
          eyebrow="Parent &amp; Family Voices"
          title="TESTIMONIALS"
          tagline="Celebrating Every Milestone Along the Way"
          description="Read genuine experiences and Google reviews shared by families whose children learn, grow, and flourish with ZION."
          align="center"
        />

        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div key={review.id} className="testimonial-card hover-lift">
              <div className="testimonial-card-top">
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="star-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#F59E0B"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="testimonial-quote-mark" aria-hidden="true">“</span>
              </div>

              <div className="testimonial-review-body">
                {review.paragraphs.map((p, idx) => (
                  <p key={idx} className="testimonial-paragraph">
                    {p}
                  </p>
                ))}
              </div>

              <div className="testimonial-footer-meta">
                <div className="reviewer-meta-group">
                  <h4 className="reviewer-name">{review.name}</h4>
                  <span className="reviewer-source">Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
