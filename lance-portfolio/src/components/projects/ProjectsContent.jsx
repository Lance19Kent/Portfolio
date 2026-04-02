import BentoCard from "../BentoCard";
import ContactMe from "../ContactMe";
import { Link } from "react-router-dom";
import { projectsData } from "@/data";
import ProjectSubContent from "./ProjectSubContent";

const featuredIcon =   <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 21.25V27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.25 13.45C11.2498 13.9151 11.1198 14.3709 10.8747 14.7662C10.6295 15.1615 10.279 15.4805 9.8625 15.6875L7.6375 16.8125C7.22098 17.0195 6.87046 17.3385 6.62535 17.7338C6.38024 18.1291 6.25025 18.5849 6.25 19.05V20C6.25 20.3315 6.3817 20.6495 6.61612 20.8839C6.85054 21.1183 7.16848 21.25 7.5 21.25H22.5C22.8315 21.25 23.1495 21.1183 23.3839 20.8839C23.6183 20.6495 23.75 20.3315 23.75 20V19.05C23.7498 18.5849 23.6198 18.1291 23.3747 17.7338C23.1295 17.3385 22.779 17.0195 22.3625 16.8125L20.1375 15.6875C19.721 15.4805 19.3705 15.1615 19.1253 14.7662C18.8802 14.3709 18.7502 13.9151 18.75 13.45V8.75C18.75 8.41848 18.8817 8.10054 19.1161 7.86612C19.3505 7.6317 19.6685 7.5 20 7.5C20.663 7.5 21.2989 7.23661 21.7678 6.76777C22.2366 6.29893 22.5 5.66304 22.5 5C22.5 4.33696 22.2366 3.70107 21.7678 3.23223C21.2989 2.76339 20.663 2.5 20 2.5H10C9.33696 2.5 8.70107 2.76339 8.23223 3.23223C7.76339 3.70107 7.5 4.33696 7.5 5C7.5 5.66304 7.76339 6.29893 8.23223 6.76777C8.70107 7.23661 9.33696 7.5 10 7.5C10.3315 7.5 10.6495 7.6317 10.8839 7.86612C11.1183 8.10054 11.25 8.41848 11.25 8.75V13.45Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
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
                            <div className="lg:pt-2 flex items-center gap-1 text-[#468cfc] opacity-100 transition-opacity duration-1000 group-hover:text-[#92bcff] ease-out">
                                <span className="text-[13px] font-medium">View Project</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </div>

                        </div>
                    </Link>
                )}
                </div>
            </BentoCard> 
            <ProjectSubContent className="w-full grid lg:grid-cols-4"/>
        </div>
    )
}

export default ProjectsContent;