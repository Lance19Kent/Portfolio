import BentoCard from "../BentoCard";
import ContactMe from "../ContactMe";
import { Link } from "react-router-dom";

const featuredIcon =   <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 21.25V27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.25 13.45C11.2498 13.9151 11.1198 14.3709 10.8747 14.7662C10.6295 15.1615 10.279 15.4805 9.8625 15.6875L7.6375 16.8125C7.22098 17.0195 6.87046 17.3385 6.62535 17.7338C6.38024 18.1291 6.25025 18.5849 6.25 19.05V20C6.25 20.3315 6.3817 20.6495 6.61612 20.8839C6.85054 21.1183 7.16848 21.25 7.5 21.25H22.5C22.8315 21.25 23.1495 21.1183 23.3839 20.8839C23.6183 20.6495 23.75 20.3315 23.75 20V19.05C23.7498 18.5849 23.6198 18.1291 23.3747 17.7338C23.1295 17.3385 22.779 17.0195 22.3625 16.8125L20.1375 15.6875C19.721 15.4805 19.3705 15.1615 19.1253 14.7662C18.8802 14.3709 18.7502 13.9151 18.75 13.45V8.75C18.75 8.41848 18.8817 8.10054 19.1161 7.86612C19.3505 7.6317 19.6685 7.5 20 7.5C20.663 7.5 21.2989 7.23661 21.7678 6.76777C22.2366 6.29893 22.5 5.66304 22.5 5C22.5 4.33696 22.2366 3.70107 21.7678 3.23223C21.2989 2.76339 20.663 2.5 20 2.5H10C9.33696 2.5 8.70107 2.76339 8.23223 3.23223C7.76339 3.70107 7.5 4.33696 7.5 5C7.5 5.66304 7.76339 6.29893 8.23223 6.76777C8.70107 7.23661 9.33696 7.5 10 7.5C10.3315 7.5 10.6495 7.6317 10.8839 7.86612C11.1183 8.10054 11.25 8.41848 11.25 8.75V13.45Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

const projectsIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 23.75C20.8424 23.75 19.2527 23.0915 18.0806 21.9194C16.9085 20.7473 16.25 19.1576 16.25 17.5V27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 25H5C4.33696 25 3.70107 24.7366 3.23223 24.2678C2.76339 23.7989 2.5 23.163 2.5 22.5V6.25C2.5 5.58696 2.76339 4.95107 3.23223 4.48223C3.70107 4.01339 4.33696 3.75 5 3.75H9.875C10.2931 3.7459 10.7056 3.84673 11.0746 4.04327C11.4437 4.23981 11.7575 4.52578 11.9875 4.875L13 6.375C13.2276 6.72066 13.5375 7.0044 13.9019 7.20075C14.2662 7.39711 14.6736 7.49993 15.0875 7.5H25C25.663 7.5 26.2989 7.76339 26.7678 8.23223C27.2366 8.70107 27.5 9.33696 27.5 10V16.25" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 17.5C17.6307 17.5 18.75 16.3807 18.75 15C18.75 13.6193 17.6307 12.5 16.25 12.5C14.8693 12.5 13.75 13.6193 13.75 15C13.75 16.3807 14.8693 17.5 16.25 17.5Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 26.25C26.3807 26.25 27.5 25.1307 27.5 23.75C27.5 22.3693 26.3807 21.25 25 21.25C23.6193 21.25 22.5 22.3693 22.5 23.75C22.5 25.1307 23.6193 26.25 25 26.25Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

