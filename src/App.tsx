import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./features/Introduction";
import WorkExperience from "./features/WorkExperience";
import Projects from "./features/Projects";

function App() {
  const currentSection = useState("About Me");

  return (
    <div className="w-full min-h-[100dvh] bg-slate-900 text-white flex flex-col">
      <Navbar
        items={[
          { name: "About Me", onClick: () => {} },
          { name: "Skills", onClick: () => {} },
          { name: "Work Experience", onClick: () => {} },
          { name: "Projects", onClick: () => {} },
        ]}
      />
      <div>
        {/* <Introduction /> */}
        <WorkExperience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
