import SubContent from "@/components/home/HomeSubContent";
import Content from "@/components/home/HomeContent";

function Home(){
    return (
        <div className="w-full grid lg:grid-cols-[2fr_1fr] lg:gap-3 grid-cols-1 overflow-y-auto h-full">
            <Content/>
            <SubContent/>
        </div>
    )
}

export default Home;