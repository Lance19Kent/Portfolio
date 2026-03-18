import ProjectSelectedContent from "@/components/projects/ProjectSelectedContent"
import ProjectSelectedSubContent from "@/components/projects/ProjectSelectedSubContent";

function ProjectSelected(){
    return(
        <div className="grid grid-cols-[2fr_1fr]">
            <ProjectSelectedContent/>
            <ProjectSelectedSubContent/>
        </div>
    )
}

export default ProjectSelected;