import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./features/Introduction";
import WorkExperience from "./features/WorkExperience";
import Projects from "./features/Projects";
import Footer from "./features/Footer";
import AboutMe from "./features/AboutMe";

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
        <Introduction />
        <AboutMe />
        <WorkExperience />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
