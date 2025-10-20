import type { SectionProps } from "./types";

interface SkillsProps extends SectionProps {
  skillsData: { name: string; color: string }[];
}

function Skills({ ref, sectionName, skillsData, className }: SkillsProps) {
  return (
    <section
      ref={ref}
      className={"w-full mx-auto " + (className ?? "")}
      id={sectionName}
    >
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skillsData.map((skill) => (
          <div key={skill.name} className="flex items-center">
            <div
              className="w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: skill.color }}
            />
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
