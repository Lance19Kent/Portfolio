import BentoCard from "../BentoCard";
import { Link } from "react-router-dom";
const blogIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8.75V26.25" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 22.5C3.41848 22.5 3.10054 22.3683 2.86612 22.1339C2.6317 21.8995 2.5 21.5815 2.5 21.25V5C2.5 4.66848 2.6317 4.35054 2.86612 4.11612C3.10054 3.8817 3.41848 3.75 3.75 3.75H10C11.3261 3.75 12.5979 4.27678 13.5355 5.21447C14.4732 6.15215 15 7.42392 15 8.75C15 7.42392 15.5268 6.15215 16.4645 5.21447C17.4021 4.27678 18.6739 3.75 20 3.75H26.25C26.5815 3.75 26.8995 3.8817 27.1339 4.11612C27.3683 4.35054 27.5 4.66848 27.5 5V21.25C27.5 21.5815 27.3683 21.8995 27.1339 22.1339C26.8995 22.3683 26.5815 22.5 26.25 22.5H18.75C17.7554 22.5 16.8016 22.8951 16.0983 23.5983C15.3951 24.3016 15 25.2554 15 26.25C15 25.2554 14.6049 24.3016 13.9017 23.5983C13.1984 22.8951 12.2446 22.5 11.25 22.5H3.75Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

function BlogContent(){
    return(
        <div className=" w-full overflow-y-auto no-scrollbar overflow-hidden py-3">
            <BentoCard title={"Blogs"} icon={blogIcon}>
                <div className="w-full grid grid-cols-1 gap-3">
                    <div className="w-full">
                        <div className="aspect-4/2 bg-[#DEDEDE] w-full rounded-t-[10px]">

                        </div>
                        <div className="w-full p-4 bg-[#ECECEC50] rounded-b-[10px]">
                            <h1 className="font-semibold text-[28px]">Apollo 2026: Blueprint of Insights</h1>
                            <div className="flex items-center gap-2">
                                <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                <p className="font-light text-[16px] text-black/50">September 09, 2026</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-3">
                        <Link to={"/blog-selected"} className={"w-full cursor-pointer"}>
                        <div className="aspect-4/2 bg-[#DEDEDE] w-full rounded-t-[10px]">

                        </div>
                        <div className="w-full p-4 bg-[#ECECEC50] rounded-b-[10px] flex flex-col gap-1">
                            <h1 className="font-semibold text-[20px]">Apollo 2026: Blueprint of Insights</h1>
                            <div className="flex items-center gap-2">
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
                        </Link>
                        <div className="w-full">
                        <div className="aspect-4/2 bg-[#DEDEDE] w-full rounded-t-[10px]">

                        </div>
                        <div className="w-full p-4 bg-[#ECECEC50] rounded-b-[10px] flex flex-col gap-1">
                            <h1 className="font-semibold text-[20px]">Apollo 2026: Blueprint of Insights</h1>
                            <div className="flex items-center gap-2">
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
        </div>
    )
}

export default BlogContent;