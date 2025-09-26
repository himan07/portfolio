import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  costacloud,
  mx,
  Vrishkar
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Market Xcel Data Matrix",
    icon: mx,
    iconBg: "#E6DEDD",
    date: "September 2024 - Present",
    points: [
      "Led the end-to-end development of two enterprise-grade Healthcare B2B/B2C panels using React, Node.js, and MySQL, replaced outsourcing by building an in-house scalable architecture.",
      "Engineered secure role-based access control (RBAC) systems with encryption to safeguard sensitive business data and ensure compliance with security best practices.",
      "Designed and integrated RESTful APIs, implemented CI/CD pipelines for automated deployment, and optimized full-stack performance for high-traffic production environments.",
      "Migrated legacy systems to modern React (Hooks, Context API), reducing technical debt and cutting outsourcing dependency by 80%, significantly improving delivery speed and code maintainability.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Costacloud",
    icon: costacloud,
    iconBg: "#383E56",
    date: "April 2022 - July 2024",
    points: [
      "Delivered core features for the Defence eOffice, including secure document routing, role-based workflowmanagement, and detailed audit logging to support secure and efficient internal operations.",
      "Built Claros, a production-ready real-time suspect-tracking platform integrating geolocation services, relational search algorithms, and biometric data parsing, enabling law enforcement teams to efficiently track, analyze, and correlate suspects across multiple data sources.",
      "Independently architected and led TeamSync, a secure collaboration platform with encrypted document access and detailed sharing (viewer/commenter/editor) for internal teams.",
      "Implemented PDF/DOCX in-browser viewers and multi-role audit-ready workflows across departments.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Vrishkar Consultancy Pvt Ltd.",
    icon: Vrishkar,
    iconBg: "#383E56",
    date: "November 2021 - February 2022",
    points: [
      "Engineered a Cleaning Service application for Vrishkar Consultancy Services using JavaScript, React, Redux.",
      "Converted 30+ Figma designs into responsive web pages, ensuring compatibility across various screen sizes.",
      "Integrated AWS S3 for database management, handling the upload of 500+ necessary documents securely.",
      "Added a secure payment section, enabling users to pay via UPI/PAYPAL payment methods.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
