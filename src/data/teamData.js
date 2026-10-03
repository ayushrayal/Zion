import drHimani from '../assets/Team/Dr. Himani Sajwan Pediatric  Neurodevelopmental Therapist.jpg';
import drKanika from '../assets/Team/Dr. Kanika Bindal MPT orthopasedics.jpg';
import drSupriya from '../assets/Team/Dr. Supriya Rawat Pediatric Physiotherapist.jpg';
import drVishnu from '../assets/Team/Dr. Vishnu pratap singh suryavanshi Senior Neurophysiotherapist and Pediatric Intervention therapist.jpg';
import mrRajat from '../assets/Team/Mr. Rajat Front Desk Executive.jpg';
import mrsAnuradha from '../assets/Team/Mrs. Anuradha Saini School Coordinator & Senior Special Educator.jpg';
import mrsDeepika from '../assets/Team/Mrs. Deepika Negi Special Educator.jpg';
import mrsParwati from '../assets/Team/Mrs. Parwati Swami Early Childhood Educator & Speech Therapist Assistant.jpg';
import mrsSapna from '../assets/Team/Mrs. Sapna Bisht Senior Speech Language PAthologist & Audiologist.jpg';
import msIshika from '../assets/Team/Ms. Ishika Front Office & Administration Executive.jpg';
import msNeha from '../assets/Team/Ms. Neha Kumari Special Educator & Speech Theraphy Assistant.jpg';
import msNitika from '../assets/Team/Ms. Nitika Bisht Speech Language Pathologist & Audiologist.jpg';
import msPriyankaS from '../assets/Team/Ms. Priyanka Saini Administration Executive.jpg';
import msSarita from '../assets/Team/Ms. Sarita Ganesh Autism & Communication Intervention Therapist.jpg';
import msSonia from '../assets/Team/Ms. Sonia School & Therapy Volunteer.jpg';
import msAkansha from '../assets/Team/Ms.Akansha Specail Educator.jpg';
import msPriyankaR from '../assets/Team/Ms.Priyanka Rawat Speech theraphy Asistant.jpg';

import groupPhysio from '../assets/Team/Occupational and Physiotherapy team.jpg';
import groupSchool from '../assets/Team/School Team.jpg';
import groupSpeech from '../assets/Team/Speech Therapy Team.jpg';

export const teamDepartments = [
  { id: 'all', label: 'All Team Members' },
  { id: 'speech', label: 'Speech & Hearing' },
  { id: 'physio', label: 'Occupational & Physiotherapy' },
  { id: 'school', label: 'School & Special Education' },
  { id: 'admin', label: 'Administration & Support' }
];

