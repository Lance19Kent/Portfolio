import BlogSubContent from "@/components/blog/BlogSubContent";
import BentoCard from "../components/BentoCard";

function BlogSelected(){
    return(
        <div className="w-full">
            <div className="w-full grid grid-cols-[2fr_1fr]">
                <div className="w-full h-screen bg-white">
                </div>
                <BlogSubContent/>
            </div>
        </div>
    )
}

export default BlogSelected;