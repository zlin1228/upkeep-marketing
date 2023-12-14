import shortId from 'shortid';
import capterra from '../../../assets/logo/capterra-logo.png';
import g2Logo from '../../../assets/g2-logo.svg';
import appstore from '../../../assets/logo/apple-store-logo.png';

const testimonials = [
  {
    id: shortId.generate(),
    source: {
      name: 'Troy J.',
      role: 'Building Administrator',
      company: 'Capterra',
      logo: capterra,
    },
    testimonial:
      '"Using Upkeep has been an easy process, and it helps keep everything in one place. I also like that our Operations Manager sees everything that I do, from creation of work orders, to updates, and completion of work orders."',
    rating: '4.7/5 on Capterra',
    reviews: '1156 Reviews',
  },
  {
    id: shortId.generate(),
    source: {
      name: 'Chris A',
      role: 'Director of Facilities',
      company: 'G2 Crowd',
      logo: g2Logo,
    },
    testimonial:
      '"With UpKeep it\'s easy to follow and track your work orders and supplies. You can keep everyone updated on where work orders stand and have multiple users so everyone is accountable for their assigned tasks."',
    rating: '4.5/5 on G2 Crowd',
    reviews: '267 Reviews',
  },
  {
    id: shortId.generate(),
    source: {
      name: 'Rick',
      role: 'Maintenance Technician',
      company: 'App Store',
      logo: appstore,
    },
    testimonial:
      '"Using Upkeep has been an easy process, and it helps keep everything in one place. I also like that our Operations Manager sees everything that I do, from creation of work orders, to updates, and completion of work orders."',
    rating: '4.8/5 on App Store',
    reviews: '365 Reviews',
  },
];

export default testimonials;
