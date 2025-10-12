import { useMemo } from "react";
import { ReactBadge, TailwindBadge } from "./badges/badges";
import Badge from "./ui/badge";
import Button from "./ui/button";
import Link from "./ui/link";

type allowedTags = "react" | "tailwind";

export interface ProjectCardProps {
  imgSrc?: string;
  title: string;
  description?: string;
  link?: string;
  tags?: allowedTags[];
  className?: string;
}

function ProjectCard({
  imgSrc,
  title,
  description,
  link,
  tags,
  className,
}: ProjectCardProps) {
  const TagBadges = useMemo(() => {
    return tags?.map((tag, idx) => {
      switch (tag) {
        case "react":
          return <ReactBadge key={idx} />;
        case "tailwind":
          return <TailwindBadge key={idx} />;
        default:
          return <Badge key={idx}>{tag}</Badge>;
      }
    });
  }, [tags]);

  return (
    <div className="transition-transform duration-200 ease-in-out hover:scale-115 relative z-0 group hover:z-2 ">
      <div
        className={
          "h-[300px] flex flex-col bg-[url(./assets/projects/test.jpg)] border-2 border-slate-700 rounded-lg bg-cover bg-center drop-shadow-sm hover:drop-shadow-lg" +
          className
        }
      >
        <div className="w-full mb-4 rounded-lg">
          <div className="w-full flex flex-1 justify-between p-2 rounded-lg text-white">
            <Link>Github</Link>
            <Link>Website</Link>
          </div>
        </div>
        <div className="h-[100%] bg-gradient-to-b to-slate-300 flex flex-col gap-2 p-4 text-slate-900 rounded-lg">
          <div className="w-full text-white flex justify-center items-center text-2xl">
            <h4>{title}</h4>
          </div>
          <div className="flex flex-1">{description}</div>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {TagBadges?.map((tag) => {
              return tag;
            })}
          </div>
        </div>
      </div>
      <div className="absolute -z-1 top-0 transition-all opacity-0 group-hover:opacity-100 left-0 w-full h-full bg-white rounded-lg duration-400 delay-0 group-hover:delay-100 group-hover:translate-x-[250px]"></div>
    </div>
  );
}

export default ProjectCard;