function ProjectsContent(){
    return(
        <div className="w-full h-full pr-3 py-3 overflow-y-auto no-scrollbar overflow-hidden flex flex-col gap-3"> 
            <BentoCard title={"Featured"} icon={featuredIcon} className="w-full relative gap-8"> 
                <div className="grid grid-cols-3 gap-5">
                    <Link to={"/projects-selected"} className="w-full aspect-5/3 flex flex-col">
                        <div className="w-full bg-[#ECECEC50] flex flex-col gap-3 rounded-t-[10px] p-5">
                            <div>
                                <h1 className="font-semibold text-[24px]">Okay lang</h1>
                                <div className="flex items-center gap-1">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6 3V6L5 8" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span className="font-light text-black/50 text-[12px]">September 09, 2026</span>
                                </div>
                            </div>
                            <p className="text-[12px]">A gentle space where people can check in with themselves without pressure, explanation, or judgment.</p>
                        </div>
                        <div className="w-full h-full bg-[#DEDEDE] rounded-b-[10px]">

                        </div>
                    </Link>
                     <div className="w-full aspect-5/3 flex flex-col">
                        <div className="w-full bg-[#ECECEC50] flex flex-col gap-3 rounded-t-[10px] p-5">
                            <div>
                                <h1 className="font-semibold text-[24px]">Okay lang</h1>
                                <div className="flex items-center gap-1">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6 3V6L5 8" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span className="font-light text-black/50 text-[12px]">September 09, 2026</span>
                                </div>
                            </div>
                            <p className="text-[12px]">A gentle space where people can check in with themselves without pressure, explanation, or judgment.</p>
                        </div>
                        <div className="w-full h-full bg-[#DEDEDE] rounded-b-[10px]">
                        </div>
                    </div>
                    <div className="w-full aspect-5/3 flex flex-col">
                        <div className="w-full bg-[#ECECEC50] flex flex-col gap-3 rounded-t-[10px] p-5">
                            <div>
                                <h1 className="font-semibold text-[24px]">Okay lang</h1>
                                <div className="flex items-center gap-1">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6 3V6L5 8" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span className="font-light text-black/50 text-[12px]">September 09, 2026</span>
                                </div>
                            </div>
                            <p className="text-[12px]">A gentle space where people can check in with themselves without pressure, explanation, or judgment.</p>
                        </div>
                        <div className="w-full h-full bg-[#DEDEDE] rounded-b-[10px]">

                        </div>
                    </div>
                </div>
            </BentoCard>  
            <BentoCard title={"Projects"} icon={projectsIcon} className="w-full relative gap-8"> 
                <div className="grid grid-cols-4 w-full gap-5">
                    <Link className="px-3 w-full rounded-[10px] py-4 flex items-center border border-[#00000030] cursor-pointer flex-col">
                        <div className="flex gap-2">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00016 16.3333L8.69183 12.95C8.88662 12.5634 9.18511 12.2387 9.55391 12.012C9.92271 11.7854 10.3473 11.6658 10.7802 11.6667H23.3335M23.3335 11.6667C23.69 11.666 24.0418 11.7471 24.3621 11.9036C24.6823 12.0601 24.9625 12.2879 25.181 12.5695C25.3995 12.8511 25.5506 13.1791 25.6227 13.5281C25.6948 13.8772 25.6859 14.2382 25.5968 14.5833L23.7885 21.5833C23.659 22.0849 23.3663 22.5291 22.9565 22.8459C22.5467 23.1628 22.0432 23.3342 21.5252 23.3333H4.66683C4.04799 23.3333 3.4545 23.0875 3.01691 22.6499C2.57933 22.2123 2.3335 21.6188 2.3335 21V5.83333C2.3335 4.55 3.3835 3.5 4.66683 3.5H9.25183C9.63615 3.50199 10.014 3.59888 10.3519 3.78205C10.6897 3.96523 10.9771 4.22902 11.1885 4.55L12.1452 5.95C12.3565 6.27098 12.6439 6.53477 12.9818 6.71795C13.3196 6.90112 13.6975 6.99801 14.0818 7H21.0002C21.619 7 22.2125 7.24583 22.6501 7.68342C23.0877 8.121 23.3335 8.71449 23.3335 9.33333V11.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.3332 18.6667C16.9775 18.6667 17.4998 18.1444 17.4998 17.5C17.4998 16.8557 16.9775 16.3334 16.3332 16.3334C15.6888 16.3334 15.1665 16.8557 15.1665 17.5C15.1665 18.1444 15.6888 18.6667 16.3332 18.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="flex flex-col gap-0.5">
                                <div className="flex gap-2">
                                    <span className="font-medium text-[18px]">Bakehub</span>
                                    <p className="text-[#35BF46] text-[12px] px-2 border py-0.5 rounded-[10px] border-[#C2F49E]">Public</p>
                                </div>
                                <p className="font-medium text-[10px] text-[#B9B9B9]">Created on February 19, 2026</p>
                            </div>
                           
                            
                        </div>
                        
                    </Link>
                   <Link className="px-3 w-full rounded-[10px] py-4 flex items-center border-[.50px] border-[#00000030] cursor-pointer flex-col">
                        <div className="flex gap-2">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00016 16.3333L8.69183 12.95C8.88662 12.5634 9.18511 12.2387 9.55391 12.012C9.92271 11.7854 10.3473 11.6658 10.7802 11.6667H23.3335M23.3335 11.6667C23.69 11.666 24.0418 11.7471 24.3621 11.9036C24.6823 12.0601 24.9625 12.2879 25.181 12.5695C25.3995 12.8511 25.5506 13.1791 25.6227 13.5281C25.6948 13.8772 25.6859 14.2382 25.5968 14.5833L23.7885 21.5833C23.659 22.0849 23.3663 22.5291 22.9565 22.8459C22.5467 23.1628 22.0432 23.3342 21.5252 23.3333H4.66683C4.04799 23.3333 3.4545 23.0875 3.01691 22.6499C2.57933 22.2123 2.3335 21.6188 2.3335 21V5.83333C2.3335 4.55 3.3835 3.5 4.66683 3.5H9.25183C9.63615 3.50199 10.014 3.59888 10.3519 3.78205C10.6897 3.96523 10.9771 4.22902 11.1885 4.55L12.1452 5.95C12.3565 6.27098 12.6439 6.53477 12.9818 6.71795C13.3196 6.90112 13.6975 6.99801 14.0818 7H21.0002C21.619 7 22.2125 7.24583 22.6501 7.68342C23.0877 8.121 23.3335 8.71449 23.3335 9.33333V11.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.3332 18.6667C16.9775 18.6667 17.4998 18.1444 17.4998 17.5C17.4998 16.8557 16.9775 16.3334 16.3332 16.3334C15.6888 16.3334 15.1665 16.8557 15.1665 17.5C15.1665 18.1444 15.6888 18.6667 16.3332 18.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="flex flex-col gap-0.5">
                                <div className="flex gap-2">
                                    <span className="font-medium text-[18px]">Bakehub</span>
                                    <p className="text-[#35BF46] text-[12px] px-2 border py-0.5 rounded-[10px] border-[#C2F49E]">Public</p>
                                </div>
                                <p className="font-medium text-[10px] text-[#B9B9B9]">Created on February 19, 2026</p>
                            </div>
                           
                            
                        </div>
                        
                    </Link>
                   <Link className="px-3 w-full rounded-[10px] py-4 flex items-center border-[.50px] border-[#00000030] cursor-pointer flex-col">
                        <div className="flex gap-2">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00016 16.3333L8.69183 12.95C8.88662 12.5634 9.18511 12.2387 9.55391 12.012C9.92271 11.7854 10.3473 11.6658 10.7802 11.6667H23.3335M23.3335 11.6667C23.69 11.666 24.0418 11.7471 24.3621 11.9036C24.6823 12.0601 24.9625 12.2879 25.181 12.5695C25.3995 12.8511 25.5506 13.1791 25.6227 13.5281C25.6948 13.8772 25.6859 14.2382 25.5968 14.5833L23.7885 21.5833C23.659 22.0849 23.3663 22.5291 22.9565 22.8459C22.5467 23.1628 22.0432 23.3342 21.5252 23.3333H4.66683C4.04799 23.3333 3.4545 23.0875 3.01691 22.6499C2.57933 22.2123 2.3335 21.6188 2.3335 21V5.83333C2.3335 4.55 3.3835 3.5 4.66683 3.5H9.25183C9.63615 3.50199 10.014 3.59888 10.3519 3.78205C10.6897 3.96523 10.9771 4.22902 11.1885 4.55L12.1452 5.95C12.3565 6.27098 12.6439 6.53477 12.9818 6.71795C13.3196 6.90112 13.6975 6.99801 14.0818 7H21.0002C21.619 7 22.2125 7.24583 22.6501 7.68342C23.0877 8.121 23.3335 8.71449 23.3335 9.33333V11.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.3332 18.6667C16.9775 18.6667 17.4998 18.1444 17.4998 17.5C17.4998 16.8557 16.9775 16.3334 16.3332 16.3334C15.6888 16.3334 15.1665 16.8557 15.1665 17.5C15.1665 18.1444 15.6888 18.6667 16.3332 18.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="flex flex-col gap-0.5">
                                <div className="flex gap-2">
                                    <span className="font-medium text-[18px]">Bakehub</span>
                                    <p className="text-[#35BF46] text-[12px] px-2 border py-0.5 rounded-[10px] border-[#C2F49E]">Public</p>
                                </div>
                                <p className="font-medium text-[10px] text-[#B9B9B9]">Created on February 19, 2026</p>
                            </div>
                           
                            
                        </div>
                        
                    </Link>
                  <Link className="px-3 w-full rounded-[10px] py-4 flex items-center border-[.50px] border-[#00000030] cursor-pointer flex-col">
                        <div className="flex gap-2">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00016 16.3333L8.69183 12.95C8.88662 12.5634 9.18511 12.2387 9.55391 12.012C9.92271 11.7854 10.3473 11.6658 10.7802 11.6667H23.3335M23.3335 11.6667C23.69 11.666 24.0418 11.7471 24.3621 11.9036C24.6823 12.0601 24.9625 12.2879 25.181 12.5695C25.3995 12.8511 25.5506 13.1791 25.6227 13.5281C25.6948 13.8772 25.6859 14.2382 25.5968 14.5833L23.7885 21.5833C23.659 22.0849 23.3663 22.5291 22.9565 22.8459C22.5467 23.1628 22.0432 23.3342 21.5252 23.3333H4.66683C4.04799 23.3333 3.4545 23.0875 3.01691 22.6499C2.57933 22.2123 2.3335 21.6188 2.3335 21V5.83333C2.3335 4.55 3.3835 3.5 4.66683 3.5H9.25183C9.63615 3.50199 10.014 3.59888 10.3519 3.78205C10.6897 3.96523 10.9771 4.22902 11.1885 4.55L12.1452 5.95C12.3565 6.27098 12.6439 6.53477 12.9818 6.71795C13.3196 6.90112 13.6975 6.99801 14.0818 7H21.0002C21.619 7 22.2125 7.24583 22.6501 7.68342C23.0877 8.121 23.3335 8.71449 23.3335 9.33333V11.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.3332 18.6667C16.9775 18.6667 17.4998 18.1444 17.4998 17.5C17.4998 16.8557 16.9775 16.3334 16.3332 16.3334C15.6888 16.3334 15.1665 16.8557 15.1665 17.5C15.1665 18.1444 15.6888 18.6667 16.3332 18.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="flex flex-col gap-0.5">
                                <div className="flex gap-2">
                                    <span className="font-medium text-[18px]">Bakehub</span>
                                    <p className="text-[#35BF46] text-[12px] px-2 border py-0.5 rounded-[10px] border-[#C2F49E]">Public</p>
                                </div>
                                <p className="font-medium text-[10px] text-[#B9B9B9]">Created on February 19, 2026</p>
                            </div>
                           
                            
                        </div>
                        
                    </Link>
                   <Link className="px-3 w-full rounded-[10px] py-4 flex items-center border-[.50px] border-[#00000030] cursor-pointer flex-col">
                        <div className="flex gap-2">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00016 16.3333L8.69183 12.95C8.88662 12.5634 9.18511 12.2387 9.55391 12.012C9.92271 11.7854 10.3473 11.6658 10.7802 11.6667H23.3335M23.3335 11.6667C23.69 11.666 24.0418 11.7471 24.3621 11.9036C24.6823 12.0601 24.9625 12.2879 25.181 12.5695C25.3995 12.8511 25.5506 13.1791 25.6227 13.5281C25.6948 13.8772 25.6859 14.2382 25.5968 14.5833L23.7885 21.5833C23.659 22.0849 23.3663 22.5291 22.9565 22.8459C22.5467 23.1628 22.0432 23.3342 21.5252 23.3333H4.66683C4.04799 23.3333 3.4545 23.0875 3.01691 22.6499C2.57933 22.2123 2.3335 21.6188 2.3335 21V5.83333C2.3335 4.55 3.3835 3.5 4.66683 3.5H9.25183C9.63615 3.50199 10.014 3.59888 10.3519 3.78205C10.6897 3.96523 10.9771 4.22902 11.1885 4.55L12.1452 5.95C12.3565 6.27098 12.6439 6.53477 12.9818 6.71795C13.3196 6.90112 13.6975 6.99801 14.0818 7H21.0002C21.619 7 22.2125 7.24583 22.6501 7.68342C23.0877 8.121 23.3335 8.71449 23.3335 9.33333V11.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.3332 18.6667C16.9775 18.6667 17.4998 18.1444 17.4998 17.5C17.4998 16.8557 16.9775 16.3334 16.3332 16.3334C15.6888 16.3334 15.1665 16.8557 15.1665 17.5C15.1665 18.1444 15.6888 18.6667 16.3332 18.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="flex flex-col gap-0.5">
                                <div className="flex gap-2">
                                    <span className="font-medium text-[18px]">Bakehub</span>
                                    <p className="text-[#35BF46] text-[12px] px-2 border py-0.5 rounded-[10px] border-[#C2F49E]">Public</p>
                                </div>
                                <p className="font-medium text-[10px] text-[#B9B9B9]">Created on February 19, 2026</p>
                            </div>
                           
                            
                        </div>
                        
                    </Link>
                    <Link className="px-3 w-full rounded-[10px] py-4 flex items-center border-[.50px] border-[#00000030] cursor-pointer flex-col">
                        <div className="flex gap-2">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00016 16.3333L8.69183 12.95C8.88662 12.5634 9.18511 12.2387 9.55391 12.012C9.92271 11.7854 10.3473 11.6658 10.7802 11.6667H23.3335M23.3335 11.6667C23.69 11.666 24.0418 11.7471 24.3621 11.9036C24.6823 12.0601 24.9625 12.2879 25.181 12.5695C25.3995 12.8511 25.5506 13.1791 25.6227 13.5281C25.6948 13.8772 25.6859 14.2382 25.5968 14.5833L23.7885 21.5833C23.659 22.0849 23.3663 22.5291 22.9565 22.8459C22.5467 23.1628 22.0432 23.3342 21.5252 23.3333H4.66683C4.04799 23.3333 3.4545 23.0875 3.01691 22.6499C2.57933 22.2123 2.3335 21.6188 2.3335 21V5.83333C2.3335 4.55 3.3835 3.5 4.66683 3.5H9.25183C9.63615 3.50199 10.014 3.59888 10.3519 3.78205C10.6897 3.96523 10.9771 4.22902 11.1885 4.55L12.1452 5.95C12.3565 6.27098 12.6439 6.53477 12.9818 6.71795C13.3196 6.90112 13.6975 6.99801 14.0818 7H21.0002C21.619 7 22.2125 7.24583 22.6501 7.68342C23.0877 8.121 23.3335 8.71449 23.3335 9.33333V11.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.3332 18.6667C16.9775 18.6667 17.4998 18.1444 17.4998 17.5C17.4998 16.8557 16.9775 16.3334 16.3332 16.3334C15.6888 16.3334 15.1665 16.8557 15.1665 17.5C15.1665 18.1444 15.6888 18.6667 16.3332 18.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="flex flex-col gap-0.5">
                                <div className="flex gap-2">
                                    <span className="font-medium text-[18px]">Bakehub</span>
                                    <p className="text-[#35BF46] text-[12px] px-2 border py-0.5 rounded-[10px] border-[#C2F49E]">Public</p>
                                </div>
                                <p className="font-medium text-[10px] text-[#B9B9B9]">Created on February 19, 2026</p>
                            </div>
                           
                            
                        </div>
                        
                    </Link>
                    <Link className="px-3 w-full rounded-[10px] py-4 flex items-center border-[.50px] border-[#00000030] cursor-pointer flex-col">
                        <div className="flex gap-2">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00016 16.3333L8.69183 12.95C8.88662 12.5634 9.18511 12.2387 9.55391 12.012C9.92271 11.7854 10.3473 11.6658 10.7802 11.6667H23.3335M23.3335 11.6667C23.69 11.666 24.0418 11.7471 24.3621 11.9036C24.6823 12.0601 24.9625 12.2879 25.181 12.5695C25.3995 12.8511 25.5506 13.1791 25.6227 13.5281C25.6948 13.8772 25.6859 14.2382 25.5968 14.5833L23.7885 21.5833C23.659 22.0849 23.3663 22.5291 22.9565 22.8459C22.5467 23.1628 22.0432 23.3342 21.5252 23.3333H4.66683C4.04799 23.3333 3.4545 23.0875 3.01691 22.6499C2.57933 22.2123 2.3335 21.6188 2.3335 21V5.83333C2.3335 4.55 3.3835 3.5 4.66683 3.5H9.25183C9.63615 3.50199 10.014 3.59888 10.3519 3.78205C10.6897 3.96523 10.9771 4.22902 11.1885 4.55L12.1452 5.95C12.3565 6.27098 12.6439 6.53477 12.9818 6.71795C13.3196 6.90112 13.6975 6.99801 14.0818 7H21.0002C21.619 7 22.2125 7.24583 22.6501 7.68342C23.0877 8.121 23.3335 8.71449 23.3335 9.33333V11.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.3332 18.6667C16.9775 18.6667 17.4998 18.1444 17.4998 17.5C17.4998 16.8557 16.9775 16.3334 16.3332 16.3334C15.6888 16.3334 15.1665 16.8557 15.1665 17.5C15.1665 18.1444 15.6888 18.6667 16.3332 18.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="flex flex-col gap-0.5">
                                <div className="flex gap-2">
                                    <span className="font-medium text-[18px]">Bakehub</span>
                                    <p className="text-[#35BF46] text-[12px] px-2 border py-0.5 rounded-[10px] border-[#C2F49E]">Public</p>
                                </div>
                                <p className="font-medium text-[10px] text-[#B9B9B9]">Created on February 19, 2026</p>
                            </div>
                           
                            
                        </div>
                        
                    </Link>
                    <Link className="px-3 w-full rounded-[10px] py-4 flex items-center border-[.50px] border-[#00000030] cursor-pointer flex-col">
                        <div className="flex gap-2">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00016 16.3333L8.69183 12.95C8.88662 12.5634 9.18511 12.2387 9.55391 12.012C9.92271 11.7854 10.3473 11.6658 10.7802 11.6667H23.3335M23.3335 11.6667C23.69 11.666 24.0418 11.7471 24.3621 11.9036C24.6823 12.0601 24.9625 12.2879 25.181 12.5695C25.3995 12.8511 25.5506 13.1791 25.6227 13.5281C25.6948 13.8772 25.6859 14.2382 25.5968 14.5833L23.7885 21.5833C23.659 22.0849 23.3663 22.5291 22.9565 22.8459C22.5467 23.1628 22.0432 23.3342 21.5252 23.3333H4.66683C4.04799 23.3333 3.4545 23.0875 3.01691 22.6499C2.57933 22.2123 2.3335 21.6188 2.3335 21V5.83333C2.3335 4.55 3.3835 3.5 4.66683 3.5H9.25183C9.63615 3.50199 10.014 3.59888 10.3519 3.78205C10.6897 3.96523 10.9771 4.22902 11.1885 4.55L12.1452 5.95C12.3565 6.27098 12.6439 6.53477 12.9818 6.71795C13.3196 6.90112 13.6975 6.99801 14.0818 7H21.0002C21.619 7 22.2125 7.24583 22.6501 7.68342C23.0877 8.121 23.3335 8.71449 23.3335 9.33333V11.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.3332 18.6667C16.9775 18.6667 17.4998 18.1444 17.4998 17.5C17.4998 16.8557 16.9775 16.3334 16.3332 16.3334C15.6888 16.3334 15.1665 16.8557 15.1665 17.5C15.1665 18.1444 15.6888 18.6667 16.3332 18.6667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="flex flex-col gap-0.5">
                                <div className="flex gap-2">
                                    <span className="font-medium text-[18px]">Bakehub</span>
                                    <p className="text-[#35BF46] text-[12px] px-2 border py-0.5 rounded-[10px] border-[#C2F49E]">Public</p>
                                </div>
                                <p className="font-medium text-[10px] text-[#B9B9B9]">Created on February 19, 2026</p>
                            </div>
                           
                            
                        </div>
                        
                    </Link>
                    
                </div>
            </BentoCard>          
           <ContactMe/>
        </div>
    )
}

export default ProjectsContent;