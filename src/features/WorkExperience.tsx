import { useState } from "react";
import cbLogo from "../assets/employment/cb-logo-m.png";
import WorkCard from "../components/WorkCard";
import Button from "../components/ui/button";
import type { SkillChartData } from "../components/SkillsPieChart";
import SkillsPieChart from "../components/SkillsPieChart";

interface WorkExperienceProps {}

const workExperienceData: SkillChartData[] = [
  {
    name: "React",
    value: 60,
    color: "#61DAFB",
  },
  {
    name: "Typescript",
    value: 30,
    color: "#007ACC",
  },
  {
    name: "C#",
    value: 10,
    color: "#68217A",
  },
];

function WorkExperience({}: WorkExperienceProps) {
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
    <div className="min-h-[100vh] flex flex-1 flex-col items-center overflow-x-hidden py-8">
      <div className="text-4xl mb-6">
        <h2>Work Experience</h2>
      </div>
      <Button onClick={toggleCard} className="mb-4">
        {showCard ? "Hide Details" : "Show Details"}
      </Button>
      <div className="flex w-full p-2 space-y-16 sm:p-0 lg:ml-[40%]">
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
            data={workExperienceData}
            showChartAnimation={showChartAnimation}
          />
        </div>
        <WorkCard
          show={showCard}
          company="Currie & Brown"
          position="Front-end Engineer"
          startDate="June 2023"
          endDate="Present"
          responsibilities={[
            "Develop and maintain web applications using React and TypeScript.",
            "Collaborate with cross-functional teams to define, design, and ship new features.",
            "Optimize applications for maximum speed and scalability.",
            "Implement responsive design to ensure compatibility across various devices and screen sizes.",
            "Participate in code reviews and contribute to team knowledge sharing.",
          ]}
          logoSrc={cbLogo}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default WorkExperience;
