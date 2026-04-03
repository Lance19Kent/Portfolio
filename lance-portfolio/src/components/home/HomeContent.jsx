import { Button } from "../ui/button"
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useRef } from "react";
import BentoCard from "../BentoCard";
import { achievementsData, skillsData, projectsData } from "@/data";
import { blogsData } from "@/data";
import {Link} from "react-router-dom";

const highlightsIcon =  <svg width="30" height="30" className="stroke-black" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 21.25V27.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.25 13.45C11.2498 13.9151 11.1198 14.3709 10.8747 14.7662C10.6295 15.1615 10.279 15.4805 9.8625 15.6875L7.6375 16.8125C7.22098 17.0195 6.87046 17.3385 6.62535 17.7338C6.38024 18.1291 6.25025 18.5849 6.25 19.05V20C6.25 20.3315 6.3817 20.6495 6.61612 20.8839C6.85054 21.1183 7.16848 21.25 7.5 21.25H22.5C22.8315 21.25 23.1495 21.1183 23.3839 20.8839C23.6183 20.6495 23.75 20.3315 23.75 20V19.05C23.7498 18.5849 23.6198 18.1291 23.3747 17.7338C23.1295 17.3385 22.779 17.0195 22.3625 16.8125L20.1375 15.6875C19.721 15.4805 19.3705 15.1615 19.1253 14.7662C18.8802 14.3709 18.7502 13.9151 18.75 13.45V8.75C18.75 8.41848 18.8817 8.10054 19.1161 7.86612C19.3505 7.6317 19.6685 7.5 20 7.5C20.663 7.5 21.2989 7.23661 21.7678 6.76777C22.2366 6.29893 22.5 5.66304 22.5 5C22.5 4.33696 22.2366 3.70107 21.7678 3.23223C21.2989 2.76339 20.663 2.5 20 2.5H10C9.33696 2.5 8.70107 2.76339 8.23223 3.23223C7.76339 3.70107 7.5 4.33696 7.5 5C7.5 5.66304 7.76339 6.29893 8.23223 6.76777C8.70107 7.23661 9.33696 7.5 10 7.5C10.3315 7.5 10.6495 7.6317 10.8839 7.86612C11.1183 8.10054 11.25 8.41848 11.25 8.75V13.45Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>;

const statsIcon = <svg width="30" height="30" className="stroke-black" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 20V26.25"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 17.5V26.25"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25 12.5V26.25"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.5 3.75L16.6925 14.5575C16.6344 14.6157 16.5655 14.6619 16.4895 14.6934C16.4136 14.7249 16.3322 14.7411 16.25 14.7411C16.1678 14.7411 16.0864 14.7249 16.0105 14.6934C15.9345 14.6619 15.8656 14.6157 15.8075 14.5575L11.6925 10.4425C11.5753 10.3253 11.4164 10.2595 11.2506 10.2595C11.0849 10.2595 10.926 10.3253 10.8088 10.4425L2.5 18.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 22.5V26.25"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 17.5V26.25"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>;

