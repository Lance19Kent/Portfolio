import BentoCard from "../BentoCard";
import ContactMe from "../ContactMe";
import AchievementCard from "./AchievementCard";
import { achievementsData } from "@/data";
import { useState, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";

    const certificationIcon = <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.795 21.4833L28.32 35.6933C28.3483 35.8606 28.3248 36.0326 28.2527 36.1862C28.1806 36.3398 28.0633 36.4678 27.9165 36.5529C27.7698 36.6381 27.6005 36.6764 27.4313 36.6628C27.2622 36.6492 27.1012 36.5842 26.97 36.4766L21.0033 31.9983C20.7153 31.7831 20.3654 31.6668 20.0058 31.6668C19.6463 31.6668 19.2964 31.7831 19.0083 31.9983L13.0317 36.4749C12.9005 36.5823 12.7398 36.6472 12.5708 36.6608C12.4019 36.6745 12.2328 36.6363 12.0861 36.5514C11.9394 36.4665 11.8221 36.3388 11.7499 36.1855C11.6776 36.0322 11.6538 35.8605 11.6817 35.6933L14.205 21.4833" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 23.3334C25.5228 23.3334 30 18.8562 30 13.3334C30 7.81053 25.5228 3.33337 20 3.33337C14.4772 3.33337 10 7.81053 10 13.3334C10 18.8562 14.4772 23.3334 20 23.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>;

    const educationCertification = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 9.33325V27.9999" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.3333 16H24" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.3333 10.6667H24" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 24C3.64638 24 3.30724 23.8595 3.05719 23.6095C2.80714 23.3594 2.66667 23.0203 2.66667 22.6667V5.33333C2.66667 4.97971 2.80714 4.64057 3.05719 4.39052C3.30724 4.14048 3.64638 4 4 4H10.6667C12.0812 4 13.4377 4.5619 14.4379 5.5621C15.4381 6.56229 16 7.91885 16 9.33333C16 7.91885 16.5619 6.56229 17.5621 5.5621C18.5623 4.5619 19.9188 4 21.3333 4H28C28.3536 4 28.6928 4.14048 28.9428 4.39052C29.1929 4.64057 29.3333 4.97971 29.3333 5.33333V22.6667C29.3333 23.0203 29.1929 23.3594 28.9428 23.6095C28.6928 23.8595 28.3536 24 28 24H20C18.9391 24 17.9217 24.4214 17.1716 25.1716C16.4214 25.9217 16 26.9391 16 28C16 26.9391 15.5786 25.9217 14.8284 25.1716C14.0783 24.4214 13.0609 24 12 24H4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 16H10.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 10.6667H10.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>;

    const certifications = achievementsData.filter(item => item.category === "certification");
    const education = achievementsData.filter(item => item.category === "education");

    const contactIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="stroke-black" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.29 20.71C17.5482 20.8286 17.839 20.8556 18.1146 20.7868C18.3902 20.718 18.6342 20.5573 18.8063 20.3312L19.25 19.75C19.4829 19.4395 19.7848 19.1875 20.132 19.0139C20.4791 18.8404 20.8619 18.75 21.25 18.75H25C25.663 18.75 26.2989 19.0134 26.7678 19.4822C27.2366 19.9511 27.5 20.587 27.5 21.25V25C27.5 25.663 27.2366 26.2989 26.7678 26.7678C26.2989 27.2366 25.663 27.5 25 27.5C19.0326 27.5 13.3097 25.1295 9.0901 20.9099C4.87053 16.6903 2.5 10.9674 2.5 5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H8.75C9.41304 2.5 10.0489 2.76339 10.5178 3.23223C10.9866 3.70107 11.25 4.33696 11.25 5V8.75C11.25 9.13811 11.1596 9.5209 10.9861 9.86803C10.8125 10.2152 10.5605 10.5171 10.25 10.75L9.665 11.1888C9.43552 11.364 9.27377 11.6132 9.20724 11.8942C9.1407 12.1751 9.17348 12.4705 9.3 12.73C11.0084 16.1998 13.818 19.006 17.29 20.71Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>;

let isLoaded = false;

function AchievementsContent(){

    const [isLoading, setIsLoading] = useState(!isLoaded);

    useEffect(() => {
        if (!isLoaded) {
            const timer = setTimeout(() => {
                isLoaded = true;
                setIsLoading(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    if (isLoading) {
        return (
            <div className="py-3 px-3 lg:px-0 lg:pr-3 overflow-y-auto flex-col gap-3 no-scrollbar overflow-hidden w-full flex ">
                <BentoCard title={"Technical Certifications"} icon={certificationIcon}>
                    <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
                        {[1, 2, 3, 4].map((i) =>(
                            <div key={i} className="flex flex-col gap-4 py-1">
                                <Skeleton className="w-full h-40 rounded-[10px]" />
                                <div className="flex flex-col gap-1.5 w-full">
                                    <Skeleton className="h-5 w-3/4" />
                                    <Skeleton className="h-4 w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </BentoCard>

                <BentoCard title={"Leadership & Milestones"} icon={educationCertification}>
                    <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
                        {[1, 2, 3, 4].map((i)=>(
                            <div key={i} className="flex flex-col gap-4 py-1">
                                <Skeleton className="w-full h-40 rounded-[10px]" />
                                <div className="flex flex-col gap-1.5 w-full">
                                    <Skeleton className="h-5 w-3/4" />
                                    <Skeleton className="h-4 w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </BentoCard>

                <BentoCard title="Contact Me" icon={contactIcon} className="h-full">
                    <div className="flex flex-col justify-between gap-10 h-full">
                        <ul className="flex gap-4 w-full flex-wrap">
                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                <li key={i} className="w-9 h-9">
                                    <Skeleton className="w-full h-full rounded-full" />
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col gap-1.5 mt-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                    </div>
                </BentoCard>
            </div>
        );
    }

    return (
        <div className="py-3 px-3 lg:px-0 lg:pr-3 overflow-y-auto flex-col gap-3 no-scrollbar overflow-hidden w-full flex ">
            <BentoCard title={"Technical Certifications"} icon={certificationIcon}>
                <div key="ac-grid-1" className="animate-in fade-in duration-700 delay-150 fill-mode-backwards grid lg:grid-cols-4 grid-cols-1 gap-6">
                    {certifications.map((cert) =>(
                        <AchievementCard key={cert.id} data={cert} list={certifications}/>
                    ))}
                </div>
            </BentoCard>

             <BentoCard title={"Leadership & Milestones"} icon={educationCertification}>
                <div key="ac-grid-2" className="animate-in fade-in duration-700 delay-300 fill-mode-backwards grid lg:grid-cols-4 grid-cols-1 gap-6">
                    {education.map((edu)=>(
                        <AchievementCard key={edu.id} data={edu}  list={education}/>
                    ))}
                </div>
            </BentoCard>
            <ContactMe animKey="ac-btn" wrapperClass="animate-in fade-in duration-700 delay-500 fill-mode-backwards" />
        </div>
    )
}

export default AchievementsContent;