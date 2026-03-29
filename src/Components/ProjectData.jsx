import gorkha from "../assets/projects/gorkha.png";
import portfolio from "../assets/projects/myportfolio.png";
import hornbillGo from "../assets/projects/hornbillGo.png";
import CampusAid from "../assets/projects/CampusAid.png";

export const projects = [
  {
    title: "GorkhaCommerce",
    description:
      "Built a modern e-commerce web application with product browsing, search functionality, and responsive UI. Implemented using React and TypeScript with a focus on performance and scalable frontend architecture.",
    techStack: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://www.svgrepo.com/show/374118/tailwind.svg" },
      { name: "Vite", logo: "https://vitejs.dev/logo.svg" }
    ],
    gradientFrom: "from-transparent",
    gradientVia: "via-[#0b4634]/10",
    gradientTo: "to-transparent",
    borderGlow: "#10b981",
    imageUrl: gorkha,
    liveLink: "https://gorkha-commerce-4kyb.vercel.app",
    githubLink: "https://github.com/ryan-skt/gorkha_commerce"
  },

  {
    title: "Personal Portfolio",
    description:
      "Designed and developed a modern portfolio website with smooth animations, interactive UI components, and responsive design. Focused on clean UI and seamless user experience.",
    techStack: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", logo: "https://www.svgrepo.com/show/374118/tailwind.svg" },
      { name: "Vite", logo: "https://vitejs.dev/logo.svg" }
    ],
    gradientFrom: "from-transparent",
    gradientVia: "via-[#4b0fd7]/10",
    gradientTo: "to-transparent",
    borderGlow: "#4b0fd7",
    imageUrl: portfolio,
    liveLink: "https://your-portfolio-link.vercel.app",
    githubLink: "https://github.com/YOUR_USERNAME/portfolio"
  },

  {
    title: "HornbillGo",
    description: "HornbillGo is a frontend-driven travel discovery platform built to showcase the hidden gems of North East India. Scalable and future ready.",
    techStack: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ],
    gradientFrom: "from-transparent",
    gradientVia: "via-[#f59e0b]/10",
    gradientTo: "to-transparent",
    borderGlow: "#f59e0b",
    imageUrl: hornbillGo,
    liveLink: "https://hornbill-go.vercel.app/",
    githubLink: "https://github.com/ryan-skt/gorkha_commerce.git"
  },

  {
    title: "CampusAid",
    description: "CampusAid is a community-driven web app designed for university students to connect and collaborate.",
    techStack: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", logo: "https://www.svgrepo.com/show/374118/tailwind.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
    ],
    gradientFrom: "from-transparent",
    gradientVia: "via-[#f63b3b]/10",
    gradientTo: "to-transparent",
    borderGlow: "#f63b3b",
    imageUrl: CampusAid,
    ComingSoon: "#",
    liveLink: "",
    githubLink: ""
  }
];