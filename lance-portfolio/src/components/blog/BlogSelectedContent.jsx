import { Link } from "react-router-dom";
import BentoCard from "../BentoCard";

function BlogSelectedContent(){
    return(
        <div className="w-full py-3 overflow-y-auto no-scrollbar">
            <BentoCard>
                <div>
                    <div className="flex flex-col gap-5">
                        <Link to={"/blog"} >
                            <div className="p-3 w-fit rounded-[100px] outline">
                                <svg width="27" height="28" className="dark:invert" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8571 20.7143L10 13.8572L16.8571 7.00006" stroke="black" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </Link>
                        <div className="flex flex-col gap-3">
                            <h1 className="font-medium lg:text-4xl text-3xl leading-9">Earned JavaScript Certification</h1>
                            <div className="flex items-center gap-2">
                                <div className="lg:w-5 w-4.5">
                                      <svg  viewBox="0 0 23 23" fill="none" className="stroke-ring" xmlns="http://www.w3.org/2000/svg">
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
                                </div>
                                
                                <p className="font-light lg:text-base text-sm  text-ring">September 09, 2026</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pt-10">
                        <img src="./blog-assets/blog-example.jpg" alt="" className="w-full rounded-[10px]" />
                    </div>
                    <div>
                        <p className="font-light lg:text-base text-sm leading-6 lg:leading-7 pt-6">
                            Consistent Honor and Achievements - 90 above grades everyday year, and masters java and sql. Accumulated with High Honor with the average of 96. I learned what is truly my goal, my career path and created mindset that will help me achieve my goals.
                            
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                    <div className="pt-6">
                        <img src="./blog-assets/blog-example2.jpg" alt="" className="rounded-[10px] " />
                    </div>
                        <div>
                        <p className="font-light lg:text-base text-sm leading-6 lg:leading-7 pt-6">
                            Consistent Honor and Achievements - 90 above grades everyday year, and masters java and sql. Accumulated with High Honor with the average of 96. I learned what is truly my goal, my career path and created mindset that will help me achieve my goals.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                </div>
            </BentoCard>
        </div>
        
    )
}

export default BlogSelectedContent;