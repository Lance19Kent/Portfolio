import BentoCard from "@/components/BentoCard";
import ContactMe from "@/components/ContactMe";
import ProjectSelectedContent from "@/components/projects/ProjectSelectedContent"
import ProjectSubContent from "@/components/projects/ProjectSubContent";

function ProjectSelected(){
    return(
        <div className="grid lg:grid-cols-[2.5fr_1fr] grid-cols-1 px-3 lg:px-0 gap-3 ">
            <div className="overflow-y-auto no-scrollbar lg:py-3 pt-3">
                <ProjectSelectedContent/>
            </div>
            <div className="overflow-y-auto no-scrollbar lg:py-3 lg:pt-3 lg:pr-3 pb-3 lg:pb-0">
                <ProjectSubContent className="w-full grid-col-1 gap-3 grid"/>
            </div>
            
        </div>
    )
}

export default ProjectSelected;