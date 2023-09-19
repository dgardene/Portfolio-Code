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
  TTU,
  ITHC,
  threejs,
  python,
  C,
  java,
  CinematicAPI,
  CasmiroCinema,
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

export const footerlink = [
  {
    id: "",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native",
    icon: mobile,
  },
  {
    title: "C Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
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
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C",
    icon: C,
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
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Computer Science",
    company_name: "Minor in Mathematics",
    icon: TTU,
    iconBg: "#383E56",
    date: "August 2020 - May 2024",
    points: ["Texas Tech University", "Bachelors of Science"],
  },
  {
    title: "Student Analyst",
    company_name: "Texas Tech IT Help Central",
    icon: ITHC,
    iconBg: "#383E56",
    date: "October 2021 - September 2022",
    points: [
      "Aid Students and Staff with technical issues in a timely manner",
      "Implement the skills of problem-solving as well as time-based research",
    ],
  },
  {
    title: "Student Technician",
    company_name: "Texas Tech IT Help Central",
    icon: ITHC,
    iconBg: "#383E56",
    date: "September 2022 - December 2022",
    points: [
      "Use increased responsibility and security access for business use only and troubleshooting purposes",
      "Provide upper-level support for customer requests and incidents, and assign to appropriate Tier II groups as needed",
      "Use access to special tools to assist in additional troubleshooting for TechMail, eRaider, software downloading, web page assistance, and other possible support needs",
    ],
  },
  {
    title: "Quality/Trainer",
    company_name: "Texas Tech IT Help Central",
    icon: ITHC,
    iconBg: "#383E56",
    date: "September 2022 - September 2023",
    points: [
      "Review peer phone calls, emails, and ServiceNow records; score according to quality guidelines",
      "Review customer surveys and categorize them for reporting purposes",
      "Teach student analysts ways to improve call flow and call quality",
      "Train newly hired student assistants on IT Help Central and TTU IT Division policies and procedures",
    ],
  },
  {
    title: "Student Supervisor",
    company_name: "Texas Tech IT Help Central",
    icon: ITHC,
    iconBg: "#383E56",
    date: "December 2022 - September 2023",
    points: [
      "Student supervisors shall perform all duties related to the student technician and student analyst positions",
      "Provide supervision of all other student assistants and delegate tasks to others, when appropriate",
      "Assist staff members by ensuring all work is being completed in a timely manner. In addition, ensure all other student assistants are performing all appropriate job duties",
      "Communicate with staff members of any outages or technical issues that may occur, following all appropriate major incident management processes",
      "Assist with training and mentoring duties as needed",
    ],
  },
  {
    title: "Lead Web Developer",
    company_name: "Industrial Manufacturing Systems Engineering",
    icon: TTU,
    iconBg: "#383E56",
    date: "Septemeber 2023 - Present",
    points: [
      "Revamped departmental website by using HTML/CSS/JS",
      "Maintained departmental website by using CMS software",
      "Collaborated with PR team, to help optimize user experience",
    ],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Movie Booking System",
    description:
      "Web-based platform that allows users to search and buy movie tickets from various movie theaters.",
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
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: CasmiroCinema,
    source_code_link: "https://github.com/dgardene/Movie-Booking-System",
    web_url: "",
  },
  {
    name: "Cellular Life Simulator",
    description:
      "A terminal based parallel programming application that simulates the first 100 steps of cellular life from an input matrix of any size",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/dgardene/Cellular-Life-Simulator",
    web_url: "",
  },
  {
    name: "Movie Search API",
    description:
      "A web based platform that allows a user to search a movie title and it will be displayed. Done through implementation of a movies API",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: CinematicAPI,
    source_code_link: "https://github.com/dgardene/first-react-project",
    web_url: "https://cinema-api.netlify.app/",
  },
  {
    name: "Job Search API",
    description:
      "A web based platform that allows a user to search a movie title and it will be displayed. Done through implementation of a movies API",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: CinematicAPI,
    source_code_link: "https://github.com/dgardene/JobSearch",
    web_url: "https://cinema-api.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
