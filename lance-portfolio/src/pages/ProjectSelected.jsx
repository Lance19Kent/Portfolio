import ProjectSelectedContent from "@/components/projects/ProjectSelectedContent"
import ProjectSelectedSubContent from "@/components/projects/ProjectSelectedSubContent";

function ProjectSelected(){
    return(
        <div className="grid grid-cols-[2.5fr_1fr] gap-3">
            <ProjectSelectedContent/>
            <ProjectSelectedSubContent/>
        </div>
    )
}

export default ProjectSelected;