import type { SectionProps } from "./types";

interface AboutMeProps extends SectionProps {
  className?: string;
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
      className={
        "w-full min-h-[100vh] max-w-4xl p-4 mx-auto my-8  " + (className ?? "")
      }
    >
      <div className="bg-slate-800 rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
        <p className="text-lg text-slate-300">
          {aboutMeText ?? "Add Stuff Here"}
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
