import { useState } from "react";
import WorkCard from "../components/WorkCard";
import Button from "../components/ui/button";
import type { SkillChartData } from "../components/SkillsPieChart";
import SkillsPieChart from "../components/SkillsPieChart";
import type { SectionProps, WorkExperienceSection } from "./types";

interface WorkExperienceProps extends SectionProps {
  workExperiences?: WorkExperienceSection[];
}

function WorkExperience({
  sectionName,
  ref,
  workExperiences,
}: WorkExperienceProps) {
  const [showCard, setShowCard] = useState(false);
  const [showChartAnimation, setShowChartAnimation] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);

    // Trigger chart animation only when showing the card, delay slightly for better effect
    setTimeout(() => {
      setShowChartAnimation(!showCard);
    }, 800);
  };

  return (
    <section
      ref={ref}
      id={sectionName}
      className="min-h-[100vh] flex flex-1 flex-col items-center overflow-x-hidden py-8"
    >
      <div className="text-4xl mb-6">
        <h2>Work Experience</h2>
      </div>
      <Button onClick={toggleCard} className="mb-4">
        {showCard ? "Hide Details" : "Show Details"}
      </Button>
      {workExperiences?.map((section, index) => (
        <div
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
