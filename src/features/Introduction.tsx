import type { SectionProps } from "./types";

interface IntroductionProps extends SectionProps {
  descriptions?: string[];
  sections?: string[];
}

function Introduction({
  ref,
  sectionName,
  descriptions,
  sections,
  className,
}: IntroductionProps) {
  return (
    <section
      ref={ref}
      id={sectionName}
      className={
        "flex flex-1 justify-center items-center pb-[30%] sm:pb-[10%] lg:pb-[10%] xl:pb-[0%]" +
        (className ? " " + className : "")
      }
    >
      <div className="flex flex-col lg:flex-row gap-8 h-max items-stretch p-4 2xl:p-0">
        <div className="flex flex-col justify-center">
          <h1
            className={
              " font-black text-6xl lg:text-9xl bg-[url('/src/assets/Ocean2.gif')] bg-clip-text text-transparent"
            }
          >
            Tyde Hashimoto
          </h1>
          <h2 className="text-end pr-2 font-bold text-3xl lg:text-6xl bg-[url('/src/assets/Ocean2.gif')] bg-clip-text text-transparent">
            Full Stack Developer
          </h2>
        </div>
        <span className="w-[2px] rounded-md bg-foreground" />
        <article className="flex items-center justify-between lg:justify-center flex-col ">
          <nav className="text-xl">
            <ul className="space-x-4 lg:space-x-0 lg:space-y-2 flex flex-row lg:flex-col">
              {sections && sections.length > 0 && (
                <>
                  {sections.map((section) => (
                    <li key={section}>
                      <a
                        className="after:block after:origin-left after:scale-x-0 after:border-b-2 after:transition-all after:duration-350 after:ease-in-out hover:after:scale-x-100 hover:after:bg-foreground"
                        href={`#${section}`}
                      >
                        {section}
                      </a>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </nav>
          <div></div>
        </article>
      </div>
    </section>
  );
}

export default Introduction;