function Content(){

    const [currentDate, setCurrrentDate] = useState("");

    useEffect(() =>{
        const getDate = () =>{
            const today = new Date();

            const dayName = today.toLocaleDateString("en-US",{weekday:"long"});
            const monthName = today.toLocaleDateString("en-US",{month:"long"});
            const day = today.getDate();
            const year = today.getFullYear();

            const timePart = today.toLocaleTimeString("en-US",{
                hour:'numeric',
                minute:'2-digit',
                hour12: true
            }).toUpperCase();

            setCurrrentDate(`${dayName}, ${year} ${monthName} ${day}, ${timePart}`)
        };
 
        getDate();

        const intervalId = setInterval(getDate, 1000);

        return () => clearInterval(intervalId);
    })

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

    return (
    <div className="w-full flex flex-col gap-3 lg:p-0 p-3 lg:overflow-y-auto lg:no-scrollbar lg:py-3 select-none">
        <div className="w-full flex flex-col overflow-hidden bg-card rounded-[10px] relative shrink-0">
      {/* THE UNIQUE "COMMAND CENTER" HERO BANNER (MOBILE RESPONSIVE) */}
        <div className="w-full flex flex-col rounded-[14px] border border-zinc-200 dark:border-zinc-800 shadow-sm shrink-0 overflow-hidden relative group">
            
            {/* 1. COVER VIDEO BACKGROUND */}
            {/* TWEAK: Tumaas ang mobile height (h-[340px]) para may space mag-wrap ang text at buttons */}
            <div className="w-full relative h-90 sm:h-80 lg:h-72">
                
                {/* Light Mode Video */}
                <video src="./cover-vids/lightmode-cover.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover dark:hidden" />
                {/* Dark Mode Video */}
                <video src="./cover-vids/darkmode-cover.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover hidden dark:block" />
                
                {/* TWEAK: Smart Gradient! 
                    Sa Mobile: Dark sa ibaba pataas (to-t) para mabasa ang text na naka-stack sa bottom.
                    Sa Desktop: Dark sa kaliwa pakanan (to-r). 
                */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/20 lg:bg-linear-to-r lg:from-black/90 lg:via-black/40 lg:to-transparent"></div>

                {/* The Clock (Top Right) */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 shadow-sm">
                    <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66669 1.66669V5.00002" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.3333 1.66669V5.00002" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.8333 3.33331H4.16667C3.24619 3.33331 2.5 4.07951 2.5 4.99998V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99998C17.5 4.07951 16.7538 3.33331 15.8333 3.33331Z" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.5 8.33331H17.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium text-white text-[11px] lg:text-[12px] tracking-wide">{currentDate}</span>
                </div>

                {/* 2. THE OVERLAY CONTENT (Bottom Left) */}
                {/* TWEAK: Dinagdagan ng right-5 para hindi sumagad sa kanang edge kapag nasa maliit na phone */}
                <div className="absolute bottom-5 left-5 right-5 lg:bottom-8 lg:left-8 lg:right-auto z-20 flex flex-col gap-3 lg:gap-4 max-w-lg">
                    
                    <div className="flex flex-col gap-1">
                        <h1 className="text-white font-bold text-[26px] leading-[1.1] sm:text-3xl lg:text-4xl tracking-tight">
                            Crafting clean & <br className="hidden sm:block" /> dynamic digital systems.
                        </h1>
                        <p className="text-zinc-300 font-light text-[13px] sm:text-[14px] lg:text-[15px] mt-1 lg:mt-2 leading-relaxed max-w-[90%] lg:max-w-md">
                            Bridging the gap between sleek front-end designs and robust back-end architecture. Let's build something impactful.
                        </p>
                    </div>

                    <div className="flex lg:flex-row flex-col items-start gap-3 mt-1 lg:mt-2">
                        
                        <button className="w-full sm:w-auto cursor-pointer rounded-full bg-white text-zinc-900 hover:bg-zinc-200 transition-all duration-200 px-6 py-3 lg:py-2 lg:px-4 font-medium text-[14px] flex justify-center" asChild>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lancemagollado46@gmail.com&su=Hi,%20Let%20us%20connect!" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <svg viewBox="0 0 25 25" fill="none" className="w-4 h-4 lg:w-5 lg:h-5" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1417 22.5896C15.1812 22.6882 15.25 22.7724 15.3388 22.8308C15.4276 22.8892 15.5321 22.919 15.6384 22.9163C15.7446 22.9136 15.8475 22.8784 15.9331 22.8156C16.0188 22.7527 16.0832 22.6651 16.1177 22.5646L22.8885 2.77293C22.9219 2.68064 22.9282 2.58075 22.9069 2.48497C22.8855 2.38919 22.8373 2.30147 22.7679 2.23208C22.6985 2.16269 22.6108 2.11449 22.515 2.09313C22.4193 2.07178 22.3194 2.07814 22.2271 2.11148L2.43541 8.88231C2.33488 8.91678 2.24731 8.98118 2.18444 9.06686C2.12157 9.15254 2.08642 9.2554 2.0837 9.36164C2.08098 9.46788 2.11082 9.5724 2.16922 9.66119C2.22762 9.74998 2.31178 9.81878 2.41041 9.85835L10.6708 13.1709C10.932 13.2754 11.1692 13.4317 11.3683 13.6305C11.5674 13.8292 11.7241 14.0662 11.8292 14.3271L15.1417 22.5896Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M22.7646 2.23645L11.3687 13.6312" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Message Me
                            </a>
                        </button>

                        {/* Status Badge */}
                        <div className="flex w-full sm:w-auto justify-center sm:justify-start items-center gap-2 text-white/90 text-[14px] px-4 py-2.5 lg:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            Open to Collaborate
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        </div>
        <BentoCard title={"Stats"} icon={statsIcon} >
            <div className="grid lg:grid-cols-4 gap-3 grid-cols-2">
                <div className="w-full gap-1 bg-secondary rounded-[10px] p-4 flex justify-evenly flex-col">
                    <div className="flex items-center gap-3">
                        <svg width="40" height="43" viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="45" height="42.5" rx="10" fill="url(#paint0_linear_19_201)"/>
                                <path d="M27.5 15V12.5C27.5 11.837 27.2366 11.2011 26.7678 10.7322C26.2989 10.2634 25.663 10 25 10H20C19.337 10 18.7011 10.2634 18.2322 10.7322C17.7634 11.2011 17.5 11.837 17.5 12.5V15" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M32.5 15H12.5C11.1193 15 10 16.1193 10 17.5V30C10 31.3807 11.1193 32.5 12.5 32.5H32.5C33.8807 32.5 35 31.3807 35 30V17.5C35 16.1193 33.8807 15 32.5 15Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22.5 21.25H22.5188" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M35 23C31.291 26.2614 26.9444 28 22.5 28C18.0556 28 13.709 26.2614 10 23" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_19_201" x1="22.5" y1="0" x2="22.5" y2="42.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.25" stop-color="#AFB5F5"/>
                                <stop offset="0.610577" stop-color="#7783FD"/>
                                </linearGradient>
                                </defs>
                        </svg>
                        <div className="flex items-center flex-1 justify-between">
                            <span className="font-semibold text-[30px]">2</span>
                            <span className="font-light text-sm lg:text-base">Years</span>
                        </div>
                    </div>
                    <span className="font-medium lg:text-base text-sm">Experience</span>
                </div>
                <div className="w-full gap-1 bg-secondary rounded-[10px] p-4 flex justify-evenly flex-col">
                    <div className="flex items-center gap-3">
                      <svg width="40" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="45" height="45" rx="10" fill="url(#paint0_linear_20_78)"/>
                        <path d="M27.5706 23.798L29.78 36.2317C29.8048 36.3781 29.7842 36.5286 29.7211 36.663C29.658 36.7974 29.5554 36.9094 29.427 36.9839C29.2986 37.0584 29.1504 37.092 29.0024 37.08C28.8544 37.0681 28.7136 37.0113 28.5988 36.9171L23.3779 32.9986C23.1259 32.8103 22.8197 32.7086 22.5051 32.7086C22.1905 32.7086 21.8843 32.8103 21.6323 32.9986L16.4027 36.9157C16.288 37.0096 16.1473 37.0664 15.9995 37.0783C15.8516 37.0903 15.7037 37.0569 15.5753 36.9826C15.447 36.9083 15.3444 36.7966 15.2811 36.6624C15.2179 36.5283 15.1971 36.378 15.2215 36.2317L17.4294 23.798" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.5 25.4166C27.3325 25.4166 31.25 21.4991 31.25 16.6666C31.25 11.8341 27.3325 7.91663 22.5 7.91663C17.6675 7.91663 13.75 11.8341 13.75 16.6666C13.75 21.4991 17.6675 25.4166 22.5 25.4166Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_20_78" x1="22.5" y1="0" x2="22.5" y2="45" gradientUnits="userSpaceOnUse">
                        <stop offset="0.1875" stop-color="#FCCDA1"/>
                        <stop offset="0.528846" stop-color="#FF9735"/>
                        </linearGradient>
                        </defs>
                    </svg>

                        <div className="flex items-center flex-1 justify-between">
                            <span className="font-semibold text-[30px]">{achievementsData.length}</span>
                        </div>
                    </div>
                    <span className="font-medium lg:text-base text-sm">Certificates</span>
                </div>
                <div className="w-full gap-1 bg-secondary rounded-[10px] p-4 flex justify-evenly flex-col">
                    <div className="flex items-center gap-3">
                        <svg width="40" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="45" height="45" rx="10" fill="url(#paint0_linear_20_63)"/>
                            <path d="M31.25 32.7083C29.3161 32.7083 27.4615 31.9401 26.094 30.5726C24.7266 29.2052 23.9583 27.3505 23.9583 25.4166V37.0833" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.125 34.1667H10.8333C10.0598 34.1667 9.31791 33.8594 8.77093 33.3124C8.22395 32.7654 7.91666 32.0236 7.91666 31.25V12.2917C7.91666 11.5181 8.22395 10.7763 8.77093 10.2293C9.31791 9.68231 10.0598 9.37502 10.8333 9.37502H16.5208C17.0086 9.37024 17.4898 9.48788 17.9204 9.71717C18.351 9.94647 18.7171 10.2801 18.9854 10.6875L20.1667 12.4375C20.4322 12.8408 20.7938 13.1718 21.2188 13.4009C21.6439 13.63 22.1192 13.7499 22.6021 13.75H34.1667C34.9402 13.75 35.6821 14.0573 36.229 14.6043C36.776 15.1513 37.0833 15.8931 37.0833 16.6667V23.9584" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.9583 25.4167C25.5692 25.4167 26.875 24.1109 26.875 22.5C26.875 20.8892 25.5692 19.5834 23.9583 19.5834C22.3475 19.5834 21.0417 20.8892 21.0417 22.5C21.0417 24.1109 22.3475 25.4167 23.9583 25.4167Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M34.1667 35.625C35.7775 35.625 37.0833 34.3191 37.0833 32.7083C37.0833 31.0975 35.7775 29.7916 34.1667 29.7916C32.5558 29.7916 31.25 31.0975 31.25 32.7083C31.25 34.3191 32.5558 35.625 34.1667 35.625Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <linearGradient id="paint0_linear_20_63" x1="22.5" y1="0" x2="22.5" y2="45" gradientUnits="userSpaceOnUse">
                            <stop offset="0.201923" stop-color="#90CAF8"/>
                            <stop offset="0.778846" stop-color="#1396ED"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        <div className="flex items-center flex-1 justify-between">
                            <span className="font-semibold text-[30px]">{projectsData.length}</span>

                        </div>
                    </div>
                    <span className="font-medium lg:text-base text-sm">Projects</span>
                </div>
                <div className="w-full gap-1 bg-secondary rounded-[10px] p-4 flex justify-evenly flex-col">
                    <div className="flex items-center gap-3">
                      <svg width="40" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="45" height="45" rx="10" fill="url(#paint0_linear_20_88)"/>
                        <g clip-path="url(#clip0_20_88)">
                        <path d="M22.5 34.6666V37.5833" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.5 8.41663V11.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M29.7917 34.6666V37.5833" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M29.7917 8.41663V11.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.91669 23H10.8334" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.91669 30.2916H10.8334" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.91669 15.7084H10.8334" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M34.1667 23H37.0834" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M34.1667 30.2916H37.0834" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M34.1667 15.7084H37.0834" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.2083 34.6666V37.5833" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.2083 8.41663V11.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M31.25 11.3334H13.75C12.1391 11.3334 10.8333 12.6392 10.8333 14.25V31.75C10.8333 33.3609 12.1391 34.6667 13.75 34.6667H31.25C32.8608 34.6667 34.1666 33.3609 34.1666 31.75V14.25C34.1666 12.6392 32.8608 11.3334 31.25 11.3334Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26.875 17.1666H18.125C17.3196 17.1666 16.6667 17.8195 16.6667 18.625V27.375C16.6667 28.1804 17.3196 28.8333 18.125 28.8333H26.875C27.6804 28.8333 28.3334 28.1804 28.3334 27.375V18.625C28.3334 17.8195 27.6804 17.1666 26.875 17.1666Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear_20_88" x1="22.5" y1="0" x2="22.5" y2="45" gradientUnits="userSpaceOnUse">
                        <stop offset="0.149038" stop-color="#97FF9E"/>
                        <stop offset="0.711538" stop-color="#4ECC56"/>
                        </linearGradient>
                        <clipPath id="clip0_20_88">
                        <rect width="35" height="35" fill="white" transform="translate(5 5)"/>
                        </clipPath>
                        </defs>
                    </svg>

                        <div className="flex items-center flex-1 justify-between">
                            <span className="font-semibold text-[30px]">{skillsData.length}</span>
                        </div>
                    </div>
                    <span className="font-medium lg:text-base text-sm">Technologies</span>
                </div>
            </div>
        </BentoCard>
         <BentoCard icon={highlightsIcon} title={"Highlights"} className="relative">
            <div className={`absolute right-5 z-10 top-37.5 bg-[#00000040] p-2 rounded-[100px] stroke-black transition duration-75 ease-in ${canHighlightsRight ? "cursor-pointer hover:stroke-white hover:bg-[#3FA6F4]":"cursor-not-allowed opacity-30 "}`} onClick={() => canHighlightsRight && scrollCarousel(highlightsRef,"right")}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 24L20 16L12 8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

            </div>
            <div className={`absolute left-5 z-10 rotate-180 top-37.5 bg-[#00000040] p-2 rounded-[100px] stroke-black transition duration-75 ease-in ${canHighlightsLeft ?"cursor-pointer hover:stroke-white hover:bg-[#3FA6F4]":"cursor-not-allowed opacity-30"}`} onClick={() => canHighlightsLeft && scrollCarousel(highlightsRef, "left")}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 24L20 16L12 8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
            <div className=" flex  w-full gap-3 overflow-x-auto no-scrollbar" ref={highlightsRef} onScroll={()=> handleScroll(highlightsRef, setcanHighlightsLeft,setcanHighlightsRight)}>
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
                        

                        <div className="w-full flex flex-col justify-between flex-1 p-4 gap-2">
                            
                            <h1 className="font-semibold text-zinc-900 dark:text-zinc-100 lg:text-[16px] text-[14px] leading-snug line-clamp-2">
                                {post.title}
                            </h1>
                            
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
    </div>

    )
}

export default Content;