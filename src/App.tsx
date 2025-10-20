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

//Create an array of section names from the SectionNames object, excluding the Introduction section
const sectionNamesArray = Object.values(SectionNames).filter(
  (name) => name !== SectionNames.Introduction
);

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
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
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
            if (entry.target.id === SectionNames.Introduction) {
              setShowNavbar(false);
            } else {
              setShowNavbar(true);
            }
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

  return (
    <div
      className={
        "w-full min-h-[100dvh] bg-background text-foreground flex flex-col cursor-default select-none"
      }
    >
      <header
        className={
          "w-full sticky top-0 transition-translation duration-300 z-10 h-16 justify-between flex items-center gap-4 g-primary-400/30 backdrop-blur-md " +
          (showNavbar ? " " : " -translate-y-20")
        }
      >
        <p className="text-lg sm:ml-[2%] md:ml-[5%] xl:ml-[10%]">
          Tyde Hashimoto
        </p>
        <Navbar items={sectionNamesArray} currentSection={currentSection} />
      </header>
      <main>
        <Introduction
          sectionName="Introduction"
          ref={(el) => {
            sectionRef.current["Introduction"] = el;
          }}
          descriptions={introductionDescriptions}
          className="h-[100vh]"
          sections={sectionNamesArray}
        />
        <AboutMe
          sectionName="About"
          ref={(el) => {
            sectionRef.current["About"] = el;
          }}
          aboutMeText={aboutMe.aboutMeText}
          photos={aboutMe.photos}
          className="min-h-[120vh] my-24"
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
