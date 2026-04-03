import BentoCard from "../BentoCard";
import ContactMe from "../ContactMe";
import { educationData, experienceData } from "@/data";
import { useState, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";

const educationIcon = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.33331V28" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3333 16H23.9999" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3333 10.6667H23.9999" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.00008 24C3.64646 24 3.30732 23.8595 3.05727 23.6095C2.80722 23.3594 2.66675 23.0203 2.66675 22.6667V5.33333C2.66675 4.97971 2.80722 4.64057 3.05727 4.39052C3.30732 4.14048 3.64646 4 4.00008 4H10.6667C12.0812 4 13.4378 4.5619 14.438 5.5621C15.4382 6.56229 16.0001 7.91885 16.0001 9.33333C16.0001 7.91885 16.562 6.56229 17.5622 5.5621C18.5624 4.5619 19.9189 4 21.3334 4H28.0001C28.3537 4 28.6928 4.14048 28.9429 4.39052C29.1929 4.64057 29.3334 4.97971 29.3334 5.33333V22.6667C29.3334 23.0203 29.1929 23.3594 28.9429 23.6095C28.6928 23.8595 28.3537 24 28.0001 24H20.0001C18.9392 24 17.9218 24.4214 17.1717 25.1716C16.4215 25.9217 16.0001 26.9391 16.0001 28C16.0001 26.9391 15.5787 25.9217 14.8285 25.1716C14.0784 24.4214 13.0609 24 12.0001 24H4.00008Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 16H10.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10.6667H10.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

const experienceIcon = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16H16.0133" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3334 7.99996V5.33329C21.3334 4.62605 21.0525 3.94777 20.5524 3.44767C20.0523 2.94758 19.374 2.66663 18.6667 2.66663H13.3334C12.6262 2.66663 11.9479 2.94758 11.4478 3.44767C10.9477 3.94777 10.6667 4.62605 10.6667 5.33329V7.99996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.3334 17.3334C25.3771 19.9453 20.7408 21.3378 16.0001 21.3378C11.2593 21.3378 6.62303 19.9453 2.66675 17.3334" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.6667 8H5.33341C3.86066 8 2.66675 9.19391 2.66675 10.6667V24C2.66675 25.4728 3.86066 26.6667 5.33341 26.6667H26.6667C28.1395 26.6667 29.3334 25.4728 29.3334 24V10.6667C29.3334 9.19391 28.1395 8 26.6667 8Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

const contactIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="stroke-black" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.29 20.71C17.5482 20.8286 17.839 20.8556 18.1146 20.7868C18.3902 20.718 18.6342 20.5573 18.8063 20.3312L19.25 19.75C19.4829 19.4395 19.7848 19.1875 20.132 19.0139C20.4791 18.8404 20.8619 18.75 21.25 18.75H25C25.663 18.75 26.2989 19.0134 26.7678 19.4822C27.2366 19.9511 27.5 20.587 27.5 21.25V25C27.5 25.663 27.2366 26.2989 26.7678 26.7678C26.2989 27.2366 25.663 27.5 25 27.5C19.0326 27.5 13.3097 25.1295 9.0901 20.9099C4.87053 16.6903 2.5 10.9674 2.5 5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H8.75C9.41304 2.5 10.0489 2.76339 10.5178 3.23223C10.9866 3.70107 11.25 4.33696 11.25 5V8.75C11.25 9.13811 11.1596 9.5209 10.9861 9.86803C10.8125 10.2152 10.5605 10.5171 10.25 10.75L9.665 11.1888C9.43552 11.364 9.27377 11.6132 9.20724 11.8942C9.1407 12.1751 9.17348 12.4705 9.3 12.73C11.0084 16.1998 13.818 19.006 17.29 20.71Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>;

let isLoaded = false;

function AboutSubContent(){
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
        <div className="w-full lg:py-3 lg:pr-3 pb-3 flex flex-col gap-3 overflow-y-auto no-scrollbar">
            <BentoCard title={"Education"} icon={educationIcon} className="min-h-70">
                <div className="flex flex-col gap-5">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex w-full gap-5">
                            <Skeleton className="lg:w-13 lg:h-13 w-11 h-11 rounded-full shrink-0" />
                            <div className="flex flex-col gap-2 w-full mt-1">
                                <Skeleton className="h-5 w-3/4" />
                                <Skeleton className="h-4 w-1/2" />
                                <Skeleton className="h-3 w-1/3 mt-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </BentoCard>

            <BentoCard title={"Experience"} icon={experienceIcon}>
                <div className="flex flex-col gap-5">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex w-full lg:gap-5 gap-4">
                            <Skeleton className="lg:w-13 lg:h-13 w-11 h-11 rounded-full shrink-0" />
                            <div className="flex flex-col gap-2 w-full mt-1">
                                <Skeleton className="h-5 w-3/4" />
                                <Skeleton className="h-4 w-1/2" />
                                <Skeleton className="h-3 w-1/3 mt-1" />
                            </div>
                        </div>
                    ))}
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

    return(
        <div className="w-full lg:py-3 lg:pr-3 pb-3 flex flex-col gap-3 overflow-y-auto no-scrollbar">
            <BentoCard title={"Education"} icon={educationIcon} className="min-h-70">
                <div key="ed-m" className="animate-in fade-in duration-700 delay-150 fill-mode-backwards flex flex-col gap-5">
                    {educationData.map((item) =>(
                        <div className="flex w-full gap-5">
                        <img src={item.logo} className="lg:w-13 lg:h-13 w-11 h-11" alt={item.title + "'s Logo"}></img>
                        <div className="flex flex-col gap-1 w-full overflow-hidden">
                            <div className="w-full ">
                                <p className="font-semibold text-[15px] lg:text-[16px] text-black dark:text-zinc-100 leading-tight">{item.degree}</p>
                                <p className="font-medium text-zinc-600 dark:text-zinc-400 text-[14px]">{item.institution}</p>
                               <p className="font-medium text-[13px] text-zinc-500 dark:text-zinc-400">
                                        GWA: <span className={item.gwaIsProgress ? "text-[#25B243] font-semibold" : "font-semibold text-zinc-700 dark:text-zinc-300"}>{item.gwaText}</span>{item.gwaValue}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.66675 1.16669V3.50002" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.33325 1.16669V3.50002" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.0833 2.33331H2.91667C2.27233 2.33331 1.75 2.85565 1.75 3.49998V11.6666C1.75 12.311 2.27233 12.8333 2.91667 12.8333H11.0833C11.7277 12.8333 12.25 12.311 12.25 11.6666V3.49998C12.25 2.85565 11.7277 2.33331 11.0833 2.33331Z" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.75 5.83331H12.25" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className="text-[12px] text-[#9D9D9D]">{item.date}</p>
                            </div>
                            <p className="text-[13px] lg:text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-light">
                               {item.description}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
            </BentoCard>
            <BentoCard title={"Experience"} icon={experienceIcon}>
                <div key="ex-m" className="animate-in fade-in duration-700 delay-300 fill-mode-backwards flex flex-col">
                    {experienceData.map((job) =>(
                        <div className="flex w-full lg:gap-5 gap-4">
                        <img src={job.logo} className="lg:w-13 lg:h-13 w-11 h-11" alt={job.title +"'s Logo"}></img>
                        <div className="flex flex-col gap-1">
                            <div>
                                <span className="font-semibold text-[15px] lg:text-[16px] text-black dark:text-zinc-100 leading-tight">{job.role}</span>
                                <p className="font-medium text-zinc-600 dark:text-zinc-400 text-[14px]">{job.company}</p>
                                <p className="font-medium text-[13px] text-zinc-500 dark:text-zinc-400">{job.type}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.66675 1.16669V3.50002" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.33325 1.16669V3.50002" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.0833 2.33331H2.91667C2.27233 2.33331 1.75 2.85565 1.75 3.49998V11.6666C1.75 12.311 2.27233 12.8333 2.91667 12.8333H11.0833C11.7277 12.8333 12.25 12.311 12.25 11.6666V3.49998C12.25 2.85565 11.7277 2.33331 11.0833 2.33331Z" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.75 5.83331H12.25" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className="text-[12px] text-[#9D9D9D]">{job.date}</p>
                            </div>
                            <p className="text-[13px] lg:text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-light">
                                {job.description}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
            </BentoCard>
            <ContactMe animKey="asc-cm-m" wrapperClass="animate-in fade-in duration-700 delay-500 fill-mode-backwards" />
        </div>

    )
}

export default AboutSubContent;