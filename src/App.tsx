import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./features/Introduction";

function App() {
  const currentSection = useState("About Me");

  return (
    <div className="w-dvw h-dvh bg-slate-900 text-white flex flex-col">
      <Navbar
        items={[
          { name: "About Me", onClick: () => {} },
          { name: "Skills", onClick: () => {} },
          { name: "Work Experience", onClick: () => {} },
          { name: "Projects", onClick: () => {} },
        ]}
      />
      <Introduction />
    </div>
  );
}

export default App;
