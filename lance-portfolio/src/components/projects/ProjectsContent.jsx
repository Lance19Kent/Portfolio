import BentoCard from "../BentoCard";
import ContactMe from "../ContactMe";
import { Link } from "react-router-dom";
import { projectsData } from "@/data";

const featuredIcon =   <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 21.25V27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.25 13.45C11.2498 13.9151 11.1198 14.3709 10.8747 14.7662C10.6295 15.1615 10.279 15.4805 9.8625 15.6875L7.6375 16.8125C7.22098 17.0195 6.87046 17.3385 6.62535 17.7338C6.38024 18.1291 6.25025 18.5849 6.25 19.05V20C6.25 20.3315 6.3817 20.6495 6.61612 20.8839C6.85054 21.1183 7.16848 21.25 7.5 21.25H22.5C22.8315 21.25 23.1495 21.1183 23.3839 20.8839C23.6183 20.6495 23.75 20.3315 23.75 20V19.05C23.7498 18.5849 23.6198 18.1291 23.3747 17.7338C23.1295 17.3385 22.779 17.0195 22.3625 16.8125L20.1375 15.6875C19.721 15.4805 19.3705 15.1615 19.1253 14.7662C18.8802 14.3709 18.7502 13.9151 18.75 13.45V8.75C18.75 8.41848 18.8817 8.10054 19.1161 7.86612C19.3505 7.6317 19.6685 7.5 20 7.5C20.663 7.5 21.2989 7.23661 21.7678 6.76777C22.2366 6.29893 22.5 5.66304 22.5 5C22.5 4.33696 22.2366 3.70107 21.7678 3.23223C21.2989 2.76339 20.663 2.5 20 2.5H10C9.33696 2.5 8.70107 2.76339 8.23223 3.23223C7.76339 3.70107 7.5 4.33696 7.5 5C7.5 5.66304 7.76339 6.29893 8.23223 6.76777C8.70107 7.23661 9.33696 7.5 10 7.5C10.3315 7.5 10.6495 7.6317 10.8839 7.86612C11.1183 8.10054 11.25 8.41848 11.25 8.75V13.45Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

const projectsIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 23.75C20.8424 23.75 19.2527 23.0915 18.0806 21.9194C16.9085 20.7473 16.25 19.1576 16.25 17.5V27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 25H5C4.33696 25 3.70107 24.7366 3.23223 24.2678C2.76339 23.7989 2.5 23.163 2.5 22.5V6.25C2.5 5.58696 2.76339 4.95107 3.23223 4.48223C3.70107 4.01339 4.33696 3.75 5 3.75H9.875C10.2931 3.7459 10.7056 3.84673 11.0746 4.04327C11.4437 4.23981 11.7575 4.52578 11.9875 4.875L13 6.375C13.2276 6.72066 13.5375 7.0044 13.9019 7.20075C14.2662 7.39711 14.6736 7.49993 15.0875 7.5H25C25.663 7.5 26.2989 7.76339 26.7678 8.23223C27.2366 8.70107 27.5 9.33696 27.5 10V16.25" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 17.5C17.6307 17.5 18.75 16.3807 18.75 15C18.75 13.6193 17.6307 12.5 16.25 12.5C14.8693 12.5 13.75 13.6193 13.75 15C13.75 16.3807 14.8693 17.5 16.25 17.5Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 26.25C26.3807 26.25 27.5 25.1307 27.5 23.75C27.5 22.3693 26.3807 21.25 25 21.25C23.6193 21.25 22.5 22.3693 22.5 23.75C22.5 25.1307 23.6193 26.25 25 26.25Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

function ProjectsContent(){
    const featuredProjects = projectsData.slice(0,3);
    return(
        <div className="w-full h-full lg:pr-3 px-3 lg:px-0 py-3 overflow-y-auto no-scrollbar overflow-hidden flex flex-col gap-3"> 
          <BentoCard title={"Featured"} icon={featuredIcon} className="w-full relative "> 
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                {featuredProjects.map((post)=>
                    <Link 
                        key={post.id}
                        to={`/projects-selected/${post.slug}`} 
                        className="w-full  flex flex-col-reverse bg-white dark:bg-zinc-900/50 rounded-[14px] border border-zinc-200 dark:border-zinc-800 transition-all duration-300 overflow-hidden group cursor-pointer"
                    >
                        <div className="w-full aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative border-b border-zinc-100 dark:border-zinc-800">
                            <img 
                                src={post.thumbnail} 
                                alt={post.title +"'s Image"}
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-col flex-1 p-5 gap-1.5">
                            
                            <h1 className="font-semibold text-zinc-900 dark:text-zinc-100 text-[20px] leading-snug line-clamp-1">
                                {post.title}
                            </h1>
                            
                            {/* Date Area */}
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <svg viewBox="0 0 12 12" className="stroke-zinc-400 w-3.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"  strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6 3V6L5 8"  strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className=" text-[12px] font-light text-ring tracking-wide">
                                    {post.date}
                                </span>
                            </div>

                            {/* Description Area */}
                            <p className="mt-2 text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-light line-clamp-3">
                                {post.description}
                            </p>

                            {/* "Read More" subtle cue */}
                            <div className="lg:pt-2 flex items-center gap-1 text-[#468cfc] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-[13px] font-medium">View Project</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>

                        </div>
                    </Link>
                )}
                </div>
            </BentoCard> 
            <BentoCard title={"Other Projects"} icon={projectsIcon} className="w-full relative"> 
                <div className="grid lg:grid-cols-4 grid-cols-1 w-full gap-5">
                    <Link className="lg:px-3 px-6 w-full rounded-[10px] py-4 flex lg:items-center border-[.50px] border-border cursor-pointer flex-col">
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
                   <Link className="lg:px-3 px-6 w-full rounded-[10px] py-4 flex lg:items-center  border-[.50px] border-border cursor-pointer flex-col">
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
                   <Link className="lg:px-3 px-6 w-full rounded-[10px] py-4 flex lg:items-center  border-[.50px] border-border cursor-pointer flex-col">
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
                  <Link className="lg:px-3 px-6 w-full rounded-[10px] py-4 flex lg:items-center  border-[.50px] border-border cursor-pointer flex-col">
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
                   <Link className="lg:px-3 px-6 w-full rounded-[10px] py-4 flex lg:items-center  border-[.50px] border-border cursor-pointer flex-col">
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
                    <Link className="lg:px-3 px-6 w-full rounded-[10px] py-4 flex lg:items-center  border-[.50px] border-border cursor-pointer flex-col">
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
                    <Link className="lg:px-3 px-6 w-full rounded-[10px] py-4 flex lg:items-center  border-[.50px] border-border cursor-pointer flex-col">
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
                    <Link className="lg:px-3 px-6 w-full rounded-[10px] py-4 flex lg:items-center  border-[.50px] border-border cursor-pointer flex-col">
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
            </BentoCard>          
           <ContactMe/>
        </div>
    )
}

export default ProjectsContent;