import BentoCard from "../BentoCard";
import ContactMe from "../ContactMe";

const educationIcon = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.33331V28" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3333 16H23.9999" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3333 10.6667H23.9999" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.00008 24C3.64646 24 3.30732 23.8595 3.05727 23.6095C2.80722 23.3594 2.66675 23.0203 2.66675 22.6667V5.33333C2.66675 4.97971 2.80722 4.64057 3.05727 4.39052C3.30732 4.14048 3.64646 4 4.00008 4H10.6667C12.0812 4 13.4378 4.5619 14.438 5.5621C15.4382 6.56229 16.0001 7.91885 16.0001 9.33333C16.0001 7.91885 16.562 6.56229 17.5622 5.5621C18.5624 4.5619 19.9189 4 21.3334 4H28.0001C28.3537 4 28.6928 4.14048 28.9429 4.39052C29.1929 4.64057 29.3334 4.97971 29.3334 5.33333V22.6667C29.3334 23.0203 29.1929 23.3594 28.9429 23.6095C28.6928 23.8595 28.3537 24 28.0001 24H20.0001C18.9392 24 17.9218 24.4214 17.1717 25.1716C16.4215 25.9217 16.0001 26.9391 16.0001 28C16.0001 26.9391 15.5787 25.9217 14.8285 25.1716C14.0784 24.4214 13.0609 24 12.0001 24H4.00008Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 16H10.6667" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10.6667H10.6667" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

const experienceIcon = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16H16.0133" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3334 7.99996V5.33329C21.3334 4.62605 21.0525 3.94777 20.5524 3.44767C20.0523 2.94758 19.374 2.66663 18.6667 2.66663H13.3334C12.6262 2.66663 11.9479 2.94758 11.4478 3.44767C10.9477 3.94777 10.6667 4.62605 10.6667 5.33329V7.99996" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.3334 17.3334C25.3771 19.9453 20.7408 21.3378 16.0001 21.3378C11.2593 21.3378 6.62303 19.9453 2.66675 17.3334" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.6667 8H5.33341C3.86066 8 2.66675 9.19391 2.66675 10.6667V24C2.66675 25.4728 3.86066 26.6667 5.33341 26.6667H26.6667C28.1395 26.6667 29.3334 25.4728 29.3334 24V10.6667C29.3334 9.19391 28.1395 8 26.6667 8Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

function AboutSubContent(){
    return(
        <div className="w-full max-w-[470px] py-3 pr-3 flex flex-col gap-3 overflow-y-auto no-scrollbar">
            <BentoCard title={"Education"} icon={educationIcon} className="min-h-70">

            </BentoCard>
            <BentoCard title={"Experience"} icon={experienceIcon} className="min-h-70">

            </BentoCard>
            <ContactMe></ContactMe>
        </div>

    )
}

export default AboutSubContent;