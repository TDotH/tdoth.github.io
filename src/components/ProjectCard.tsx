import { useMemo } from "react";
import { ReactBadge, TailwindBadge } from "./badges/badges";
import Badge from "./ui/badge";
import Link from "./ui/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { Project } from "../features/types";

export interface ProjectCardProps extends Project {
  className?: string;
}

function ProjectCard({
  imgSrc,
  title,
  description,
  websiteUrl,
  githubUrl,
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
    <div
      className={
        "transition-transform duration-200 ease-in-out hover:scale-120 relative z-0 group hover:z-2 " +
        className
      }
    >
      <div
        className={
          "h-[300px] flex flex-col border-2 border-slate-700 rounded-lg bg-cover bg-center drop-shadow-sm hover:drop-shadow-lg " +
          (imgSrc ? "bg-[url('" + imgSrc + "')] " : "bg-slate-700")
        }
      >
        <div className="w-full mb-4 rounded-lg">
          <div className="w-full h-[50px] flex flex-1 justify-between p-2 my-2 items-center rounded-lg text-white">
            <div className="flex flex-1">
              {githubUrl && (
                <Link
                  className="text-white/40 hover:text-white/60 active:text-white/50"
                  url={githubUrl}
                >
                  <FontAwesomeIcon
                    className="transition-colors"
                    size="2x"
                    icon={faGithubSquare}
                  />
                </Link>
              )}
            </div>
            {websiteUrl && (
              <Link
                className="text-white/40 hover:text-white/60 active:text-white/50"
                url={websiteUrl}
              >
                <FontAwesomeIcon size="xl" icon={faArrowUpRightFromSquare} />
              </Link>
            )}
          </div>
        </div>
        <div className="h-[100%] bg-gradient-to-b to-slate-300 via-slate-200/80 flex flex-col gap-2 p-4 text-slate-900 rounded-lg">
          <div className="w-full text-white flex justify-center items-center text-2xl border-b-2 border-slate-300 pb-2">
            <h4>{title}</h4>
          </div>
          <div className="flex flex-1 text-lg text-slate-800">
            {description}
          </div>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {TagBadges?.map((tag) => {
              return tag;
            })}
          </div>
        </div>
      </div>
      {/* <div className="absolute -z-1 top-0 transition-all opacity-0 group-hover:opacity-100 left-0 w-full h-full bg-white rounded-lg duration-400 delay-0 group-hover:delay-100 group-hover:translate-x-[250px]"></div> */}
    </div>
  );
}

export default ProjectCard;
