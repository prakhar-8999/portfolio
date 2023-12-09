interface profileInterface {
  name: string;
  description: string;
}

interface navigationInterface {
  name: string;
  href: string;
}

interface skillsInterface {
  description: string;
  offeredSkills: {
    name: string;
    description: string;
    image: string;
    text: string;
    skills: string[];
  }[];
}

interface serviceInterface {
  description: string;
  onlyShow: number;
  offeredServices: {title: string; description: string; image: string}[];
}

interface thingsIdoInterface {
  description: string;
  resumeShortDescription: string;
  resumeLink: string;
}

interface projectsInterface {
  description: string;
  onlyShow: number;
  projectContent: {
    title: string;
    techStack: string[];
    description: string;
    url: string;
    image: string;
  }[];
}

interface hireMeInterface {
  description: string;
  emailServiceId: string;
  templateId: string;
  publicKey: string;
}

interface footerInterface {
  mainHeading: string;
  tagLine: string;
  mutedText: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  github: string;
}

const profile: profileInterface = {
  name: "Prakhar Porwal",
  description:
    "I have a deep-seated love for code design, relishing the intricate art of transforming substantial and multifaceted challenges into elegant, efficient code. I embrace the opportunity to create solutions that showcase the power of streamlined, well-structured code. Its my belief that the most impactful technology is born from the fusion of innovation and simplicity, and I strive to embody this philosophy in every line I write.",
};

const skills: skillsInterface = {
  description:
    "In this ever-evolving and dynamic landscape of work and technology, having a diverse skill set is paramount. My journey has been marked by a commitment to continuous learning and the cultivation of various competencies that allow me to thrive in diverse environments and contribute meaningfully to projects.",
  offeredSkills: [
    {
      name: "Frontend",
      image: "/frontend.webp",
      description:
        "I enjoy creating visually appealing and user-friendly interfaces, bringing ideas to life in the browser",
      text: "Technologies",
      skills: [
        "Next JS",
        "React JS",
        "Vue JS",
        "Nuxt JS",
        "Tailwind CSS",
        "Angular JS",
      ],
    },
    {
      name: "Backend",
      image: "/backend.webp",
      description:
        "I enjoy solving complex problems through robust and scalable server-side solutions ensuring efficiency and accuracy.",
      text: "Technologies",
      skills: ["Django", "Mysql", "Python", "Rest Api", "Node Js", "Postgres"],
    },
    {
      name: "DevOps",
      image: "/devops.webp",
      description:
        "I prioritize quick product development and streamlined maintenance for existing deployments.",
      text: "Technologies",
      skills: ["VPS", "Docker", "CICD", "Git", "Nginx", "apache"],
    },
  ],
};

const services: serviceInterface = {
  description:
    "In a world where technology is the driving force behind business success, my technical services aim to empower organizations and individuals with the tools they need to thrive in the digital age. If you're seeking a dedicated and knowledgeable partner for your technical needs, I'm here to help you navigate the complexities of the tech world and achieve your goals.",
  onlyShow: 3,
  offeredServices: [
    {
      title: "Software Development",
      description:
        "Crafting tailor-made software solutions to streamline processes, enhance productivity, and drive innovation. My proficiency extends to various programming languages and platforms, ensuring versatile and high-performance applications.",
      image: "/software-development.webp",
    },
    {
      title: "Web Development",
      description:
        "Building responsive and user-friendly websites, web applications, and e-commerce platforms that captivate audiences and drive online growth. My expertise covers front-end and back-end development, database integration, and more.",
      image: "/web-development.jpg",
    },
    {
      title: "IT Administration",
      description:
        "Offering comprehensive IT management services, from system administration to network management. I ensure secure, scalable, and well-maintained IT infrastructures that meet business objectives.",
      image: "/it-adminstration.webp",
    },
    {
      title: "Database Management",
      description:
        "Implementing robust database solutions, ensuring efficient data storage, retrieval, and management. My database expertise spans SQL, NoSQL, data modeling, and optimization for seamless data handling.",
      image: "/database-management.jpg",
    },
    {
      title: "Cloud Services",
      description:
        "I assist in migrating your infrastructure and applications to cloud platforms like AWS, Azure, or Google Cloud, offering cost-effective solutions and scalability. I optimize resource utilization, reduce operational overhead, and improve the efficiency of your cloud-based applications.",
      image: "/cloud-computing.jpg",
    },
    {
      title: "DevOps Implementation",
      description:
        "I streamline your development and operations processes, fostering collaboration, automation, and efficiency to accelerate product delivery. I create robust CI/CD pipelines to automate software testing and deployment, ensuring reliable and rapid release cycles.",
      image: "/devOps.jpg",
    },
  ],
};

