import { useRef } from "react";
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
import { useIsMobile } from "./utils/useIsMobile";

function App() {
  const isMobile = useIsMobile();
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
          {
            name: "About" + (isMobile ? "" : " Me"),
            onClick: () => onNavClick("About Me"),
            className: "bg-primary-100",
          },
          {
            name: "Skills",
            onClick: () => onNavClick("Skills"),
            className: "bg-primary-200",
          },
          {
            name: isMobile ? "Experience" : "Work Experience",
            onClick: () => onNavClick("Work Experience"),
            className: "bg-primary-300",
          },
          {
            name: "Projects",
            onClick: () => onNavClick("Projects"),
            className: "bg-primary-400",
          },
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
