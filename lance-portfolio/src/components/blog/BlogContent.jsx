import BentoCard from "../BentoCard";
import { Link } from "react-router-dom";
import { blogsData } from "@/data";
import { useState, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";

const blogIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8.75V26.25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.75 22.5C3.41848 22.5 3.10054 22.3683 2.86612 22.1339C2.6317 21.8995 2.5 21.5815 2.5 21.25V5C2.5 4.66848 2.6317 4.35054 2.86612 4.11612C3.10054 3.8817 3.41848 3.75 3.75 3.75H10C11.3261 3.75 12.5979 4.27678 13.5355 5.21447C14.4732 6.15215 15 7.42392 15 8.75C15 7.42392 15.5268 6.15215 16.4645 5.21447C17.4021 4.27678 18.6739 3.75 20 3.75H26.25C26.5815 3.75 26.8995 3.8817 27.1339 4.11612C27.3683 4.35054 27.5 4.66848 27.5 5V21.25C27.5 21.5815 27.3683 21.8995 27.1339 22.1339C26.8995 22.3683 26.5815 22.5 26.25 22.5H18.75C17.7554 22.5 16.8016 22.8951 16.0983 23.5983C15.3951 24.3016 15 25.2554 15 26.25C15 25.2554 14.6049 24.3016 13.9017 23.5983C13.1984 22.8951 12.2446 22.5 11.25 22.5H3.75Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>;

let isLoaded = false;

function BlogContent(){
    const featuredPost = blogsData[0];
    const otherPosts = blogsData.slice(1,3);

    const [isLoading, setIsLoading] = useState(!isLoaded);

    useEffect(() => {
        if (!isLoaded) {
            const timer = setTimeout(() => {
                isLoaded = true;
                setIsLoading(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    if (isLoading) {
        return (
            <div className="w-full gap-3 h-full flex flex-col lg:pr-3 px-3 lg:px-0 py-3 lg:py-0 overflow-y-auto no-scrollbar min-h-[101vh]">
                <BentoCard title={"Blogs"} icon={blogIcon}>
                    <div className="w-full flex flex-col gap-3">
                        <Skeleton className="w-full rounded-[14px] aspect-4/2.5 lg:aspect-5/3" />
                        <div className="w-full grid lg:grid-cols-2 gap-3">
                            {[1, 2].map((i) => (
                                <Skeleton key={i} className="w-full rounded-2xl aspect-4/2.5 lg:aspect-4/3" />
                            ))}
                        </div>
                    </div>
                </BentoCard>
            </div>
        )
    }

    return(
        <div className=" w-full overflow-y-auto no-scrollbar overflow-hidden py-3">
            <BentoCard title={"Blogs"} icon={blogIcon}>
                <div className="w-full flex flex-col gap-3">
                
                {/* 1. FEATURED POST (Main/Malaki) */}
                {featuredPost && (
                    <Link key="feat-post-m" to={`/blog-selected/${featuredPost.slug}`} className="animate-in fade-in duration-700 delay-150 fill-mode-backwards relative w-full flex flex-col justify-end overflow-hidden rounded-[14px] aspect-4/2.5 lg:aspect-5/3 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                        
                        {featuredPost.thumbnail ? (
                            <img src={featuredPost.thumbnail} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                        ) : (
                            <div className="absolute inset-0 w-full h-full bg-[#DEDEDE] dark:bg-zinc-800"></div>
                        )}

                        {/* Gradient Fade */}
                        <div className="absolute inset-0 bg-linear-to-t from-[#234170] via-black/45 to-transparent  transition-opacity duration-500"></div>

                        {/* Text Content */}
                        <div className="relative z-10 w-full p-5 lg:p-8 flex flex-col gap-1.5">
                            <div className="flex items-center lg:gap-2 gap-1.5 text-zinc-300">
                                <div className="lg:w-5 w-3.5">
                                    <svg viewBox="0 0 23 23" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.4129 20.9234C16.6654 20.9234 20.9235 16.6653 20.9235 11.4127C20.9235 6.16016 16.6654 1.9021 11.4129 1.9021C6.16028 1.9021 1.90222 6.16016 1.90222 11.4127C1.90222 16.6653 6.16028 20.9234 11.4129 20.9234Z" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M11.4127 5.7063V11.4127L9.51062 15.2169" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <p className="font-medium lg:text-[16px] text-[12px] tracking-wide">{featuredPost.date}</p>
                            </div>
                            <h1 className="font-bold text-white lg:text-[28px] text-[22px] leading-tight drop-shadow-md line-clamp-2">
                                {featuredPost.title}
                            </h1>
                        </div>
                    </Link>
                )}

                {/* 2. OTHER POSTS GRID (Yung dalawa sa ilalim) */}
                <div key="other-posts-m" className="animate-in fade-in duration-700 delay-300 fill-mode-backwards w-full grid lg:grid-cols-2 gap-3">
                    {otherPosts.map((post) => (
                        <Link key={post.id} to={`/blog-selected/${post.slug}`} className="relative w-full flex flex-col justify-end overflow-hidden rounded-2xl aspect-4/2.5 lg:aspect-4/3 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                            
                            {post.thumbnail ? (
                                <img src={post.thumbnail} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                            ) : (
                                <div className="absolute inset-0 w-full h-full bg-[#DEDEDE] dark:bg-zinc-800"></div>
                            )}

                            <div className="absolute inset-0 bg-linear-to-t from-[#234170] via-black/45 to-transparent transition-opacity duration-500"></div>

                            <div className="relative z-10 w-full p-4 flex flex-col gap-1">
                                <div className="flex items-center gap-1.5 text-zinc-300">
                                    <div className="lg:w-4 w-3.5">
                                        <svg viewBox="0 0 23 23" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4129 20.9234C16.6654 20.9234 20.9235 16.6653 20.9235 11.4127C20.9235 6.16016 16.6654 1.9021 11.4129 1.9021C6.16028 1.9021 1.90222 6.16016 1.90222 11.4127C1.90222 16.6653 6.16028 20.9234 11.4129 20.9234Z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M11.4127 5.7063V11.4127L9.51062 15.2169" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <p className="font-medium text-[12px] lg:text-[13px] tracking-wide shrink-0">{post.date}</p>
                                </div>
                                <h1 className="font-bold text-white lg:text-[18px] text-[22px] leading-tight drop-shadow-md line-clamp-2">
                                    {post.title}
                                </h1>
                                
                            </div>
                        </Link>
                    ))}
                </div>
                
                </div>
            </BentoCard>
        </div>
    )
}

export default BlogContent;