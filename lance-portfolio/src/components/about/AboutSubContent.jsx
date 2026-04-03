import BentoCard from "../BentoCard";
import ContactMe from "../ContactMe";

const educationIcon = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.33331V28" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3333 16H23.9999" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3333 10.6667H23.9999" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.00008 24C3.64646 24 3.30732 23.8595 3.05727 23.6095C2.80722 23.3594 2.66675 23.0203 2.66675 22.6667V5.33333C2.66675 4.97971 2.80722 4.64057 3.05727 4.39052C3.30732 4.14048 3.64646 4 4.00008 4H10.6667C12.0812 4 13.4378 4.5619 14.438 5.5621C15.4382 6.56229 16.0001 7.91885 16.0001 9.33333C16.0001 7.91885 16.562 6.56229 17.5622 5.5621C18.5624 4.5619 19.9189 4 21.3334 4H28.0001C28.3537 4 28.6928 4.14048 28.9429 4.39052C29.1929 4.64057 29.3334 4.97971 29.3334 5.33333V22.6667C29.3334 23.0203 29.1929 23.3594 28.9429 23.6095C28.6928 23.8595 28.3537 24 28.0001 24H20.0001C18.9392 24 17.9218 24.4214 17.1717 25.1716C16.4215 25.9217 16.0001 26.9391 16.0001 28C16.0001 26.9391 15.5787 25.9217 14.8285 25.1716C14.0784 24.4214 13.0609 24 12.0001 24H4.00008Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 16H10.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10.6667H10.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

const experienceIcon = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16H16.0133" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3334 7.99996V5.33329C21.3334 4.62605 21.0525 3.94777 20.5524 3.44767C20.0523 2.94758 19.374 2.66663 18.6667 2.66663H13.3334C12.6262 2.66663 11.9479 2.94758 11.4478 3.44767C10.9477 3.94777 10.6667 4.62605 10.6667 5.33329V7.99996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.3334 17.3334C25.3771 19.9453 20.7408 21.3378 16.0001 21.3378C11.2593 21.3378 6.62303 19.9453 2.66675 17.3334" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.6667 8H5.33341C3.86066 8 2.66675 9.19391 2.66675 10.6667V24C2.66675 25.4728 3.86066 26.6667 5.33341 26.6667H26.6667C28.1395 26.6667 29.3334 25.4728 29.3334 24V10.6667C29.3334 9.19391 28.1395 8 26.6667 8Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

function AboutSubContent(){
    return(
        <div className="w-full lg:py-3 lg:pr-3 pb-3 flex flex-col gap-3 overflow-y-auto no-scrollbar">
            <BentoCard title={"Education"} icon={educationIcon} className="min-h-70">
                <div className="flex flex-col gap-5">
                    <div className="flex w-full gap-5">
                        <img src="/about-png/QCU-Logo.png" className="lg:w-13 lg:h-13 w-11 h-11"></img>
                        <div className="flex flex-col gap-1 w-full overflow-hidden">
                            <div className="w-full ">
                                <p className="font-medium truncate">BS in Information Technology</p>
                                <p className="font-light text-semitext-ring text-[14px]">Quezon City University</p>
                                <p className="font-light text-[14px] text-semitext-ring">GWA: <span className="text-[#25B243]">In Progress</span> / 1.0</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.66675 1.16669V3.50002" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.33325 1.16669V3.50002" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.0833 2.33331H2.91667C2.27233 2.33331 1.75 2.85565 1.75 3.49998V11.6666C1.75 12.311 2.27233 12.8333 2.91667 12.8333H11.0833C11.7277 12.8333 12.25 12.311 12.25 11.6666V3.49998C12.25 2.85565 11.7277 2.33331 11.0833 2.33331Z" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.75 5.83331H12.25" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className="text-[12px] text-[#9D9D9D]">August 2023 - Present</p>
                            </div>
                            <p className="text-[13px] lg:text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-light">
                                Currently taking a Bachelor of Science in Information and Technology in Quezon City University. Focusing in Web Technologies that can create innovative and sustainable solutions not only academically, but for the community. 
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full gap-5">
                        <img src="/about-png/ROSARIO-INSTITUTE-LOGO.png" className="lg:w-13 lg:h-13 w-11 h-11"></img>
                        <div className="flex flex-col gap-1 w-full overflow-hidden"> 
                            <div className="w-full">
                                <h1 className="font-medium truncate">Track-Information and Communications Technology with Specialization in Computer Programming</h1>
                                <p className="font-light text-[14px] text-semitext-ring">Rosario Institute</p>
                                <p className="font-light text-[14px] text-semitext-ring">GWA: 96 / 100</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.66675 1.16669V3.50002" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.33325 1.16669V3.50002" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.0833 2.33331H2.91667C2.27233 2.33331 1.75 2.85565 1.75 3.49998V11.6666C1.75 12.311 2.27233 12.8333 2.91667 12.8333H11.0833C11.7277 12.8333 12.25 12.311 12.25 11.6666V3.49998C12.25 2.85565 11.7277 2.33331 11.0833 2.33331Z" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.75 5.83331H12.25" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className="text-[12px] text-[#9D9D9D]">June 2019 - May 2021</p>
                            </div>
                            <p className="text-[13px] lg:text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-light">
                                Consistent Honor and Achievements - 90 above grades everyday year, and masters java and sql. Accumulated with High Honor with the average of 96. I learned what is truly my goal, my career path and created mindset that will help me achieve my goals.
                            </p>
                        </div>
                    </div>
                </div>
            </BentoCard>
            <BentoCard title={"Experience"} icon={experienceIcon}>
                <div className="flex flex-col">
                    <div className="flex w-full lg:gap-5 gap-4">
                        <img src="/about-png/STUDYPOOL-LOGO.png" className="lg:w-13 lg:h-13 w-11 h-11"></img>
                        <div className="flex flex-col gap-1">
                            <div>
                                <span className="font-medium">StudyPool</span>
                                <p className="font-light text-semitext-ring text-[14px]">StudyPool Inc.</p>
                                <p className="font-light text-[14px] text-semitext-ring">Online Platform</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.66675 1.16669V3.50002" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.33325 1.16669V3.50002" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.0833 2.33331H2.91667C2.27233 2.33331 1.75 2.85565 1.75 3.49998V11.6666C1.75 12.311 2.27233 12.8333 2.91667 12.8333H11.0833C11.7277 12.8333 12.25 12.311 12.25 11.6666V3.49998C12.25 2.85565 11.7277 2.33331 11.0833 2.33331Z" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.75 5.83331H12.25" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className="text-[12px] text-[#9D9D9D]">Jan 2026 - Present</p>
                            </div>
                            <p className="text-[13px] lg:text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-light">
                                Teach and post programming task and activities. Assisting students that having a hard time studying computer programming. 
                            </p>
                        </div>
                    </div>
                </div>
            </BentoCard>
            <ContactMe></ContactMe>
        </div>

    )
}

export default AboutSubContent;