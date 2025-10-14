import { useState } from "react";
import Typer from "../components/typer/Typer";
import pfp from "../assets/pfp.png";

const descriptions = [
  "a Full-Stack Developer",
  "a Coffee Enthusiast",
  "an Ironman",
  "a Cat Lover",
];

function Introduction() {
  return (
    <div className="h-[100vh] flex flex-1 justify-center items-center">
      <div className="flex gap-8">
        <img className="rounded-md" src={pfp} />
        <div className="flex flex-col justify-center text-xl">
          <h1 className="mb-3">Tyde Hashimoto 👋</h1>
          <div className="flex text-4xl">
            I'm&nbsp;
            <Typer text={descriptions[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
