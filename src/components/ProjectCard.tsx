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
  return (
    <div
      className={
        "transition-transform bg-foreground text-background rounded-lg duration-200 ease-in-out hover:scale-120 relative z-0 group hover:z-2 " +
        className
      }
    >
      <div
        className={
          "h-[300px] flex flex-col rounded-lg bg-cover bg-center drop-shadow-sm hover:drop-shadow-lg " +
          (imgSrc ? `bg-[url("${imgSrc}")] ` : "")
        }
      >
        <div className="w-full mb-4 rounded-lg">
          <div className="w-full h-[50px] flex flex-1 justify-between p-2 my-2 items-center rounded-lg text-white">
            <div className="flex flex-1">
              {githubUrl && (
                <Link
                  className="hover:text-background/80 active:text-background/60 flex items-center"
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
                className="hover:text-background/80 active:text-background/60 flex items-center"
                url={websiteUrl}
              >
                <FontAwesomeIcon size="xl" icon={faArrowUpRightFromSquare} />
              </Link>
            )}
          </div>
        </div>
        <div className="h-[100%] rounded-lg">
          <div className="w-full flex justify-center items-center text-2xl border-b-2 border-background pb-2">
            <h4 className="font-bold text-xl">{title}</h4>
          </div>
          <div className="p-4 flex flex-col gap-4 h-[calc(100%-64px)]">
            <div className="flex flex-1 text-lg">{description}</div>
            <div className="flex flex-wrap gap-2 justify-center items-center">
              {tags?.map((tag, idx) => {
                return <Badge key={idx}>{tag}</Badge>;
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute -z-1 top-0 transition-all opacity-0 group-hover:opacity-100 left-0 w-full h-full bg-white rounded-lg duration-400 delay-0 group-hover:delay-100 group-hover:translate-x-[250px]"></div> */}
    </div>
  );
}

export default ProjectCard;
