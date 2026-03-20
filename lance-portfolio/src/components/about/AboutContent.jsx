import BentoCard from "../BentoCard";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

import { Card, CardContent } from "/src/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "/src/components/ui/carousel"
import React, {useRef, useState} from "react";
const aboutIcon = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.3334 28V25.3333C25.3334 23.9188 24.7715 22.5623 23.7713 21.5621C22.7711 20.5619 21.4146 20 20.0001 20H12.0001C10.5856 20 9.22904 20.5619 8.22884 21.5621C7.22865 22.5623 6.66675 23.9188 6.66675 25.3333V28" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.0001 14.6667C18.9456 14.6667 21.3334 12.2789 21.3334 9.33333C21.3334 6.38781 18.9456 4 16.0001 4C13.0546 4 10.6667 6.38781 10.6667 9.33333C10.6667 12.2789 13.0546 14.6667 16.0001 14.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

const highlightsIcon =   <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 21.25V27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.25 13.45C11.2498 13.9151 11.1198 14.3709 10.8747 14.7662C10.6295 15.1615 10.279 15.4805 9.8625 15.6875L7.6375 16.8125C7.22098 17.0195 6.87046 17.3385 6.62535 17.7338C6.38024 18.1291 6.25025 18.5849 6.25 19.05V20C6.25 20.3315 6.3817 20.6495 6.61612 20.8839C6.85054 21.1183 7.16848 21.25 7.5 21.25H22.5C22.8315 21.25 23.1495 21.1183 23.3839 20.8839C23.6183 20.6495 23.75 20.3315 23.75 20V19.05C23.7498 18.5849 23.6198 18.1291 23.3747 17.7338C23.1295 17.3385 22.779 17.0195 22.3625 16.8125L20.1375 15.6875C19.721 15.4805 19.3705 15.1615 19.1253 14.7662C18.8802 14.3709 18.7502 13.9151 18.75 13.45V8.75C18.75 8.41848 18.8817 8.10054 19.1161 7.86612C19.3505 7.6317 19.6685 7.5 20 7.5C20.663 7.5 21.2989 7.23661 21.7678 6.76777C22.2366 6.29893 22.5 5.66304 22.5 5C22.5 4.33696 22.2366 3.70107 21.7678 3.23223C21.2989 2.76339 20.663 2.5 20 2.5H10C9.33696 2.5 8.70107 2.76339 8.23223 3.23223C7.76339 3.70107 7.5 4.33696 7.5 5C7.5 5.66304 7.76339 6.29893 8.23223 6.76777C8.70107 7.23661 9.33696 7.5 10 7.5C10.3315 7.5 10.6495 7.6317 10.8839 7.86612C11.1183 8.10054 11.25 8.41848 11.25 8.75V13.45Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>;

const certificateIcon = <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.7951 21.4833L28.3201 35.6933C28.3484 35.8606 28.3249 36.0326 28.2528 36.1862C28.1807 36.3398 28.0634 36.4678 27.9166 36.5529C27.7698 36.6381 27.6006 36.6764 27.4314 36.6628C27.2623 36.6492 27.1013 36.5842 26.9701 36.4766L21.0034 31.9983C20.7154 31.7831 20.3655 31.6668 20.0059 31.6668C19.6464 31.6668 19.2964 31.7831 19.0084 31.9983L13.0317 36.4749C12.9006 36.5823 12.7398 36.6472 12.5709 36.6608C12.402 36.6745 12.2329 36.6363 12.0862 36.5514C11.9395 36.4665 11.8222 36.3388 11.7499 36.1855C11.6777 36.0322 11.6539 35.8605 11.6817 35.6933L14.2051 21.4833" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 23.3334C25.5228 23.3334 30 18.8562 30 13.3334C30 7.81053 25.5228 3.33337 20 3.33337C14.4772 3.33337 10 7.81053 10 13.3334C10 18.8562 14.4772 23.3334 20 23.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

