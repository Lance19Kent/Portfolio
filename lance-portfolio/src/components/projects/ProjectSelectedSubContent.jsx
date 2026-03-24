import BentoCard from "../BentoCard";
import { Link } from "react-router-dom";
import ContactMe from "../ContactMe";

const projectIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 23.75C20.8424 23.75 19.2527 23.0915 18.0806 21.9194C16.9085 20.7473 16.25 19.1576 16.25 17.5V27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 25H5C4.33696 25 3.70107 24.7366 3.23223 24.2678C2.76339 23.7989 2.5 23.163 2.5 22.5V6.25C2.5 5.58696 2.76339 4.95107 3.23223 4.48223C3.70107 4.01339 4.33696 3.75 5 3.75H9.875C10.2931 3.7459 10.7056 3.84673 11.0746 4.04327C11.4437 4.23981 11.7575 4.52578 11.9875 4.875L13 6.375C13.2276 6.72066 13.5375 7.0044 13.9019 7.20075C14.2662 7.39711 14.6736 7.49993 15.0875 7.5H25C25.663 7.5 26.2989 7.76339 26.7678 8.23223C27.2366 8.70107 27.5 9.33696 27.5 10V16.25" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 17.5C17.6307 17.5 18.75 16.3807 18.75 15C18.75 13.6193 17.6307 12.5 16.25 12.5C14.8693 12.5 13.75 13.6193 13.75 15C13.75 16.3807 14.8693 17.5 16.25 17.5Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 26.25C26.3807 26.25 27.5 25.1307 27.5 23.75C27.5 22.3693 26.3807 21.25 25 21.25C23.6193 21.25 22.5 22.3693 22.5 23.75C22.5 25.1307 23.6193 26.25 25 26.25Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

function ProjectSelectedSubContent(){
    return(
        <div className="overflow-y-auto no-scrollbar lg:py-3 lg:pr-3 flex flex-col gap-3">
            <BentoCard title={"Projects"} icon={projectIcon}>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col w-full gap-3">
                        <Link className="lg:px-3 px-6 w-full rounded-[10px] py-4 flex border-[.50px] border-border cursor-pointer flex-col">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-marked-icon lucide-book-marked"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex gap-2 items-center">
                                        <span className="font-medium text-[18px]">Bakehub</span>
                                        <p className="text-[#35BF46] text-[12px] px-2 border py-0.5 rounded-[10px] border-[#C2F49E] bg-[#F6FFDD]">Public</p>
                                    </div>
                                    <p className="font-medium text-[10px] text-[#B9B9B9]">Created on February 19, 2026</p>
                                </div>
                            
                                
                            </div>
                            
                        </Link>
                        <Link className="lg:px-3 px-6 w-full rounded-[10px] py-4 flex border-[.50px] border-border  cursor-pointer flex-col">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-marked-icon lucide-book-marked"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex gap-2 items-center">
                                        <span className="font-medium text-[18px]">Bakehub</span>
                                        <p className="text-[#35BF46] text-[12px] px-2 border py-0.5 rounded-[10px] border-[#C2F49E] bg-[#F6FFDD]">Public</p>
                                    </div>
                                    <p className="font-medium text-[10px] text-[#B9B9B9]">Created on February 19, 2026</p>
                                </div>
                            
                                
                            </div>
                            
                        </Link>
                        <Link className="lg:px-3 px-6 w-full rounded-[10px] py-4 flex  border-[.50px] border-border  cursor-pointer flex-col">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-marked-icon lucide-book-marked"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex gap-2 items-center">
                                        <span className="font-medium text-[18px]">Bakehub</span>
                                        <p className="text-[#35BF46] text-[12px] px-2 border py-0.5 rounded-[10px] border-[#C2F49E] bg-[#F6FFDD]">Public</p>
                                    </div>
                                    <p className="font-medium text-[10px] text-[#B9B9B9]">Created on February 19, 2026</p>
                                </div>
                            </div>
                        </Link>
                        <Link className="lg:px-3 px-6 w-full rounded-[10px] py-4 flex border-[.50px] border-border  cursor-pointer flex-col">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-marked-icon lucide-book-marked"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex gap-2 items-center">
                                        <span className="font-medium text-[18px]">Bakehub</span>
                                        <p className="text-[#35BF46] text-[12px] px-2 border py-0.5 rounded-[10px] border-[#C2F49E] bg-[#F6FFDD]">Public</p>
                                    </div>
                                    <p className="font-medium text-[10px] text-[#B9B9B9]">Created on February 19, 2026</p>
                                </div>
                            
                                
                            </div>
                            
                        </Link>
                        <Link className="lg:px-3 px-6 w-full rounded-[10px] py-4 flex  border-[.50px] border-border  cursor-pointer flex-col">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-marked-icon lucide-book-marked"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex gap-2 items-center">
                                        <span className="font-medium text-[18px]">Bakehub</span>
                                        <p className="text-[#35BF46] text-[12px] px-2 border py-0.5 rounded-[10px] border-[#C2F49E] bg-[#F6FFDD]">Public</p>
                                    </div>
                                    <p className="font-medium text-[10px] text-[#B9B9B9]">Created on February 19, 2026</p>
                                </div>
                            
                                
                            </div>
                            
                        </Link>

                    
                    </div>
                    <Link to={"/projects"} className="text-center block text-[#3FA6F4] hover:underline">See More</Link>
                </div>
                  
            </BentoCard>
            <ContactMe/>
        </div>
    )
}

export default ProjectSelectedSubContent;