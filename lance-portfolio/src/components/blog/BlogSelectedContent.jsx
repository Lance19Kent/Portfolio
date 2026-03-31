import { Link, useParams, Navigate } from "react-router-dom";
import BentoCard from "../BentoCard";
import { blogsData } from "@/data";

function BlogSelectedContent(){
    const {slug} = useParams();
    const post = blogsData.find((b) => b.slug === slug);

    if(!post) return <Navigate to="/blog" replace/>

    // Safely check images
    const hasFirstImage = post.contentImages && post.contentImages.length > 0;
    const hasSecondImage = post.contentImages && post.contentImages.length > 1;

    // A helper function to render the rich content blocks
    // A helper function to render the rich content blocks
    const renderContentBlocks = (blocks) => {
        if (!blocks || !Array.isArray(blocks)) return <p className="text-zinc-500 italic">No content available.</p>;

        return blocks.map((block, index) => {
            switch(block.type) {
                case 'paragraph':
                    // UX TWEAK: Softer text color (zinc-600) and relaxed line height for premium reading
                    return <p key={index} className="font-light lg:text-[16px] text-[15px] leading-relaxed lg:leading-loose pt-5 text-zinc-600 dark:text-zinc-400 tracking-wide">{block.text}</p>;
                
                case 'subtitle':
                    // UX TWEAK: Tighter tracking (letter spacing) for headers
                    return <h3 key={index} className="font-semibold lg:text-2xl text-xl pt-8 pb-3 text-zinc-900 dark:text-white tracking-tight">{block.text}</h3>;
                
                case 'list':
                    return (
                        <ul key={index} className="list-disc pl-6 space-y-3 pt-3 text-zinc-600 dark:text-zinc-400 font-light lg:text-[16px] text-[15px] leading-relaxed">
                            {block.items.map((item, i) => (
                                <li key={i}>
                                    {typeof item === 'object' ? (
                                        <span>
                                            <strong className="font-medium text-zinc-900 dark:text-zinc-200">
                                                {item.keyword}
                                            </strong>
                                            {item.text || item.description}
                                        </span>
                                    ) : (
                                        item 
                                    )}
                                </li>
                            ))}
                        </ul>
                    );
                
                case 'quote':
                    return (
                        <div key={index} className="my-8 p-6 lg:p-8 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border-l-4 border-[#468cfc]">
                            <p className="font-medium lg:text-l text-lg italic text-zinc-900 dark:text-white leading-relaxed">
                                "{block.text}"
                            </p>
                        </div>
                    );

                case 'bold':
                     return <p key={index} className="font-medium lg:text-[16px] text-[15px] leading-relaxed pt-5 text-zinc-900 dark:text-white">{block.text}</p>;
                case 'button-group':
                return (
                    <div key={index} className="flex flex-wrap gap-4 pt-6 pb-2">
                        {block.links.map((link, i) => (
                            <a 
                                key={i} 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium text-sm rounded-full hover:bg-zinc-900/90 duration-500 ease-out transition shadow-md"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                );
                default:
                    return null;
            }
        });
    };
    const halfLength = post.content ? Math.ceil(post.content.length / 2) : 0;
    const firstHalfContent = post.content ? post.content.slice(0, halfLength) : [];
    const secondHalfContent = post.content ? post.content.slice(halfLength) : [];

    return(
        <div className="w-full py-3 overflow-y-auto no-scrollbar">
            <BentoCard>
                <div className="flex flex-col gap-5">
                    
                    {/* BACK BUTTON */}
                    <Link to={"/blog"} >
                        <div className="p-2 w-fit rounded-[100px] outline-1 outline-zinc-200 dark:outline-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                            <svg width="24" height="24" className="dark:invert" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.8571 20.7143L10 13.8572L16.8571 7.00006" stroke="black" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </Link>

                    {/* HEADER */}
                    <div className="flex flex-col gap-3">
                        <h1 className="font-semibold lg:text-4xl text-3xl leading-11">{post.title}</h1>
                        <div className="flex items-center gap-2">
                            <div className="lg:w-5 w-4.5">
                                  <svg viewBox="0 0 23 23" fill="none" className="stroke-ring" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4129 20.9234C16.6654 20.9234 20.9235 16.6653 20.9235 11.4127C20.9235 6.16016 16.6654 1.9021 11.4129 1.9021C6.16028 1.9021 1.90222 6.16016 1.90222 11.4127C1.90222 16.6653 6.16028 20.9234 11.4129 20.9234Z" strokeOpacity="0.7" strokeWidth="1.90213" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11.4127 5.7063V11.4127L9.51062 15.2169" strokeOpacity="0.7" strokeWidth="1.90213" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <p className="font-light lg:text-base text-sm text-ring">{post.date}</p>
                        </div>
                    </div>

                    {/* TOP IMAGE */}
                    {hasFirstImage && (
                        <div className="w-full pt-6">
                            <img src={post.contentImages[0]} alt={`${post.title} Image 1`} className="w-full rounded-[10px] object-cover ring-1 ring-black/5 dark:ring-white/10 shadow-sm" />
                        </div>
                    )}

                    {/* FIRST HALF OF CONTENT */}
                    <div className="flex flex-col w-full">
                        {renderContentBlocks(firstHalfContent)}
                    </div>

                    {/* MIDDLE IMAGE (Kung meron man) */}
                    {hasSecondImage && (
                        <div className="pt-3">
                            <img src={post.contentImages[1]} alt={`${post.title} Image 2`} className="w-full rounded-[10px] object-cover shadow-sm ring-1 ring-black/5 dark:ring-white/10" />
                        </div>
                    )}

                    {/* SECOND HALF OF CONTENT */}
                    <div className="flex flex-col w-full ">
                        {renderContentBlocks(secondHalfContent)}
                    </div>

                </div>
            </BentoCard>
        </div>
    )
}

export default BlogSelectedContent;