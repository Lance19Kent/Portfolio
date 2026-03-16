import BlogSubContent from "@/components/blog/BlogSubContent";
import BlogSelectedContent from "@/components/blog/BlogSelectedContent";

function BlogSelected(){
    return(
        <div className="w-full grid grid-cols-[2fr_1fr] gap-3">
            <BlogSelectedContent/>
            <BlogSubContent/>
        </div>
    )
}

export default BlogSelected;