import BlogContent from "@/components/blog/BlogContent";
import BlogSubContent from "@/components/blog/BlogSubContent";

function Blog(){
    return(
        <div className="grid grid-cols-[2fr_1fr] w-full gap-3 py-3 pr-3">
            <BlogContent/>
            <BlogSubContent/>
        </div>

        
    )
}

export default Blog;