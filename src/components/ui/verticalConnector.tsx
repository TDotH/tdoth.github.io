interface VerticalConnectorProps {
  startText: string;
  endText: string;
  className?: string;
  bgColor?: string;
  show?: boolean;
}

/**
 * A vertical connector component with animated line and text at both ends.
 * @param param0
 * @returns
 */
function VerticalConnector({
  startText,
  endText,
  show,
  bgColor,
  className,
}: VerticalConnectorProps) {
  return (
    <div
      className={
        "w-[200px] text-lg flex-col overflow-y-hidden hidden sm:flex " +
        (className ?? "")
      }
    >
      <div className="flex flex-col flex-grow justify-between items-center">
        <div
          className={
            "z-2 bg-slate-900 p-2 rounded-full border-1 border-slate-800 transition-opacity duration-400 opacity-0 " +
            (show ? " delay-750 opacity-100 " : "")
          }
        >
          {endText}
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
            "z-2 bg-slate-900 p-2 rounded-full border-1 border-slate-800 transition-opacity duration-400 opacity-0 " +
            (show ? " delay-2900 opacity-100 " : "")
          }
        >
          {startText}
        </div>
      </div>
    </div>
  );
}

export default VerticalConnector;
