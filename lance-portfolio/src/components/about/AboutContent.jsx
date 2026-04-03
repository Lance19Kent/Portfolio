import BentoCard from "../BentoCard";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

import React, {useRef, useState} from "react";
import AchievementCard from "../achievements/AchievementCard";
import { achievementsData } from "@/data";
import { blogsData } from "@/data";

const aboutIcon = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.3334 28V25.3333C25.3334 23.9188 24.7715 22.5623 23.7713 21.5621C22.7711 20.5619 21.4146 20 20.0001 20H12.0001C10.5856 20 9.22904 20.5619 8.22884 21.5621C7.22865 22.5623 6.66675 23.9188 6.66675 25.3333V28" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.0001 14.6667C18.9456 14.6667 21.3334 12.2789 21.3334 9.33333C21.3334 6.38781 18.9456 4 16.0001 4C13.0546 4 10.6667 6.38781 10.6667 9.33333C10.6667 12.2789 13.0546 14.6667 16.0001 14.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

const highlightsIcon =   <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 21.25V27.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.25 13.45C11.2498 13.9151 11.1198 14.3709 10.8747 14.7662C10.6295 15.1615 10.279 15.4805 9.8625 15.6875L7.6375 16.8125C7.22098 17.0195 6.87046 17.3385 6.62535 17.7338C6.38024 18.1291 6.25025 18.5849 6.25 19.05V20C6.25 20.3315 6.3817 20.6495 6.61612 20.8839C6.85054 21.1183 7.16848 21.25 7.5 21.25H22.5C22.8315 21.25 23.1495 21.1183 23.3839 20.8839C23.6183 20.6495 23.75 20.3315 23.75 20V19.05C23.7498 18.5849 23.6198 18.1291 23.3747 17.7338C23.1295 17.3385 22.779 17.0195 22.3625 16.8125L20.1375 15.6875C19.721 15.4805 19.3705 15.1615 19.1253 14.7662C18.8802 14.3709 18.7502 13.9151 18.75 13.45V8.75C18.75 8.41848 18.8817 8.10054 19.1161 7.86612C19.3505 7.6317 19.6685 7.5 20 7.5C20.663 7.5 21.2989 7.23661 21.7678 6.76777C22.2366 6.29893 22.5 5.66304 22.5 5C22.5 4.33696 22.2366 3.70107 21.7678 3.23223C21.2989 2.76339 20.663 2.5 20 2.5H10C9.33696 2.5 8.70107 2.76339 8.23223 3.23223C7.76339 3.70107 7.5 4.33696 7.5 5C7.5 5.66304 7.76339 6.29893 8.23223 6.76777C8.70107 7.23661 9.33696 7.5 10 7.5C10.3315 7.5 10.6495 7.6317 10.8839 7.86612C11.1183 8.10054 11.25 8.41848 11.25 8.75V13.45Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>;

const certificateIcon = <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.7951 21.4833L28.3201 35.6933C28.3484 35.8606 28.3249 36.0326 28.2528 36.1862C28.1807 36.3398 28.0634 36.4678 27.9166 36.5529C27.7698 36.6381 27.6006 36.6764 27.4314 36.6628C27.2623 36.6492 27.1013 36.5842 26.9701 36.4766L21.0034 31.9983C20.7154 31.7831 20.3655 31.6668 20.0059 31.6668C19.6464 31.6668 19.2964 31.7831 19.0084 31.9983L13.0317 36.4749C12.9006 36.5823 12.7398 36.6472 12.5709 36.6608C12.402 36.6745 12.2329 36.6363 12.0862 36.5514C11.9395 36.4665 11.8222 36.3388 11.7499 36.1855C11.6777 36.0322 11.6539 35.8605 11.6817 35.6933L14.2051 21.4833" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 23.3334C25.5228 23.3334 30 18.8562 30 13.3334C30 7.81053 25.5228 3.33337 20 3.33337C14.4772 3.33337 10 7.81053 10 13.3334C10 18.8562 14.4772 23.3334 20 23.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

