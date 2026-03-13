import BentoCard from "../BentoCard";
import ContactMe from "../ContactMe";

function ProjectsContent(){
    return(
        <div className="w-full h-full pr-3 py-3 overflow-y-auto no-scrollbar overflow-hidden flex flex-col gap-3"> 
            <BentoCard title={"Resume"} className="w-full min-h-[200px] relative gap-8"> 
                     
            </BentoCard>
           
           <ContactMe className="min-h-[200px]"/>
        </div>
    )
}

export default ProjectsContent;