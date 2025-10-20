import { useEffect, useRef, useState } from "react";
import WorkCard from "../components/WorkCard";
import Button from "../components/ui/button";
import type {
  IntersectionObserverOptions,
  SectionProps,
  WorkExperienceSection,
} from "./types";

interface WorkExperienceProps extends SectionProps {
  workExperiences?: WorkExperienceSection[];
}

/* Options for IntersectionObserver to trigger when 75% of the element is visible,
   with a root margin to trigger slightly before fully in view */
const intersectionObserverOptions: IntersectionObserverOptions = {
  root: null,
  rootMargin: "0% 0% -25% 0%",
  threshold: 0.85,
};

function WorkExperience({
  sectionName,
  workExperiences,
  className,
  ref,
}: WorkExperienceProps) {
  const [showCard, setShowCard] = useState(false);
  const [showChartAnimation, setShowChartAnimation] = useState(false);
  const workExperienceRefs = useRef<(HTMLElement | null)[]>([]);
  const workExperienceObserverRef = useRef<IntersectionObserver | null>(null);

  const toggleCard = () => {
    setShowCard(!showCard);

    // Trigger chart animation only when showing the card, delay slightly for better effect
    setTimeout(() => {
      setShowChartAnimation(!showCard);
    }, 800);
  };

  useEffect(() => {
    workExperienceObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          toggleCard();
        }
      });
    }, intersectionObserverOptions);

    workExperienceRefs.current.forEach((section) => {
      if (section) workExperienceObserverRef.current?.observe(section);
    });
    return () => workExperienceObserverRef.current?.disconnect();
  }, [workExperienceRefs]);

  return (
    <section
      ref={ref}
      id={sectionName}
      className={
        "flex flex-1 flex-col items-center overflow-x-hidden " +
        (className ? " " + className : "")
      }
    >
      <div className="w-full before:absolute before:w-full before:h-[75%] before:md:h-[45%] before:mx-none before:bg-foreground">
        <h2 className="relative z-1 text-6xl max-w-7xl mx-auto font-bold text-background lg:mb-4 p-4 md:p-6 ">
          Experience
        </h2>
      </div>
      {/* <Button onClick={toggleCard} className="mb-4 z-1">
        {showCard ? "Hide Details" : "Show Details"}
      </Button> */}
      {workExperiences?.map((section, index) => (
        <div
          key={index}
          className="w-full p-4 md:p-0"
          // @ts-ignore -- ref forwarding issue
          ref={(el) => (workExperienceRefs.current[index] = el)}
        >
          <WorkCard
            company={section.workExperience.company}
            position={section.workExperience.position}
            startDate={section.workExperience.startDate}
            endDate={section.workExperience.endDate}
            responsibilities={section.workExperience.responsibilities}
            logoSrc={section.workExperience.logoSrc}
            skills={section.workExperience.skills}
            show={showCard}
            className=""
          />
        </div>
      ))}
    </section>
  );
}

export default WorkExperience;
