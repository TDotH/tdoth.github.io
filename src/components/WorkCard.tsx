import type { Ref } from "react";
import type { WorkExperience } from "../features/types";
import VerticalConnector from "./ui/verticalConnector";
import Badge from "./ui/badge";

export interface WorkCardProps extends WorkExperience {
  className?: string;
  show: boolean;
  ref?: Ref<HTMLDivElement | null>;
}

function WorkCard({
  company,
  position,
  startDate,
  endDate,
  responsibilities,
  className,
  skills,
  show,
  ref,
}: WorkCardProps) {
  return (
    <article
      ref={ref}
      className={
        "flex flex-row-reverse justify-center items-stretch transition-transform duration-800 group " +
        (!show ? "translate-x-full " : "") +
        (className ?? "")
      }
      aria-hidden={!show}
    >
      <div className="rounded-lg bg-background text-foreground flex flex-col rounded-lg p-4 max-w-2xl gap-2 shadow-xs z-2">
        <div className="flex flex-col">
          {/* {logoSrc && (
              <div className="mr-4 bg-white p-2 rounded-lg">
                <img
                  src={logoSrc}
                  alt={`${company} logo`}
                  className="w-24 sm:w-36"
                />
              </div>
            )} */}
          <h3 className="text-2xl font-bold md:text-5xl">{position}</h3>
          <h4 className="text-base font-semibold md:text-3xl">{company}</h4>
          <p className="block sm:hidden text-sm md:text-xl">
            {startDate} - {endDate}
          </p>
        </div>
        <ul className="w-full flex flex-wrap gap-2">
          {skills?.map((skill, index) => (
            <li key={index}>
              <Badge className="bg-foreground text-background">{skill}</Badge>
            </li>
          ))}
        </ul>
        <div>
          <h3 className="text-lg font-semibold mb-2">Key Responsibilities:</h3>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <VerticalConnector
        startText={startDate}
        endText={endDate ?? "Present"}
        show={show}
        className="mx-4"
      />
    </article>
  );
}

export default WorkCard;
