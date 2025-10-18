import type { SectionProps } from "./types";

interface AboutMeProps extends SectionProps {
  aboutMeText?: string;
  photosSrcs?: string[];
}

function AboutMe({
  ref,
  sectionName,
  className,
  aboutMeText,
  photosSrcs,
}: AboutMeProps) {
  return (
    <section
      ref={ref}
      id={sectionName}
      className={"w-full mx-auto  " + (className ?? "")}
    >
      <div>
        <div></div>
        <div className="bg-slate-800 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-slate-300">
            {aboutMeText ?? "Add Stuff Here"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
