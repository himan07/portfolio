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
  tripguide,
  threejs,
  costacloud,
  mx,
  Vrishkar,
  youtube,
  meet,
  Modernmart
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
      "I didn’t think it was possible to streamline our panels so efficiently, but Himanshu proved me wrong.",
    name: "Rahul Bhatnagar",
    designation: "Senior Vice President",
    company: "",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Himanshu does.",
    name: "Defence Of India",
    designation: "",
    company: "",
  },
  {
    testimonial:
      "After Himanshu optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Market Xcel",
    designation: "",
    company: "",
  },
];

const projects = [
  {
    name: "YouTube",
    description:
      "A web-based video streaming platform that enables users to explore, watch, and manage a wide range of videos across multiple categories. The application provides features like search, recommendations, and personalized content, delivering a seamless and engaging viewing experience for users.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Material Ui",
        color: "green-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://youtube-clone-app-zeta.vercel.app/",
  },
  {
    name: "MeetSphere",
    description:
      "Built a scalable video conferencing platform with Next.js, featuring instant and scheduled meetings, personal rooms, meeting recordings, and management of upcoming and past sessions—supporting 100+ participants with low-latency streaming and real-time chat.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: meet,
    source_code_link: "https://unite-meet.vercel.app/",
  },
  {
    name: "Modernmart",
    description:
      "Developed a full-featured e-commerce platform with secure user authentication, interactive product catalog, dynamic shopping cart, and a validated payment gateway for a seamless shopping experience.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node/Express",
        color: "pink-text-gradient",
      },
    ],
    image: Modernmart,
    source_code_link: "https://github.com/himan07/Modernmart.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