const navigation: navigationInterface[] = [
  {name: "Home", href: "#home"},
  {name: "Skills", href: "#skills"},
  {name: "Service", href: "#services"},
  {name: "Resume", href: "#resume"},
  {name: "Projects", href: "#projects"},
  {name: "Hire Me", href: "#hireme"},
];

const thingsIdo: thingsIdoInterface = {
  description:
    "I have meticulously refined my expertise in design, strategy, management, creative direction, and development, making these fields my distinct areas of competence. Through numerous projects, I've consistently recognized that optimizing work processes, adept communication, and a solid measure of self-discipline are pivotal to achieving success. It's my unwavering commitment to a robust work ethic that has been the driving force behind my accomplishments spanning a multitude of specializations.",
  resumeShortDescription:
    "A well-crafted resume conveys your strengths and career narrative effectively.",
  resumeLink:
    "https://drive.google.com/file/d/1RwNw_tk4yEqj486RJ4E3PVe3Xh41tuYZ/view?usp=sharing",
};

const projects: projectsInterface = {
  description:
    "Explore a diverse range of projects that reflect my skills, creativity, and dedication. Each project tells a unique story of problem-solving, innovation, and successful outcomes. Dive into the world of my work and discover the passion and expertise that drive my professional journey.",
  onlyShow: 3,
  projectContent: [
    {
      title: "Innotech-2K23",
      image: "/innotech.png",
      url: "https://innotech.kiet.edu/",
      description:
        "Innotech is the technical fest of our college. Me and my team has made the whole website for proper management of this event. This website includes : Team Creation, Project Allocation Reports, etc.",
      techStack: ["React Js", "Tailwind CSS", "Django", "Mysql"],
    },
    {
      title: "Pizza Ecommerce",
      image: "/pizzafront.png",
      url: "https://pizza-hum.vercel.app",
      description:
        "It refers to the digital platforms dedicated to ordering and delivering pizza online. It provides a convenient way to browse menus, customize their orders, and have their favorite pizzas delivered to their doorstep.",
      techStack: ["Nuxt Js", "Tailwind CSS", "Django", "Sql lite", "PWA"],
    },
    {
      title: "Student Portal",
      image: "/studentPortal.png",
      url: "https://tech.kiet.edu/StudentPortal",
      description:
        "Student Portal is the student end of ERP System, which consists of Student Attendance, Marks, Grievance and many more. It includes overall life cycle of a student during the journey of it's graduation.",
      techStack: [
        "Docker",
        "React Js",
        "yarn",
        "Tailwind CSS",
        "Django",
        "Mysql",
        "PWA",
      ],
    },
    {
      title: "ERP",
      image: "/erpPortal.png",
      url: "https://tech.kiet.edu",
      description:
        "KIET ERP is an in-house ERP System for the college completely directed and developed by students. Handle confidential information and documents with discretion and maintain their proper organization.",
      techStack: ["Angular Js", "Django", "Mysql"],
    },
    {
      title: "TheCV",
      image: "/thecv.png",
      url: "https://thecv.in",
      description:
        "The CV is a digital platform designed to provide users with the tools, resources, and functionalities necessary to create, showcase, and manage their own personalized digital portfolios.",
      techStack: ["Next Js","Tailwind CSS", "GO", "Mysql"],
    },
  ],
};

const hireMe: hireMeInterface = {
  description:
    "I'm in pursuit of assistance and mentorship to attain a significant career opportunity where I can apply my expertise and further my professional development.",
  emailServiceId: "service_pusfxjs",
  templateId: "template_xsx2eag",
  publicKey: "h7fYWQu7aTXR0glCg",
};

const footer: footerInterface = {
  mainHeading: "Prakhar Porwal",
  tagLine: "@ Made with love",
  mutedText: "by Prakhar Porwal",
  twitter: "https://twitter.com/prakhar_IT09",
  facebook: "",
  instagram: "",
  linkedin: "https://linkedin.com/in/prakhar-porwal-9b30a6237",
  github: "https://github.com/prakhar-8999",
};

export {
  footer,
  hireMe,
  navigation,
  profile,
  projects,
  services,
  skills,
  thingsIdo,
};
