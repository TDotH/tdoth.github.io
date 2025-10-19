import type { photoProps } from "../components/photo/photo";
import PhotoSlide from "../components/photo/photoSlide";
import type { SectionProps } from "./types";

interface AboutMeProps extends SectionProps {
  aboutMeText?: string;
  photos?: photoProps[];
}

function AboutMe({
  ref,
  sectionName,
  className,
  aboutMeText,
  photos,
}: AboutMeProps) {
  return (
    <section
      ref={ref}
      id={sectionName}
      className={"w-full mx-auto  " + (className ?? "")}
    >
      <div>
        <h2 className="text-3xl font-bold text-primary-400 mb-4">About Me</h2>
        <div className="overflow-x-hidden flex-nowrap flex gap-2 ">
          {photos && photos.length > 0 && (
            <>
              <PhotoSlide photos={photos} />
              {/* Duplicate for seamless scrolling effect */}
              <PhotoSlide photos={photos} />
            </>
          )}
        </div>
        <div className="max-w-7xl mx-auto flex flex-row items-center px-4 gap-12">
          <div className="bg-slate-800 rounded-lg shadow-lg p-6">
            <p className="text-lg text-slate-300">
              {aboutMeText ?? "Add Stuff Here"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
