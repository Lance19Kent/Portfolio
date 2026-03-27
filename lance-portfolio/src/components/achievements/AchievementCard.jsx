import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";

function AchievementCard({data, list}){

    const initialIndex = list ? list.findIndex(item => item.id ===data.id) :0;
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const currentData = list ? list[currentIndex] : data;

    const handleNext = () => {
        if (currentIndex < list.length - 1) setCurrentIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
    };

    return(
        

        <>
         <Dialog className={"w-full"} onOpenChange={(open) => { if (!open) setCurrentIndex(initialIndex) }}>
            <DialogTrigger asChild className="flex select-none flex-col gap-1 transition ease-in duration-200 cursor-pointer group">
                <div className="flex flex-col overflow-hidden">
                    <div className="w-full aspect-5/3.5 bg-gray-200 dark:bg-[#5252523f]  p-1 rounded-[10px] overflow-hidden border-border">
                        <img src={data.image} alt={data.title} className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"/>
                    </div>
                    <div className="w-full flex gap-3 p-2">
                        <div className="w-6 ">
                            <img src={data.issuerLogo} alt={data.issuer + " Logo"} />
                        </div>
                        <div className="flex flex-col w-full overflow-hidden">
                            <div className="leading-5">
                                <h1 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-[16px]">{data.title}</h1>
                                <p className=" text-[14px]">{data.issuer}</p>
                            </div>

                            <p className="font-light text-[12px] text-ring">Issued on {data.date}</p>
                        </div>

                    </div>
                </div>
            </DialogTrigger>
           <DialogContent className={"w-full lg:max-w-5xl h-[85vh] select-none border-none bg-card p-8 shadow-2xl  rounded-3xl grid grid-cols-[2fr_1fr]"}>
                
                <div className="flex flex-col">
                    <div className=" w-full h-full overflow-y-auto border border-zinc-200/50  dark:border-zinc-800/50 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-zinc-50/80 dark:bg-zinc-900/50 no-scrollbar relative">
                    <div className="min-h-full flex items-center justify-center">
                        <img 
                            src={currentData.image} 
                            alt={currentData.title + " Certificate"}
                            className="w-full h-auto max-h-[150vh] object-contain rounded-lg mx-auto"
                            />
                    </div>
                    </div>
                    {currentData.verifyLink && (
                                <div className="mt-4">
                                    <a href={currentData.verifyLink}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group flex justify-center items-center gap-2 w-full py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-semibold rounded-full transition-all duration-200 active:scale-95 hover:bg-zinc-800 dark:hover:bg-white shadow-md"
                                    > 
                                        {currentData.linkText || "Verify Credential"}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
                                            <path d="M5 12h14"></path>
                                            <path d="m12 5 7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                    )}
                </div>
               

                <div className="w-full lg:w-100 h-full flex flex-col bg-white dark:bg-zinc-950 border-l border-zinc-100 dark:border-zinc-800/50">
                    
                    <div className="px-8 pt-8 flex flex-col justify-between w-full h-full">
                        <div className="flex flex-col gap-6">
                             <div>
                            <div className="w-14 h-14 bg-zinc-50 dark:bg-zinc-900 rounded-xl p-2 mb-4 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center">
                                <img src={currentData.issuerLogo} alt={currentData.issuer + " Logo"} className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className="font-bold text-2xl text-zinc-900 dark:text-zinc-100 leading-tight">{currentData.title}</h1>
                                <p className="font-medium text-[16px] text-zinc-600 dark:text-zinc-400">{currentData.issuer}</p>
                                {currentData.date && <p className="font-light text-[13px] text-zinc-400 mt-1">Issued on {currentData.date}</p>}
                            </div>
                        </div>
                        <div>
                            {currentData.description && (
                                <div className="flex flex-col mb-6">
                                    <h3 className="text-zinc-900 dark:text-zinc-100 font-semibold text-[16px] tracking-tight mb-2 uppercase text-xs">Highlight</h3>
                                    <p className="text-zinc-500 dark:text-zinc-400 text-[15px] leading-relaxed">{currentData.description}</p>
                                </div>
                            )}

                           
                        </div>
                        </div>


                        <div>
                        {list && list.length > 1 && (
                        <div className="p-6 border-t border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/20 flex justify-between items-center rounded-2xl">
                            <button 
                                onClick={handlePrev} 
                                disabled={currentIndex === 0}
                                className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                                Previous
                            </button>
                            
                            <span className="text-xs font-medium text-zinc-400">
                                {currentIndex + 1} of {list.length}
                            </span>

                            <button 
                                onClick={handleNext} 
                                disabled={currentIndex === list.length - 1}
                                className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                            >
                                Next
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </div>
                    )}
                        </div>
                         
                    </div>


            
                  
                </div>
            </DialogContent>
        </Dialog>
        </>
    )
}

export default AchievementCard;