import { Button } from "../ui/button"
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import BentoCard from "../BentoCard";


const highlightsIcon =  <svg width="30" height="30" className="stroke-black" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 21.25V27.5" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.25 13.45C11.2498 13.9151 11.1198 14.3709 10.8747 14.7662C10.6295 15.1615 10.279 15.4805 9.8625 15.6875L7.6375 16.8125C7.22098 17.0195 6.87046 17.3385 6.62535 17.7338C6.38024 18.1291 6.25025 18.5849 6.25 19.05V20C6.25 20.3315 6.3817 20.6495 6.61612 20.8839C6.85054 21.1183 7.16848 21.25 7.5 21.25H22.5C22.8315 21.25 23.1495 21.1183 23.3839 20.8839C23.6183 20.6495 23.75 20.3315 23.75 20V19.05C23.7498 18.5849 23.6198 18.1291 23.3747 17.7338C23.1295 17.3385 22.779 17.0195 22.3625 16.8125L20.1375 15.6875C19.721 15.4805 19.3705 15.1615 19.1253 14.7662C18.8802 14.3709 18.7502 13.9151 18.75 13.45V8.75C18.75 8.41848 18.8817 8.10054 19.1161 7.86612C19.3505 7.6317 19.6685 7.5 20 7.5C20.663 7.5 21.2989 7.23661 21.7678 6.76777C22.2366 6.29893 22.5 5.66304 22.5 5C22.5 4.33696 22.2366 3.70107 21.7678 3.23223C21.2989 2.76339 20.663 2.5 20 2.5H10C9.33696 2.5 8.70107 2.76339 8.23223 3.23223C7.76339 3.70107 7.5 4.33696 7.5 5C7.5 5.66304 7.76339 6.29893 8.23223 6.76777C8.70107 7.23661 9.33696 7.5 10 7.5C10.3315 7.5 10.6495 7.6317 10.8839 7.86612C11.1183 8.10054 11.25 8.41848 11.25 8.75V13.45Z"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>;

