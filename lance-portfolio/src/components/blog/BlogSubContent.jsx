import BentoCard from "../BentoCard";
import ContactMe from "../ContactMe";

const recentPostIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 15C3.75 17.225 4.4098 19.4001 5.64597 21.2502C6.88213 23.1002 8.63914 24.5422 10.6948 25.3936C12.7505 26.2451 15.0125 26.4679 17.1948 26.0338C19.3771 25.5998 21.3816 24.5283 22.955 22.955C24.5283 21.3816 25.5998 19.3771 26.0338 17.1948C26.4679 15.0125 26.2451 12.7505 25.3936 10.6948C24.5422 8.63914 23.1002 6.88213 21.2502 5.64597C19.4001 4.4098 17.225 3.75 15 3.75C11.8549 3.76183 8.83621 4.98903 6.575 7.175L3.75 10" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 3.75V10H10" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 8.75V15L20 17.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

function BlogSubContent(){
    return(
        <div className="w-full overflow-y-auto no-scrollbar overflow-hidden flex flex-col gap-3 lg:pr-3 lg:py-3">
            <BentoCard title={"Recent Posts"} icon={recentPostIcon}>
                <div className="flex flex-col w-full gap-3">
                    <div className="w-full flex ">
                        <div className="lg:aspect-4/2 bg-[#DEDEDE] w-full rounded-l-[10px]">
                        </div>
                        <div className="w-full p-3 bg-[#ECECEC50] rounded-r-[10px] flex flex-col gap-1 ">
                            <h1 className="font-semibold lg:text-[16px] text-[14px]">Apollo 2026: Blueprint of Insights</h1>
                            <div className="flex items-center gap-1">
                                <div className="lg:w-4 w-3">
                                    <svg  viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                </div>
                                <p className="font-light lg:text-[12px] text-[10px] text-black/50">September 09, 2026</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex ">
                        <div className="lg:aspect-4/2 bg-[#DEDEDE] w-full rounded-l-[10px]">
                        </div>
                        <div className="w-full p-3 bg-[#ECECEC50] rounded-r-[10px] flex flex-col gap-1 ">
                            <h1 className="font-semibold lg:text-[16px] text-[14px]">Apollo 2026: Blueprint of Insights</h1>
                            <div className="flex items-center gap-1">
                                <div className="lg:w-4 w-3">
                                    <svg  viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                </div>
                                <p className="font-light lg:text-[12px] text-[10px] text-black/50">September 09, 2026</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex ">
                        <div className="lg:aspect-4/2 bg-[#DEDEDE] w-full rounded-l-[10px]">
                        </div>
                        <div className="w-full p-3 bg-[#ECECEC50] rounded-r-[10px] flex flex-col gap-1 ">
                            <h1 className="font-semibold lg:text-[16px] text-[14px]">Apollo 2026: Blueprint of Insights</h1>
                            <div className="flex items-center gap-1">
                                <div className="lg:w-4 w-3">
                                    <svg  viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                </div>
                                <p className="font-light lg:text-[12px] text-[10px] text-black/50">September 09, 2026</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex ">
                        <div className="lg:aspect-4/2 bg-[#DEDEDE] w-full rounded-l-[10px]">
                        </div>
                        <div className="w-full p-3 bg-[#ECECEC50] rounded-r-[10px] flex flex-col gap-1 ">
                            <h1 className="font-semibold lg:text-[16px] text-[14px]">Apollo 2026: Blueprint of Insights</h1>
                            <div className="flex items-center gap-1">
                                <div className="lg:w-4 w-3">
                                    <svg  viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                </div>
                                <p className="font-light lg:text-[12px] text-[10px] text-black/50">September 09, 2026</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex ">
                        <div className="lg:aspect-4/2 bg-[#DEDEDE] w-full rounded-l-[10px]">
                        </div>
                        <div className="w-full p-3 bg-[#ECECEC50] rounded-r-[10px] flex flex-col gap-1 ">
                            <h1 className="font-semibold lg:text-[16px] text-[14px]">Apollo 2026: Blueprint of Insights</h1>
                            <div className="flex items-center gap-1">
                                <div className="lg:w-4 w-3">
                                    <svg  viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                </div>
                                <p className="font-light lg:text-[12px] text-[10px] text-black/50">September 09, 2026</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex ">
                        <div className="lg:aspect-4/2 bg-[#DEDEDE] w-full rounded-l-[10px]">
                        </div>
                        <div className="w-full p-3 bg-[#ECECEC50] rounded-r-[10px] flex flex-col gap-1 ">
                            <h1 className="font-semibold lg:text-[16px] text-[14px]">Apollo 2026: Blueprint of Insights</h1>
                            <div className="flex items-center gap-1">
                                <div className="lg:w-4 w-3">
                                    <svg  viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                </div>
                                <p className="font-light lg:text-[12px] text-[10px] text-black/50">September 09, 2026</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex ">
                        <div className="lg:aspect-4/2 bg-[#DEDEDE] w-full rounded-l-[10px]">
                        </div>
                        <div className="w-full p-3 bg-[#ECECEC50] rounded-r-[10px] flex flex-col gap-1 ">
                            <h1 className="font-semibold lg:text-[16px] text-[14px]">Apollo 2026: Blueprint of Insights</h1>
                            <div className="flex items-center gap-1">
                                <div className="lg:w-4 w-3">
                                    <svg  viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                </div>
                                <p className="font-light lg:text-[12px] text-[10px] text-black/50">September 09, 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </BentoCard>
            <ContactMe/>
        </div>
    )
}

export default BlogSubContent;