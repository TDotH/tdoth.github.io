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
      <h2 className="text-6xl w-7xl mx-auto font-bold text-primary lg:mb-4 px-4 md:px-6">
        About Me
      </h2>
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
        <div className="lg:p-6">
          <p className="text-lg md:text-2xl text-foreground leading-snug md:leading-relaxed">
            {aboutMeText ?? "Add Stuff Here"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
