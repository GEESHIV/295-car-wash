export const BUSINESS = {
  name: '295 Car Wash',
  phoneDisplay: '08178455906',
  phoneHref: 'tel:+918178455906',
  whatsappNumber: '918178455906',
  whatsappDefaultMessage: 'Hello 295 Car Wash! I would like to enquire about your car wash services.',
  addressLine1: 'Pal Market, Opposite Silver City, Gejha',
  addressLine2: 'Sector 93, Noida, Uttar Pradesh 201304',
  mapsLink: 'https://maps.app.goo.gl/K5zk8V8cvcFp7pdP6',
  mapsEmbedQuery: 'Pal Market, Silver City, Gejha, Sector 93, Noida, Uttar Pradesh 201304',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Now', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

export const IMAGES = {
  hero: 'https://images.pexels.com/photos/9028761/pexels-photo-9028761.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroSecondary: 'https://images.pexels.com/photos/6872599/pexels-photo-6872599.jpeg?auto=compress&cs=tinysrgb&w=1080',
  about: 'https://images.pexels.com/photos/6872577/pexels-photo-6872577.jpeg?auto=compress&cs=tinysrgb&w=1100',
  aboutSecondary: 'https://images.pexels.com/photos/6873191/pexels-photo-6873191.jpeg?auto=compress&cs=tinysrgb&w=900',
};

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    id: 'exterior-car-wash',
    title: 'Exterior Car Wash',
    description:
      'A thorough exterior rinse, wash and dry that lifts away dust, grime and road residue for a crisp, clean finish.',
    image:
      'https://images.pexels.com/photos/6872172/pexels-photo-6872172.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'interior-cleaning',
    title: 'Interior Cleaning',
    description:
      'Wiping down and refreshing the cabin surfaces, dash and upholstery so the inside feels as good as the outside looks.',
    image:
      'https://images.pexels.com/photos/6873015/pexels-photo-6873015.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'complete-car-cleaning',
    title: 'Complete Car Cleaning',
    description:
      'An all-round cleaning session that addresses the exterior and interior together for a refreshed, tidy vehicle.',
    image:
      'https://images.pexels.com/photos/6872577/pexels-photo-6872577.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'foam-wash',
    title: 'Foam Wash',
    description:
      'A rich foam layer that clings to the surface to help lift dirt and grime before a gentle rinse leaves a streak-free shine.',
    image:
      'https://images.pexels.com/photos/6872591/pexels-photo-6872591.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'car-interior-vacuuming',
    title: 'Car Interior Vacuuming',
    description:
      'Vacuuming of seats, carpets and crevices to remove dust, crumbs and debris trapped inside the cabin.',
    image:
      'https://images.pexels.com/photos/5233264/pexels-photo-5233264.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'dashboard-cleaning',
    title: 'Dashboard Cleaning',
    description:
      'Gentle wipe-down of the dashboard, console and panels to remove dust and restore a clean, matt or subtle sheen.',
    image:
      'https://images.pexels.com/photos/4218867/pexels-photo-4218867.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'tyre-and-wheel-cleaning',
    title: 'Tyre and Wheel Cleaning',
    description:
      'Targeted cleaning of wheels, rims and tyres to clear brake dust and road grime and bring back a neat, finished look.',
    image:
      'https://images.pexels.com/photos/7154618/pexels-photo-7154618.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'car-polishing',
    title: 'Car Polishing',
    description:
      'A polishing pass designed to enhance surface gloss and bring out a smoother, more reflective finish on the paint.',
    image:
      'https://images.pexels.com/photos/5233279/pexels-photo-5233279.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export type GalleryItem = {
  id: string;
  label: string;
  caption: string;
  image: string;
};

export const GALLERY: GalleryItem[] = [
  {
    id: 'dirty-exterior',
    label: 'Before',
    caption: 'Dusty, grimy exterior',
    image:
      'https://images.pexels.com/photos/15928393/pexels-photo-15928393.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'clean-exterior',
    label: 'After',
    caption: 'Clean, shining exterior',
    image:
      'https://images.pexels.com/photos/6872163/pexels-photo-6872163.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'foam-process',
    label: 'Process',
    caption: 'Foam wash in action',
    image:
      'https://images.pexels.com/photos/20856507/pexels-photo-20856507.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'interior-cleaning',
    label: 'Interior',
    caption: 'Cabin detailing',
    image:
      'https://images.pexels.com/photos/6873103/pexels-photo-6873103.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'clean-alloys',
    label: 'Detailing',
    caption: 'Clean alloy wheels',
    image:
      'https://images.pexels.com/photos/244553/pexels-photo-244553.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'premium-detailing',
    label: 'Finish',
    caption: 'Premium detailing visuals',
    image:
      'https://images.pexels.com/photos/14615260/pexels-photo-14615260.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: 'MapPin',
    title: 'Convenient Location',
    text: 'Located in Pal Market, Sector 93, Noida — easy to reach and simple to find.',
  },
  {
    icon: 'Sparkles',
    title: 'Focus on Cleanliness',
    text: 'Every visit centres on getting your vehicle visibly cleaner and tidier.',
  },
  {
    icon: 'Smile',
    title: 'Customer-Friendly Experience',
    text: 'A straightforward, welcoming experience designed around car owners like you.',
  },
  {
    icon: 'CalendarCheck',
    title: 'Easy Booking Enquiries',
    text: 'Send a quick enquiry through the form or WhatsApp and we’ll take it from there.',
  },
  {
    icon: 'Eye',
    title: 'Attention to Appearance',
    text: 'We care about the small details that make your car look its best.',
  },
];
