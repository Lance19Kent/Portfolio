import ProjectSelectedContent from "@/components/projects/ProjectSelectedContent"
import ProjectSelectedSubContent from "@/components/projects/ProjectSelectedSubContent";

function ProjectSelected(){
    return(
        <div className="grid lg:grid-cols-[2.5fr_1fr] grid-cols-1 px-3 lg:px-0 gap-3">
            <ProjectSelectedContent/>
            <ProjectSelectedSubContent/>
        </div>
    )
}

export default ProjectSelected;