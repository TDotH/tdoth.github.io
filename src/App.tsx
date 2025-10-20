import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar, { type NavItemProps } from "./components/Navbar";
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
import type { IntersectionObserverOptions } from "./features/types";
import Skills from "./features/Skills";

const SectionNames = {
  AboutMe: "About",
  Skills: "Skills",
  WorkExperience: "Experience",
  Projects: "Projects",
  Introduction: "Introduction",
};

const sectionColors = {
  [SectionNames.Introduction]: "bg-primary-50",
  [SectionNames.AboutMe]: "bg-primary-100",
  [SectionNames.Skills]: "bg-primary-200",
  [SectionNames.WorkExperience]: "bg-primary-300",
  [SectionNames.Projects]: "bg-primary-400",
};

/* Options for IntersectionObserver to trigger when 75% of the element is visible,
   with a root margin to trigger slightly before fully in view */
const intersectionObserverOptions: IntersectionObserverOptions = {
  root: null,
  rootMargin: "0% 0% 0% 0%",
  threshold: 0.65,
};

function App() {
  const isMobile = useIsMobile();
  const [currentSection, setCurrentSection] = useState<string>("");
  const [isScrollPressed, setIsScrollPressed] = useState<boolean>(false);
  const sectionRef = useRef<Record<string, HTMLElement | null>>({
    [SectionNames.AboutMe]: null,
    [SectionNames.Skills]: null,
    [SectionNames.WorkExperience]: null,
    [SectionNames.Projects]: null,
    [SectionNames.Introduction]: null,
  });
  const sectionObserverRefs = useRef<
    Record<string, IntersectionObserver | null>
  >({
    [SectionNames.AboutMe]: null,
    [SectionNames.Skills]: null,
    [SectionNames.WorkExperience]: null,
    [SectionNames.Projects]: null,
    [SectionNames.Introduction]: null,
  });

  useEffect(() => {
    Object.keys(sectionObserverRefs.current).forEach((key) => {
      sectionObserverRefs.current[key] = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Entering ${entry.target.id} section`);
            setCurrentSection(entry.target.id);
          }
        });
      }, intersectionObserverOptions);
    });

    Object.keys(sectionRef.current).forEach((key) => {
      const section = sectionRef.current[key];
      if (section) sectionObserverRefs.current[key]?.observe(section);
    });

    return () => {
      Object.keys(sectionObserverRefs.current).forEach((key) => {
        sectionObserverRefs.current[key]?.disconnect();
      });
    };
  }, [sectionRef]);

  const onNavClick = (section: string) => {
    sectionRef.current[section]?.scrollIntoView({ behavior: "smooth" });
  };

  const items: NavItemProps[] = [
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
  ];

  return (
    <div
      className={
        "w-full min-h-[100dvh] bg-background text-foreground flex flex-col cursor-default select-none"
      }
    >
      <header className="w-full sticky top-0 z-10 h-16 justify-center md:justify-end flex items-center gap-4 text-primary-50 hidden">
        <Navbar items={items} currentSection={currentSection} />
      </header>
      <main>
        <Introduction
          sectionName="Introduction"
          ref={(el) => {
            sectionRef.current["Introduction"] = el;
          }}
          descriptions={introductionDescriptions}
          className="h-[100vh]"
          sections={[
            SectionNames.AboutMe,
            SectionNames.Skills,
            SectionNames.WorkExperience,
            SectionNames.Projects,
          ]}
        />
        <AboutMe
          sectionName="About"
          ref={(el) => {
            sectionRef.current["About"] = el;
          }}
          aboutMeText={aboutMe.aboutMeText}
          photos={aboutMe.photos}
          className="min-h-[120vh] py-24"
        />
        <Skills
          sectionName="Skills"
          ref={(el) => {
            sectionRef.current["Skills"] = el;
          }}
          skillsData={[]}
          className="min-h-[120vh] py-24"
        />
        <WorkExperience
          sectionName="Experience"
          ref={(el) => {
            sectionRef.current["Experience"] = el;
          }}
          workExperiences={workExperiences}
          className={"min-h-[120vh] py-24"}
        />
        <Projects
          sectionName="Projects"
          ref={(el) => {
            sectionRef.current["Projects"] = el;
          }}
          currentProjects={currentProjects}
          pastProjects={pastProjects}
          className="min-h-[120vh] py-24"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
