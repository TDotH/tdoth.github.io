import ProjectCard, { type ProjectCardProps } from "../components/ProjectCard";

interface ProjectsProps {}

const currentProjects: ProjectCardProps[] = [
  {
    title: "Wani Tracker",
    description:
      "A web app to help track Japanese learning progress using WaniKani's API.",
    tags: ["react", "tailwind"],
    githubUrl: "https://github.com/TDotH/wani-tracker",
  },
  {
    title: "Abacus",
    description: "A budgeting app to help track expenses and income, and more.",
    tags: ["react", "tailwind"],
  },
];

const pastProjects: ProjectCardProps[] = [];

function Projects({}: ProjectsProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center my-8">
      <div className="text-4xl mb-6">
        <h2>Projects</h2>
      </div>
      <div className="w-full max-w-6xl flex flex-col ">
        <div className="p-2 mb-4">
          <div className="mb-8 text-2xl justify-center flex lg:justify-start">
            <h3>Currently Working On:</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[repeat(4,300px)] place-items-center gap-5 mx-2">
            {currentProjects.length !== 0 ? (
              currentProjects.map((project, idx) => {
                return (
                  <ProjectCard
                    key={idx}
                    title={project.title}
                    className={"max-w-[285px] "}
                    githubUrl={project.githubUrl}
                    description={project.description}
                    imgSrc={project.imgSrc}
                    websiteUrl={project.websiteUrl}
                    tags={project.tags}
                  />
                );
              })
            ) : (
              <div className="w-full text-2xl mt-6 col-span-4 text-center text-slate-500">
                Nothing to see here yet!
              </div>
            )}
          </div>
        </div>
        <div className="h-1 my-4 w-full bg-radial from-slate-300/30 from-15% via-transparent" />
        <div>
          <div className="mb-8 text-2xl justify-center flex lg:justify-start">
            <h3>Past Projects:</h3>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 ">
            {pastProjects.length !== 0 ? (
              pastProjects.map((project, idx) => {
                return (
                  <ProjectCard
                    key={idx}
                    title={project.title}
                    className="w-[285px] w-full col-span-4 justify-center justify-self-center mx-auto "
                    githubUrl={project.githubUrl}
                    description={project.description}
                    imgSrc={project.imgSrc}
                    websiteUrl={project.websiteUrl}
                    tags={project.tags}
                  />
                );
              })
            ) : (
              <div className="w-full text-2xl mt-6 col-span-4 text-center text-slate-500">
                Nothing to see here yet!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
