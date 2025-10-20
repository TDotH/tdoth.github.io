import { useState } from "react";
import "./typer.css";

interface TyperProps {
  text: string;
  className?: string;
}

function Typer({ text, className }: TyperProps) {
  const runAnimation = useState(false);

  return (
    <div className={className}>
      <p className="typer">{text}</p>
    </div>
  );
}

export default Typer;
