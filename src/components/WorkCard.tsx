import type { Ref } from "react";
import type { WorkExperience } from "../features/types";
import ReactIcon from "./icons/reactIcon";
import TypeScriptIcon from "./icons/typescriptIcon";
import VerticalConnector from "./ui/verticalConnector";

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
  logoSrc,
  className,
  show,
  ref,
}: WorkCardProps) {
  return (
    <div
      ref={ref}
      className={
        "flex flex-row-reverse items-stretch transition-transform duration-800 group " +
        (!show ? "translate-x-full " : "") +
        (className ?? "")
      }
      aria-hidden={!show}
    >
      <div className="w-full bg-slate-800 rounded-lg">
        <div className={"flex flex-col rounded-lg p-4 max-w-2xl "}>
          <div className="flex items-center mb-4">
            {logoSrc && (
              <div className="mr-4 bg-white p-2 rounded-lg">
                <img
                  src={logoSrc}
                  alt={`${company} logo`}
                  className="w-24 sm:w-36"
                />
              </div>
            )}
            <div>
              <h3 className="text-lg md:text-2xl font-bold">{position}</h3>
              <h4 className="text-base md:text-lg text-slate-400">{company}</h4>
              <p className="text-sm md:text-md text-slate-500">
                {startDate} - {endDate}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-3">
              Skills & Technologies:
            </h3>
            <div className="flex space-x-4">
              <div>
                <TypeScriptIcon className="w-12 h-12" />
              </div>
              <div>
                <ReactIcon className="w-12 h-12" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Key Responsibilities:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-300">
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <VerticalConnector
        startText={startDate}
        endText={endDate ?? "Present"}
        show={show}
        className="mx-4"
      />
    </div>
  );
}

export default WorkCard;
