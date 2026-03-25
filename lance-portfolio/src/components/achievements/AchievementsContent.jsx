import BentoCard from "../BentoCard";
import ContactMe from "../ContactMe";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { achievementsData } from "@/data";

function AchievementCard({data}){
    return(
        <>
        <Dialog>
            <DialogTrigger asChild className="flex flex-col gap-1 transition ease-in duration-200 cursor-pointer group">
                <div className="flex flex-col overflow-hidden">
                    <div className="w-full aspect-5/3.5 bg-zinc-200 dark:bg-[#5252523f] p-1 rounded-[10px] overflow-hidden border-border">
                        <img src={data.image} alt={data.title} className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
                    </div>
                    <div className="w-full flex gap-3 p-2">
                        <div className="w-6 h-fit bg-white p-0.5 rounded shrink-0">
                            <img src={data.issuerLogo} alt={`${data.issuer} Logo`} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col w-full overflow-hidden">
                            <div className="leading-5">
                                <h1 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-[16px]">{data.title}</h1>
                                <p className="text-[14px]">{data.issuer}</p>
                            </div>
                            <p className="font-light text-[12px] text-ring">Issued on {data.date}</p>
                        </div>
                    </div>
                </div>
            </DialogTrigger>

            {/* Apple-Aesthetic Modal Content */}
            <DialogContent className="w-full max-w-4xl p-8 bg-white dark:bg-zinc-950 border-none shadow-2xl rounded-3xl [&>button]:right-5 [&>button]:top-5 [&>button]:rounded-full [&>button]:bg-zinc-100 [&>button]:p-2 [&>button]:text-zinc-500 hover:[&>button]:bg-zinc-200 focus:[&>button]:ring-0 dark:[&>button]:bg-zinc-800 dark:[&>button]:text-zinc-400">
                <div className="flex flex-col items-center w-full gap-6 mt-4">
                    
                    <div className="w-full flex justify-center rounded-2xl p-1 border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
                        <img src={data.image} alt={data.title} className="w-full max-h-[65vh] object-contain rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]"/>
                    </div>

                    {/* CONDITIONAL RENDERING: Button OR Description */}
                    {data.verifyLink ? (
                        <a href={data.verifyLink} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 w-fit px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-semibold rounded-full transition-all duration-200 active:scale-95 hover:bg-zinc-800 dark:hover:bg-white/90 shadow-md">
                            {data.linkText}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                    ) : data.description ? (
                        <div className="flex flex-col items-center text-center px-4">
                            <h3 className="text-zinc-900 dark:text-white font-medium text-lg">Highlight</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 max-w-md">{data.description}</p>
                        </div>
                    ) : null}

                </div>
            </DialogContent>
        </Dialog>
        </>
    )
}

const certifications = achievementsData.filter(item => item.category)

const certificationIcon = <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.795 21.4833L28.32 35.6933C28.3483 35.8606 28.3248 36.0326 28.2527 36.1862C28.1806 36.3398 28.0633 36.4678 27.9165 36.5529C27.7698 36.6381 27.6005 36.6764 27.4313 36.6628C27.2622 36.6492 27.1012 36.5842 26.97 36.4766L21.0033 31.9983C20.7153 31.7831 20.3654 31.6668 20.0058 31.6668C19.6463 31.6668 19.2964 31.7831 19.0083 31.9983L13.0317 36.4749C12.9005 36.5823 12.7398 36.6472 12.5708 36.6608C12.4019 36.6745 12.2328 36.6363 12.0861 36.5514C11.9394 36.4665 11.8221 36.3388 11.7499 36.1855C11.6776 36.0322 11.6538 35.8605 11.6817 35.6933L14.205 21.4833" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 23.3334C25.5228 23.3334 30 18.8562 30 13.3334C30 7.81053 25.5228 3.33337 20 3.33337C14.4772 3.33337 10 7.81053 10 13.3334C10 18.8562 14.4772 23.3334 20 23.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

