// Centralized Website Images Configuration
// Section-wise image mapping for ZION CARE
// Strictly imports local verified photography from src/assets/websiteImages/

// 1. Main Hero Section
import heroMilestone from '../assets/websiteImages/Main Hero Section/Where Every Milestone Matters.jpg';

// 2. About Zion
import aboutZionTeam from '../assets/websiteImages/About Zion/About Zion.jpg';

// 3. Our Environment
import envCentre from '../assets/websiteImages/OUR ENVIRONMENT/ZION Multidisciplinary Centre.jpg';
import envTherapyRooms from '../assets/websiteImages/OUR ENVIRONMENT/Therapy & Assessment Rooms.jpg';
import envSensoryAreas from '../assets/websiteImages/OUR ENVIRONMENT/Sensory & Inclusive Learning Areas.jpg';

// 4. Our Gallery
import galleryEarlyIntervention from '../assets/websiteImages/OUR GALLERY/Early Intervention Activities.jpg';
import galleryIndividualSupport from '../assets/websiteImages/OUR GALLERY/Individualised Support.jpg';
import galleryInclusivePreschool from '../assets/websiteImages/OUR GALLERY/Inclusive Preschool Learning.jpg';
import gallerySensoryMotor from '../assets/websiteImages/OUR GALLERY/Sensory Motor Development.jpg';
import galleryFamilyPartnership from '../assets/websiteImages/OUR GALLERY/Family Partnership & Workshops.jpg';

// 5. School Hero
import schoolHeroClassroom from '../assets/websiteImages/School hero/ZION Academy Inclusive Classroom.jpg';

// 6. Our Learning Environment & Team
import schoolLearningEnvClassroom from '../assets/websiteImages/OUR LEARNING ENVIRONMENT & TEAM/Inclusive Preschool Classroom.jpg';

// 7. Our Preschool Gallery
import preschoolCircleTime from '../assets/websiteImages/OUR PRESCHOOL GALLERY/Inclusive Circle Time & Storytelling Hub.jpg';
import preschoolCreativeArt from '../assets/websiteImages/OUR PRESCHOOL GALLERY/Creative Art & Sensory Texture Play.jpg';
import preschoolGrossMotor from '../assets/websiteImages/OUR PRESCHOOL GALLERY/Indoor Gross Motor & Cooperative Play.jpg';
import preschoolPreReading from '../assets/websiteImages/OUR PRESCHOOL GALLERY/Early Pre-Reading & Visual Schedules.jpg';
import preschoolFriendship from '../assets/websiteImages/OUR PRESCHOOL GALLERY/Friendship & Milestone Celebrations.jpg';
import preschoolClassroomExtra from '../assets/websiteImages/OUR PRESCHOOL GALLERY/Inclusive Preschool Classroom.jpg';

// 8. Therapy Hero
import therapyHeroClinic from '../assets/websiteImages/Therapy hero/Multidisciplinary Therapy Clinic.jpg';

// 9. Our Therapy Environment & Gallery
import therapyAssessmentSuite from '../assets/websiteImages/OUR THERAPY ENVIRONMENT & GALLERY/Multidisciplinary Assessment & Therapy Suite.jpg';
import therapySensoryGym from '../assets/websiteImages/OUR THERAPY ENVIRONMENT & GALLERY/Sensory Integration & Motor Gym.jpg';
import therapySpeechRoom from '../assets/websiteImages/OUR THERAPY ENVIRONMENT & GALLERY/Speech & Auditory-Verbal Training Room.jpg';
import therapyPlayCorner from '../assets/websiteImages/OUR THERAPY ENVIRONMENT & GALLERY/Play-Based Early Intervention Corner.jpg';
import therapyFamilyRoom from '../assets/websiteImages/OUR THERAPY ENVIRONMENT & GALLERY/Family Consultation & Guidance Room.jpg';

// 10. Our Multidisciplinary Team
import multidisciplinaryAnjali from '../assets/websiteImages/OUR MULTIDISCIPLINARY TEAM/Anjali Subramanium.jpg';

