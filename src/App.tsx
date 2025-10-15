import { useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./features/Introduction";
import WorkExperience from "./features/WorkExperience";
import Projects from "./features/Projects";
import Footer from "./features/Footer";
import AboutMe from "./features/AboutMe";
import {
  aboutMe,
  currentProjects,
  introductionDescriptions,
  pastProjects,
  workExperiences,
} from "./config";

function App() {
  const currentSection = useState("About Me");
  const workExperienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const aboutMeRef = useRef<HTMLElement>(null);
  const introductionRef = useRef<HTMLElement>(null);

  const onNavClick = (section: string) => {
    switch (section) {
      case "About Me":
        aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Work Experience":
        workExperienceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full min-h-[100dvh] bg-background text-foreground flex flex-col">
      <Navbar
        items={[
          { name: "About Me", onClick: () => onNavClick("About Me") },
          { name: "Skills", onClick: () => onNavClick("Skills") },
          {
            name: "Work Experience",
            onClick: () => onNavClick("Work Experience"),
          },
          { name: "Projects", onClick: () => onNavClick("Projects") },
        ]}
      />
      <div>
        <Introduction
          sectionName="Introduction"
          ref={introductionRef}
          descriptions={introductionDescriptions}
        />
        <AboutMe
          sectionName="About Me"
          ref={aboutMeRef}
          aboutMeText={aboutMe.aboutMeText}
          photosSrcs={aboutMe.photosSrcs}
        />
        <WorkExperience
          sectionName="Work Experience"
          ref={workExperienceRef}
          workExperiences={workExperiences}
        />
        <Projects
          sectionName="Projects"
          ref={projectsRef}
          currentProjects={currentProjects}
          pastProjects={pastProjects}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
