interface profileInterface {
  name: string;
  description: string;
  navigation: {name: string; href: string}[];
}

interface skillsInterface {
  description: string;
}

interface serviceInterface {
  description: string;
  onlyShow: number;
  offeredServices: {title: string; description: string; image: string}[];
}

const profile: profileInterface = {
  name: "Prakhar Porwal",
  description:
    "I have a deep-seated love for code design, relishing the intricate art of transforming substantial and multifaceted challenges into elegant, efficient code. I embrace the opportunity to create solutions that showcase the power of streamlined, well-structured code. Its my belief that the most impactful technology is born from the fusion of innovation and simplicity, and I strive to embody this philosophy in every line I write.",
  navigation: [
    {name: "Home", href: "#home"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
  ],
};

const skills: skillsInterface = {
  description:
    "In this ever-evolving and dynamic landscape of work and technology, having a diverse skill set is paramount. My journey has been marked by a commitment to continuous learning and the cultivation of various competencies that allow me to thrive in diverse environments and contribute meaningfully to projects.",
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

const navigation = [
  {name: "Home", href: "#home"},
  {name: "Skills", href: "#skills"},
  {name: "Projects", href: "#projects"},
  {name: "Contact", href: "#contact"},
];

const thingsIdo = {
  discription:
    "I have meticulously refined my expertise in design, strategy, management, creative direction, and development, making these fields my distinct areas of competence. Through numerous projects, I've consistently recognized that optimizing work processes, adept communication, and a solid measure of self-discipline are pivotal to achieving success. It's my unwavering commitment to a robust work ethic that has been the driving force behind my accomplishments spanning a multitude of specializations.",

  resumeShortDescription:
    "A well-crafted resume conveys your strengths and career narrative effectively.",
  resumeLink:
    "https://drive.google.com/file/d/16CHZUU486IF_4iswJS1Fb8WCnSIswLz9/view?usp=sharing",
};

export {navigation, profile, services, skills, thingsIdo};
