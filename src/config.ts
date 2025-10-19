import type { ProjectCardProps } from "./components/ProjectCard";
import type { AboutMe, WorkExperienceSection } from "./features/types";
import cbLogo from "./assets/employment/cb-logo-m.png";
import about1 from "./assets/aboutMe/about1.jpg";
import about2 from "./assets/aboutMe/about2.jpg";
import about3 from "./assets/aboutMe/about3.jpg";
import about4 from "./assets/aboutMe/about4.jpg";
import about5 from "./assets/aboutMe/about5.jpg";
import about6 from "./assets/aboutMe/about6.jpg";
//#region Introduction

const introductionDescriptions: string[] = [
  "a Full-Stack Developer",
  "a Coffee Enthusiast",
  "an Ironman",
  "a Cat Lover",
];

//#endregion

//#region About Me

const aboutMe: AboutMe = {
  aboutMeText: `Hello! I'm Tyde, a passionate software developer with a love for creating innovative solutions. 
  With a background in computer science and years of experience in full-stack development, 
  I enjoy working on projects that challenge me to learn and grow. 
  When I'm not coding, you can find me exploring the outdoors, reading tech blogs, 
  or experimenting with new programming languages and frameworks.`,
  photos: [
    {
      src: about1,
      title: "Ironman Finisher!",
      description: "At the finish line of my first Ironman triathlon.",
    },
    {
      src: about2,
      title: "Tulip Fields in the Oregon Springtime.",
      description: "Enjoying the vibrant colors of spring.",
    },
    {
      src: about3,
      title: "Italy Trip",
      description: "Some cool street art",
    },
    {
      src: about4,
      title: "Italy Trip",
      description: "Exploring the beautiful streets of Italy.",
    },
    {
      src: about5,
      title: "Oregon Springtime",
      description: "Admiring the beautiful cherry blossoms.",
    },
    {
      src: about6,
      title: "Mochi",
      description: "My cat being adorable.",
    },
  ],
};

//#endregion

//#region Work Experiences

const workExperiences: WorkExperienceSection[] = [
  {
    workExperience: {
      company: "Currie & Brown",
      position: "Front-end Engineer",
      startDate: "June 2022",
      endDate: "Present",
      logoSrc: cbLogo,
      responsibilities: [
        "Develop and maintain web applications using React and TypeScript.",
        "Collaborate with cross-functional teams to define, design, and ship new features.",
        "Optimize applications for maximum speed and scalability.",
        "Implement responsive design to ensure compatibility across various devices and screen sizes.",
        "Participate in code reviews and contribute to team knowledge sharing.",
      ],
    },
    skillsData: [
      {
        name: "React",
        value: 60,
        color: "#61DAFB",
      },
      {
        name: "Typescript",
        value: 30,
        color: "#007ACC",
      },
      {
        name: "C#",
        value: 10,
        color: "#68217A",
      },
    ],
  },
];

//#endregion

//#region Current Projects

const currentProjects: ProjectCardProps[] = [
  {
    title: "Wani Tracker",
    description:
      "A web app to help track Japanese learning progress using WaniKani's API.",
    tags: ["react", "tailwind"],
    githubUrl: "https://github.com/TDotH/wani-tracker",
  },
  {
    title: "Abacus",
    description: "A budgeting app to help track expenses and income, and more.",
    tags: ["react", "tailwind"],
  },
];

//#endregion

//#region Past Projects

const pastProjects: ProjectCardProps[] = [];

//#endregion

export {
  aboutMe,
  currentProjects,
  pastProjects,
  workExperiences,
  introductionDescriptions,
};
