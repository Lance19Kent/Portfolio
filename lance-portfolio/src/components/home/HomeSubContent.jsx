import BentoCard from "../BentoCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import TechMarquee from "./TechMarquee";
import ContactMe from "../ContactMe";
import { skillsData } from "@/data";

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

    return (
        <div className="w-full flex flex-col gap-3 lg:overflow-y-auto lg:no-scrollbar lg:py-3 lg:pr-3 select-none px-3 lg:px-0">
            <BentoCard title="Technologies" icon={techIcon}>
                <TechMarquee/>
            </BentoCard>

           <BentoCard title="Skills" icon={skillsIcon}>
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
            </BentoCard>
            <ContactMe/>
        </div>
    )
}

export default SubContent;