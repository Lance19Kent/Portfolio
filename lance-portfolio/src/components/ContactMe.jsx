import BentoCard from "./BentoCard";

const contactIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="stroke-black" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.29 20.71C17.5482 20.8286 17.839 20.8556 18.1146 20.7868C18.3902 20.718 18.6342 20.5573 18.8063 20.3312L19.25 19.75C19.4829 19.4395 19.7848 19.1875 20.132 19.0139C20.4791 18.8404 20.8619 18.75 21.25 18.75H25C25.663 18.75 26.2989 19.0134 26.7678 19.4822C27.2366 19.9511 27.5 20.587 27.5 21.25V25C27.5 25.663 27.2366 26.2989 26.7678 26.7678C26.2989 27.2366 25.663 27.5 25 27.5C19.0326 27.5 13.3097 25.1295 9.0901 20.9099C4.87053 16.6903 2.5 10.9674 2.5 5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H8.75C9.41304 2.5 10.0489 2.76339 10.5178 3.23223C10.9866 3.70107 11.25 4.33696 11.25 5V8.75C11.25 9.13811 11.1596 9.5209 10.9861 9.86803C10.8125 10.2152 10.5605 10.5171 10.25 10.75L9.665 11.1888C9.43552 11.364 9.27377 11.6132 9.20724 11.8942C9.1407 12.1751 9.17348 12.4705 9.3 12.73C11.0084 16.1998 13.818 19.006 17.29 20.71Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>;

function ContactMe({ wrapperClass = "", animKey="contact-m" }){
    return (
        <div className="">
            <BentoCard title="Contact Me" icon={contactIcon} className="h-full">
                <div key={animKey} className={`flex flex-col justify-between gap-10 h-full ${wrapperClass}`}>
                    <ul className="flex gap-4 w-full flex-wrap">
                        <li className="w-9">
                            <a href="https://github.com/Lance19Kent" target="_blank" rel="noopener noreferrer">
                                <img src="/contact-icons/github.svg" alt="Github Logo" className="dark:invert"/>
                            </a>
                        </li>
                        <li  className="w-9">
                            <a href="https://www.facebook.com/Lance19Kent/" target="_blank" rel="noopener noreferrer">
                                <img src="/contact-icons/facebook.svg" alt="Facebook Logo" className="dark:invert"/>
                            </a>
                        </li>
                        <li className="w-9">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lancemagollado46@gmail.com&su=Hi,%20Let%20us%20connect!" target="_blank" rel="noopener noreferrer" >
                             <img src="/contact-icons/email.svg" alt="Email Logo" className="dark:invert"/>
                            </a>
                        </li>
                        <li className="w-9">
                            <a href="viber://chat?number=%2B639263226163" target="_blank" rel="noopener noreferrer">
                             <img src="/contact-icons/viber.svg" alt="WhatsApp Logo" className="dark:invert"/>
                            </a>
                        </li>
                        <li className="w-9">
                            <a href="https://www.instagram.com/ikent_lance/" target="_blank"  rel="noopener noreferrer">
                             <img src="/contact-icons/instagram.svg" alt="Instagram Logo" className="dark:invert"/>
                            </a>
                        </li>
                        <li className="w-9">
                            <a href="https://www.linkedin.com/in/lancemagollado/" target="_blank"  rel="noopener noreferrer">
                             <img src="/contact-icons/linkedin.svg" alt="LinkedIn Logo" className="dark:invert"/>
                            </a>
                        </li>
                        <li className="w-9">
                            <a href="https://api.whatsapp.com/send?phone=639263226163&text=Hi%20Lance!%20I%20saw%20your%20portfolio" target="_blank" rel="noopener noreferrer">
                             <img src="/contact-icons/whatsapp.svg" alt="LinkedIn Logo" className="dark:invert"/>
                            </a>
                        </li>
                    </ul>
                    <span className="text-[13px] lg:text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-light">If you have any concerns, just contact me in with these social medias.</span>
                </div>

            </BentoCard>
        </div>
    )
}

export default ContactMe;