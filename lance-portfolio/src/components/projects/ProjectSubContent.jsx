import { Link } from "react-router-dom";
import BentoCard from "../BentoCard";
import ContactMe from "../ContactMe";
import { useState, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";

const projectIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.5 23.75C20.8424 23.75 19.2527 23.0915 18.0806 21.9194C16.9085 20.7473 16.25 19.1576 16.25 17.5V27.5"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.25 25H5C4.33696 25 3.70107 24.7366 3.23223 24.2678C2.76339 23.7989 2.5 23.163 2.5 22.5V6.25C2.5 5.58696 2.76339 4.95107 3.23223 4.48223C3.70107 4.01339 4.33696 3.75 5 3.75H9.875C10.2931 3.7459 10.7056 3.84673 11.0746 4.04327C11.4437 4.23981 11.7575 4.52578 11.9875 4.875L13 6.375C13.2276 6.72066 13.5375 7.0044 13.9019 7.20075C14.2662 7.39711 14.6736 7.49993 15.0875 7.5H25C25.663 7.5 26.2989 7.76339 26.7678 8.23223C27.2366 8.70107 27.5 9.33696 27.5 10V16.25"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.25 17.5C17.6307 17.5 18.75 16.3807 18.75 15C18.75 13.6193 17.6307 12.5 16.25 12.5C14.8693 12.5 13.75 13.6193 13.75 15C13.75 16.3807 14.8693 17.5 16.25 17.5Z"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25 26.25C26.3807 26.25 27.5 25.1307 27.5 23.75C27.5 22.3693 26.3807 21.25 25 21.25C23.6193 21.25 22.5 22.3693 22.5 23.75C22.5 25.1307 23.6193 26.25 25 26.25Z"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const contactIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    className="stroke-black"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.29 20.71C17.5482 20.8286 17.839 20.8556 18.1146 20.7868C18.3902 20.718 18.6342 20.5573 18.8063 20.3312L19.25 19.75C19.4829 19.4395 19.7848 19.1875 20.132 19.0139C20.4791 18.8404 20.8619 18.75 21.25 18.75H25C25.663 18.75 26.2989 19.0134 26.7678 19.4822C27.2366 19.9511 27.5 20.587 27.5 21.25V25C27.5 25.663 27.2366 26.2989 26.7678 26.7678C26.2989 27.2366 25.663 27.5 25 27.5C19.0326 27.5 13.3097 25.1295 9.0901 20.9099C4.87053 16.6903 2.5 10.9674 2.5 5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H8.75C9.41304 2.5 10.0489 2.76339 10.5178 3.23223C10.9866 3.70107 11.25 4.33696 11.25 5V8.75C11.25 9.13811 11.1596 9.5209 10.9861 9.86803C10.8125 10.2152 10.5605 10.5171 10.25 10.75L9.665 11.1888C9.43552 11.364 9.27377 11.6132 9.20724 11.8942C9.1407 12.1751 9.17348 12.4705 9.3 12.73C11.0084 16.1998 13.818 19.006 17.29 20.71Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

let isLoaded = false;

function ProjectSubContent({
  className = "",
  projectList = [],
  showViewAll = false,
}) {
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
      <div className="grid gap-3">
        <BentoCard
          title={"Other Projects"}
          icon={projectIcon}
          className="w-full"
        >
          <div className="flex flex-col gap-4 w-full">
            <div className={`flex flex-col w-full gap-3 ${className}`}>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="lg:px-3 px-6 w-full rounded-[10px] py-4 flex border-[.50px] border-border flex-col"
                >
                  <div className="flex gap-2 w-full items-start">
                    <Skeleton className="w-6 h-6 shrink-0" />
                    <div className="flex flex-col gap-1.5 flex-1 w-full mt-0.5">
                      <div className="flex gap-2 items-center justify-between w-full">
                        <Skeleton className="h-5 w-1/2" />
                        <Skeleton className="h-4 w-12 rounded-[10px]" />
                      </div>
                      <Skeleton className="h-3 w-1/3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        <BentoCard title="Contact Me" icon={contactIcon} className="h-full">
          <div className="flex flex-col justify-between gap-10 h-full">
            <ul className="flex gap-4 w-full flex-wrap">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <li key={i} className="w-9 h-9">
                  <Skeleton className="w-full h-full rounded-full" />
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-1.5 mt-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        </BentoCard>
      </div>
    );
  }

  if (!projectList || projectList.length === 0) return null;

  return (
    <div className="grid gap-3">
      <BentoCard title={"Other Projects"} icon={projectIcon} className="w-full">
        <div
          key="psc-opts"
          className="animate-in fade-in duration-700 delay-300 fill-mode-backwards flex flex-col gap-4 w-full"
        >
          <div className={`flex-col w-full gap-3 ${className}`}>
            {projectList.map((project) => (
              <Link
                key={project.id}
                to={`/projects-selected/${project.slug}`}
                className="lg:px-3 px-6 w-full rounded-[10px] py-4 flex border-[.50px] border-border cursor-pointer flex-col"
              >
                <div className="flex gap-2 w-full items-start ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-book-marked-icon lucide-book-marked"
                  >
                    <path d="M10 2v8l3-3 3 3V2" />
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                  </svg>
                  <div className="flex flex-col gap-0.5 flex-1 w-full overflow-hidden">
                    <div className="flex gap-2 items-center justify-between w-full">
                      <span className="font-semibold text-[16px] line-clamp-1 ">
                        {project.title}
                      </span>
                      {project.status === "Public" ? (
                        <p className="text-[#35BF46] text-[11px] px-2 border py-0.5 rounded-[10px] border-[#C2F49E] bg-[#F6FFDD] shrink-0">
                          Public
                        </p>
                      ) : (
                        <p className="text-zinc-500 text-[11px] px-2 border py-0.5 rounded-[10px] border-zinc-300 bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 shrink-0">
                          Private
                        </p>
                      )}
                    </div>
                    <p className="font-medium text-[10px] text-[#B9B9B9]">
                      Created on {project.date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {showViewAll && (
            <Link
              to="/projects"
              className="w-full text-center text-[14px] font-medium text-[#468cfc] hover:text-[#92bcff] transition-colors pt-2 pb-1"
            >
              View All Projects →
            </Link>
          )}
        </div>
      </BentoCard>
      <ContactMe
        animKey="psc-btn"
        wrapperClass="animate-in fade-in duration-700 delay-500 fill-mode-backwards"
      />
    </div>
  );
}

export default ProjectSubContent;
