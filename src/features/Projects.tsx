import ProjectCard, { type ProjectCardProps } from "../components/ProjectCard";

interface ProjectsProps {}

const currentProjects: ProjectCardProps[] = [
  {
    title: "Project 1",
    description: "This is a description of project 1",
    tags: ["React", "TypeScript", "Vite"],
    link: "",
  },
];

const pastProjects: ProjectCardProps[] = [
  {
    title: "Project 1",
    description: "This is a description of project 1",
    tags: ["React", "TypeScript", "Vite"],
    link: "",
  },
];

function Projects({}: ProjectsProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center my-8">
      <div className="text-4xl mb-6">
        <h2>Projects</h2>
      </div>
      <div>
        <div className="p-2 mb-4">
          <div className="mb-3 text-2xl">
            <h3>Currently Working On:</h3>
          </div>
          <div className="grid grid-cols-[300px] sm:grid-cols-[300px_300px] md:grid-cols-[300px_300px_300px] lg:grid-cols-[300px_300px_300px_300px] gap-5">
            <ProjectCard
              title="Project 1"
              className="m-2"
              tags={["react", "tailwind"]}
            />
            <ProjectCard title="Project 1" className="m-2" />
            <ProjectCard title="Project 1" className="m-2" />
            <ProjectCard title="Project 1" className="m-2" />
            <ProjectCard title="Project 1" className="m-2" />
            <ProjectCard title="Project 1" className="m-2" />
          </div>
        </div>
        <div className="h-1 w-full bg-radial from-slate-300/30 from-15% via-transparent" />
        <div>
          <div className="mb-3 text-2xl">
            <h3>Past Projects</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
