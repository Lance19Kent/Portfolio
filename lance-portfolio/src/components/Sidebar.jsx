import { Switch } from "./ui/switch"
import { Button } from "./ui/button"

function Sidebar(){
    return(
        <nav className= "h-full bg-red-10 w-full max-w-60 bg-white rounded-[10px] p-4">
            <div className="w-full flex flex-col">
                <div className="w-full flex justify-center">
                    <img src="/me-daytime.png" className="h-15 w-15"></img>
                </div>

                <h3 className="text-right text-black text-[18px] font-semibold text-nowrap whitespace-nowrap text-ellipsis overflow-hidden w-full pt-4">Magollado, Lance Kent Geoffrey B.</h3>
                <h2 className="text-black text-[14px] pb-6.25">Full-Stack Developer</h2>
                    <Button variant="outline" className={"py-5 font-light rounded-[10px] flex gap-2.5 justify-center cursor-pointer text-[#00000070] hover:text-[#00000080] text-[16px]"}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15V3" stroke="black" stroke-opacity=".3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="black" stroke-opacity=".3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7 10L12 15L17 10" stroke="black" stroke-opacity=".3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Resume
                    </Button>
                <div className="border border-[#D9D9D950] mt-6 mb-3"></div>
                <div>
                    <ul className="text-black">
                        <li className="flex justify-center items-center gap-2.5 py-3 cursor-pointer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 20.5V12.5C15 12.2348 14.8946 11.9804 14.7071 11.7929C14.5196 11.6054 14.2652 11.5 14 11.5H10C9.73478 11.5 9.48043 11.6054 9.29289 11.7929C9.10536 11.9804 9 12.2348 9 12.5V20.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 9.49999C2.99993 9.20906 3.06333 8.92161 3.18579 8.65771C3.30824 8.3938 3.4868 8.15979 3.709 7.97199L10.709 1.97199C11.07 1.6669 11.5274 1.49951 12 1.49951C12.4726 1.49951 12.93 1.6669 13.291 1.97199L20.291 7.97199C20.5132 8.15979 20.6918 8.3938 20.8142 8.65771C20.9367 8.92161 21.0001 9.20906 21 9.49999V18.5C21 19.0304 20.7893 19.5391 20.4142 19.9142C20.0391 20.2893 19.5304 20.5 19 20.5H5C4.46957 20.5 3.96086 20.2893 3.58579 19.9142C3.21071 19.5391 3 19.0304 3 18.5V9.49999Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>Home</p>
                        </li>
                        <li className="flex justify-center items-center gap-2.5 py-3 cursor-pointer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 20.5V18.5C19 17.4391 18.5786 16.4217 17.8284 15.6716C17.0783 14.9214 16.0609 14.5 15 14.5H9C7.93913 14.5 6.92172 14.9214 6.17157 15.6716C5.42143 16.4217 5 17.4391 5 18.5V20.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 10.5C14.2091 10.5 16 8.70914 16 6.5C16 4.29086 14.2091 2.5 12 2.5C9.79086 2.5 8 4.29086 8 6.5C8 8.70914 9.79086 10.5 12 10.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>About</p>
                        </li>
                        <li className="flex justify-center items-center gap-2.5 py-3 cursor-pointer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 18.5C16.6739 18.5 15.4021 17.9732 14.4645 17.0355C13.5268 16.0979 13 14.8261 13 13.5V21.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 19.5H4C3.46957 19.5 2.96086 19.2893 2.58579 18.9142C2.21071 18.5391 2 18.0304 2 17.5V4.49997C2 3.96954 2.21071 3.46083 2.58579 3.08576C2.96086 2.71069 3.46957 2.49997 4 2.49997H7.9C8.23449 2.49669 8.56445 2.57736 8.8597 2.73459C9.15495 2.89183 9.40604 3.1206 9.59 3.39997L10.4 4.59997C10.5821 4.8765 10.83 5.10349 11.1215 5.26058C11.413 5.41766 11.7389 5.49992 12.07 5.49997H20C20.5304 5.49997 21.0391 5.71069 21.4142 6.08576C21.7893 6.46083 22 6.96954 22 7.49997V12.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13 13.5C14.1046 13.5 15 12.6046 15 11.5C15 10.3954 14.1046 9.5 13 9.5C11.8954 9.5 11 10.3954 11 11.5C11 12.6046 11.8954 13.5 13 13.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20 20.5C21.1046 20.5 22 19.6046 22 18.5C22 17.3954 21.1046 16.5 20 16.5C18.8954 16.5 18 17.3954 18 18.5C18 19.6046 18.8954 20.5 20 20.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Projects</p>
                        </li>
                        <li className="flex justify-center items-center gap-2.5 py-3 cursor-pointer">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.477 12.39L16.992 20.916C17.009 21.0164 16.9949 21.1196 16.9516 21.2118C16.9084 21.3039 16.838 21.3807 16.7499 21.4318C16.6619 21.4829 16.5603 21.5059 16.4588 21.4977C16.3573 21.4895 16.2607 21.4506 16.182 21.386L12.602 18.699C12.4292 18.5699 12.2192 18.5001 12.0035 18.5001C11.7878 18.5001 11.5778 18.5699 11.405 18.699L7.819 21.385C7.74032 21.4494 7.64386 21.4884 7.54249 21.4966C7.44112 21.5048 7.33967 21.4818 7.25166 21.4309C7.16365 21.3799 7.09327 21.3033 7.04991 21.2113C7.00656 21.1194 6.99228 21.0163 7.009 20.916L8.523 12.39" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 13.5C15.3137 13.5 18 10.8137 18 7.5C18 4.18629 15.3137 1.5 12 1.5C8.68629 1.5 6 4.18629 6 7.5C6 10.8137 8.68629 13.5 12 13.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Achievements</p>
                        </li>
                        <li className="flex justify-center items-center gap-2.5 py-3 cursor-pointer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6.5V20.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 17.5C2.73478 17.5 2.48043 17.3946 2.29289 17.2071C2.10536 17.0196 2 16.7652 2 16.5V3.5C2 3.23478 2.10536 2.98043 2.29289 2.79289C2.48043 2.60536 2.73478 2.5 3 2.5H8C9.06087 2.5 10.0783 2.92143 10.8284 3.67157C11.5786 4.42172 12 5.43913 12 6.5C12 5.43913 12.4214 4.42172 13.1716 3.67157C13.9217 2.92143 14.9391 2.5 16 2.5H21C21.2652 2.5 21.5196 2.60536 21.7071 2.79289C21.8946 2.98043 22 3.23478 22 3.5V16.5C22 16.7652 21.8946 17.0196 21.7071 17.2071C21.5196 17.3946 21.2652 17.5 21 17.5H15C14.2044 17.5 13.4413 17.8161 12.8787 18.3787C12.3161 18.9413 12 19.7044 12 20.5C12 19.7044 11.6839 18.9413 11.1213 18.3787C10.5587 17.8161 9.79565 17.5 9 17.5H3Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Blog</p>
                        </li>
                    </ul>
                </div>
                <div className="border border-[#D9D9D950] my-3"></div>
                <div className="flex flex-row gap-2.5 items-center justify-center my-3">
                       <Switch className={"cursor-pointer"}/>
                    <span className="text-black text-[16px]">Dark Mode</span>
                </div>
                <div className="mt-4">
                    <p className="text-[#00000050] text-xs text-nowrap overflow-hidden text-ellipsis">Designed and Built By Lance Kent Geoffrey B. Magollado</p>
                    <p className="text-[#00000050] text-xs text-nowrap overflow-hidden text-ellipsis">@2025 All Rights Reserved.</p>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar;