import BentoCard from "../BentoCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import TechMarquee from "./TechMarquee";
import { Link } from "react-router-dom";
import ContactMe from "../ContactMe";

function SubContent() {

    const techIcon = <svg width="30" height="30" className="stroke-black" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 25V27.5"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 2.5V5" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.25 25V27.5"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.25 2.5V5"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 15H5"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 21.25H5"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 8.75H5"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 15H27.5"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 21.25H27.5"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 8.75H27.5"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.75 25V27.5"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.75 2.5V5"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.5 5H7.5C6.11929 5 5 6.11929 5 7.5V22.5C5 23.8807 6.11929 25 7.5 25H22.5C23.8807 25 25 23.8807 25 22.5V7.5C25 6.11929 23.8807 5 22.5 5Z"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.75 10H11.25C10.5596 10 10 10.5596 10 11.25V18.75C10 19.4404 10.5596 20 11.25 20H18.75C19.4404 20 20 19.4404 20 18.75V11.25C20 10.5596 19.4404 10 18.75 10Z"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

    
    const skillsIcon = <svg width="30" height="30" stroke="black" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 26.25C2.49989 24.3254 3.05517 22.4417 4.09918 20.8249C5.1432 19.208 6.63159 17.9268 8.38575 17.135C10.1399 16.3432 12.0853 16.0744 13.9884 16.3609C15.8916 16.6473 17.6717 17.4769 19.115 18.75"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 16.25C15.9518 16.25 18.75 13.4518 18.75 10C18.75 6.54822 15.9518 3.75 12.5 3.75C9.04822 3.75 6.25 6.54822 6.25 10C6.25 13.4518 9.04822 16.25 12.5 16.25Z"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 23.75L22.5 26.25L27.5 21.25"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>;

    return (
        <div className="w-full flex flex-col gap-3 lg:overflow-y-auto lg:no-scrollbar lg:py-3 lg:pr-3 select-none px-3 lg:px-0">
            
            <BentoCard title="Technologies" icon={techIcon}>
            <TechMarquee/>
            </BentoCard>

            <BentoCard title="Skills" icon={skillsIcon} >
               <Accordion type="single" collapsible defaultValue="item-1">
                    <AccordionItem value="item-5">
                        <AccordionTrigger className={"w-full flex items-center"}>
                            <div className="w-full flex items-center gap-3">
                                <svg width="40" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="45" height="45" rx="10" fill="url(#paint0_linear_32_167)"/>
                                    <path d="M26.5 28.5L32.5 22.5L26.5 16.5" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M18.5 16.5L12.5 22.5L18.5 28.5" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_32_167" x1="22.5" y1="0" x2="22.5" y2="45" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25" stop-color="#AFB5F5"/>
                                    <stop offset="0.610577" stop-color="#7783FD"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                                <span className="font-medium text-[16px]">
                                Web Development
                            </span>
                            </div>                
                        </AccordionTrigger>
                        <AccordionContent className={"text-semitext-ring"}>
                        Aspiring full-stack developer with a strong focus on crafting responsive, user-centric front-end interfaces.
                        </AccordionContent>
                    </AccordionItem>
                   <AccordionItem value="item-2">
                        <AccordionTrigger className={"w-full flex items-center"}>
                            <div className="w-full flex items-center gap-3">
                               <svg width="40" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="45" height="45" rx="10" fill="url(#paint0_linear_33_12)"/>
                                    <path d="M21.0417 19.5833L25.4167 23.9583" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.4792 35.625C15.4887 35.625 16.4755 35.3257 17.3149 34.7648C18.1543 34.204 18.8085 33.4068 19.1948 32.4741C19.5811 31.5415 19.6822 30.5152 19.4853 29.5251C19.2883 28.535 18.8022 27.6255 18.0884 26.9117C17.3745 26.1978 16.4651 25.7117 15.4749 25.5148C14.4848 25.3178 13.4586 25.4189 12.5259 25.8052C11.5932 26.1915 10.7961 26.8458 10.2352 27.6851C9.67436 28.5245 9.37501 29.5113 9.37501 30.5209C9.37528 31.4915 9.00612 32.4258 8.34251 33.1342C8.13803 33.3382 7.99871 33.5982 7.94223 33.8815C7.88574 34.1647 7.91463 34.4583 8.02522 34.7251C8.13581 34.9919 8.32313 35.2199 8.56343 35.3801C8.80374 35.5403 9.0862 35.6255 9.37501 35.625H14.4792Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M19.5381 29.8369L36.1763 13.2017C36.7568 12.6211 37.083 11.8337 37.083 11.0127C37.083 10.1917 36.7568 9.4043 36.1763 8.82375C35.5957 8.2432 34.8083 7.91705 33.9873 7.91705C33.1663 7.91705 32.3789 8.2432 31.7983 8.82375L15.1602 25.4619" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_33_12" x1="22.5" y1="0" x2="22.5" y2="45" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.1875" stop-color="#FCCDA1"/>
                                    <stop offset="0.528846" stop-color="#FF9735"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                                <span className="font-medium text-[16px]">
                                UI/UX Designer
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className={"text-semitext-ring"}>
                        Specialized in creating intuitive and visually engaging digital experiences. Proficient in translating complex system requirements into accessible prototypes using tools like Figma and Canva.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className={"w-full flex items-center"}>
                            <div className="w-full flex items-center gap-3">
                                <svg width="40" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="45" height="45" rx="10" fill="url(#paint0_linear_33_39)"/>
<path d="M22.5 16.6667V10.8334H16.6667" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.25 16.6666H13.75C12.1391 16.6666 10.8333 17.9725 10.8333 19.5833V31.25C10.8333 32.8608 12.1391 34.1666 13.75 34.1666H31.25C32.8608 34.1666 34.1666 32.8608 34.1666 31.25V19.5833C34.1666 17.9725 32.8608 16.6666 31.25 16.6666Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.91669 25.4166H10.8334" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.1667 25.4166H37.0834" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.875 23.9584V26.875" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.125 23.9584V26.875" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_33_39" x1="22.5" y1="0" x2="22.5" y2="45" gradientUnits="userSpaceOnUse">
<stop offset="0.201923" stop-color="#90CAF8"/>
<stop offset="0.778846" stop-color="#1396ED"/>
</linearGradient>
</defs>
                                </svg>
                                <span className="font-medium text-[16px]">
                                AI & API Integration
                            </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className={"text-semitext-ring"}>
                        Skilled in enhancing web applications by seamlessly integrating artificial intelligence APIs and third-party services to optimize functionality and elevate the overall user experience.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className={"w-full flex items-center"}>
                            <div className="w-full flex items-center gap-3">
                                <svg width="40" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="45" height="45" rx="10" fill="url(#paint0_linear_33_48)"/>
<path d="M34.4583 13.75L9.37497 21.0416L8.06247 17.5416C7.62497 15.9375 8.49997 14.3333 9.95831 13.8958L29.6458 8.06247C31.25 7.62497 32.8541 8.49997 33.2916 9.95831L34.4583 13.75Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0417 12.7291L18.5625 18.4166" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.0833 9.95837L27.6041 15.7917" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.375 21.0416H35.625V32.7083C35.625 33.4818 35.3177 34.2237 34.7707 34.7707C34.2237 35.3177 33.4819 35.625 32.7083 35.625H12.2917C11.5181 35.625 10.7763 35.3177 10.2293 34.7707C9.68229 34.2237 9.375 33.4818 9.375 32.7083V21.0416Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_33_48" x1="22.5" y1="0" x2="22.5" y2="45" gradientUnits="userSpaceOnUse">
<stop offset="0.149038" stop-color="#97FF9E"/>
<stop offset="0.711538" stop-color="#4ECC56"/>
</linearGradient>
</defs>
                                </svg>
                                <span className="font-medium text-[16px]">
                                Tech Communication
                            </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className={"text-semitext-ring"}>
                        Effective communicator and public speaker with experience facilitating peer-to-peer technical events. Adept at breaking down complex programming foundations and logical concepts.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </BentoCard>

            <ContactMe/>
        </div>
    )
}

export default SubContent;