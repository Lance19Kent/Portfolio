import BentoCard from "../BentoCard";
import ContactMe from "../ContactMe";
import {Link, useParams} from "react-router-dom";
import { blogsData } from "@/data";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useEffect, useState } from "react";

const recentPostIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 15C3.75 17.225 4.4098 19.4001 5.64597 21.2502C6.88213 23.1002 8.63914 24.5422 10.6948 25.3936C12.7505 26.2451 15.0125 26.4679 17.1948 26.0338C19.3771 25.5998 21.3816 24.5283 22.955 22.955C24.5283 21.3816 25.5998 19.3771 26.0338 17.1948C26.4679 15.0125 26.2451 12.7505 25.3936 10.6948C24.5422 8.63914 23.1002 6.88213 21.2502 5.64597C19.4001 4.4098 17.225 3.75 15 3.75C11.8549 3.76183 8.83621 4.98903 6.575 7.175L3.75 10" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 3.75V10H10" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 8.75V15L20 17.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

function BlogSubContent(){
    const {slug} = useParams();

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;

    useEffect(()=>{
        setCurrentPage(1);
    },[slug]);

    let availablePosts = [];

    if(slug){
        availablePosts = blogsData.filter((post)=>post.slug !== slug);
    }else{
        availablePosts = blogsData.slice(3);
    }

    const totalPages = Math.ceil(availablePosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = availablePosts.slice(startIndex, startIndex + postsPerPage);

    return(
        <div className="w-full overflow-y-auto no-scrollbar overflow-hidden flex flex-col gap-3 lg:pr-3 pb-3 lg:py-3 py-0 pb-0">
            <BentoCard title={"Recent Posts"} icon={recentPostIcon}>
                <div className="flex flex-col w-full gap-3">
                   {currentPosts.length > 0 ? (
                     currentPosts.map((post)=>(
                 <Link key={post.id} to={`/blog-selected/${post.slug}`} className="w-full flex cursor-pointer group border rounded-2xl">
                        <div className="lg:aspect-4/2 aspect-square  dark:bg-zinc-900/40  w-3/4 lg:w-75 min-w-20 overflow-hidden relative rounded-l-2xl">
                                {post.thumbnail && (
                                    <img src={post.thumbnail} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                )}
                        </div>
                        <div className="w-full p-3 bg-white dark:bg-zinc-900/40 rounded-r-2xl flex flex-col gap-1 justify-center lg:justify-start ">
                            <h1 className="font-semibold lg:text-[15px] text-[14px] line-clamp-3">{post.title}</h1>
                            <div className="flex items-center gap-1">
                                <div className="lg:w-3 w-3">
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
                                <p className="font-light lg:text-[12px] text-[10px] text-ring">{post.date}</p>
                            </div>
                        </div>
                    </Link>
                ))):(
                    <div className="p-4 text-center text-zinc-500 text-sm">
                          More posts coming soon!
                      </div>
                   )}
                     {totalPages > 1 && (
                      <Pagination className="pt-3 pb-1">
                          <PaginationContent>
                              
                              <PaginationItem>
                                  <PaginationPrevious 
                                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                  />
                              </PaginationItem>

                              {[...Array(totalPages)].map((_, index) => {
                                  const pageNum = index + 1;
                                  return (
                                      <PaginationItem key={pageNum}>
                                          <PaginationLink 
                                              onClick={() => setCurrentPage(pageNum)}
                                              isActive={currentPage === pageNum}
                                              className="cursor-pointer"
                                          >
                                              {pageNum}
                                          </PaginationLink>
                                      </PaginationItem>
                                  );
                              })}

                              <PaginationItem>
                                  <PaginationNext 
                                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                  />
                              </PaginationItem>
                          </PaginationContent>
                      </Pagination>
                  )}
                </div>
            
            </BentoCard>
            <ContactMe/>
        </div>
    )
}

export default BlogSubContent;