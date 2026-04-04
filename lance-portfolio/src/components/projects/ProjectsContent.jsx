import BentoCard from "../BentoCard";
import { Link } from "react-router-dom";
import { projectsData } from "@/data";
import ProjectSubContent from "./ProjectSubContent";
import { useState, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";

const featuredIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-pin-icon lucide-pin"
  >
    <path d="M12 17v5" />
    <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
  </svg>
);

let isLoaded = false;

function ProjectsContent() {
  const featuredProjects = projectsData.slice(0, 3);
  const otherProjects = projectsData.slice(3);

  const [isLoading, setIsLoading] = useState(!isLoaded);

  useEffect(() => {
    if (!isLoaded) {
      const timer = setTimeout(() => {
        isLoaded = true;
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full lg:pr-3 px-3 lg:px-0 py-3 overflow-y-auto no-scrollbar overflow-hidden flex flex-col gap-3 min-h-[101vh]">
        <BentoCard
          title={"Featured"}
          icon={featuredIcon}
          className="w-full relative "
        >
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-full h-full flex flex-col bg-white dark:bg-zinc-900/50 rounded-[14px] border border-zinc-200 dark:border-zinc-800 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="w-full aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative border-b border-zinc-100 dark:border-zinc-800 shrink-0">
                  <Skeleton className="w-full h-full rounded-none" />
                </div>
                <div className="flex flex-col flex-1 p-5 gap-1.5 justify-between">
                  <div className="flex flex-col gap-1.5 w-full">
                    <Skeleton className="h-5 w-3/4" />
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Skeleton className="h-3 w-1/3" />
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-11/12" />
                      <Skeleton className="h-3 w-4/5" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1">
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        <ProjectSubContent
          className="w-full grid lg:grid-cols-4"
          projectList={otherProjects}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full lg:pr-3 px-3 lg:px-0 py-3 overflow-y-auto no-scrollbar overflow-hidden flex flex-col gap-3">
      <BentoCard
        title={"Featured"}
        icon={featuredIcon}
        className="w-full relative "
      >
        <div
          key="feat-grid-m"
          className="animate-in fade-in duration-700 delay-150 fill-mode-backwards grid lg:grid-cols-3 grid-cols-1 gap-5"
        >
          {featuredProjects.map((post) => (
            <Link
              key={post.id}
              to={`/projects-selected/${post.slug}`}
              className="w-full h-full flex flex-col bg-white dark:bg-zinc-900/50 rounded-[14px] border border-zinc-200 dark:border-zinc-800 transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="w-full aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative border-b border-zinc-100 dark:border-zinc-800 shrink-0">
                <img
                  src={post.thumbnail}
                  alt={post.title + "'s Image"}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 p-5 gap-1.5 justify-between">
                <div className="flex flex-col gap-1.5">
                  <h1 className="font-bold text-zinc-900 dark:text-zinc-100 text-[18px] leading-snug line-clamp-1 tracking-tight">
                    {post.title}
                  </h1>

                  {/* Date Area */}
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <svg
                      viewBox="0 0 12 12"
                      className="stroke-zinc-400 w-3.5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                        strokeOpacity="0.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 3V6L5 8"
                        strokeOpacity="0.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className=" text-[12px]  text-zinc-500 dark:text-zinc-400 tracking-wide ">
                      {post.date}
                    </span>
                  </div>

                  {/* Description Area */}
                  {/* TWEAK: Binabaan ang text size para elegant, inayos ang font-light */}
                  <p className="mt-2 text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-light line-clamp-3">
                    {post.description}
                  </p>
                </div>

                {/* "Read More" subtle cue */}
                <div className="mt-4 flex items-center gap-1 text-[#468cfc] transition-colors duration-300 group-hover:text-[#92bcff] ease-out">
                  <span className="text-[13px] font-medium">View Project</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </BentoCard>

      <ProjectSubContent
        className="w-full grid lg:grid-cols-4"
        projectList={otherProjects}
      />
    </div>
  );
}

export default ProjectsContent;
