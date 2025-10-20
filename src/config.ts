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
      title: "Ironman 2024",
      description: "At the finish line of my first Ironman triathlon.",
    },
    {
      src: about2,
      title: "Oregon Tulips",
      description: "Enjoying the vibrant colors of spring.",
    },
    {
      src: about3,
      title: "Rome",
      description: "Some cool street art",
    },
    {
      src: about4,
      title: "Florence",
      description: "Exploring the beautiful streets of Italy.",
    },
    {
      src: about5,
      title: "Mochi",
      description: "My cat being adorable.",
    },
    {
      src: about6,
      title: "Oregon Spring",
      description: "Admiring the beautiful cherry blossoms.",
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
        "Lead the re-architecture of the front-end framework to React, working in close collaboration with clients and the senior developer to improve responsiveness and overall user experience.",
        "Managed the CI/CD pipeline using Azure DevOps, improving maintainability by integrating unit tests with Jest and optimizing build processes with Webpack",
        "Worked alongside a senior developer to mentor interns, fostering their professional development through hands-on project involvement and constructive feedback.",
        "Contributed to system architecture, API development, and code reviews within an Agile environment across both front-end and back-end stacks.",
      ],
      skills: ["React", "TypeScript", "Tailwind CSS", "ASP.NET", "C#"],
    },
  },
];

//#endregion

//#region Current Projects

const currentProjects: ProjectCardProps[] = [
  {
    title: "Wani Tracker",
    description:
      "A website to help track Japanese learning progress using WaniKani's API.",
    tags: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/TDotH/wani-tracker",
  },
  {
    title: "Abacus",
    description: "A budgeting app to help track expenses, income, and more.",
    tags: ["React", "Tailwind CSS"],
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
