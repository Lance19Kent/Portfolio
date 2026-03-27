import BentoCard from "../BentoCard";
import ContactMe from "../ContactMe";
import AchievementCard from "./AchievementCard";
import { achievementsData } from "@/data";

    const certificationIcon = <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.795 21.4833L28.32 35.6933C28.3483 35.8606 28.3248 36.0326 28.2527 36.1862C28.1806 36.3398 28.0633 36.4678 27.9165 36.5529C27.7698 36.6381 27.6005 36.6764 27.4313 36.6628C27.2622 36.6492 27.1012 36.5842 26.97 36.4766L21.0033 31.9983C20.7153 31.7831 20.3654 31.6668 20.0058 31.6668C19.6463 31.6668 19.2964 31.7831 19.0083 31.9983L13.0317 36.4749C12.9005 36.5823 12.7398 36.6472 12.5708 36.6608C12.4019 36.6745 12.2328 36.6363 12.0861 36.5514C11.9394 36.4665 11.8221 36.3388 11.7499 36.1855C11.6776 36.0322 11.6538 35.8605 11.6817 35.6933L14.205 21.4833" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 23.3334C25.5228 23.3334 30 18.8562 30 13.3334C30 7.81053 25.5228 3.33337 20 3.33337C14.4772 3.33337 10 7.81053 10 13.3334C10 18.8562 14.4772 23.3334 20 23.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>;

    const educationCertification = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 9.33325V27.9999" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.3333 16H24" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.3333 10.6667H24" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 24C3.64638 24 3.30724 23.8595 3.05719 23.6095C2.80714 23.3594 2.66667 23.0203 2.66667 22.6667V5.33333C2.66667 4.97971 2.80714 4.64057 3.05719 4.39052C3.30724 4.14048 3.64638 4 4 4H10.6667C12.0812 4 13.4377 4.5619 14.4379 5.5621C15.4381 6.56229 16 7.91885 16 9.33333C16 7.91885 16.5619 6.56229 17.5621 5.5621C18.5623 4.5619 19.9188 4 21.3333 4H28C28.3536 4 28.6928 4.14048 28.9428 4.39052C29.1929 4.64057 29.3333 4.97971 29.3333 5.33333V22.6667C29.3333 23.0203 29.1929 23.3594 28.9428 23.6095C28.6928 23.8595 28.3536 24 28 24H20C18.9391 24 17.9217 24.4214 17.1716 25.1716C16.4214 25.9217 16 26.9391 16 28C16 26.9391 15.5786 25.9217 14.8284 25.1716C14.0783 24.4214 13.0609 24 12 24H4Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 16H10.6667" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 10.6667H10.6667" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>;

    const certifications = achievementsData.filter(item => item.category === "certification");
    const education = achievementsData.filter(item => item.category === "education");

function AchievementsContent(){
    return (
        <div className="py-3 px-3 lg:px-0 lg:pr-3 overflow-y-auto flex-col gap-3 no-scrollbar overflow-hidden w-full flex ">
            <BentoCard title={"Technical Certifications"} icon={certificationIcon}>
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
                    {certifications.map((cert) =>(
                        <AchievementCard key={cert.id} data={cert} list={certifications}/>
                    ))}
                </div>
            </BentoCard>

             <BentoCard title={"Leadership & Milestones"} icon={educationCertification}>
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
                    {education.map((edu)=>(
                        <AchievementCard key={edu.id} data={edu}  list={education}/>
                    ))}
                </div>
            </BentoCard>
            <ContactMe></ContactMe>
        </div>
    )
}

export default AchievementsContent;