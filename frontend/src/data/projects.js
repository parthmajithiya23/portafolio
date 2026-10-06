// Central project data. Add a new object here and it will automatically
// appear on the Projects page and get its own detail route at /projects/:slug.

import carRentalScreenshot from '../pages/carrent.png'
import gym from "../pages/GYM.png";
import nlk from "../pages/nilkanth.png";
import tms from '../pages/TMS.png';
import placement from '../pages/placement.png'

export const projects = [
  {
    slug: 'sanatan-gym',
    title: 'Sanatan Gym',
    tagline: 'Gym & fitness studio website with membership plans.',
    description:
      'A modern gym website built to showcase membership plans, trainers and class schedules, with a conversion-focused landing page for lead generation.',
    longDescription:
      'Sanatan Gym is a full front-facing website for a fitness studio, designed to turn visitors into members. It highlights membership tiers, trainer profiles and weekly class schedules behind a bold, energetic UI. The layout is fully responsive and optimised for quick load times, with reusable section components so new plans or trainers can be added without touching the page structure.',
    tech: ['React', 'JavaScript', 'CSS3', 'Bootstrap'],
    github: 'https://github.com/ParthMajithiya/sanatan-gym',
    live: 'https://sanatan-gym.onrender.com',
    image: gym,
    gradient: ['#67e8f9', '#38bdf8'],
    category: 'Frontend',
    features: [
      'Responsive landing page with animated hero section',
      'Membership plan comparison with pricing cards',
      'Trainer profiles and weekly class schedule',
      'Contact & enquiry form for new member sign-ups',
    ],
  },
  {
    slug: 'e-commerce',
    title: 'NeelKanth electronics',
    tagline: 'Electronic store online website for customer visit .',
    description:
      'A MERN-based e-commerce platform with product catalog, cart, user authentication and order flow — built to mirror real production shopping experiences.',
    longDescription:
      'This e-commerce platform covers the full shopping journey: product browsing with filters and search, a persistent cart, user authentication, and an order placement flow. The backend exposes a REST API built with Express and MongoDB, while the React frontend consumes it through a clean service layer, keeping UI and data logic separate for easy scaling.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/ParthMajithiya/e-commerce',
    live: 'https://neelkanth-electrical.onrender.com/',
    image: nlk,
    gradient: ['#22d3ee', '#a78bfa'],
    category: 'MERN Stack',
    features: [
      'Product catalog with category filters and search',
      'Cart and checkout flow with order summary',
      'User authentication with protected routes',
      'REST API built with Express and MongoDB',
    ],
  },
  {
    slug: 'transport-management-system',
    title: 'Transport Management System',
    tagline: 'Fleet, route and booking management dashboard.',
    description:
      'A management system to handle vehicles, routes, drivers and bookings for a transport business, with a dashboard for day-to-day operations.',
    longDescription:
      'Built for a transport/logistics use case, this system lets staff manage vehicles, assign drivers to routes, and track bookings from a central dashboard. It focuses on data-heavy tables, filters and forms that stay fast and usable at scale, backed by a MongoDB data layer and an Express API.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
    github: 'https://github.com/ParthMajithiya/transport-management-system',
    live: 'https://tms-l7zu.onrender.com',
    image: tms,
    gradient: ['#34d399', '#22c55e'],
    category: 'MERN Stack',
    features: [
      'Vehicle, driver and route management dashboard',
      'Booking creation and status tracking',
      'Role-based views for admin and staff',
      'Searchable, filterable data tables',
    ],
  },
 
  {
    slug: 'car-rental-management-system',
    title: 'Car Rental Management System',
    tagline: 'Manage fleet availability, bookings and customers.',
    description:
      'A car rental management system to track vehicle availability, handle rental bookings and manage customer records from one dashboard.',
    longDescription:
      'A complete rental workflow: browse available cars, place a rental booking for a date range, and manage customer and vehicle records from an admin dashboard. Built with a MongoDB schema for vehicles, customers and bookings, and an Express API that enforces availability rules so a car cannot be double-booked for overlapping dates.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/ParthMajithiya/car-rental-management-system',
    live: '',
    image: carRentalScreenshot,
    gradient: ['#f59e0b', '#f97316'],
    category: 'Backend',
    features: [
      'Vehicle availability search by date range',
      'Booking flow with rental duration & pricing',
      'Customer records and rental history',
      'Admin dashboard for fleet management',
    ],
  },

   {
    slug: 'placement ',
    title: 'Placement & recruiter',
    tagline: 'Website where company post a job & student view, find, & apply for the jobs  .',
    description:
      'company post job ,students can find & apply & admin can handle job & student',
    longDescription:
      'Website where company post a job & student view, find, & apply for the jobs. and admin can also see activity of this who get placed or not who is finding job etc..... website using react , node , Express.js html,css javascript,mongoDB. ',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS','HTML','CSS','java script'],
    github: 'https://github.com/ParthMajithiya/e-commerce',
    live: 'https://neelkanth-electrical.onrender.com/',
    image: placement,
    gradient: ['#8b5cf6', '#ec4899'],
    category: 'MERN Stack',
    features: [
      'Can upload resume and all details',
      'Can search jobs with filter',
      'User authentication with protected routes',
      'REST API built with Express and MongoDB',
    ],
  }
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
