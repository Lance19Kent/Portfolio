import BentoCard from "../BentoCard";
import { Link, useNavigate } from "react-router-dom";

function ProjectSelectedContent(){
    const navigate = useNavigate();

    return(
        <div className="lg:py-3 pt-3 overflow-y-auto no-scrollbar">
            <BentoCard>
                <div className="flex flex-col gap-5">
                    
                    {/* BACK BUTTON (Consistent sa original) */}
                    <button 
                        onClick={() => navigate(-1)}
                        className="p-3 w-fit rounded-[100px] outline outline-1 outline-zinc-200 dark:outline-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                        <svg width="24" height="24" className="dark:invert" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.8571 20.7143L10 13.8572L16.8571 7.00006" stroke="black" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    {/* HEADER SECTION (Consistent styling) */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <h1 className="font-semibold lg:text-4xl text-3xl text-zinc-900 dark:text-zinc-100">Okay Lang App</h1>
                            <p className="text-[#35BF46] text-[14px] px-3 border py-1 rounded-4xl border-[#C2F49E] bg-[#F6FFDD]">Public</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {['REACT JS', 'TAILWIND CSS', 'NEXT JS', 'ZUSTAND', 'SUPABASE'].map(tech => (
                                <p key={tech} className="text-zinc-500 dark:text-zinc-400  text-[12px] w-fit px-2 border py-0.5 rounded-[5px] border-zinc-300 dark:border-zinc-800">
                                    {tech}
                                </p>
                            ))}
                        </div>

                        {/* QUICK STATS (Binalik ko yung original vertical stack mo) */}
                        <div className="flex flex-col gap-3 mt-1">
                            <div className="flex lg:gap-3 gap-2 items-center">
                                <div className="lg:w-6 w-4 text-zinc-800 dark:text-zinc-200">
                                    <svg viewBox="0 0 24 24" className="dark:invert" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <p className="lg:text-base text-sm text-zinc-700 dark:text-zinc-300">Full-Stack Developer</p>
                            </div>
                            <div className="flex lg:gap-3 gap-2 items-center">
                                <div className="lg:w-6 w-4 text-zinc-800 dark:text-zinc-200">
                                    <svg viewBox="0 0 24 24" className="dark:invert" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 13H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M19 9H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M18 5H16C15.4477 5 15 5.44772 15 6V16C15 16.5523 15.4477 17 16 17H18C18.5523 17 19 16.5523 19 16V6C19 5.44772 18.5523 5 18 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10 8H8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17H10C10.5523 17 11 16.5523 11 16V9C11 8.44772 10.5523 8 10 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-300">Personal Project</p>
                            </div>
                            <div className="flex lg:gap-3 gap-2 items-center">
                                <div className="lg:w-6 w-4 text-zinc-800 dark:text-zinc-200">
                                    <svg viewBox="0 0 24 24" className="dark:invert" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-300">14 Days Dev Time</p>
                            </div>
                        </div>
                    </div>

                    {/* HERO MEDIA (Image) */}
                    <div className="w-full pt-4">
                        <img src="./blog-assets/blog-example.jpg" alt="Okay Lang App Preview" className="w-full rounded-[10px] ring-1 ring-black/5 dark:ring-white/10 shadow-sm" />
                    </div>

                    {/* CALL TO ACTION BUTTONS (The Strategy Part) */}
                    <div className="flex flex-wrap gap-3 pt-2">
                        <a href="https://github.com/yourusername/okay-lang-app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[14px] font-medium rounded-[100px] hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0 .1-3.8s-1.2-.4-3.9 1.7a13.4 13.4 0 0 0-7 0C4.2 2.6 3 3 3 3a5.4 5.4 0 0 0 .1 3.8A5.4 5.4 0 0 0 1.5 10.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
                            View Source Code
                        </a>
                    </div>

                    {/* CONTENT / CASE STUDY SECTION */}
                    <div className="flex flex-col gap-6 pt-4">
                        
                        {/* 1. Project Overview */}
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">Project Overview</h2>
                            <p className="font-light lg:text-[16px] text-[15px] leading-relaxed lg:leading-loose text-zinc-600 dark:text-zinc-400 tracking-wide">
                                The "Okay Lang App" is a personal initiative designed to solve user engagement problems. During my 14-day development sprint, I focused on creating an intuitive user interface while establishing a robust backend architecture using Supabase. This project served as a playground to deepen my understanding of state management with Zustand.
                            </p>
                        </div>

                        {/* Middle Image Support (Optional) */}
                        <div className="w-full pt-2">
                            <img src="./blog-assets/blog-example2.jpg" alt="Features Preview" className="w-full rounded-[10px] ring-1 ring-black/5 dark:ring-white/10 shadow-sm" />
                        </div>

                        {/* 2. Key Features */}
                        <div className="flex flex-col gap-2 pt-2">
                            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">Key Features</h2>
                            <ul className="list-disc pl-6 space-y-3 font-light lg:text-[16px] text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                                <li><strong>Real-time Sync:</strong> Seamless database synchronization via Supabase.</li>
                                <li><strong>Responsive UI:</strong> Accessible and modern interfaces built with Tailwind CSS.</li>
                                <li><strong>Optimized State:</strong> Global state management using Zustand for faster rendering.</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </BentoCard>
        </div>
    )
}

export default ProjectSelectedContent;