export const websiteImages = {
  // --- HOME PAGE ---
  hero: {
    src: heroMilestone,
    alt: 'ZION therapist and child celebrating World Autism Day milestone with colorful infinity emblem',
    title: 'Where Every Milestone Matters',
    sublabel: 'Multidisciplinary Therapy & Inclusive Early Learning',
    objectPosition: 'center 35%'
  },
  about: {
    src: aboutZionTeam,
    alt: 'Dedicated ZION Speech & Hearing Clinic multidisciplinary team celebrating together in Dehradun',
    title: 'ZION Care & Learning Space',
    sublabel: 'Multidisciplinary Intervention in Ajabpur, Dehradun',
    badge: 'Established Oct 2021',
    objectPosition: 'center 25%'
  },
  environment: [
    {
      id: 'env-centre',
      src: envCentre,
      alt: 'ZION Multidisciplinary Centre community gathering and outdoor active day',
      label: 'ZION Multidisciplinary Centre',
      sublabel: 'Dedicated Clinical & Inclusive Spaces in Ajabpur, Dehradun',
      badge: 'Centre Facility',
      objectPosition: 'center 22%'
    },
    {
      id: 'env-therapy',
      src: envTherapyRooms,
      alt: 'Professional clinical seminar and therapy room at ZION multidisciplinary facility',
      label: 'Therapy & Assessment Rooms',
      sublabel: 'Individualised One-on-One Support',
      badge: 'Focused Care',
      objectPosition: 'center 35%'
    },
    {
      id: 'env-sensory',
      src: envSensoryAreas,
      alt: 'Sensory integration and playful motor activity areas with children and therapists at ZION',
      label: 'Sensory & Inclusive Learning Areas',
      sublabel: 'Movement, Regulation & Early Preschool',
      badge: 'Active Play',
      objectPosition: 'center 35%'
    }
  ],
  gallery: [
    {
      id: 'item-1',
      src: galleryEarlyIntervention,
      alt: 'Children and therapists participating in active early intervention and sensory motor exercises',
      label: 'Early Intervention Activities',
      sublabel: 'Play-based communication and sensory exploration',
      badge: 'Therapy & Play',
      theme: 'azure',
      aspectRatio: '16/9',
      className: 'col-span-2',
      objectPosition: 'center 30%'
    },
    {
      id: 'item-2',
      src: galleryIndividualSupport,
      alt: 'Individual one-on-one therapy session with speech & audiology guidance',
      label: 'Individualised Support',
      sublabel: 'One-on-one speech and audiology guidance',
      badge: 'Individual Care',
      theme: 'green',
      aspectRatio: '3/4',
      className: 'row-span-2',
      objectPosition: 'center 58%'
    },
    {
      id: 'item-3',
      src: galleryInclusivePreschool,
      alt: 'Child reaching for sensory dome supported by therapist in inclusive preschool setting',
      label: 'Inclusive Preschool Learning',
      sublabel: 'ZION Academy collaborative classroom environment',
      badge: 'Early Learning',
      theme: 'lime',
      aspectRatio: '4/3',
      className: '',
      objectPosition: 'center 25%'
    },
    {
      id: 'item-4',
      src: gallerySensoryMotor,
      alt: 'Children engaged in tactile sensory motor development play with clay and water',
      label: 'Sensory Motor Development',
      sublabel: 'Fine and gross motor coordination exercises',
      badge: 'Motor Skills',
      theme: 'warm',
      aspectRatio: '1/1',
      className: '',
      objectPosition: 'center 50%'
    },
    {
      id: 'item-5',
      src: galleryFamilyPartnership,
      alt: 'Parents, families, and professionals gathered together at a ZION workshop and seminar',
      label: 'Family Partnership & Workshops',
      sublabel: 'Parents and professionals working collaboratively',
      badge: 'Parent Training',
      theme: 'green',
      aspectRatio: '16/9',
      className: 'col-span-2',
      objectPosition: 'center 35%'
    }
  ],

  // --- SCHOOL PAGE ---
  schoolHero: {
    src: schoolHeroClassroom,
    alt: 'ZION Academy inclusive classroom with early learners and educators engaged in interactive learning',
    label: 'ZION Academy Inclusive Classroom',
    sublabel: 'Early Learning & Preschool Community in Dehradun',
    badge: 'Inclusive Preschool',
    objectPosition: 'center 30%'
  },
  learningEnvironment: {
    src: schoolLearningEnvClassroom,
    alt: 'ZION Academy inclusive preschool classroom designed for storytelling, sensory exploration and circle time',
    label: 'Inclusive Preschool Classroom',
    sublabel: 'Storytelling, Sensory Exploration & Circle Time in Dehradun',
    badge: 'Preschool Environment',
    objectPosition: 'center 30%'
  },
  preschoolGallery: [
    {
      id: 'feature-classroom',
      src: preschoolCircleTime,
      alt: 'Children and educators gathered in interactive circle time for storytelling at ZION Academy',
      aspectRatio: '16/10',
      label: 'Inclusive Circle Time & Storytelling Hub',
      sublabel: 'Interactive morning routines encouraging spoken expression and shared focus',
      badge: 'Featured Classroom',
      theme: 'lime',
      objectPosition: 'center 25%'
    },
    {
      id: 'support-art',
      src: preschoolCreativeArt,
      alt: 'Child participating in creative art and tactile sensory play with colorful materials',
      aspectRatio: '4/3',
      label: 'Creative Art & Sensory Texture Play',
      sublabel: 'Hands-on tactile activities building fine motor control and imagination',
      badge: 'Creative Discovery',
      theme: 'green',
      objectPosition: 'center 40%'
    },
    {
      id: 'support-motor',
      src: preschoolGrossMotor,
      alt: 'Children engaged in indoor movement challenges, gross motor development and cooperative play',
      aspectRatio: '4/3',
      label: 'Indoor Gross Motor & Cooperative Play',
      sublabel: 'Active movement challenges fostering balance, coordination, and peer fun',
      badge: 'Movement & Play',
      theme: 'azure',
      objectPosition: 'center 35%'
    },
    {
      id: 'support-literacy',
      src: preschoolPreReading,
      alt: 'Early childhood phonics, visual schedules and structured pre-reading flashcard activities',
      aspectRatio: '4/3',
      label: 'Early Pre-Reading & Visual Schedules',
      sublabel: 'Phonics flashcards, communication charts, and structured learning games',
      badge: 'Early Literacy',
      theme: 'warm',
      objectPosition: 'center 35%'
    },
    {
      id: 'support-friendship',
      src: preschoolFriendship,
      alt: 'Inclusive peer bonding, joyful smiles and milestone celebrations at ZION Academy',
      aspectRatio: '4/3',
      label: 'Friendship & Milestone Celebrations',
      sublabel: 'Celebrating everyday achievements and fostering natural peer empathy',
      badge: 'Community & Joy',
      theme: 'lime',
      objectPosition: 'center 25%'
    }
  ],

  // --- THERAPY PAGE ---
  therapyHero: {
    src: therapyHeroClinic,
    alt: 'ZION Multidisciplinary Therapy Clinic in Dehradun featuring specialised therapy equipment and caring clinician',
    label: 'Multidisciplinary Therapy Clinic',
    sublabel: 'Speech, Sensory & Motor Clinical Suites in Dehradun',
    badge: 'Clinical Excellence',
    objectPosition: 'center 35%'
  },
  therapyGallery: [
    {
      id: 'item-feature',
      src: therapyAssessmentSuite,
      alt: 'ZION multidisciplinary assessment and therapy suite for comprehensive individual evaluations',
      aspectRatio: '16/10',
      label: 'Multidisciplinary Assessment & Therapy Suite',
      sublabel: 'Comprehensive one-on-one evaluations in a calm, welcoming environment',
      badge: 'Featured Clinical Suite',
      theme: 'azure',
      objectPosition: 'center 30%'
    },
    {
      id: 'item-sensory',
      src: therapySensoryGym,
      alt: 'Sensory integration gym equipped with suspension swings and motor development apparatus',
      aspectRatio: '4/3',
      label: 'Sensory Integration & Motor Gym',
      sublabel: 'Sensory swings, balance coordination, and modulation activities',
      badge: 'Sensory & Motor',
      theme: 'lime',
      objectPosition: 'center 18%'
    },
    {
      id: 'item-speech',
      src: therapySpeechRoom,
      alt: 'Acoustic-treated speech and auditory-verbal training room with speech therapy mirrors and tools',
      aspectRatio: '4/3',
      label: 'Speech & Auditory-Verbal Training Room',
      sublabel: 'Acoustic-treated room for listening, speech clarity, and AAC technology',
      badge: 'Speech & Hearing',
      theme: 'green',
      objectPosition: 'center 30%'
    },
    {
      id: 'item-play',
      src: therapyPlayCorner,
      alt: 'Play-based early intervention developmental corner with child-friendly educational toys',
      aspectRatio: '4/3',
      label: 'Play-Based Early Intervention Corner',
      sublabel: 'Naturalistic, toy-centred developmental interactions for toddlers',
      badge: 'Early Intervention',
      theme: 'warm',
      objectPosition: 'center 35%'
    },
    {
      id: 'item-caregiver',
      src: therapyFamilyRoom,
      alt: 'Comfortable family consultation and guidance room for parent coaching and progress reviews',
      aspectRatio: '4/3',
      label: 'Family Consultation & Guidance Room',
      sublabel: 'Private, collaborative space for parent coaching and progress reviews',
      badge: 'Family Partnership',
      theme: 'azure',
      objectPosition: 'center 35%'
    }
  ],

  // --- MULTIDISCIPLINARY TEAM ---
  multidisciplinaryTeam: [
    {
      id: 'anjali-subramanium',
      src: multidisciplinaryAnjali,
      alt: 'Anjali Subramanium - Founder & Clinical Director, ZION',
      label: 'Anjali Subramanium',
      sublabel: 'Founder & Clinical Director',
      badge: 'Director',
      theme: 'azure',
      objectPosition: 'center 18%'
    }
  ],

  // Backwards-compatible / unified arrays for School and Therapy pages
  school: [
    {
      id: 'school-hero',
      src: schoolHeroClassroom,
      alt: 'ZION Academy inclusive classroom with early learners and educators engaged in interactive learning',
      label: 'ZION Academy Inclusive Classroom',
      sublabel: 'Early Learning & Preschool Community in Dehradun',
      badge: 'Inclusive Preschool',
      objectPosition: 'center 30%'
    },
    {
      id: 'school-env',
      src: schoolLearningEnvClassroom,
      alt: 'ZION Academy inclusive preschool classroom designed for storytelling, sensory exploration and circle time',
      label: 'Inclusive Preschool Classroom',
      sublabel: 'Storytelling, Sensory Exploration & Circle Time in Dehradun',
      badge: 'Preschool Environment',
      objectPosition: 'center 30%'
    },
    {
      id: 'school-extra-classroom',
      src: preschoolClassroomExtra,
      alt: 'ZION Academy preschool classroom setting',
      label: 'Inclusive Preschool Classroom',
      sublabel: 'Learning and play in Dehradun',
      badge: 'Preschool Classroom',
      objectPosition: 'center 30%'
    }
  ],
  therapy: [
    {
      id: 'therapy-hero',
      src: therapyHeroClinic,
      alt: 'ZION Multidisciplinary Therapy Clinic in Dehradun featuring specialised therapy equipment and caring clinician',
      label: 'Multidisciplinary Therapy Clinic',
      sublabel: 'Speech, Sensory & Motor Clinical Suites in Dehradun',
      badge: 'Clinical Excellence',
      objectPosition: 'center 35%'
    }
  ]
};

export default websiteImages;