const statsIcon = <svg width="30" height="30" className="stroke-black" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 20V26.25"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 17.5V26.25"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25 12.5V26.25"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.5 3.75L16.6925 14.5575C16.6344 14.6157 16.5655 14.6619 16.4895 14.6934C16.4136 14.7249 16.3322 14.7411 16.25 14.7411C16.1678 14.7411 16.0864 14.7249 16.0105 14.6934C15.9345 14.6619 15.8656 14.6157 15.8075 14.5575L11.6925 10.4425C11.5753 10.3253 11.4164 10.2595 11.2506 10.2595C11.0849 10.2595 10.926 10.3253 10.8088 10.4425L2.5 18.75" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 22.5V26.25"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 17.5V26.25"  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
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

    return (
    <div className="w-full flex flex-col gap-3 lg:p-0 p-3 lg:overflow-y-auto lg:no-scrollbar lg:py-3 select-none">
        <div className="w-full flex flex-col overflow-hidden bg-card rounded-[10px] relative shrink-0">
            <div className="w-full relative ">
                <img src="./bg-homehead.png" className="w-full object-cover lg:h-55 h-48.5"></img>
                <div className="flex z-20 absolute top-5 right-5 lg:gap-3 gap-2 items-center">
                    <div className="lg:w-5 w-3">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66669 1.66669V5.00002" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.3333 1.66669V5.00002" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.8333 3.33331H4.16667C3.24619 3.33331 2.5 4.07951 2.5 4.99998V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99998C17.5 4.07951 16.7538 3.33331 15.8333 3.33331Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.5 8.33331H17.5" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                   
                    <span className="font-medium text-white lg:text-[16px] text-[12px]">{currentDate}</span>
                </div>
                 <div className="absolute text-white top-1/2 lg:top-auto font-medium bottom-3 right-4 lg:text-[30px] text-[22px] z-10">
                    <TypeAnimation sequence={[`Hello there Everyone!`, 5000,`Welcome to My Project Space.`,5000,`Want to collaborate a Project?`,5000,`We can discuss about it!`, 5000,`Have a Nice Day Everyone!`, 5000]}
                    
                    wrapper="span"
                    speed={20}
                    repeat={Infinity}
                    />

                </div>
            </div>
            <div  className="absolute z-20 h-40 w-40 bottom-3 lg:h-38.5 lg:w-38.5 lg:left-3 left-1/2 -translate-x-1/2 lg:top-auto top-35.5 lg:translate-x-0 rounded-full overflow-hidden border-3 border-card">
                <img src="./profile_githu.jpeg" alt="Lance Profile" className="w-full h-full object-cover" />
            </div>               
            
                <div className="w-full py-5 gap-5 flex items-center lg:mt-0 justify-end lg:pr-4 mt-25">
                    <div className="flex w-full lg:flex-row flex-col gap-4  justify-between lg:pl-48 items-center">
                        <div className="flex flex-col items-center lg:items-start">
                            <h1 className="font-semibold leading-6 lg:text-[20px] text-lg">Lance Kent Geoffrey B. Magollado</h1>
                            <span className="lg:text-[14px] text-sm text-semitext-ring">Aspiring Full-Stack Developer</span>
                        </div>
                        <Button variant="outline" className={"cursor-pointer text-foreground lg:text-[16px] text-sm font-light p-5 stroke-foreground"} asChild>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lancemagollado46@gmail.com&su=Hi,%20Let%20us%20connect!" target="_blank" rel="noopener noreferrer">
                            <div className="lg:w-4 w-3">
                                <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.1417 22.5896C15.1812 22.6882 15.25 22.7724 15.3388 22.8308C15.4276 22.8892 15.5321 22.919 15.6384 22.9163C15.7446 22.9136 15.8475 22.8784 15.9331 22.8156C16.0188 22.7527 16.0832 22.6651 16.1177 22.5646L22.8885 2.77293C22.9219 2.68064 22.9282 2.58075 22.9069 2.48497C22.8855 2.38919 22.8373 2.30147 22.7679 2.23208C22.6985 2.16269 22.6108 2.11449 22.515 2.09313C22.4193 2.07178 22.3194 2.07814 22.2271 2.11148L2.43541 8.88231C2.33488 8.91678 2.24731 8.98118 2.18444 9.06686C2.12157 9.15254 2.08642 9.2554 2.0837 9.36164C2.08098 9.46788 2.11082 9.5724 2.16922 9.66119C2.22762 9.74998 2.31178 9.81878 2.41041 9.85835L10.6708 13.1709C10.932 13.2754 11.1692 13.4317 11.3683 13.6305C11.5674 13.8292 11.7241 14.0662 11.8292 14.3271L15.1417 22.5896Z" stroke-opacity="0.4" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22.7646 2.23645L11.3687 13.6312" stroke-opacity="0.4" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </div>
                            Message
                            </a>
                        </Button>
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
                            <span className="font-semibold text-[30px]">5</span>
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
                            <span className="font-semibold text-[30px]">20</span>

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
                            <span className="font-semibold text-[30px]">16</span>
                        </div>
                    </div>
                    <span className="font-medium lg:text-base text-sm">Technologies</span>
                </div>
            </div>
        </BentoCard>
        <BentoCard icon={highlightsIcon} title={"Highlights"}>
            <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-3">
                <div className="flex flex-col transition ease-in duration-100 cursor-pointer w-full">
                        <div className="w-full lg:aspect-5/3.5 aspect-5/3 bg-gray-200 rounded-t-[10px]">
                            <img src="" alt="" />
                        </div>
                        <div className="w-full flex gap-3 p-3 bg-secondary rounded-b-[10px]">
                            <div className="flex flex-col w-full overflow-hidden gap-1">
                                    <h1 className="font-semibold text-[16px]">Apollo 2026: Blueprint of Insights</h1>
                                    <div className="flex items-center gap-1">
                                        <svg width="16" height="16" className="stroke-ring" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_125_209)">
                                        <path d="M11.4129 20.9234C16.6654 20.9234 20.9235 16.6653 20.9235 11.4127C20.9235 6.16016 16.6654 1.9021 11.4129 1.9021C6.16028 1.9021 1.90222 6.16016 1.90222 11.4127C1.90222 16.6653 6.16028 20.9234 11.4129 20.9234Z" stroke-opacity="0.7" stroke-width="1.90213" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.4127 5.7063V11.4127L9.51062 15.2169" stroke-opacity="0.7" stroke-width="1.90213" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_125_209">
                                        <rect width="22.8255" height="22.8255" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                        <p className="font-light text-[12px] text-ring">September 09, 2026</p>
                                    </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col transition ease-in duration-100 cursor-pointer">
                        <div className="w-full lg:aspect-5/3.5 aspect-5/3 bg-gray-200 rounded-t-[10px]">
                            <img src="" alt="" />
                        </div>
                        <div className="w-full flex gap-3 p-3 bg-secondary rounded-b-[10px]">
                            <div className="flex flex-col w-full overflow-hidden gap-1">
                                    <h1 className="font-semibold text-[16px]">Apollo 2026: Blueprint of Insights</h1>
                                    <div className="flex items-center gap-1">
                                        <svg width="16" height="16" className="stroke-ring" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_125_209)">
                                        <path d="M11.4129 20.9234C16.6654 20.9234 20.9235 16.6653 20.9235 11.4127C20.9235 6.16016 16.6654 1.9021 11.4129 1.9021C6.16028 1.9021 1.90222 6.16016 1.90222 11.4127C1.90222 16.6653 6.16028 20.9234 11.4129 20.9234Z" stroke-opacity="0.7" stroke-width="1.90213" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.4127 5.7063V11.4127L9.51062 15.2169" stroke-opacity="0.7" stroke-width="1.90213" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_125_209">
                                        <rect width="22.8255" height="22.8255" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                        <p className="font-light text-[12px] text-ring">September 09, 2026</p>
                                    </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col transition ease-in duration-100 cursor-pointer">
                        <div className="w-full lg:aspect-5/3.5 aspect-5/3 bg-gray-200 rounded-t-[10px]">
                            <img src="" alt="" />
                        </div>
                        <div className="w-full flex gap-3 p-3 bg-secondary rounded-b-[10px]">
                            <div className="flex flex-col w-full overflow-hidden gap-1">
                                    <h1 className="font-semibold text-[16px]">Apollo 2026: Blueprint of Insights</h1>
                                    <div className="flex items-center gap-1">
                                        <svg width="16" height="16" className="stroke-ring" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_125_209)">
                                        <path d="M11.4129 20.9234C16.6654 20.9234 20.9235 16.6653 20.9235 11.4127C20.9235 6.16016 16.6654 1.9021 11.4129 1.9021C6.16028 1.9021 1.90222 6.16016 1.90222 11.4127C1.90222 16.6653 6.16028 20.9234 11.4129 20.9234Z"  stroke-opacity="0.7" stroke-width="1.90213" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.4127 5.7063V11.4127L9.51062 15.2169"  stroke-opacity="0.7" stroke-width="1.90213" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_125_209">
                                        <rect width="22.8255" height="22.8255" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                        <p className="font-light text-[12px] text-ring">September 09, 2026</p>
                                    </div>
                            </div>

                        </div>
                    </div>
            </div>
        </BentoCard>
    </div>

    )
}

export default Content;