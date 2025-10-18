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

const SectionNames = {
  AboutMe: "About Me",
  WorkExperience: "Work Experience",
  Projects: "Projects",
  Introduction: "Introduction",
};

/* Options for IntersectionObserver to trigger when 75% of the element is visible,
   with a root margin to trigger slightly before fully in view */
const intersectionObserverOptions: IntersectionObserverOptions = {
  root: null,
  rootMargin: "0% 0% -25% 0%",
  threshold: 0.75,
};

function App() {
  const isMobile = useIsMobile();
  const [isScrollPressed, setIsScrollPressed] = useState<boolean>(false);
  const sectionRef = useRef<Record<string, HTMLElement | null>>({
    [SectionNames.AboutMe]: null,
    [SectionNames.WorkExperience]: null,
    [SectionNames.Projects]: null,
    [SectionNames.Introduction]: null,
  });
  const sectionObserverRefs = useRef<(IntersectionObserver | null)[]>([]);

  // useEffect(() => {
  //   sectionObserverRefs.current = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //       }
  //     });
  //   }, intersectionObserverOptions);

  //   sectionRef.current.forEach((section) => {
  //     if (section) sectionObserverRefs.current?.observe(section);
  //   });
  //   return () => sectionObserverRefs.current?.disconnect();
  // }, [sectionRef]);

  const items: NavItemProps[] = [
    {
      name: "About" + (isMobile ? "" : " Me"),
      onClick: () => {},
      className: "bg-primary-100",
    },
    {
      name: "Skills",
      onClick: () => {},
      className: "bg-primary-200",
    },
    {
      name: isMobile ? "Experience" : "Work Experience",
      onClick: () => {},
      className: "bg-primary-300",
    },
    {
      name: "Projects",
      onClick: () => {},
      className: "bg-primary-400",
    },
  ];

  const onNavClick = (section: string) => {
    sectionRef.current[section]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={
        "w-full min-h-[100dvh] bg-background text-foreground flex flex-col cursor-default select-none"
      }
    >
      <header className="w-full sticky top-0 z-10 h-16 justify-center md:justify-end flex items-center gap-4 text-primary-50">
        <Navbar items={items} />
      </header>
      <main>
        <Introduction
          sectionName="Introduction"
          ref={(el) => {
            sectionRef.current["Introduction"] = el;
          }}
          descriptions={introductionDescriptions}
          className="h-[120vh] py-16"
        />
        <AboutMe
          sectionName="About Me"
          ref={(el) => {
            sectionRef.current["About Me"] = el;
          }}
          aboutMeText={aboutMe.aboutMeText}
          photosSrcs={aboutMe.photosSrcs}
          className="min-h-[120vh] py-24"
        />
        <WorkExperience
          sectionName="Work Experience"
          ref={(el) => {
            sectionRef.current["Work Experience"] = el;
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