function AboutContent(){
    
    // For Highlight Section
    const highlightsRef = useRef(null);
    const [canHighlightsLeft, setcanHighlightsLeft] = useState(false);
    const [canHighlightsRight, setcanHighlightsRight] = useState(true);

     // For Certificates Section
    const certificatesRef = useRef(null);
    const [canCertificatesLeft, setcanCertificatesLeft] = useState(false);
    const [canCertificatesRight, setcanCertificatesRight] = useState(true);


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
            <div className="w-full select-none flex flex-col overflow-hidden bg-white rounded-[10px] relative shrink-0">
            <div className="w-full relative">
                 <img src="./bg-header.png" className="w-full object-cover h-40 lg:h-auto"></img>
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0 rounded-t-[10px]"></div>
                 <div className="absolute text-white font-medium bottom-3  right-4 text-[30px] z-10">
                </div>
            </div>
               <img src="./profile.png" alt="Lance Profile" className="absolute lg:bottom-15 h-35.5 lg:left-3 left-1/2 -translate-x-1/2 top-[100px]" />
            
                <div className="w-full py-5 gap-5 flex flex-1 items-center justify-end lg:pr-4 mt-20">
                    <div className="flex flex-col w-full justify-between lg:pl-42 gap-3 items-center lg:items-end">
                        <div className="leading-5 flex flex-col items-center lg:items-end">
                            <h1 className="font-semibold leading-6 text-[20px]">Lance Kent Geoffrey B. Magollado</h1>
                            <span className="text-[14px] text-black/70">Aspiring Full-Stack Developer</span>
                        </div>
                        <Button variant="outline" className={"cursor-pointer text-[#00000080] text-[16px] font-light w-fit hover:text-[rgba(0,0,0,0.5)] p-5"} asChild>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lancemagollado46@gmail.com&su=Hi,%20Let%20us%20connect!" target="_blank" rel="noopener noreferrer">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.1417 22.5896C15.1812 22.6882 15.25 22.7724 15.3388 22.8308C15.4276 22.8892 15.5321 22.919 15.6384 22.9163C15.7446 22.9136 15.8475 22.8784 15.9331 22.8156C16.0188 22.7527 16.0832 22.6651 16.1177 22.5646L22.8885 2.77293C22.9219 2.68064 22.9282 2.58075 22.9069 2.48497C22.8855 2.38919 22.8373 2.30147 22.7679 2.23208C22.6985 2.16269 22.6108 2.11449 22.515 2.09313C22.4193 2.07178 22.3194 2.07814 22.2271 2.11148L2.43541 8.88231C2.33488 8.91678 2.24731 8.98118 2.18444 9.06686C2.12157 9.15254 2.08642 9.2554 2.0837 9.36164C2.08098 9.46788 2.11082 9.5724 2.16922 9.66119C2.22762 9.74998 2.31178 9.81878 2.41041 9.85835L10.6708 13.1709C10.932 13.2754 11.1692 13.4317 11.3683 13.6305C11.5674 13.8292 11.7241 14.0662 11.8292 14.3271L15.1417 22.5896Z" stroke="black" stroke-opacity="0.4" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22.7646 2.23645L11.3687 13.6312" stroke="black" stroke-opacity="0.4" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Message
                            </a>
                        </Button>
                    </div>
                </div>

            </div>
            <BentoCard title={"About"} icon={aboutIcon} className="leading-5">
                <span className="text-[14px] font-light text-black">
                    Front-End Development is my current playground where logic meets creativity. I love building intuitive user interfaces and crafting smooth digital experiences. Being a Full-Stack Developer is my goal so that I can create an innovative web app of my own.
                </span>
            </BentoCard>
            <BentoCard title={"Highlights"} icon={highlightsIcon} className=" relative">
                <div className={`absolute right-5 z-10 top-37.5 bg-[#00000020] p-2 rounded-[100px] stroke-black transition duration-75 ease-in ${canHighlightsRight ? "cursor-pointer hover:stroke-white hover:bg-[#3FA6F4]":"cursor-not-allowed opacity-30 "}`} onClick={() => canHighlightsRight && scrollCarousel(highlightsRef,"right")}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 24L20 16L12 8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                  </div>
                  <div className={`absolute left-5 rotate-180 top-37.5 bg-[#00000020] p-2 rounded-[100px] stroke-black transition duration-75 ease-in ${canHighlightsLeft ?"cursor-pointer hover:stroke-white hover:bg-[#3FA6F4]":"cursor-not-allowed opacity-30"}`} onClick={() => canHighlightsLeft && scrollCarousel(highlightsRef, "left")}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 24L20 16L12 8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                  </div>
                <div className="flex gap-3 overflow-x-auto no-scrollbar w-full justify-between" ref={highlightsRef} onScroll={()=> handleScroll(highlightsRef, setcanHighlightsLeft,setcanHighlightsRight)}>
                
                   <div className="flex flex-col w-57.5 shrink-0 transition ease-in duration-100 cursor-pointer">
                        <div className="w-full aspect-5/3.5 bg-gray-200 rounded-t-[10px]">
                            <img src="" alt="" />
                        </div>
                        <div className="w-full flex gap-3 p-3 bg-[#ECECEC60] rounded-b-[10px]">
                            <div className="flex flex-col w-full overflow-hidden gap-1">
                                    <h1 className="font-semibold text-[16px]">Apollo 2026: Blueprint of Insights</h1>
                                    <div className="flex items-center gap-1">
                                        <svg width="16" height="16" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_125_209)">
                                        <path d="M11.4129 20.9234C16.6654 20.9234 20.9235 16.6653 20.9235 11.4127C20.9235 6.16016 16.6654 1.9021 11.4129 1.9021C6.16028 1.9021 1.90222 6.16016 1.90222 11.4127C1.90222 16.6653 6.16028 20.9234 11.4129 20.9234Z" stroke="black" stroke-opacity="0.3" stroke-width="1.90213" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.4127 5.7063V11.4127L9.51062 15.2169" stroke="black" stroke-opacity="0.3" stroke-width="1.90213" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_125_209">
                                        <rect width="22.8255" height="22.8255" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                        <p className="font-light text-[12px] text-black/50">September 09, 2026</p>
                                    </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col w-57.5 shrink-0 transition ease-in duration-100 cursor-pointer">
                        <div className="w-full aspect-5/3.5 bg-gray-200 rounded-t-[10px]">
                            <img src="" alt="" />
                        </div>
                        <div className="w-full flex gap-3 p-3 bg-[#ECECEC60] rounded-b-[10px]">
                            <div className="flex flex-col w-full overflow-hidden gap-1">
                                    <h1 className="font-semibold text-[16px]">Apollo 2026: Blueprint of Insights</h1>
                                    <div className="flex items-center gap-1">
                                        <svg width="16" height="16" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_125_209)">
                                        <path d="M11.4129 20.9234C16.6654 20.9234 20.9235 16.6653 20.9235 11.4127C20.9235 6.16016 16.6654 1.9021 11.4129 1.9021C6.16028 1.9021 1.90222 6.16016 1.90222 11.4127C1.90222 16.6653 6.16028 20.9234 11.4129 20.9234Z" stroke="black" stroke-opacity="0.3" stroke-width="1.90213" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.4127 5.7063V11.4127L9.51062 15.2169" stroke="black" stroke-opacity="0.3" stroke-width="1.90213" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_125_209">
                                        <rect width="22.8255" height="22.8255" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                        <p className="font-light text-[12px] text-black/50">September 09, 2026</p>
                                    </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col w-57.5 shrink-0 transition ease-in duration-100 cursor-pointer">
                        <div className="w-full aspect-5/3.5 bg-gray-200 rounded-t-[10px]">
                            <img src="" alt="" />
                        </div>
                        <div className="w-full flex gap-3 p-3 bg-[#ECECEC60] rounded-b-[10px]">
                            <div className="flex flex-col w-full overflow-hidden gap-1">
                                    <h1 className="font-semibold text-[16px]">Apollo 2026: Blueprint of Insights</h1>
                                    <div className="flex items-center gap-1">
                                        <svg width="16" height="16" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_125_209)">
                                        <path d="M11.4129 20.9234C16.6654 20.9234 20.9235 16.6653 20.9235 11.4127C20.9235 6.16016 16.6654 1.9021 11.4129 1.9021C6.16028 1.9021 1.90222 6.16016 1.90222 11.4127C1.90222 16.6653 6.16028 20.9234 11.4129 20.9234Z" stroke="black" stroke-opacity="0.3" stroke-width="1.90213" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.4127 5.7063V11.4127L9.51062 15.2169" stroke="black" stroke-opacity="0.3" stroke-width="1.90213" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_125_209">
                                        <rect width="22.8255" height="22.8255" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                        <p className="font-light text-[12px] text-black/50">September 09, 2026</p>
                                    </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col w-57.5 shrink-0 transition ease-in duration-100 cursor-pointer">
                        <div className="w-full aspect-5/3.5 bg-gray-200 rounded-t-[10px]">
                            <img src="" alt="" />
                        </div>
                        <div className="w-full flex gap-3 p-3 bg-[#ECECEC60] rounded-b-[10px]">
                            <div className="flex flex-col w-full overflow-hidden gap-1">
                                    <h1 className="font-semibold text-[16px]">Apollo 2026: Blueprint of Insights</h1>
                                    <div className="flex items-center gap-1">
                                        <svg width="16" height="16" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_125_209)">
                                        <path d="M11.4129 20.9234C16.6654 20.9234 20.9235 16.6653 20.9235 11.4127C20.9235 6.16016 16.6654 1.9021 11.4129 1.9021C6.16028 1.9021 1.90222 6.16016 1.90222 11.4127C1.90222 16.6653 6.16028 20.9234 11.4129 20.9234Z" stroke="black" stroke-opacity="0.3" stroke-width="1.90213" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.4127 5.7063V11.4127L9.51062 15.2169" stroke="black" stroke-opacity="0.3" stroke-width="1.90213" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_125_209">
                                        <rect width="22.8255" height="22.8255" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                        <p className="font-light text-[12px] text-black/50">September 09, 2026</p>
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </BentoCard>
            <BentoCard title={"Certificates"} icon={certificateIcon} className="relative">
                         <div className={`absolute right-5 z-10 top-37.5 bg-[#00000020] p-2 rounded-[100px] stroke-black transition duration-75 ease-in ${canCertificatesRight ? "cursor-pointer hover:stroke-white hover:bg-[#3FA6F4]":"cursor-not-allowed opacity-30 "}`} onClick={() => canCertificatesRight && scrollCarousel(certificatesRef, "right")}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 24L20 16L12 8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                  </div>
                  <div className={`absolute left-5 rotate-180 top-37.5 bg-[#00000020] p-2 rounded-[100px] stroke-black transition duration-75 ease-in ${canCertificatesLeft ?"cursor-pointer hover:stroke-white hover:bg-[#3FA6F4]":"cursor-not-allowed opacity-30"}`} onClick={() => canCertificatesLeft && scrollCarousel(certificatesRef, "left")}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 24L20 16L12 8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </div>
              <div className="flex flex-col gap-8 items-center">
                <div className="w-full flex gap-3 overflow-x-auto no-scrollbar justify-between" ref={certificatesRef} onScroll={()=> handleScroll(certificatesRef, setcanCertificatesLeft, setcanCertificatesRight)}>
                  <div className="flex flex-col shrink-0 gap-1 transition ease-in duration-100 cursor-pointer">
                          <div className="w-full aspect-5/3 bg-gray-200">
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

                                  <p className="font-light text-[12px] text-black/50">Issued on November 24, 2025</p>
                              </div>

                          </div>
                    </div>
                    <div className="flex flex-col shrink-0 gap-1 transition ease-in duration-100 cursor-pointer">
                          <div className="w-full aspect-5/3 bg-gray-200">
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

                                  <p className="font-light text-[12px] text-black/50">Issued on November 24, 2025</p>
                              </div>

                          </div>
                    </div>
                    <div className="flex flex-col shrink-0 gap-1 transition ease-in duration-100 cursor-pointer">
                          <div className="w-full aspect-5/3 bg-gray-200">
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

                                  <p className="font-light text-[12px] text-black/50">Issued on November 24, 2025</p>
                              </div>

                          </div>
                    </div>
                    <div className="flex flex-col shrink-0 gap-1 transition ease-in duration-100 cursor-pointer">
                          <div className="w-full aspect-5/3 bg-gray-200">
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

                                  <p className="font-light text-[12px] text-black/50">Issued on November 24, 2025</p>
                              </div>

                          </div>
                    </div>
                </div>
                <Link to={"/achievements"} className="text-center block text-[#3FA6F4] hover:underline">See More</Link>
              </div>
               
            </BentoCard>
        </div>
    )
}

export default AboutContent;