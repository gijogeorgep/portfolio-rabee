// Centralized content — all images are organized in /public/images/<category> for easy replacement.
const VID = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/';

export const site = {
  name: 'RABEE',
  tagline: 'Light, motion & memory',
  email: 'hello@rabee.studio',
  heroVideo: VID + 'ForBiggerBlazes.mp4',
  reel: VID + 'ForBiggerJoyrides.mp4',
  poster: '/images/hero/hero.jpeg',
  heroImg: '/images/hero/hero.jpeg'
};

export const nav = [['Work', 'work'], ['Film', 'film'], ['Gallery', 'gallery'], ['About', 'about'], ['Services', 'services'], ['Contact', 'contact']];

export const aboutMedia = {
  portrait: '/images/about/portrait.jpg',
  rig: '/images/about/rig-onset.jpg',
  process: [
    { src: '/images/about/optics.jpg', caption: 'Optics & Glass' },
    { src: '/images/about/scouting.jpg', caption: 'Scouting' },
    { src: '/images/about/slate.jpg', caption: 'Production Slate' }
  ]
};

export const projects = [
  { id: 'nordlys', title: 'Nordlys', cat: 'Editorial', year: 2025, img: '/images/projects/nordlys-cover.jpg', desc: 'A winter series shot across northern Norway — quiet landscapes, long exposures and the green hum of aurora.', images: ['/images/projects/nordlys-1.jpg', '/images/projects/nordlys-2.jpg', '/images/projects/nordlys-3.jpg'] },
  { id: 'saltwater', title: 'Saltwater', cat: 'Travel', year: 2024, img: '/images/projects/saltwater-cover.jpg', desc: 'Coastal portraits and slow mornings along the Atlantic edge of Portugal.', images: ['/images/projects/saltwater-1.jpg', '/images/projects/saltwater-2.jpg', '/images/projects/saltwater-3.jpg'] },
  { id: 'concrete-bloom', title: 'Concrete Bloom', cat: 'Architecture', year: 2024, img: '/images/projects/concrete-bloom-cover.jpg', desc: 'Brutalist geometry softened by golden hour and wild growth.', images: ['/images/projects/concrete-bloom-1.jpg', '/images/projects/concrete-bloom-2.jpg', '/images/projects/concrete-bloom-3.jpg'] },
  { id: 'after-hours', title: 'After Hours', cat: 'Fashion', year: 2023, img: '/images/projects/after-hours-cover.jpg', desc: 'Neon, rain and tailoring — a nocturnal fashion story.', images: ['/images/projects/after-hours-1.jpeg', '/images/projects/after-hours-2.jpg', '/images/projects/after-hours-3.jpg'] }
];

export const films = [
  { id: 'f1', title: 'Echoes of Ember', type: 'Short Film', year: 2025, src: VID + 'ForBiggerEscapes.mp4', poster: '/images/films/echoes-of-ember.jpg' },
  { id: 'f2', title: 'Velocity', type: 'Commercial', year: 2025, src: VID + 'ForBiggerFun.mp4', poster: '/images/films/velocity.jpg' },
  { id: 'f3', title: 'The Long Way Home', type: 'Documentary', year: 2024, src: VID + 'ForBiggerMeltdowns.mp4', poster: '/images/films/the-long-way-home.jpg' }
];

export const gallery = [
  { src: '/images/gallery/gallery-01.jpg', alt: 'Cinque Terre coastal edge' },
  { src: '/images/gallery/gallery-02.jpg', alt: 'Nocturnal Tokyo neon glow' },
  { src: '/images/gallery/gallery-03.jpg', alt: 'Aurora over Arctic mountain' },
  { src: '/images/gallery/gallery-04.jpg', alt: 'Atlantic ocean swell' },
  { src: '/images/gallery/gallery-05.jpg', alt: 'Brutalist concrete geometry' },
  { src: '/images/gallery/gallery-06.jpg', alt: 'Cinematographer in alpine fog' },
  { src: '/images/gallery/gallery-07.jpg', alt: 'Minimalist desert dunes' },
  { src: '/images/gallery/gallery-08.jpg', alt: 'Misty mountain forest at dawn' },
  { src: '/images/gallery/gallery-09.jpg', alt: 'Nocturnal cinematic reflections' },
  { src: '/images/gallery/gallery-10.jpg', alt: 'Yosemite valley river reflection' }
];

export const services = [['Photography', 'Editorial, commercial, portrait and event coverage with a cinematic eye.'], ['Filmmaking', 'Concept to final grade — brand films, shorts and documentaries.'], ['Aerial & Motion', 'Licensed drone cinematography and gimbal-driven movement.'], ['Post-Production', 'Colour grading, retouching and sound design in-house.']];
export const testimonials = [['Rabee turned our campaign into cinema. Every frame felt considered.', 'Ava Laurent', 'Creative Director, Maison Noir'], ['Calm on set, extraordinary in the edit. The best collaborator we have had.', 'Rohan Mehta', 'Producer, Northbound Films'], ['The photographs outlived the brief — we still use them years later.', 'Elena Voss', 'Editor, Form Magazine']];
