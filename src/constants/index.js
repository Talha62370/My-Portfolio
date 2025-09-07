import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";



export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. 
 I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    company: "Apna College",
    role: "Full Stack Developer",
    technologies: ["Javascript", "React.js", "Next.js", "MongoDB", "Sql", "Git"],
  },
  
  {
    year: "2024",
    role: "Full Stack Developer",
    company: "UpFlair Pvt.",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. 
    Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to 
    deliver high-quality software products on schedule.`,
    technologies: ["HTML", "CSS", "JavaScript", "React.Js"],
  },
  {
    year: "2023",
    role: "Cloud & DevOps with Linux",
    company: "Learn & Build Pvt",
    description: `Gained hands-on experience in cloud infrastructure management using AWS and Docker to streamline 
    DevOps workflows. Automated tasks and improved CI/CD pipeline, enhancing development efficiency and speed.`,
    technologies: ["Docker", "Kubernetes", "CI/CD", "DevOps"],
  },
];

export const PROJECTS = [
  {
    title: "QuickBlog",
    image: project1,
    description:
      "An AI-powered blogging platform that generates blog content from a given title and description. Includes social media sharing integration for instant publishing.",
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "OpenAI API"],
    github: "https://github.com/yourusername/quickblog",
    live: "https://quickblog-demo.vercel.app",
  },
  {
    title: "Learning Management System (LMS)",
    image: project2,
    description:
      "A complete LMS platform with user roles (Admin, Instructor, Student), course management, quizzes, and progress tracking. Built for seamless online education.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS"],
    github: "https://github.com/yourusername/lms-project",
    live: "#",
  },
  {
    title: "School Directory",
    image: project3,
    description:
      "A centralized school directory system for managing school profiles, contact info, and educator details. Includes search and filter functionality.",
    technologies: ["React", "Express", "MySQL", "Node.js", "Bootstrap"],
    github: "https://github.com/yourusername/school-directory",
    live: "https://school-directory-demo.vercel.app",
  },
];


export const CONTACT = {
  address: "Sitapura Ricco Industrial Area, Jaipur, (Rajasthan) 302022",
  phoneNo: "6201948479",
  email: "malickabutalaha@gmail.com",
};
