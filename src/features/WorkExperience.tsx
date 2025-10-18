import { useEffect, useRef, useState } from "react";
import WorkCard from "../components/WorkCard";
import Button from "../components/ui/button";
import SkillsPieChart from "../components/SkillsPieChart";
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
  threshold: 0.75,
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
        "flex flex-1 flex-col items-center overflow-x-hidden bg-primary-300 text-primary-50" +
        (className ? " " + className : "")
      }
    >
      <div
        //ref={(el) => (workExperienceRefs.current[0] = el)}
        className="text-4xl mb-6"
      >
        <h2>Work Experience</h2>
      </div>
      <Button onClick={toggleCard} className="mb-4">
        {showCard ? "Hide Details" : "Show Details"}
      </Button>
      {workExperiences?.map((section, index) => (
        <div
          // @ts-ignore -- ref forwarding issue
          ref={(el: HTMLDivElement | null) =>
            (workExperienceRefs.current[index] = el)
          }
          key={index}
          className="flex w-full p-2 space-y-16 sm:p-0 lg:ml-[40%]"
        >
          <div
            className={
              "transition-opacity duration-500 hidden lg:block opacity-0 " +
              (showCard ? "delay-800 opacity-100" : "")
            }
          >
            <h3 className="flex justify-center text-xl font-semibold mb-3">
              Core Technologies Used (by time spent):
            </h3>
            <SkillsPieChart
              data={section.skillsData}
              showChartAnimation={showChartAnimation}
            />
          </div>
          <WorkCard
            company={section.workExperience.company}
            position={section.workExperience.position}
            startDate={section.workExperience.startDate}
            endDate={section.workExperience.endDate}
            responsibilities={section.workExperience.responsibilities}
            logoSrc={section.workExperience.logoSrc}
            show={showCard}
            className="w-full"
          />
        </div>
      ))}
    </section>
  );
}

export default WorkExperience;
