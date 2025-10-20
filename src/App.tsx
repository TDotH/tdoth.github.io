import { useEffect, useRef, useState } from "react";
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
import type { IntersectionObserverOptions } from "./features/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
//import Skills from "./features/Skills";

const SectionNames = {
  AboutMe: "About",
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
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const sectionRef = useRef<Record<string, HTMLElement | null>>({
    [SectionNames.AboutMe]: null,
    [SectionNames.WorkExperience]: null,
    [SectionNames.Projects]: null,
    [SectionNames.Introduction]: null,
  });
  const sectionObserverRefs = useRef<
    Record<string, IntersectionObserver | null>
  >({
    [SectionNames.AboutMe]: null,
    [SectionNames.WorkExperience]: null,
    [SectionNames.Projects]: null,
    [SectionNames.Introduction]: null,
  });

  const toTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    Object.keys(sectionObserverRefs.current).forEach((key) => {
      sectionObserverRefs.current[key] = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
          "w-full sticky bg-background/20 top-0 transition-translation duration-300 z-10 h-10 md:h-16 justify-between flex items-center gap-4 backdrop-blur-md " +
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
          className="py-24"
        />
        {/* <Skills
          sectionName="Skills"
          ref={(el) => {
            sectionRef.current["Skills"] = el;
          }}
          skillsData={[]}
          className="py-24"
        /> */}
        <WorkExperience
          sectionName="Experience"
          ref={(el) => {
            sectionRef.current["Experience"] = el;
          }}
          workExperiences={workExperiences}
          className={"min-h-[85vh] py-24"}
        />
        <Projects
          sectionName="Projects"
          ref={(el) => {
            sectionRef.current["Projects"] = el;
          }}
          currentProjects={currentProjects}
          pastProjects={pastProjects}
          className="sm:min-h-[80vh] py-24"
        />
      </main>
      <button
        onClick={toTopClick}
        className={
          "transition-translation w-12 duration-600 sticky z-12 cursor-pointer bottom-17 left-[80%] md:left-[90%] border-2 border-foreground bg-background/20 hover:bg-foreground/20 active:bg-foreground/10 backdrop-blur-md rounded-lg p-1 text-foreground " +
          (showNavbar ? "" : "translate-x-60")
        }
      >
        <FontAwesomeIcon
          className="transition-colors"
          size="lg"
          icon={faAngleUp}
        />
      </button>
      <Footer show={showNavbar} />
    </div>
  );
}

export default App;
