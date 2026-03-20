import BentoCard from "../BentoCard";
import { Link } from "react-router-dom";

function ProjectSelectedContent(){
    return(
        <div className="lg:py-3 pt-3 overflow-y-auto no-scrollbar">
            <BentoCard>
                <div>
                    <div className="flex flex-col gap-5">
                        <Link to={"/projects"} >
                            <div className="p-3 w-fit rounded-[100px] outline">
                                <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8571 20.7143L10 13.8572L16.8571 7.00006" stroke="black" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </Link>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <h1 className="font-medium lg:text-4xl text-3xl">Okay Lang App</h1>
                                <p className="text-[#35BF46] text-[14px] px-3 border py-1 rounded-4xl border-[#C2F49E] bg-[#F6FFDD]">Public</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <p className="text-[#838383] text-[12px] w-fit px-2 border py-0.5 rounded-[5px] border-[#b3b3b3]">REACT JS</p>
                                <p className="text-[#838383] text-[12px] w-fit px-2 border py-0.5 rounded-[5px] border-[#b3b3b3]">CSS3</p>
                                <p className="text-[#838383] text-[12px] w-fit px-2 border py-0.5 rounded-[5px] border-[#b3b3b3]">TAILWIND CSS</p>
                                <p className="text-[#838383] text-[12px] w-fit px-2 border py-0.5 rounded-[5px] border-[#b3b3b3]">NEXT JS</p>
                                <p className="text-[#838383] text-[12px] w-fit px-2 border py-0.5 rounded-[5px] border-[#b3b3b3]">HTML</p>
                                <p className="text-[#838383] text-[12px] w-fit px-2 border py-0.5 rounded-[5px] border-[#b3b3b3]">JAVASCRIPT</p>
                                <p className="text-[#838383] text-[12px] w-fit px-2 border py-0.5 rounded-[5px] border-[#b3b3b3]">SQL</p>
                                <p className="text-[#838383] text-[12px] w-fit px-2 border py-0.5 rounded-[5px] border-[#b3b3b3]">GIT</p>
                                <p className="text-[#838383] text-[12px] w-fit px-2 border py-0.5 rounded-[5px] border-[#b3b3b3]">ZUSTAND</p>
                                <p className="text-[#838383] text-[12px] w-fit px-2 border py-0.5 rounded-[5px] border-[#b3b3b3]">SUPABASE</p>
                            </div>
                            <div className="flex items-center gap-2">
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex lg:gap-3 gap-2 items-center">
                                    <div className="lg:w-6 w-4">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <p className="lg:text-base text-sm">Full-Stack Developer</p>
                                </div>
                                <div className="flex lg:gap-3 gap-2 items-center">
                                    <div className="lg:w-6 w-4">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 13H7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M19 9H15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M18 5H16C15.4477 5 15 5.44772 15 6V16C15 16.5523 15.4477 17 16 17H18C18.5523 17 19 16.5523 19 16V6C19 5.44772 18.5523 5 18 5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10 8H8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17H10C10.5523 17 11 16.5523 11 16V9C11 8.44772 10.5523 8 10 8Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    
                                    <p className="text-sm lg:text-base">Personal Project</p>
                                </div>
                                <div className="flex lg:gap-3 gap-2 items-center">
                                    <div className="lg:w-6 w-4">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 2V6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M16 2V6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M3 10H21" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    </div>
                                    <p className="text-sm lg:text-base">14 Days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pt-6">
                        <img src="./blog-assets/blog-example.jpg" alt="" className="w-full rounded-[10px]" />
                    </div>
                    <div className="">
                        <p className="font-light lg:text-base text-sm pt-6 leading-6 lg:leading-7">
                            Consistent Honor and Achievements - 90 above grades everyday year, and masters java and sql. Accumulated with High Honor with the average of 96. I learned what is truly my goal, my career path and created mindset that will help me achieve my goals.
                            
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                    <div className="pt-6">
                        <img src="./blog-assets/blog-example2.jpg" alt="" className="rounded-[10px] " />
                    </div>
                        <div className="leading-7">
                        <p className="font-light lg:text-base text-sm pt-6 leading-6 lg:leading-7">
                            Consistent Honor and Achievements - 90 above grades everyday year, and masters java and sql. Accumulated with High Honor with the average of 96. I learned what is truly my goal, my career path and created mindset that will help me achieve my goals.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                </div>
            </BentoCard>
        </div>
    )
}

export default ProjectSelectedContent;