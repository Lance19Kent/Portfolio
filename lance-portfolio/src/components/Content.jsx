import { Button } from "./ui/button"

function Content(){
    return (
        <div className="w-full flex flex-col max-w-175 h-full max-h-82.5 overflow-hidden bg-white rounded-[10px] relative">
                <img src="./bg-header.png" className="w-full object-cover h-[70%]"></img>
                <img src="./profile.png" alt="Lance Profile" className="absolute bottom-3 h-42.5 left-3" />
                <div className="w-full gap-5 flex flex-1 items-center justify-end pr-6">
                    <div className="flex">
                        <Button variant="outline" className={"cursor-pointer text-[#00000070] text-[16px] font-light hover:text-[#00000080] p-6"}>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1417 22.5896C15.1812 22.6882 15.25 22.7724 15.3388 22.8308C15.4276 22.8892 15.5321 22.919 15.6384 22.9163C15.7446 22.9136 15.8475 22.8784 15.9331 22.8156C16.0188 22.7527 16.0832 22.6651 16.1177 22.5646L22.8885 2.77293C22.9219 2.68064 22.9282 2.58075 22.9069 2.48497C22.8855 2.38919 22.8373 2.30147 22.7679 2.23208C22.6985 2.16269 22.6108 2.11449 22.515 2.09313C22.4193 2.07178 22.3194 2.07814 22.2271 2.11148L2.43541 8.88231C2.33488 8.91678 2.24731 8.98118 2.18444 9.06686C2.12157 9.15254 2.08642 9.2554 2.0837 9.36164C2.08098 9.46788 2.11082 9.5724 2.16922 9.66119C2.22762 9.74998 2.31178 9.81878 2.41041 9.85835L10.6708 13.1709C10.932 13.2754 11.1692 13.4317 11.3683 13.6305C11.5674 13.8292 11.7241 14.0662 11.8292 14.3271L15.1417 22.5896Z" stroke="black" stroke-opacity="0.3" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.7646 2.23645L11.3687 13.6312" stroke="black" stroke-opacity="0.3" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                            Message</Button>
                    </div>
                    <div className="flex">
                        <Button variant="outline" className={"cursor-pointer text-[#00000080] text-[16px] font-light hover:text-[#00000070] p-6"}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6666 21.875V19.7917C16.6666 18.6866 16.2277 17.6268 15.4463 16.8454C14.6649 16.064 13.605 15.625 12.5 15.625H6.24998C5.14491 15.625 4.0851 16.064 3.3037 16.8454C2.5223 17.6268 2.08331 18.6866 2.08331 19.7917V21.875" stroke="black" stroke-opacity="0.3" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.37498 11.4583C11.6762 11.4583 13.5416 9.59285 13.5416 7.29167C13.5416 4.99048 11.6762 3.125 9.37498 3.125C7.07379 3.125 5.20831 4.99048 5.20831 7.29167C5.20831 9.59285 7.07379 11.4583 9.37498 11.4583Z" stroke="black" stroke-opacity="0.3" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.7917 8.33331V14.5833" stroke="black" stroke-opacity="0.3" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.9167 11.4583H16.6667" stroke="black" stroke-opacity="0.3" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Follow on Github</Button>
                    </div>
                </div>

        </div>
    )
}

export default Content;