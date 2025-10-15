import Typer from "../components/typer/Typer";
import pfp from "../assets/pfp.png";
import type { SectionProps } from "./types";

interface IntroductionProps extends SectionProps {
  descriptions?: string[];
}

function Introduction({ ref, sectionName, descriptions }: IntroductionProps) {
  return (
    <section
      ref={ref}
      id={sectionName}
      className="h-[100vh] flex flex-1 justify-center items-center"
    >
      <div className="flex gap-8">
        <img className="rounded-md" src={pfp} />
        <div className="flex flex-col justify-center text-xl">
          <h1 className="mb-3">Tyde Hashimoto 👋</h1>
          <div className="flex text-4xl">
            I'm&nbsp;
            <Typer text={descriptions?.[0] ?? "MOOOOOOOOOOO"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
