import VerticalConnector from "./ui/verticalConnector";

interface WorkCardProps {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  responsibilities: string[];
  logoSrc?: string;
  className?: string;
  show: boolean;
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
}: WorkCardProps) {
  return (
    <div
      className={
        "flex flex-row-reverse items-stretch transition-transform duration-800 group " +
        (!show ? "translate-x-full " : "") +
        (className ?? "")
      }
      aria-hidden={!show}
    >
      <div className={"flex flex-col bg-slate-800 rounded-lg p-4 w-full"}>
        <div className="flex items-center mb-4">
          {logoSrc && (
            <div className="mr-4 bg-white p-2 rounded-lg">
              <img src={logoSrc} alt={`${company} logo`} className="w-36" />
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
        <h3 className="text-lg font-semibold mb-2">Key Responsibilities:</h3>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-slate-300">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
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
