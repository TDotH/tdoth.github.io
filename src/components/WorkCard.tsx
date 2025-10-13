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
        "flex flex-row-reverse transition-transform duration-800 group " +
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
      <div
        className={
          "h-full w-[200px] mr-4 text-lg flex-col overflow-y-hidden hidden md:flex "
        }
      >
        <div className="h-full flex flex-col justify-between items-center">
          <div
            className={
              "z-2 bg-slate-900 p-2 rounded border-1 border-slate-800 transition-opacity duration-400 opacity-0 " +
              (show ? " delay-750 opacity-100 " : "")
            }
          >
            {endDate}
          </div>
          <div
            className={
              "w-[3px] transition-all bg-slate-800 ease-in-out flex-grow-1 " +
              (show
                ? "  duration-1900 delay-950 opacity-100 "
                : " -translate-y-[125%] opacity-0 ")
            }
          ></div>
          <div
            className={
              "z-2 bg-slate-900 p-2 rounded border-1 border-slate-800 transition-opacity duration-400 opacity-0 " +
              (show ? " delay-2900 opacity-100 " : "")
            }
          >
            {startDate}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
