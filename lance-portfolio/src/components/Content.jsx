import { Button } from "./ui/button"

function Content(){
    return (
        <div className="w-full max-w-175 h-full max-h-82.5 bg-white rounded-[10px] relative">
                <img src="./bg-header.png"></img>
                <img src="./profile.png" alt="Lance Profile" className="absolute bottom-3 h-42.5 left-3" />
                <div className="w-full flex justify-end">
                    <div className="w-full flex bg-amber-300">
                        <Button variant="outline" className={"cursor-pointer text-[#00000080] text-[16px] font-light hover:text-[#00000080] p-6"}>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1417 22.5896C15.1812 22.6882 15.25 22.7724 15.3388 22.8308C15.4276 22.8892 15.5321 22.919 15.6384 22.9163C15.7446 22.9136 15.8475 22.8784 15.9331 22.8156C16.0188 22.7527 16.0832 22.6651 16.1177 22.5646L22.8885 2.77293C22.9219 2.68064 22.9282 2.58075 22.9069 2.48497C22.8855 2.38919 22.8373 2.30147 22.7679 2.23208C22.6985 2.16269 22.6108 2.11449 22.515 2.09313C22.4193 2.07178 22.3194 2.07814 22.2271 2.11148L2.43541 8.88231C2.33488 8.91678 2.24731 8.98118 2.18444 9.06686C2.12157 9.15254 2.08642 9.2554 2.0837 9.36164C2.08098 9.46788 2.11082 9.5724 2.16922 9.66119C2.22762 9.74998 2.31178 9.81878 2.41041 9.85835L10.6708 13.1709C10.932 13.2754 11.1692 13.4317 11.3683 13.6305C11.5674 13.8292 11.7241 14.0662 11.8292 14.3271L15.1417 22.5896Z" stroke="black" stroke-opacity="0.7" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.7646 2.23645L11.3687 13.6312" stroke="black" stroke-opacity="0.7" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                            Message</Button>
                    </div>
                    <div className="w-full flex ">
                        <Button variant="outline" className={"cursor-pointer text-[#00000080] text-[16px] font-light hover:text-[#00000080] p-6"}>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1417 22.5896C15.1812 22.6882 15.25 22.7724 15.3388 22.8308C15.4276 22.8892 15.5321 22.919 15.6384 22.9163C15.7446 22.9136 15.8475 22.8784 15.9331 22.8156C16.0188 22.7527 16.0832 22.6651 16.1177 22.5646L22.8885 2.77293C22.9219 2.68064 22.9282 2.58075 22.9069 2.48497C22.8855 2.38919 22.8373 2.30147 22.7679 2.23208C22.6985 2.16269 22.6108 2.11449 22.515 2.09313C22.4193 2.07178 22.3194 2.07814 22.2271 2.11148L2.43541 8.88231C2.33488 8.91678 2.24731 8.98118 2.18444 9.06686C2.12157 9.15254 2.08642 9.2554 2.0837 9.36164C2.08098 9.46788 2.11082 9.5724 2.16922 9.66119C2.22762 9.74998 2.31178 9.81878 2.41041 9.85835L10.6708 13.1709C10.932 13.2754 11.1692 13.4317 11.3683 13.6305C11.5674 13.8292 11.7241 14.0662 11.8292 14.3271L15.1417 22.5896Z" stroke="black" stroke-opacity="0.7" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22.7646 2.23645L11.3687 13.6312" stroke="black" stroke-opacity="0.7" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                            Message</Button>
                    </div>
                </div>

        </div>
    )
}

export default Content;