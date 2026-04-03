import BentoCard from "../BentoCard";
import { useState, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import TechMarquee from "./TechMarquee";
import ContactMe from "../ContactMe";
import { skillsData } from "@/data";

let isLoaded = false;

function SubContent() {

    const techIcon = <svg width="30" height="30" className="stroke-black" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 25V27.5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 2.5V5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.25 25V27.5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.25 2.5V5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 15H5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 21.25H5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 8.75H5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 15H27.5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 21.25H27.5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 8.75H27.5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.75 25V27.5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.75 2.5V5"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.5 5H7.5C6.11929 5 5 6.11929 5 7.5V22.5C5 23.8807 6.11929 25 7.5 25H22.5C23.8807 25 25 23.8807 25 22.5V7.5C25 6.11929 23.8807 5 22.5 5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.75 10H11.25C10.5596 10 10 10.5596 10 11.25V18.75C10 19.4404 10.5596 20 11.25 20H18.75C19.4404 20 20 19.4404 20 18.75V11.25C20 10.5596 19.4404 10 18.75 10Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

    
    const skillsIcon = <svg width="30" height="30" stroke="black" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 26.25C2.49989 24.3254 3.05517 22.4417 4.09918 20.8249C5.1432 19.208 6.63159 17.9268 8.38575 17.135C10.1399 16.3432 12.0853 16.0744 13.9884 16.3609C15.8916 16.6473 17.6717 17.4769 19.115 18.75"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 16.25C15.9518 16.25 18.75 13.4518 18.75 10C18.75 6.54822 15.9518 3.75 12.5 3.75C9.04822 3.75 6.25 6.54822 6.25 10C6.25 13.4518 9.04822 16.25 12.5 16.25Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 23.75L22.5 26.25L27.5 21.25"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>;

    const contactIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="stroke-black" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.29 20.71C17.5482 20.8286 17.839 20.8556 18.1146 20.7868C18.3902 20.718 18.6342 20.5573 18.8063 20.3312L19.25 19.75C19.4829 19.4395 19.7848 19.1875 20.132 19.0139C20.4791 18.8404 20.8619 18.75 21.25 18.75H25C25.663 18.75 26.2989 19.0134 26.7678 19.4822C27.2366 19.9511 27.5 20.587 27.5 21.25V25C27.5 25.663 27.2366 26.2989 26.7678 26.7678C26.2989 27.2366 25.663 27.5 25 27.5C19.0326 27.5 13.3097 25.1295 9.0901 20.9099C4.87053 16.6903 2.5 10.9674 2.5 5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H8.75C9.41304 2.5 10.0489 2.76339 10.5178 3.23223C10.9866 3.70107 11.25 4.33696 11.25 5V8.75C11.25 9.13811 11.1596 9.5209 10.9861 9.86803C10.8125 10.2152 10.5605 10.5171 10.25 10.75L9.665 11.1888C9.43552 11.364 9.27377 11.6132 9.20724 11.8942C9.1407 12.1751 9.17348 12.4705 9.3 12.73C11.0084 16.1998 13.818 19.006 17.29 20.71Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>;

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
            <div className="w-full flex flex-col gap-3 lg:overflow-y-auto lg:no-scrollbar lg:py-3 lg:pr-3 select-none px-3 lg:px-0">
                <BentoCard title="Technologies" icon={techIcon}>
                    <div className="flex flex-col gap-3 overflow-hidden h-[116px]">
                        <Skeleton className="w-full h-11 rounded-md" />
                        <Skeleton className="w-full h-11 rounded-md" />
                    </div>
                </BentoCard>

                <BentoCard title="Skills" icon={skillsIcon}>
                    <div className="flex flex-col gap-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-3 py-1">
                                <Skeleton className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full" />
                                <Skeleton className="h-5 w-3/4 rounded-md" />
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

    return (
        <div className="w-full flex flex-col gap-3 lg:overflow-y-auto lg:no-scrollbar lg:py-3 lg:pr-3 select-none px-3 lg:px-0">
            <BentoCard title="Technologies" icon={techIcon}>
                <div key="tech-m" className="animate-in fade-in duration-700 delay-150 fill-mode-backwards">
                    <TechMarquee/>
                </div>
            </BentoCard>

           <BentoCard title="Skills" icon={skillsIcon}>
                <div key="skills-m" className="animate-in fade-in duration-700 delay-300 fill-mode-backwards">
                    <Accordion type="single" collapsible defaultValue="item-1">      
                    {skillsData.map((skill) => (
                    <AccordionItem key={skill.id} value={skill.id}>
                    <AccordionTrigger className="w-full flex items-center hover:no-underline rounded-lg  transition-colors">
                        <div className="w-full flex items-center gap-3">

                            <div className="shrink-0">
                                {skill.icon}
                            </div>
                            <span className="font-medium lg:text-[16px] text-[15px] text-zinc-900 dark:text-zinc-100">
                                {skill.title}
                            </span>
                        </div>
                    </AccordionTrigger>

                    <AccordionContent className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed pb-4  lg:text-[14px] text-[13px]">
                        {skill.description}
                    </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
                </div>
            </BentoCard>
            <ContactMe animKey="contact-m" wrapperClass="animate-in fade-in duration-700 delay-500 fill-mode-backwards" />
        </div>
    )
}

export default SubContent;