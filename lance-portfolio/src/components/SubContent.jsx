import BentoCard from "./BentoCard";

function SubContent() {
    // Note: Pwede mong palitan yung mga <svg> dito ng totoong SVGs mula sa Figma mo!
    const techIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 25V27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 2.5V5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.25 25V27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.25 2.5V5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 15H5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 21.25H5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 8.75H5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 15H27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 21.25H27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25 8.75H27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.75 25V27.5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.75 2.5V5" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.5 5H7.5C6.11929 5 5 6.11929 5 7.5V22.5C5 23.8807 6.11929 25 7.5 25H22.5C23.8807 25 25 23.8807 25 22.5V7.5C25 6.11929 23.8807 5 22.5 5Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.75 10H11.25C10.5596 10 10 10.5596 10 11.25V18.75C10 19.4404 10.5596 20 11.25 20H18.75C19.4404 20 20 19.4404 20 18.75V11.25C20 10.5596 19.4404 10 18.75 10Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

    
    const skillsIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>;

    return (
        // Nilagyan natin ng overflow-y-auto at no-scrollbar para scrollable din yung right side!
        <div className="w-[25%] min-w-[280px] max-w-[350px] flex flex-col gap-3 h-full overflow-y-auto no-scrollbar py-3 pr-3">
            
            {/* Card 1: Technologies */}
            <BentoCard title="Technologies" icon={techIcon} className="min-h-[250px]">
                <p className="text-gray-500">Dito mo ilalagay yung mga HTML, CSS, React logos mo mamaya!</p>
            </BentoCard>

            {/* Card 2: Skills */}
            <BentoCard title="Skills" icon={skillsIcon} className="min-h-[300px]">
                <ul className="text-gray-500 flex flex-col gap-2">
                    <li>💻 Web Development</li>
                    <li>🎨 UI/UX Design</li>
                    <li>🤖 Machine Learning</li>
                </ul>
            </BentoCard>

            {/* Card 3: Contact Me */}
            <BentoCard title="Contact Me" icon={skillsIcon} className="min-h-[200px]">
                <p className="text-gray-500">Mga social media links mo dito...</p>
            </BentoCard>

        </div>
    )
}

export default SubContent;