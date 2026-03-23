import { Switch } from "./ui/switch"
import { Button, buttonVariants } from "./ui/button"
import { Link, NavLink, useLocation } from "react-router-dom"
import {cn} from "@/lib/utils"
import { useState, useEffect } from "react"

function Sidebar(){

    // State for Dark Mode
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isChangingTheme, setIsChangingTheme] = useState(false);

    const handleThemeToggle = (checked) =>{
        setIsChangingTheme(true);

        setTimeout(()=>{
            setIsDarkMode(checked);

            setTimeout(()=>{
                setIsChangingTheme(false);
            }, 1500);
        }, 1000);
    }

    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const location = useLocation();

    const isBlogActive = location.pathname.includes("/blog");

    const isProjectLocation = location.pathname.includes("/projects");

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() =>{
        if(isMenuOpen){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }

        return () =>{
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen])

    return(
        <>
        {isChangingTheme && (
            // 1. Transparent background na may malupit na backdrop blur (Frosted Glass)
            <div className="fixed inset-0 z-[9999] bg-white/70 dark:bg-zinc-950/70 backdrop-blur-2xl flex flex-col items-center justify-center animate-fade-in transition-opacity duration-1000 ease-in-out">
                
                {/* 2. Minimalist, Aesthetic pulsing icon (Signature Blue Aura) */}
                <div className="relative flex items-center justify-center h-24 w-24">
                    {/* Outermost pulsing ring (Pinakamalaki at pinaka-transparent) */}
                    <div className="absolute animate-ping rounded-full h-full w-full bg-[#3FA6F4] opacity-10"></div>
                    
                    {/* Secondary inner pulse */}
                    <div className="absolute animate-ping rounded-full h-3/4 w-3/4 bg-[#3FA6F4] opacity-20 [animation-delay:0.3s]"></div>
                    
                    {/* Solid center dot (Magbibigay ng color context) */}
                    <div className="relative rounded-full h-8 w-8 bg-[#3FA6F4] shadow-[0_0_30px_10px_#3FA6F4A0]"></div>
                </div>

                {/* 3. Tinanggal ko na ang Text para sa minimalist look */}
            </div>
        )}

        <div className="lg:hidden block w-full bg-transparent px-3 pt-3 ">
            <div className="lg:hidden w-full h-14 bg-white rounded-[10px] px-3 flex justify-between items-center">
                <Link to={"/"} className="w-fit h-full items-center flex gap-2">
                    <img src="/me-daytime.png" alt="" className="h-8" />
                    <div className="flex flex-col">
                        <h3 className=" text-black text-[16px] font-semibold">Lance Kent</h3>
                        <h2 className="text-muted-foreground text-center text-[10px]">Current 3rd Year IT Student</h2>
                    </div>
                  
                </Link>
                <button onClick={() =>setIsMenuOpen(!isMenuOpen)} className="cursor-pointer focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
                </button>
            </div>
        </div>

        <div className={`fixed  inset-0 bg-black/20 z-40 transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`} onClick={() => setIsMenuOpen(false)}>
        </div>

        <div className={`fixed top-0 left-0 h-full w-[75%] bg-white z-50 transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto no-scrollbar ${isMenuOpen ? "translate-x-0":"-translate-x-full"}`}>
            <div className="p-4 flex flex-col h-full justify-between">
            <div className="flex flex-col">
                <div className="w-full flex justify-end mb-4">
                    <button onClick={()=> setIsMenuOpen(false)} className="cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                <div className="w-full flex flex-col h-full justify-between">
                <div className="w-full flex flex-col">
                    <div className="w-full flex justify-center">
                        <img src="/me-daytime.png" className="h-15 w-15 z-30 relative"></img>
                    </div>
                    <h3 className="text-center text-black text-base font-semibold text-nowrap whitespace-nowrap text-ellipsis overflow-hidden w-full pt-2">Lance Kent</h3>
                    <h2 className="text-muted-foreground text-center text-[14px] pb-6.25">Current 3rd Year IT Student</h2>
                    
                    <NavLink to={"/resume"} className={({isActive}) =>cn(buttonVariants({variant:"outline"}),
                        "py-5 font-light rounded-[10px] flex gap-2.5 justify-center cursor-pointer text-[16px] ease-in transition-all duration-75",
                        isActive
                                ? "text-[#3FA6F4] hover:text-[#3FA6F4] border-[#3FA6F4] stroke-[#3FA6F4] hover:bg-white " 
                                : "text-[#00000080] bg-white border-gray-200 stroke-[#00000060] hover:text-[#7abdf0] hover:border-[#7abdf0] hover:bg-white hover:stroke-[#7abdf0]" 
                        )} onClick={()=> setIsMenuOpen(false)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15V3"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 10L12 15L17 10"   stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className="text-sm">Resume</span>
                        </NavLink>
                </div>
                <div className="border border-[#D9D9D950] mt-6 mb-3"></div>
                <div>
                    <NavLink to="/" onClick={()=> setIsMenuOpen(false)} className={({isActive}) =>` 
                        ${isActive 
                                    ? "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-[#3FA6F4] hover:text-[#3FA6F4] ease-in stroke-[#3FA6F4] transition duration-75 bg-[#00000009]" 
                                    : "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-black hover:text-[#7abdf0] ease-in stroke-black transition duration-75 hover:stroke-[#7abdf0] bg-white hover:bg-[#00000004]"
                                }`
                                }
                                >
                                
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 20.5V12.5C15 12.2348 14.8946 11.9804 14.7071 11.7929C14.5196 11.6054 14.2652 11.5 14 11.5H10C9.73478 11.5 9.48043 11.6054 9.29289 11.7929C9.10536 11.9804 9 12.2348 9 12.5V20.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 9.49999C2.99993 9.20906 3.06333 8.92161 3.18579 8.65771C3.30824 8.3938 3.4868 8.15979 3.709 7.97199L10.709 1.97199C11.07 1.6669 11.5274 1.49951 12 1.49951C12.4726 1.49951 12.93 1.6669 13.291 1.97199L20.291 7.97199C20.5132 8.15979 20.6918 8.3938 20.8142 8.65771C20.9367 8.92161 21.0001 9.20906 21 9.49999V18.5C21 19.0304 20.7893 19.5391 20.4142 19.9142C20.0391 20.2893 19.5304 20.5 19 20.5H5C4.46957 20.5 3.96086 20.2893 3.58579 19.9142C3.21071 19.5391 3 19.0304 3 18.5V9.49999Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className="text-sm">Home</p>
                    </NavLink>
                    <NavLink to="/about" onClick={()=>setIsMenuOpen(false)} className={({isActive}) =>` 
                        ${isActive 
                                    ? "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-[#3FA6F4] hover:text-[#3FA6F4] ease-in stroke-[#3FA6F4] transition duration-75 bg-[#00000009]" 
                                    : "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-black hover:text-[#7abdf0] ease-in stroke-black transition duration-75 hover:stroke-[#7abdf0] bg-white hover:bg-secondary"
                                }`
                                }
                                >
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 20.5V18.5C19 17.4391 18.5786 16.4217 17.8284 15.6716C17.0783 14.9214 16.0609 14.5 15 14.5H9C7.93913 14.5 6.92172 14.9214 6.17157 15.6716C5.42143 16.4217 5 17.4391 5 18.5V20.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 10.5C14.2091 10.5 16 8.70914 16 6.5C16 4.29086 14.2091 2.5 12 2.5C9.79086 2.5 8 4.29086 8 6.5C8 8.70914 9.79086 10.5 12 10.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className="text-sm">About</p>
                    </NavLink>
                    <NavLink to="/projects" onClick={()=>setIsMenuOpen(false)} className={({isActive}) =>` 
                        ${isProjectLocation 
                                    ? "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-[#3FA6F4] hover:text-[#3FA6F4] ease-in stroke-[#3FA6F4] transition duration-75 bg-[#00000009]" 
                                    : "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-black hover:text-[#7abdf0] ease-in stroke-black transition duration-75 hover:stroke-[#7abdf0] bg-white hover:bg-[#00000004]"
                                }`
                                }
                                >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 18.5C16.6739 18.5 15.4021 17.9732 14.4645 17.0355C13.5268 16.0979 13 14.8261 13 13.5V21.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 19.5H4C3.46957 19.5 2.96086 19.2893 2.58579 18.9142C2.21071 18.5391 2 18.0304 2 17.5V4.49997C2 3.96954 2.21071 3.46083 2.58579 3.08576C2.96086 2.71069 3.46957 2.49997 4 2.49997H7.9C8.23449 2.49669 8.56445 2.57736 8.8597 2.73459C9.15495 2.89183 9.40604 3.1206 9.59 3.39997L10.4 4.59997C10.5821 4.8765 10.83 5.10349 11.1215 5.26058C11.413 5.41766 11.7389 5.49992 12.07 5.49997H20C20.5304 5.49997 21.0391 5.71069 21.4142 6.08576C21.7893 6.46083 22 6.96954 22 7.49997V12.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13 13.5C14.1046 13.5 15 12.6046 15 11.5C15 10.3954 14.1046 9.5 13 9.5C11.8954 9.5 11 10.3954 11 11.5C11 12.6046 11.8954 13.5 13 13.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20 20.5C21.1046 20.5 22 19.6046 22 18.5C22 17.3954 21.1046 16.5 20 16.5C18.8954 16.5 18 17.3954 18 18.5C18 19.6046 18.8954 20.5 20 20.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="text-sm">Projects</p>
                    </NavLink>
                    <NavLink to="/achievements" onClick={()=>setIsMenuOpen(false)} className={({isActive}) =>` 
                        ${isActive 
                                    ? "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-[#3FA6F4] hover:text-[#3FA6F4] ease-in stroke-[#3FA6F4] transition duration-75 bg-[#00000009]" 
                                    : "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-black hover:text-[#7abdf0] ease-in stroke-black transition duration-75 hover:stroke-[#7abdf0] bg-white hover:bg-[#00000004]"
                                }`
                                }
                                >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.477 12.39L16.992 20.916C17.009 21.0164 16.9949 21.1196 16.9516 21.2118C16.9084 21.3039 16.838 21.3807 16.7499 21.4318C16.6619 21.4829 16.5603 21.5059 16.4588 21.4977C16.3573 21.4895 16.2607 21.4506 16.182 21.386L12.602 18.699C12.4292 18.5699 12.2192 18.5001 12.0035 18.5001C11.7878 18.5001 11.5778 18.5699 11.405 18.699L7.819 21.385C7.74032 21.4494 7.64386 21.4884 7.54249 21.4966C7.44112 21.5048 7.33967 21.4818 7.25166 21.4309C7.16365 21.3799 7.09327 21.3033 7.04991 21.2113C7.00656 21.1194 6.99228 21.0163 7.009 20.916L8.523 12.39" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 13.5C15.3137 13.5 18 10.8137 18 7.5C18 4.18629 15.3137 1.5 12 1.5C8.68629 1.5 6 4.18629 6 7.5C6 10.8137 8.68629 13.5 12 13.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="text-sm">Achievements</p>
                    </NavLink>
                    <NavLink to="/blog" onClick={()=> setIsMenuOpen(false)} className={({isActive}) =>` 
                        ${isBlogActive 
                                    ? "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-[#3FA6F4] hover:text-[#3FA6F4] ease-in stroke-[#3FA6F4] transition duration-75 bg-[#00000009]" 
                                    : "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-black hover:text-[#7abdf0] ease-in stroke-black transition duration-75 hover:stroke-[#7abdf0] bg-white hover:bg-[#00000004]"
                                }`
                                }
                                >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6.5V20.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 17.5C2.73478 17.5 2.48043 17.3946 2.29289 17.2071C2.10536 17.0196 2 16.7652 2 16.5V3.5C2 3.23478 2.10536 2.98043 2.29289 2.79289C2.48043 2.60536 2.73478 2.5 3 2.5H8C9.06087 2.5 10.0783 2.92143 10.8284 3.67157C11.5786 4.42172 12 5.43913 12 6.5C12 5.43913 12.4214 4.42172 13.1716 3.67157C13.9217 2.92143 14.9391 2.5 16 2.5H21C21.2652 2.5 21.5196 2.60536 21.7071 2.79289C21.8946 2.98043 22 3.23478 22 3.5V16.5C22 16.7652 21.8946 17.0196 21.7071 17.2071C21.5196 17.3946 21.2652 17.5 21 17.5H15C14.2044 17.5 13.4413 17.8161 12.8787 18.3787C12.3161 18.9413 12 19.7044 12 20.5C12 19.7044 11.6839 18.9413 11.1213 18.3787C10.5587 17.8161 9.79565 17.5 9 17.5H3Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="text-sm">Blog</p>
                    </NavLink>
                </div>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div className="border border-[#D9D9D950] my-3"></div>
                    <div className="flex flex-row gap-2.5 items-center justify-center my-3">
                        <Switch className={"cursor-pointer"} checked={isDarkMode} onCheckedChange={setIsDarkMode}/>
                        <span className="text-black text-sm dark:text-red-100">Dark Mode</span>
                    </div>
                    <div className="mt-4">
                        <p className="text-[#00000050] text-xs text-nowrap overflow-hidden text-ellipsis">Designed and Built By Lance Kent Geoffrey B. Magollado</p>
                        <p className="text-[#00000050] text-xs text-nowrap overflow-hidden text-ellipsis">@2025 All Rights Reserved.</p>
                    </div>
            </div>
            </div>

        </div>

        <nav className="hidden lg:block max-h-screen w-[18%] bg-card rounded-[10px] p-4 my-3 ml-3 select-none">
            <div className="w-full flex flex-col h-full justify-between">
                <div className="w-full flex flex-col">
                    <div className="w-full flex justify-center">
                        <img src="/me-daytime.png" className="h-15 w-15"></img>
                    </div>
                    <h3 className="text-center text-black dark:text-foreground text-[18px] font-semibold text-nowrap whitespace-nowrap text-ellipsis overflow-hidden w-full pt-2">Lance Kent</h3>
                    <h2 className="text-black/70 dark:text-muted-foreground text-center text-[14px] pb-6.25">Current 3rd Year IT Student</h2>
                    
                    <NavLink to={"/resume"} className={({isActive}) =>cn(buttonVariants({variant:"outline"}),
                        "py-5 font-light rounded-[10px] flex gap-2.5 justify-center cursor-pointer text-[16px] ease-in transition-all duration-75 dark:text-white",
                        isActive
                                ? "text-[#3FA6F4] hover:text-[#3FA6F4] dark:border-[#3FA6F4] border-[#3FA6F4] stroke-[#3FA6F4] hover:bg-white dark:text-[#3FA6F4]" 
                                : "text-[#00000080] bg-white border-gray-200 stroke-[#00000060] hover:text-[#7abdf0] hover:border-[#7abdf0] dark:stroke-white  hover:bg-white hover:stroke-[#7abdf0]" 
                        )}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15V3"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 10L12 15L17 10"   stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Resume
                        </NavLink>
                   
                </div>
                <div className="border border-border mt-6 mb-3"></div>
                <div>
                    <NavLink to="/" className={({isActive}) =>` 
                        ${isActive 
                                    ? "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-[#3FA6F4] hover:text-[#3FA6F4] ease-in stroke-[#3FA6F4] transition duration-75 bg-secondary" 
                                    : "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-foreground hover:text-[#7abdf0] ease-in stroke-foreground transition duration-75 hover:stroke-[#7abdf0] bg-card hover:bg-secondary"
                                }`
                                }
                                >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 20.5V12.5C15 12.2348 14.8946 11.9804 14.7071 11.7929C14.5196 11.6054 14.2652 11.5 14 11.5H10C9.73478 11.5 9.48043 11.6054 9.29289 11.7929C9.10536 11.9804 9 12.2348 9 12.5V20.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 9.49999C2.99993 9.20906 3.06333 8.92161 3.18579 8.65771C3.30824 8.3938 3.4868 8.15979 3.709 7.97199L10.709 1.97199C11.07 1.6669 11.5274 1.49951 12 1.49951C12.4726 1.49951 12.93 1.6669 13.291 1.97199L20.291 7.97199C20.5132 8.15979 20.6918 8.3938 20.8142 8.65771C20.9367 8.92161 21.0001 9.20906 21 9.49999V18.5C21 19.0304 20.7893 19.5391 20.4142 19.9142C20.0391 20.2893 19.5304 20.5 19 20.5H5C4.46957 20.5 3.96086 20.2893 3.58579 19.9142C3.21071 19.5391 3 19.0304 3 18.5V9.49999Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>Home</p>
                    </NavLink>
                    <NavLink to="/about" className={({isActive}) =>` 
                        ${isActive 
                                    ? "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-[#3FA6F4] hover:text-[#3FA6F4] ease-in stroke-[#3FA6F4] transition duration-75 bg-secondary" 
                                    : "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-foreground hover:text-[#7abdf0] ease-in stroke-foreground transition duration-75 hover:stroke-[#7abdf0] bg-card hover:bg-secondary"
                                }`
                                }
                                >
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 20.5V18.5C19 17.4391 18.5786 16.4217 17.8284 15.6716C17.0783 14.9214 16.0609 14.5 15 14.5H9C7.93913 14.5 6.92172 14.9214 6.17157 15.6716C5.42143 16.4217 5 17.4391 5 18.5V20.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 10.5C14.2091 10.5 16 8.70914 16 6.5C16 4.29086 14.2091 2.5 12 2.5C9.79086 2.5 8 4.29086 8 6.5C8 8.70914 9.79086 10.5 12 10.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>About</p>
                    </NavLink>
                    <NavLink to="/projects" className={({isActive}) =>` 
                        ${isProjectLocation 
                                    ? "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-[#3FA6F4] hover:text-[#3FA6F4] ease-in stroke-[#3FA6F4] transition duration-75 bg-secondary" 
                                    : "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-foreground hover:text-[#7abdf0] ease-in stroke-foreground transition duration-75 hover:stroke-[#7abdf0] bg-card hover:bg-secondary"
                                }`
                                }
                                >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 18.5C16.6739 18.5 15.4021 17.9732 14.4645 17.0355C13.5268 16.0979 13 14.8261 13 13.5V21.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 19.5H4C3.46957 19.5 2.96086 19.2893 2.58579 18.9142C2.21071 18.5391 2 18.0304 2 17.5V4.49997C2 3.96954 2.21071 3.46083 2.58579 3.08576C2.96086 2.71069 3.46957 2.49997 4 2.49997H7.9C8.23449 2.49669 8.56445 2.57736 8.8597 2.73459C9.15495 2.89183 9.40604 3.1206 9.59 3.39997L10.4 4.59997C10.5821 4.8765 10.83 5.10349 11.1215 5.26058C11.413 5.41766 11.7389 5.49992 12.07 5.49997H20C20.5304 5.49997 21.0391 5.71069 21.4142 6.08576C21.7893 6.46083 22 6.96954 22 7.49997V12.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13 13.5C14.1046 13.5 15 12.6046 15 11.5C15 10.3954 14.1046 9.5 13 9.5C11.8954 9.5 11 10.3954 11 11.5C11 12.6046 11.8954 13.5 13 13.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20 20.5C21.1046 20.5 22 19.6046 22 18.5C22 17.3954 21.1046 16.5 20 16.5C18.8954 16.5 18 17.3954 18 18.5C18 19.6046 18.8954 20.5 20 20.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Projects</p>
                    </NavLink>
                    <NavLink to="/achievements" className={({isActive}) =>` 
                        ${isActive 
                                    ? "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-[#3FA6F4] hover:text-[#3FA6F4] ease-in stroke-[#3FA6F4] transition duration-75 bg-secondary" 
                                    : "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-foreground hover:text-[#7abdf0] ease-in stroke-foreground transition duration-75 hover:stroke-[#7abdf0] bg-card hover:bg-secondary"
                                }`
                                }
                                >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.477 12.39L16.992 20.916C17.009 21.0164 16.9949 21.1196 16.9516 21.2118C16.9084 21.3039 16.838 21.3807 16.7499 21.4318C16.6619 21.4829 16.5603 21.5059 16.4588 21.4977C16.3573 21.4895 16.2607 21.4506 16.182 21.386L12.602 18.699C12.4292 18.5699 12.2192 18.5001 12.0035 18.5001C11.7878 18.5001 11.5778 18.5699 11.405 18.699L7.819 21.385C7.74032 21.4494 7.64386 21.4884 7.54249 21.4966C7.44112 21.5048 7.33967 21.4818 7.25166 21.4309C7.16365 21.3799 7.09327 21.3033 7.04991 21.2113C7.00656 21.1194 6.99228 21.0163 7.009 20.916L8.523 12.39" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 13.5C15.3137 13.5 18 10.8137 18 7.5C18 4.18629 15.3137 1.5 12 1.5C8.68629 1.5 6 4.18629 6 7.5C6 10.8137 8.68629 13.5 12 13.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Achievements</p>
                    </NavLink>
                    <NavLink to="/blog" className={({isActive}) =>` 
                        ${isBlogActive 
                                    ? "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-[#3FA6F4] hover:text-[#3FA6F4] ease-in stroke-[#3FA6F4] transition duration-75 bg-secondary" 
                                    : "flex justify-center items-center gap-2.5 py-3 cursor-pointer text-foreground hover:text-[#7abdf0] ease-in stroke-foreground transition duration-75 hover:stroke-[#7abdf0] bg-card hover:bg-secondary"
                                }`
                                }
                                >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6.5V20.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 17.5C2.73478 17.5 2.48043 17.3946 2.29289 17.2071C2.10536 17.0196 2 16.7652 2 16.5V3.5C2 3.23478 2.10536 2.98043 2.29289 2.79289C2.48043 2.60536 2.73478 2.5 3 2.5H8C9.06087 2.5 10.0783 2.92143 10.8284 3.67157C11.5786 4.42172 12 5.43913 12 6.5C12 5.43913 12.4214 4.42172 13.1716 3.67157C13.9217 2.92143 14.9391 2.5 16 2.5H21C21.2652 2.5 21.5196 2.60536 21.7071 2.79289C21.8946 2.98043 22 3.23478 22 3.5V16.5C22 16.7652 21.8946 17.0196 21.7071 17.2071C21.5196 17.3946 21.2652 17.5 21 17.5H15C14.2044 17.5 13.4413 17.8161 12.8787 18.3787C12.3161 18.9413 12 19.7044 12 20.5C12 19.7044 11.6839 18.9413 11.1213 18.3787C10.5587 17.8161 9.79565 17.5 9 17.5H3Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Blog</p>
                    </NavLink>
                </div>
                <div className="border border-border my-3"></div>
                <div className="w-full flex flex-col">
                    <div className="flex flex-row gap-2.5 items-center justify-center my-3">
                        <Switch className={"cursor-pointer"} checked={isDarkMode} onCheckedChange={handleThemeToggle}/>
                        <span className="text-black dark:text-white text-[16px]">Dark Mode</span>
                    </div>
                    <div className="mt-4">
                        <p className="text-muted-foreground text-xs text-nowrap overflow-hidden text-ellipsis">Designed and Built By Lance Kent Geoffrey B. Magollado</p>
                        <p className="text-muted-foreground text-xs text-nowrap overflow-hidden text-ellipsis">@2025 All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </nav>
        </>

    )
}

export default Sidebar;