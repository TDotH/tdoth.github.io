import { useState } from "react";
import cbLogo from "../assets/employment/cb-logo-m.png";
import WorkCard from "../components/WorkCard";
import Button from "../components/ui/button";

interface WorkExperienceProps {}

function WorkExperience({}: WorkExperienceProps) {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <div className="flex flex-1 flex-col justify-center items-center overflow-x-hidden ">
      <div className="text-4xl mb-6">
        <h2>Work Experience</h2>
      </div>
      <Button onClick={toggleCard} className="mb-4">
        {showCard ? "Hide Details" : "Show Details"}
      </Button>
      <div className="w-full p-2 space-y-16 sm:p-0  lg:ml-[55%]">
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
