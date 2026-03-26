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
         <Dialog className={"w-full "}>
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
           <DialogContent className={"w-full max-w-4xl select-none border-none bg-card p-8 shadow-2xl flex flex-col items-center rounded-3xl"}>
                
                <div className="mt-6 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-zinc-50/50 dark:bg-zinc-900/50 flex justify-center">
                    
                    <img 
                        src={data.image} 
                        alt={data.title + " Certificate"}
                        className="w-auto h-auto max-w-full max-h-[70vh] object-contain rounded-lg mx-auto"
                    />
                </div>

                <div className="mt-4 w-fit">
                    {data.verifyLink ? (
                        <a href={data.verifyLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-6 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium rounded-full transition-all duration-200 active:scale-95 hover:bg-zinc-800 dark:hover:bg-white"
                    > {data.linkText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </a>
                    ) : data.description ? (
                       <div className="flex flex-col items-center text-center px-4 mb-2">
                            <h3 className="text-zinc-900 dark:text-zinc-100 font-semibold text-lg tracking-tight">Highlight</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-[15px] mt-2 max-w-md leading-relaxed">{data.description}</p>
                        </div>
                    ) : null }
                </div>
            </DialogContent>
        </Dialog>
        </>
    )
}

export default AchievementCard;