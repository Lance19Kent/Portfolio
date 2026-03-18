import BentoCard from "../BentoCard";
import { Link } from "react-router-dom";

function ProjectSelectedContent(){
    return(
        <div className="py-4 overflow-y-auto no-scrollbar">
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
                                <h1 className="font-medium text-[32px]">Okay Lang App</h1>
                                <p className="text-[#35BF46] text-[14px] px-3 border py-1 rounded-4xl border-[#C2F49E] bg-[#F6FFDD]">Public</p>
                            </div>
                            <div className="flex flex-wrap gap-[8px]">
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
                            <div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="w-full pt-10">
                        <img src="./blog-assets/blog-example.jpg" alt="" className="w-full rounded-[10px]" />
                    </div>
                    <div className="leading-7">
                        <p className="font-light text-[16px] pt-8">
                            Consistent Honor and Achievements - 90 above grades everyday year, and masters java and sql. Accumulated with High Honor with the average of 96. I learned what is truly my goal, my career path and created mindset that will help me achieve my goals.
                            
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                    <div className="pt-5">
                        <img src="./blog-assets/blog-example2.jpg" alt="" className="rounded-[10px] " />
                    </div>
                                       <div className="leading-7">
                        <p className="font-light text-[16px] pt-8">
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