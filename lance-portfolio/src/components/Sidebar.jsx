function Sidebar(){
    return(
        <nav className= "h-full bg-red-10 w-full max-w-60 bg-white rounded-[10px] p-4">
            <div className="w-full flex flex-col">
                <div className="w-full flex justify-center">
                    <img src="/me-daytime.png" className="h-15 w-15"></img>
                </div>

                <h3 className="text-right text-black text-[18px] font-semibold text-nowrap whitespace-nowrap text-ellipsis overflow-hidden w-full pt-4">Magollado, Lance Kent Geoffrey B.</h3>
                <h2 className="text-black text-[14px] pb-6.25">Full-Stack Developer</h2>

                <div className="p-2 border-[#01010140] border rounded-[10px] flex gap-2.5 justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15V3" stroke="black" stroke-opacity=".4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="black" stroke-opacity=".4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7 10L12 15L17 10" stroke="black" stroke-opacity=".4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h2 className="text-[#00000070] text-[16px]">Resume</h2>
                </div>
            </div>
        </nav>

    )
}

export default Sidebar;