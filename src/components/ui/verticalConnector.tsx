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
  className,
}: VerticalConnectorProps) {
  return (
    <div
      className={
        "w-[200px]font-medium text-lg md:text-xl flex-col overflow-y-hidden hidden sm:flex " +
        (className ?? "")
      }
    >
      <div className="flex flex-col flex-grow justify-between items-center">
        <p
          className={
            "z-2 transition-opacity bg-foreground text-background duration-400 opacity-0 " +
            (show ? " delay-750 opacity-100 " : "")
          }
        >
          {endText}
        </p>
        <div
          className={
            "w-[2px] z-0 rounded-lg mix-blend-exclusion transition-all bg-background ease-in-out flex-grow-1  " +
            (show
              ? "  duration-1900 delay-950 opacity-100 "
              : " -translate-y-[125%] opacity-0 ")
          }
        ></div>
        <p
          className={
            "z-2 bg-background p-2 transition-opacity duration-400 opacity-0 " +
            (show ? " delay-2900 opacity-100 " : "")
          }
        >
          {startText}
        </p>
      </div>
    </div>
  );
}

export default VerticalConnector;
