import BentoCard from "../BentoCard";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { projectsData } from "@/data";

function ProjectSelectedContent(){
    const { slug } = useParams();
    const project = projectsData.find((b) => b.slug === slug);
    const navigate = useNavigate();

     if(!project) return <Navigate to="/projects" replace/>

    return(
        <div>
            <BentoCard>
                <div className="flex flex-col gap-5">
                    <button onClick={() => navigate(-1)}>
                        <div className="p-2 w-fit rounded-[100px] outline-1 outline-zinc-200 cursor-pointer dark:outline-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                            <svg width="24" height="24" className="dark:invert" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.8571 20.7143L10 13.8572L16.8571 7.00006" stroke="black" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </button>

                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <h1 className="font-semibold lg:text-4xl text-3xl text-zinc-900 dark:text-zinc-100">{project.title}</h1>
                            {project.status === 'Public' ? (
                                <p className="text-[#35BF46] text-[14px] px-3 border py-1 rounded-4xl border-[#C2F49E] bg-[#F6FFDD]">Public</p>
                            ) : (
                                <p className="text-zinc-500 text-[14px] px-3 border py-1 rounded-4xl border-zinc-300 bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700">Private</p>
                            )}
                        </div>
                        
                        {/* DYNAMIC TECH STACK */}
                        <div className="flex flex-wrap gap-2">
                            {project.techStack?.map(tech => (
                                <p key={tech} className="text-zinc-500 dark:text-zinc-400 text-[12px] w-fit px-2 border py-0.5 rounded-[5px] border-zinc-300 dark:border-zinc-800">
                                    {tech}
                                </p>
                            ))}
                        </div>

                        {/* DYNAMIC QUICK STATS */}
                        <div className="flex flex-col gap-3 mt-1">
                            <div className="flex lg:gap-3 gap-2 items-center">
                                <div className="lg:w-6 w-4 text-zinc-800 dark:text-zinc-200">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <p className="lg:text-base text-sm text-zinc-700 dark:text-zinc-300">{project.role}</p>
                            </div>
                            <div className="flex lg:gap-3 gap-2 items-center">
                                <div className="lg:w-6 w-4 text-zinc-800 dark:text-zinc-200">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 13H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M19 9H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M18 5H16C15.4477 5 15 5.44772 15 6V16C15 16.5523 15.4477 17 16 17H18C18.5523 17 19 16.5523 19 16V6C19 5.44772 18.5523 5 18 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10 8H8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17H10C10.5523 17 11 16.5523 11 16V9C11 8.44772 10.5523 8 10 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-300">{project.type}</p>
                            </div>
                            <div className="flex lg:gap-3 gap-2 items-center">
                                <div className="lg:w-6 w-4 text-zinc-800 dark:text-zinc-200">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-300">{project.duration}</p>
                            </div>
                        </div>
                    </div>

                    {/* DYNAMIC TOP IMAGE */}
                    {project.content?.images?.[0] && (
                        <div className="w-full pt-4">
                            <img src={project.content.images[0]} alt={`${project.title} Preview`} className="w-full rounded-[10px] ring-1 ring-black/5 dark:ring-white/10 " />
                        </div>
                    )}

                    {/* DYNAMIC CTA BUTTONS */}
                    <div className="flex flex-wrap gap-3 pt-2">
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[14px] font-medium rounded-[100px] hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0 .1-3.8s-1.2-.4-3.9 1.7a13.4 13.4 0 0 0-7 0C4.2 2.6 3 3 3 3a5.4 5.4 0 0 0 .1 3.8A5.4 5.4 0 0 0 1.5 10.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
                                View Source Code
                            </a>
                        )}
                        {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 text-[14px] font-medium rounded-[100px] hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                Live Demo
                            </a>
                        )}
                    </div>

                    {/* DYNAMIC CONTENT / CASE STUDY SECTION */}
                    <div className="flex flex-col gap-6 pt-4">
                        
                        {/* 1. Project Overview */}
                        {project.content?.overview && (
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">Project Overview</h2>
                                <p className="font-light lg:text-[16px] text-[15px] leading-relaxed lg:leading-loose text-zinc-600 dark:text-zinc-400 tracking-wide">
                                    {project.content.overview}
                                </p>
                            </div>
                        )}

                        {/* 2. Middle Image Support (Kung meron man sa array) */}
                       {project.content?.gallery && project.content.gallery.length > 0 && (
                            <div className="flex flex-col gap-3 pt-2">
                                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">Project Highlights</h2>
                                
                                {/* GRID CONTAINER: 2 columns on Desktop, 1 on Mobile */}
                                <div className="grid grid-cols-1  gap-4">
                                    {project.content.gallery.map((img, idx) => (
                                        <div 
                                            key={idx} 
                                            // TWEAK: Same card styling sa buong site mo
                                            className="w-full rounded-[10px] overflow-hidden ring-1 ring-black/5 dark:ring-white/10 aspect-video bg-zinc-100 dark:bg-zinc-800 group"
                                        >
                                            <img 
                                                src={img} 
                                                alt={`${project.title} screenshot ${idx + 1}`} 
                                                className="w-full h-full object-contain repeat- transition-transform duration-500 ease-out " 
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 3. Key Features */}
                        {project.content?.features && project.content.features.length > 0 && (
                            <div className="flex flex-col gap-2 pt-2">
                                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">Key Features</h2>
                                <ul className="list-disc pl-6 space-y-3 font-light lg:text-[16px] text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                                    {project.content.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <strong className="font-medium text-zinc-900 dark:text-zinc-200">{feature.title}: </strong> 
                                            {feature.desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>

                </div>
            </BentoCard>
        </div>
    )
}

export default ProjectSelectedContent;