function AboutContent(){
    const highlightsRef = useRef(null);
    const [canHighlightsLeft, setcanHighlightsLeft] = useState(false);
    const [canHighlightsRight, setcanHighlightsRight] = useState(true);


    const scrollCarousel = (ref, direction) =>{
      if(ref.current){
        const scrollAmount = direction === "left" ? -300 : 300;
        ref.current.scrollBy({left:scrollAmount, behavior:'smooth'});
      }
    }

    const handleScroll = (ref, setLeft, setRight) =>{
      if(ref.current){
        const {scrollLeft, scrollWidth, clientWidth} = ref.current;
        setLeft(scrollLeft >0);
        setRight(scrollLeft + clientWidth < scrollWidth - 1);
      }
    }
    return(
        <div className="overflow-y-auto py-3 w-full gap-3 flex flex-col no-scrollbar">
            <div className="w-full flex flex-col rounded-[14px] border border-zinc-200 dark:border-zinc-800 shadow-sm shrink-0 overflow-hidden relative group select-none">
                
                <div className="w-full relative h-70 sm:h-75 lg:h-64">
                    
                    <video src="./cover-vids/lightmode-cover.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover dark:hidden" />
                    <video src="./cover-vids/darkmode-cover.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover hidden dark:block" />
                    

                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/20 lg:bg-linear-to-r lg:from-black/90 lg:via-black/50 lg:to-transparent"></div>
                    <div className="absolute bottom-5 left-5 right-5 lg:bottom-8 lg:left-8 lg:right-auto z-20 flex flex-col gap-3 lg:gap-4 max-w-2xl">
                        
                        <div className="flex flex-col gap-1">
                            <h1 className="text-white font-bold text-[28px] leading-[1.1] sm:text-3xl lg:text-4xl tracking-tight">
                                Behind the code.
                            </h1>
                            <p className="text-zinc-300 font-light text-[14px] sm:text-[15px] lg:text-[16px] mt-1 lg:mt-2 leading-relaxed max-w-[95%] lg:max-w-lg">
                                I'm an IT student from Quezon City, passionate about transforming complex problems into elegant, user-centric web solutions.
                            </p>
                        </div>

                        <div className="flex lg:flex-row flex-col items-start gap-3 mt-1 lg:mt-2">
                            <Button className="w-full sm:w-auto cursor-pointer rounded-full bg-white text-zinc-900 hover:bg-zinc-200 shadow-sm transition-all duration-200 px-6 lg:px-8 py-5 lg:py-4 font-medium text-[14px] flex justify-center" asChild>
                                <a href="https://www.linkedin.com/in/lancemagollado/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <svg viewBox="0 0 25 25" fill="none" className="w-4 h-4 lg:w-5 lg:h-5" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.1417 22.5896C15.1812 22.6882 15.25 22.7724 15.3388 22.8308C15.4276 22.8892 15.5321 22.919 15.6384 22.9163C15.7446 22.9136 15.8475 22.8784 15.9331 22.8156C16.0188 22.7527 16.0832 22.6651 16.1177 22.5646L22.8885 2.77293C22.9219 2.68064 22.9282 2.58075 22.9069 2.48497C22.8855 2.38919 22.8373 2.30147 22.7679 2.23208C22.6985 2.16269 22.6108 2.11449 22.515 2.09313C22.4193 2.07178 22.3194 2.07814 22.2271 2.11148L2.43541 8.88231C2.33488 8.91678 2.24731 8.98118 2.18444 9.06686C2.12157 9.15254 2.08642 9.2554 2.0837 9.36164C2.08098 9.46788 2.11082 9.5724 2.16922 9.66119C2.22762 9.74998 2.31178 9.81878 2.41041 9.85835L10.6708 13.1709C10.932 13.2754 11.1692 13.4317 11.3683 13.6305C11.5674 13.8292 11.7241 14.0662 11.8292 14.3271L15.1417 22.5896Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22.7646 2.23645L11.3687 13.6312" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Let's Connect
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <BentoCard title={"About"} icon={aboutIcon} className="leading-5">
                <span className="text-sm  text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Front-End Development is my current playground where logic meets creativity. I love building intuitive user interfaces and crafting smooth digital experiences. Being a Full-Stack Developer is my goal so that I can create an innovative web app of my own.
                </span>
            </BentoCard>
            <BentoCard title={"Highlights"} icon={highlightsIcon} className=" relative">
                <div className={`absolute right-5 z-10 top-37.5 bg-[#00000030] p-2 rounded-[100px] stroke-black transition duration-75 ease-in ${canHighlightsRight ? "cursor-pointer hover:stroke-white hover:bg-[#3FA6F4]":"cursor-not-allowed opacity-30 "}`} onClick={() => canHighlightsRight && scrollCarousel(highlightsRef,"right")}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 24L20 16L12 8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                  </div>
                  <div className={`absolute left-5 z-10 rotate-180 top-37.5 bg-[#00000030] p-2 rounded-[100px] stroke-black transition duration-75 ease-in ${canHighlightsLeft ?"cursor-pointer hover:stroke-white hover:bg-[#3FA6F4]":"cursor-not-allowed opacity-30"}`} onClick={() => canHighlightsLeft && scrollCarousel(highlightsRef, "left")}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 24L20 16L12 8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                  </div>
                <div className="flex gap-3 overflow-x-auto no-scrollbar w-full justify-between" ref={highlightsRef} onScroll={()=> handleScroll(highlightsRef, setcanHighlightsLeft,setcanHighlightsRight)}>
                {blogsData.slice(0,3).map((post)=>                   
                     <Link 
                        key={post.id} 
                        to={`/blog-selected/${post.slug}`} 
   
                        className="flex flex-col w-57.5 shrink-0 bg-white dark:bg-zinc-900/40 rounded-2xl border border-zinc-200 dark:border-zinc-800  transition-all duration-300 overflow-hidden group cursor-pointer"
                    >
                        <div className="w-full aspect-14/10 bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative">
                            <img 
                                src={post.thumbnail} 
                                alt={post.title} 
                                className="w-full h-full object-cover transition-transform duration-500 ease-out "
                            />
                        </div>
                        
                        {/* TWEAK 3: The Text Section (Clean padding & flex alignment) */}
                        <div className="w-full flex flex-col justify-between flex-1 p-4 gap-2">
                            
                            <h1 className="font-semibold text-zinc-900 dark:text-zinc-100 lg:text-[16px] text-[14px] leading-snug line-clamp-2">
                                {post.title}
                            </h1>
                            
                            {/* TWEAK 4: The Date (Forced to the bottom with mt-auto) */}
                            <div className="flex items-center gap-1.5 mt-auto">
                                <div className="w-3.5 text-ring">
                                    <svg viewBox="0 0 23 23" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.4129 20.9234C16.6654 20.9234 20.9235 16.6653 20.9235 11.4127C20.9235 6.16016 16.6654 1.9021 11.4129 1.9021C6.16028 1.9021 1.90222 6.16016 1.90222 11.4127C1.90222 16.6653 6.16028 20.9234 11.4129 20.9234Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M11.4127 5.7063V11.4127L9.51062 15.2169" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <p className="font-light text-[12px] text-ring">
                                    {post.date}
                                </p>
                            </div>

                        </div>
                    </Link>
                )}

                </div>
                
            </BentoCard>
           <BentoCard title={"Certificates"} icon={certificateIcon} >
            <div className="flex flex-col gap-6">
                <div className="flex flex-col w-full gap-5 lg:pr-2">
                    {achievementsData.slice(0, 5).map((cert, index) => (
                        <div 
                            key={cert.id} 
                            className={`flex flex-col w-full ${index !== achievementsData.slice(0,5).length - 1 ? 'border-b border-zinc-100 dark:border-zinc-800/80 pb-5' : ''}`}
                        >
                            {/* THE MAGIC SAUCE: Ginamit natin yung component at sinet ang variant="list" */}
                            <AchievementCard 
                                data={cert} 
                                list={achievementsData.slice(0, 5)} 
                                variant="list"
                            />
                        </div>
                    ))}
                </div>
                <Link to={"/achievements"} className="text-center block text-[#3FA6F4] hover:underline lg:text-[15px] text-sm">See More</Link>
            </div>
        </BentoCard>
        
        </div>
    )
}

export default AboutContent;