import BentoCard from "./BentoCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function SubContent() {

    const techIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 25V27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 2.5V5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.25 25V27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.25 2.5V5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 15H5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 21.25H5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 8.75H5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 15H27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 21.25H27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 8.75H27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.75 25V27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.75 2.5V5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.5 5H7.5C6.11929 5 5 6.11929 5 7.5V22.5C5 23.8807 6.11929 25 7.5 25H22.5C23.8807 25 25 23.8807 25 22.5V7.5C25 6.11929 23.8807 5 22.5 5Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.75 10H11.25C10.5596 10 10 10.5596 10 11.25V18.75C10 19.4404 10.5596 20 11.25 20H18.75C19.4404 20 20 19.4404 20 18.75V11.25C20 10.5596 19.4404 10 18.75 10Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

    
    const skillsIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 26.25C2.49989 24.3254 3.05517 22.4417 4.09918 20.8249C5.1432 19.208 6.63159 17.9268 8.38575 17.135C10.1399 16.3432 12.0853 16.0744 13.9884 16.3609C15.8916 16.6473 17.6717 17.4769 19.115 18.75" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 16.25C15.9518 16.25 18.75 13.4518 18.75 10C18.75 6.54822 15.9518 3.75 12.5 3.75C9.04822 3.75 6.25 6.54822 6.25 10C6.25 13.4518 9.04822 16.25 12.5 16.25Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 23.75L22.5 26.25L27.5 21.25" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>;

    const contactIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.29 20.71C17.5482 20.8286 17.839 20.8556 18.1146 20.7868C18.3902 20.718 18.6342 20.5573 18.8063 20.3312L19.25 19.75C19.4829 19.4395 19.7848 19.1875 20.132 19.0139C20.4791 18.8404 20.8619 18.75 21.25 18.75H25C25.663 18.75 26.2989 19.0134 26.7678 19.4822C27.2366 19.9511 27.5 20.587 27.5 21.25V25C27.5 25.663 27.2366 26.2989 26.7678 26.7678C26.2989 27.2366 25.663 27.5 25 27.5C19.0326 27.5 13.3097 25.1295 9.0901 20.9099C4.87053 16.6903 2.5 10.9674 2.5 5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H8.75C9.41304 2.5 10.0489 2.76339 10.5178 3.23223C10.9866 3.70107 11.25 4.33696 11.25 5V8.75C11.25 9.13811 11.1596 9.5209 10.9861 9.86803C10.8125 10.2152 10.5605 10.5171 10.25 10.75L9.665 11.1888C9.43552 11.364 9.27377 11.6132 9.20724 11.8942C9.1407 12.1751 9.17348 12.4705 9.3 12.73C11.0084 16.1998 13.818 19.006 17.29 20.71Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>;


    return (
        <div className="w-full min-w-[20px] max-w-[350px] overflow-hidden flex flex-col gap-3 h-full overflow-y-auto no-scrollbar py-3 pr-3">
            
            <BentoCard title="Technologies" icon={techIcon} className="min-h-[250px]">
               
            </BentoCard>

            <BentoCard title="Skills" icon={skillsIcon} className="min-h-[300px]">
               <Accordion type="single" collapsible defaultValue="item-1">
                    <AccordionItem value="item-5">
                        <AccordionTrigger className={"w-full flex items-center"}>
                            <div className="w-full flex items-center gap-3">
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                   <AccordionItem value="item-2">
                        <AccordionTrigger className={"w-full flex items-center"}>
                            <div className="w-full flex items-center gap-3">
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className={"w-full flex items-center"}>
                            <div className="w-full flex items-center gap-3">
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className={"w-full flex items-center"}>
                            <div className="w-full flex items-center gap-3">
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </BentoCard>

            <BentoCard title="Contact Me" icon={contactIcon} className="min-h-[200px]">
                <p className="text-gray-500">Mga social media links mo dito...</p>
            </BentoCard>

        </div>
    )
}

export default SubContent;