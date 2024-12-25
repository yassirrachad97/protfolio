// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "../src/assets/images/Projects/img1.png";

import project2 from "../src/assets/images/projects/img2.png";
import project3 from "../src/assets/images/projects/img3.png";
import person_project from "../src/assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";


import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward } from "react-icons/md";
import {  BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa"; // Icône GitHub

import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Mern-Stack Developer",
    firstName: "Yassir",
    LastName: "Rachad",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "💻",
        text: "Building seamless, scalable, and dynamic web applications using the MERN stack.",
      },
      {
        count: "🌟",
        text: "Let's create something extraordinary together!",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "BackEnd",
        para: "Backend technologies and frameworks.",
        logo: figma,
        details: ["🟢 Node.js", "🦉 NestJS", "🚄 Express.js"],
      },
      {
        name: "FrontEnd",
        para: "Frontend technologies and frameworks.",
        logo: nodejs,
        details: ["⚛ React.js", "⬛ Next.js", "🟨 JavaScript","🌈 Tailwind CSS", "🔶 HTML5", "🔵 CSS3"],
      },
      {
        name: "DataBase",
        para: "Database management systems.",
        logo: ps,
        details: ["🍃 MongoDB", "🐬 MySQL"],
      },
      {
        name: "Tools",
        para: "Development tools and utilities.",
        logo: reactjs,
        details: ["🖋 UML", "🎨 Figma", "🐋 Docker", "🧪 Test"],
      },
      {
        name: "Version Control",
        para: "Version control systems.",
        logo: sketch,
        details: ["🐙 Git", "🐱 GitHub", "🧑‍💻GitLab"],
      },
      {
        name: "Projects Management",
        para: "Project management tools.",
        logo: python,
        details: ["📈 Jira", "🗂️ Trello"],
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development (MERN)",
        para: "I build scalable, secure, and dynamic web applications using the MERN stack. From front-end design to back-end implementation, I provide end-to-end solutions for your web projects.",
        logo: services_logo1,
      },
      {
        title: "DevOps Solutions",
        para: "I set up CI/CD pipelines for automated testing and deployment, ensuring faster and more reliable code delivery. Additionally, I provide Docker containerization for portable and scalable application deployment across environments.",
        logo: services_logo2,
      },
      {
        title: "Cloud Infrastructure Management",
        para: "I manage cloud infrastructures, from AWS, ensuring scalability, security, and high availability. I specialize in infrastructure as code and automated deployment.",
        logo: services_logo3,
      },
      {
        title: "Agile Project Management",
        para: "I manage development cycles with Agile methodologies, including Scrum, for efficient project execution. I ensure that deadlines are met and that your project evolves smoothly.",
        logo: services_logo1,
      },
    ],
  },

  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "ChatApi",
        image: project1,
        github: "https://github.com/yassirrachad97/chatAPI.git",
      },
      
      {
        title: "SportGO",
        image: project2,
        github: "https://github.com/yassirrachad97/SportGo.git",
      },
      {
        title: "Bebliothech",
        image: project3,
        github: "https://github.com/yassirrachad97/bibliotech.git",
      },
    ],
  },

  Testimonials: {
    title: "Professional Experience",
    subtitle: "MY CAREER JOURNEY",
    testimonials_content: [
   

      {
        review:
           "“Built an application to manage all departments within construction companies Participated in optimizing the project planning process.”",
           img: avatar2,
        name: "Active-Digital",
      },
      
      {
        review:
          "“Ensured the process after the packaging of pallets Entered the departure sheets.”",
        img: avatar1,
        name: "Red-pack",
      },
   
   
    ],
  },
 
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "As a MERN stack developer, I specialize in building modern, responsive, and dynamic web applications, delivering seamless user experiences and efficient backend solutions tailored to meet diverse business needs.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "yassirrachad1997@gmail.com",
        icon: GrMail,
        link: "mailto:yassirrachad1997@gmail.com",
      },
      {
        text: "LinkedIn Profile",
        icon: BsLinkedin, // Assurez-vous d'importer cette icône : import { BsLinkedin } from "react-icons/bs";
        link: "https://www.linkedin.com/in/yassir-rachad-00233b204/", // Remplacez 'your-profile' par votre identifiant LinkedIn
    },
      {
        text: "GitHub Profile",
        icon: FaGithub,
        link: "https://github.com/yassirrachad97", // Remplacez 'your-username' par votre nom d'utilisateur GitHub
    }
    
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved ",
  },
};