export const teamMembers = [
  // Speech & Hearing Team
  {
    id: 'sapna-bisht',
    name: 'Mrs. Sapna Bisht',
    designation: 'Senior Speech Language Pathologist & Audiologist',
    departmentId: 'speech',
    departmentLabel: 'Speech & Hearing Clinic',
    image: mrsSapna,
    color: 'azure',
    experience: 'Senior Specialist',
    focus: 'Speech & Language Pathology, Hearing Rehabilitation, Articulation, AAC'
  },
  {
    id: 'nitika-bisht',
    name: 'Ms. Nitika Bisht',
    designation: 'Speech Language Pathologist & Audiologist',
    departmentId: 'speech',
    departmentLabel: 'Speech & Hearing Clinic',
    image: msNitika,
    color: 'azure',
    experience: 'Specialist',
    focus: 'Auditory-Verbal Training, Expressive Language & Fluency'
  },
  {
    id: 'priyanka-rawat',
    name: 'Ms. Priyanka Rawat',
    designation: 'Speech Therapy Assistant',
    departmentId: 'speech',
    departmentLabel: 'Speech & Hearing Clinic',
    image: msPriyankaR,
    color: 'green',
    experience: 'Clinical Assistant',
    focus: 'Articulation Drills, Speech Practice Carryover & Clinical Assistance'
  },
  {
    id: 'parwati-swami',
    name: 'Mrs. Parwati Swami',
    designation: 'Early Childhood Educator & Speech Therapist Assistant',
    departmentId: 'speech',
    departmentLabel: 'Early Learning & Speech Support',
    image: mrsParwati,
    color: 'lime',
    experience: 'Educator & Assistant',
    focus: 'Early Childhood Verbal Stimulation, Play Interaction & Speech Support'
  },

  // Occupational, Physiotherapy & Neurodevelopmental Team
  {
    id: 'vishnu-pratap',
    name: 'Dr. Vishnu Pratap Singh Suryavanshi',
    designation: 'Senior Neurophysiotherapist & Pediatric Intervention Therapist',
    departmentId: 'physio',
    departmentLabel: 'Occupational & Physiotherapy',
    image: drVishnu,
    color: 'azure',
    experience: 'Senior Specialist',
    focus: 'Neurodevelopmental Therapy, Motor Coordination & Pediatric Intervention'
  },
  {
    id: 'himani-sajwan',
    name: 'Dr. Himani Sajwan',
    designation: 'Pediatric Neurodevelopmental Therapist',
    departmentId: 'physio',
    departmentLabel: 'Occupational & Physiotherapy',
    image: drHimani,
    color: 'green',
    experience: 'Neurodevelopmental Specialist',
    focus: 'Sensory Modulation, Postural Dynamics & Developmental Milestones'
  },
  {
    id: 'supriya-rawat',
    name: 'Dr. Supriya Rawat',
    designation: 'Pediatric Physiotherapist',
    departmentId: 'physio',
    departmentLabel: 'Occupational & Physiotherapy',
    image: drSupriya,
    color: 'lime',
    experience: 'Physiotherapist',
    focus: 'Gross Motor Skills, Balance, Gait Training & Physical Rehabilitation'
  },
  {
    id: 'kanika-bindal',
    name: 'Dr. Kanika Bindal',
    designation: 'Physiotherapist (MPT Orthopaedics)',
    departmentId: 'physio',
    departmentLabel: 'Occupational & Physiotherapy',
    image: drKanika,
    color: 'azure',
    experience: 'MPT Orthopaedics',
    focus: 'Orthopaedic Rehabilitation, Musculoskeletal Health & Functional Movement'
  },
  {
    id: 'sarita-ganesh',
    name: 'Ms. Sarita Ganesh',
    designation: 'Autism & Communication Intervention Therapist',
    departmentId: 'physio',
    departmentLabel: 'Communication & Behavior Support',
    image: msSarita,
    color: 'green',
    experience: 'Intervention Therapist',
    focus: 'Autism Spectrum Support, Behaviour Regulation & Functional Communication'
  },

  // School & Special Education Team
  {
    id: 'anuradha-saini',
    name: 'Mrs. Anuradha Saini',
    designation: 'School Coordinator & Senior Special Educator',
    departmentId: 'school',
    departmentLabel: 'ZION Academy (School)',
    image: mrsAnuradha,
    color: 'azure',
    experience: 'School Coordinator',
    focus: 'Inclusive Preschool Curriculum, Senior Special Education & IEP Management'
  },
  {
    id: 'deepika-negi',
    name: 'Mrs. Deepika Negi',
    designation: 'Special Educator',
    departmentId: 'school',
    departmentLabel: 'ZION Academy (School)',
    image: mrsDeepika,
    color: 'green',
    experience: 'Special Educator',
    focus: 'Individualized Learning Pacing, Early Numeracy & Foundational Skills'
  },
  {
    id: 'akansha',
    name: 'Ms. Akanksha',
    designation: 'Special Educator',
    departmentId: 'school',
    departmentLabel: 'ZION Academy (School)',
    image: msAkansha,
    color: 'lime',
    experience: 'Special Educator',
    focus: 'Multi-Sensory Instruction, Developmental Readiness & Circle Time'
  },
  {
    id: 'neha-kumari',
    name: 'Ms. Neha Kumari',
    designation: 'Special Educator & Speech Therapy Assistant',
    departmentId: 'school',
    departmentLabel: 'ZION Academy & Speech Support',
    image: msNeha,
    color: 'azure',
    experience: 'Educator & Assistant',
    focus: 'Classroom Speech Integration, Collaborative Learning & Student Care'
  },

  // Administration, Front Office & Support Team
  {
    id: 'ishika',
    name: 'Ms. Ishika',
    designation: 'Front Office & Administration Executive',
    departmentId: 'admin',
    departmentLabel: 'Administration & Front Office',
    image: msIshika,
    color: 'green',
    experience: 'Executive',
    focus: 'Patient Care Coordination, Enquiries & Office Administration'
  },
  {
    id: 'rajat',
    name: 'Mr. Rajat',
    designation: 'Front Desk Executive',
    departmentId: 'admin',
    departmentLabel: 'Administration & Front Office',
    image: mrRajat,
    color: 'lime',
    experience: 'Executive',
    focus: 'Front Desk Operations, Visitor Guidance & Appointment Scheduling'
  },
  {
    id: 'priyanka-saini',
    name: 'Ms. Priyanka Saini',
    designation: 'Administration Executive',
    departmentId: 'admin',
    departmentLabel: 'Administration & Operations',
    image: msPriyankaS,
    color: 'azure',
    experience: 'Executive',
    focus: 'Society Documentation, Operational Records & Administrative Coordination'
  },
  {
    id: 'sonia',
    name: 'Ms. Sonia',
    designation: 'School & Therapy Volunteer',
    departmentId: 'admin',
    departmentLabel: 'Support & Volunteer Care',
    image: msSonia,
    color: 'green',
    experience: 'Volunteer Support',
    focus: 'Classroom Session Support, Student Comfort & Activity Assistance'
  }
];

export const teamGroups = [
  {
    id: 'group-speech',
    title: 'Speech & Hearing Clinical Team',
    subtitle: 'Speech-Language Pathologists, Audiologists & Clinical Assistants',
    image: groupSpeech,
    badge: 'Clinical Care',
    badgeColor: 'azure',
    description: 'Our dedicated Speech & Language team collaborating to evaluate, guide, and nurture communicative milestones for children of all ages.'
  },
  {
    id: 'group-physio',
    title: 'Occupational & Physiotherapy Team',
    subtitle: 'Neurophysiotherapists, Pediatric Therapists & Motor Specialists',
    image: groupPhysio,
    badge: 'Motor & Sensory',
    badgeColor: 'green',
    description: 'Our specialized neurodevelopmental and physical rehabilitation team fostering motor re-education, sensory integration, balance, and independence.'
  },
  {
    id: 'group-school',
    title: 'ZION Academy School & Education Team',
    subtitle: 'School Coordinator, Special Educators & Early Learning Staff',
    image: groupSchool,
    badge: 'Inclusive Learning',
    badgeColor: 'lime',
    description: 'The passionate educators behind ZION Academy, providing inclusive preschool education, individualised educational planning, and school readiness.'
  }
];
