import BentoCard from "../BentoCard";
import ContactMe from "../ContactMe";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const resumeIcon = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99996 36.6667C9.1159 36.6667 8.26806 36.3155 7.64294 35.6903C7.01782 35.0652 6.66663 34.2174 6.66663 33.3333V6.66665C6.66663 5.7826 7.01782 4.93475 7.64294 4.30963C8.26806 3.68451 9.1159 3.33332 9.99996 3.33332H23.3333C23.8609 3.33246 24.3834 3.43599 24.8708 3.63793C25.3583 3.83988 25.8009 4.13625 26.1733 4.50999L32.1533 10.49C32.528 10.8625 32.8252 11.3056 33.0278 11.7936C33.2303 12.2816 33.3342 12.8049 33.3333 13.3333V33.3333C33.3333 34.2174 32.9821 35.0652 32.357 35.6903C31.7319 36.3155 30.884 36.6667 30 36.6667H9.99996Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23.3334 3.33331V11.6666C23.3334 12.1087 23.509 12.5326 23.8215 12.8452C24.1341 13.1577 24.558 13.3333 25 13.3333H33.3334" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.6667 36.6667C26.6667 34.8986 25.9643 33.2029 24.7141 31.9526C23.4638 30.7024 21.7681 30 20 30C18.2319 30 16.5362 30.7024 15.286 31.9526C14.0358 33.2029 13.3334 34.8986 13.3334 36.6667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 30C22.7614 30 25 27.7614 25 25C25 22.2386 22.7614 20 20 20C17.2386 20 15 22.2386 15 25C15 27.7614 17.2386 30 20 30Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>;

function ResumeContent(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const initialScale = windowWidth < 1024 ? 0.45 : 1.0;

    const [scale, setScale] = useState(initialScale);

    useEffect(()=>{
        setScale(initialScale);
    }, [initialScale]);

    const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.5));
    const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.4));

    return (
        <div className="w-full h-full lg:pr-3 px-3 lg:px-0 py-3 overflow-y-auto no-scrollbar overflow-hidden flex flex-col gap-3"> 
            <BentoCard title={"Resume"} icon={resumeIcon} className="w-full relative gap-4 lg:gap-8"> 
                <Button className={"absolute top-5 right-4.5 cursor-pointer lg:p-6 lg:text-[16px] text-sm text-white hover:bg-[#629bf8] z-10 bg-[#468cfc] stroke-white"} asChild>
                    <a href="/Magollado-Lance-Kent-Geoffrey-Resume.pdf" download={"Lance_Kent_Geoffrey_B_Magollado_Resume.pdf"}>
                        <svg width="24" height="24" viewBox="0 0 24 24"  fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15V3"  strokeOpacity="1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"  strokeOpacity="1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 10L12 15L17 10"  strokeOpacity="1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Download</span>
                    </a>
                </Button>

                <div className="relative w-full h-125 lg:h-auto rounded-[10px] border border-gray-200 overflow-hidden bg-[#1a1a1a]">
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        <Button variant="secondary" onClick={zoomOut} className="w-10 h-10 p-0 rounded-full text-lg shadow-md cursor-pointer hover:bg-gray-200">-</Button>
                        <Button variant="secondary" onClick={zoomIn} className="w-10 h-10 p-0 rounded-full text-lg shadow-md cursor-pointer hover:bg-gray-200">+</Button>
                    </div>

                    <div className="w-full h-full overflow-auto no-scrollbar">
                        
                        <div className="min-w-full min-h-full w-fit flex justify-center items-center lg:p-10 mx-auto p-2 transition-all duration-300">
                    
                            <div className="shadow-2xl bg-white">
                                <Document 
                                    file="/Magollado-Lance-Kent-Geoffrey-Resume.pdf"
                                    loading={<p className="text-black m-10">Loading resume...</p>}
                                    error={<p className="text-red-500 m-10">Failed to load PDF.</p>}
                                >
                                    <Page pageNumber={1} scale={scale} renderTextLayer={true} renderAnnotationLayer={true} />
                                </Document>
                            </div>

                        </div>
                    </div>

                </div>
            </BentoCard>
           
           <ContactMe />
        </div>
    )
}

export default ResumeContent;