const educationCertification = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.33325V27.9999" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3333 16H24" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3333 10.6667H24" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 24C3.64638 24 3.30724 23.8595 3.05719 23.6095C2.80714 23.3594 2.66667 23.0203 2.66667 22.6667V5.33333C2.66667 4.97971 2.80714 4.64057 3.05719 4.39052C3.30724 4.14048 3.64638 4 4 4H10.6667C12.0812 4 13.4377 4.5619 14.4379 5.5621C15.4381 6.56229 16 7.91885 16 9.33333C16 7.91885 16.5619 6.56229 17.5621 5.5621C18.5623 4.5619 19.9188 4 21.3333 4H28C28.3536 4 28.6928 4.14048 28.9428 4.39052C29.1929 4.64057 29.3333 4.97971 29.3333 5.33333V22.6667C29.3333 23.0203 29.1929 23.3594 28.9428 23.6095C28.6928 23.8595 28.3536 24 28 24H20C18.9391 24 17.9217 24.4214 17.1716 25.1716C16.4214 25.9217 16 26.9391 16 28C16 26.9391 15.5786 25.9217 14.8284 25.1716C14.0783 24.4214 13.0609 24 12 24H4Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 16H10.6667" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10.6667H10.6667" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

function AchievementsContent(){
    return (
        <div className="py-3 px-3 lg:px-0 lg:pr-3 overflow-y-auto flex-col gap-3 no-scrollbar overflow-hidden w-full flex ">
            <BentoCard title={"Certifications"} icon={certificationIcon}>
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
                    <Dialog className={"w-full"}>
                        <DialogTrigger asChild className="flex flex-col gap-1 transition ease-in duration-200 cursor-pointer group">
                            <div className="flex flex-col overflow-hidden">
                                <div className="w-full aspect-5/3.5 bg-gray-200 dark:bg-[#5252523f]  p-1 rounded-[10px] overflow-hidden border-border">
                                    <img src="./achievements-logo/certificates/responsive-web-design.jpg" alt="Responsive Web Design Certificate" className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
                                </div>
                                <div className="w-full flex gap-3 p-2">
                                    <div className="w-6 ">
                                        <img src="./achievements-logo/freecodecamp-circle.png" alt="FreeCodeCamp's Logo" />
                                    </div>
                                    <div className="flex flex-col w-full overflow-hidden">
                                        <div className="leading-5">
                                            <h1 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-[16px]">Responsive Web Design</h1>
                                            <p className=" text-[14px]">freeCodeCamp</p>
                                        </div>

                                        <p className="font-light text-[12px] text-ring">Issued on November 24, 2025</p>
                                    </div>

                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className={"w-full lg:min-w-160 border-none bg-card p-8 shadow-none flex flex-col items-center rounded-3xl "}>
                            <div className="mt-6 border border-zinc-200/50 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                                    <img src="./achievements-logo/certificates/responsive-web-design.jpg" alt="Responsive Web Design Certificate"/>
                            </div>
                            <div className="mt-3 w-fit">
                                <a href="https://freecodecamp.org/certification/fcce8b17ee6-8dd5-4c50-b625-61519cd8759e/responsive-web-design" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 px-6 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium rounded-full transition-all duration-200 active:scale-95 hover:bg-zinc-800 dark:hover:bg-white"
                                > Verify Credential
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </DialogContent>
                    </Dialog>
                 
                    <Dialog className={"w-full"}>
                        <DialogTrigger asChild className="flex flex-col gap-1 transition ease-in duration-200 cursor-pointer group">
                            <div className="flex flex-col overflow-hidden ">
                                <div className="w-full aspect-5/3.5 bg-gray-200 dark:bg-[#5252523f] rounded-[10px] p-1 overflow-hidden border-border">
                                    <img src="./achievements-logo/certificates/mob-testing-certificate.png" alt="Exploratory Testing Crash Course + Mob Testing Certificate" className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
                                </div>
                                <div className="w-full flex gap-3 p-2">
                                    <div className="w-6 bg-white h-fit p-0.5 rounded">
                                        <img src="./achievements-logo/qe360-logo.png" alt="QE360's Logo" />
                                    </div>
                                    <div className="flex flex-col w-full overflow-hidden">
                                        <div className="leading-5">
                                            <h1 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-[16px]">Exploratory Testing Crash Course + Mob Testing</h1>
                                            <p className=" text-[14px]">QE360</p>
                                        </div>

                                        <p className="font-light text-[12px] text-ring">Issued on October 22, 2025</p>
                                    </div>

                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className={"w-full lg:min-w-160 border-none bg-card p-8 shadow-none flex flex-col items-center rounded-3xl "}>
                            <div className="mt-6 border border-zinc-200/50 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                                    <img src="./achievements-logo/certificates/mob-testing-certificate.png" alt="Exploratory Testing Crash Course + Mob Testing Certificate"/>
                            </div>
                            <div className="mt-3 w-fit">
                                <a href="https://www.linkedin.com/posts/lancemagollado_im-truly-thankful-to-qe-360-the-entire-share-7386722480368844800-BPaM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnUxtoB-fGv6EOvoTcNll4-BG_P7-ncHR4" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 px-6 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium rounded-full transition-all duration-200 active:scale-95 hover:bg-zinc-800 dark:hover:bg-white"
                                > Verify Credential
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </BentoCard>

             <BentoCard title={"Education"} icon={educationCertification}>
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
                    <Dialog className={"w-full"}>
                        <DialogTrigger asChild className="flex flex-col gap-1 transition ease-in duration-200 cursor-pointer group">
                            <div className="flex flex-col overflow-hidden ">
                                <div className="w-full aspect-5/3.5 bg-gray-200 dark:bg-[#5252523f] rounded-[10px] p-1 overflow-hidden border-border">
                                    <img src="./achievements-logo\education\speaker-certificate.png" alt="Resource Speaker Certificate" className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
                                </div>
                                <div className="w-full flex gap-3 p-2">
                                    <div className="w-6">
                                        <img src="./about-png/QCU-Logo.png" alt="QCU's Logo" />
                                    </div>
                                    <div className="flex flex-col w-full overflow-hidden">
                                        <div className="leading-5">
                                            <h1 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-[16px]">Resource Speaker</h1>
                                            <p className=" text-[14px]">QCU - Batasan Campus</p>
                                        </div>

                                        <p className="font-light text-[12px] text-ring">Issued on February 09, 2026</p>
                                    </div>

                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className={"w-full lg:min-w-160 border-none bg-card p-8 shadow-none flex flex-col items-center rounded-3xl "}>
                            <div className="mt-6 border border-zinc-200/50 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                                    <img src="./achievements-logo\education\speaker-certificate.png" alt="Resource Speaker Certificate"/>
                            </div>
                            <div className="mt-3 w-fit">
                                <a href="https://www.linkedin.com/posts/lancemagollado_im-truly-thankful-to-qe-360-the-entire-share-7386722480368844800-BPaM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnUxtoB-fGv6EOvoTcNll4-BG_P7-ncHR4" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 px-6 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium rounded-full transition-all duration-200 active:scale-95 hover:bg-zinc-800 dark:hover:bg-white"
                                > Verify Credential
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </DialogContent>
                    </Dialog>
                      <div className="flex flex-col gap-1 transition ease-in duration-100 cursor-pointer">
                        <div className="w-full aspect-5/3 bg-gray-200 rounder-[10px]">
                            <img src="" alt="" />
                        </div>
                        <div className="w-full flex gap-3 p-2">
                            <div className="w-fit ">
                                <img src="./achievements-logo/freecodecamp-circle.png" alt="FreeCodeCamp's Logo" />
                            </div>
                            <div className="flex flex-col w-full overflow-hidden">
                                <div className="leading-5">
                                    <h1 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-[16px]">Responsive Web Design</h1>
                                    <p className=" text-[14px]">freeCodeCamp</p>
                                </div>

                                <p className="font-light text-[12px] text-ring">Issued on November 24, 2025</p>
                            </div>

                        </div>
                    </div>
                      <div className="flex flex-col gap-1 transition ease-in duration-100 cursor-pointer">
                        <div className="w-full aspect-5/3 bg-gray-200 rounder-[10px]">
                            <img src="" alt="" />
                        </div>
                        <div className="w-full flex gap-3 p-2">
                            <div className="w-fit ">
                                <img src="./achievements-logo/freecodecamp-circle.png" alt="FreeCodeCamp's Logo" />
                            </div>
                            <div className="flex flex-col w-full overflow-hidden">
                                <div className="leading-5">
                                    <h1 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-[16px]">Responsive Web Design</h1>
                                    <p className=" text-[14px]">freeCodeCamp</p>
                                </div>

                                <p className="font-light text-[12px] text-ring">Issued on November 24, 2025</p>
                            </div>

                        </div>
                    </div>
                      <div className="flex flex-col gap-1 transition ease-in duration-100 cursor-pointer">
                        <div className="w-full aspect-5/3 bg-gray-200 rounder-[10px]">
                            <img src="" alt="" />
                        </div>
                        <div className="w-full flex gap-3 p-2">
                            <div className="w-fit ">
                                <img src="./achievements-logo/freecodecamp-circle.png" alt="FreeCodeCamp's Logo" />
                            </div>
                            <div className="flex flex-col w-full overflow-hidden">
                                <div className="leading-5">
                                    <h1 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-[16px]">Responsive Web Design</h1>
                                    <p className=" text-[14px]">freeCodeCamp</p>
                                </div>

                                <p className="font-light text-[12px] text-ring">Issued on November 24, 2025</p>
                            </div>

                        </div>
                    </div>
                      <div className="flex flex-col gap-1 transition ease-in duration-100 cursor-pointer">
                        <div className="w-full aspect-5/3 bg-gray-200 rounder-[10px]">
                            <img src="" alt="" />
                        </div>
                        <div className="w-full flex gap-3 p-2">
                            <div className="w-fit ">
                                <img src="./achievements-logo/freecodecamp-circle.png" alt="FreeCodeCamp's Logo" />
                            </div>
                            <div className="flex flex-col w-full overflow-hidden">
                                <div className="leading-5">
                                    <h1 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-[16px]">Responsive Web Design</h1>
                                    <p className=" text-[14px]">freeCodeCamp</p>
                                </div>

                                <p className="font-light text-[12px] text-ring">Issued on November 24, 2025</p>
                            </div>

                        </div>
                    </div>
                      <div className="flex flex-col gap-1 transition ease-in duration-100 cursor-pointer">
                        <div className="w-full aspect-5/3 bg-gray-200 rounder-[10px]">
                            <img src="" alt="" />
                        </div>
                        <div className="w-full flex gap-3 p-2">
                            <div className="w-fit ">
                                <img src="./achievements-logo/freecodecamp-circle.png" alt="FreeCodeCamp's Logo" />
                            </div>
                            <div className="flex flex-col w-full overflow-hidden">
                                <div className="leading-5">
                                    <h1 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-[16px]">Responsive Web Design</h1>
                                    <p className=" text-[14px]">freeCodeCamp</p>
                                </div>

                                <p className="font-light text-[12px] text-ring">Issued on November 24, 2025</p>
                            </div>

                        </div>
                    </div>
                      <div className="flex flex-col gap-1 transition ease-in duration-100 cursor-pointer">
                        <div className="w-full aspect-5/3 bg-gray-200 rounder-[10px]">
                            <img src="" alt="" />
                        </div>
                        <div className="w-full flex gap-3 p-2">
                            <div className="w-fit ">
                                <img src="./achievements-logo/freecodecamp-circle.png" alt="FreeCodeCamp's Logo" />
                            </div>
                            <div className="flex flex-col w-full overflow-hidden">
                                <div className="leading-5">
                                    <h1 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-[16px]">Responsive Web Design</h1>
                                    <p className=" text-[14px]">freeCodeCamp</p>
                                </div>

                                <p className="font-light text-[12px] text-ring">Issued on November 24, 2025</p>
                            </div>

                        </div>
                    </div>
                      <div className="flex flex-col gap-1 transition ease-in duration-100 cursor-pointer">
                        <div className="w-full aspect-5/3 bg-gray-200 rounder-[10px]">
                            <img src="" alt="" />
                        </div>
                        <div className="w-full flex gap-3 p-2">
                            <div className="w-fit ">
                                <img src="./achievements-logo/freecodecamp-circle.png" alt="FreeCodeCamp's Logo" />
                            </div>
                            <div className="flex flex-col w-full overflow-hidden">
                                <div className="leading-5">
                                    <h1 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-[16px]">Responsive Web Design</h1>
                                    <p className=" text-[14px]">freeCodeCamp</p>
                                </div>

                                <p className="font-light text-[12px] text-ring">Issued on November 24, 2025</p>
                            </div>

                        </div>
                    </div>
                </div>
            </BentoCard>
            <ContactMe></ContactMe>
        </div>
    )
}

export default AchievementsContent;