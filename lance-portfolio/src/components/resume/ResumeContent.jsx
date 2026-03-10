import BentoCard from "../BentoCard";
import ContactMe from "../ContactMe";
import { Button } from "../ui/button";
import { useState } from "react";

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

const contactIcon = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.29 20.71C17.5482 20.8286 17.839 20.8556 18.1146 20.7868C18.3902 20.718 18.6342 20.5573 18.8063 20.3312L19.25 19.75C19.4829 19.4395 19.7848 19.1875 20.132 19.0139C20.4791 18.8404 20.8619 18.75 21.25 18.75H25C25.663 18.75 26.2989 19.0134 26.7678 19.4822C27.2366 19.9511 27.5 20.587 27.5 21.25V25C27.5 25.663 27.2366 26.2989 26.7678 26.7678C26.2989 27.2366 25.663 27.5 25 27.5C19.0326 27.5 13.3097 25.1295 9.0901 20.9099C4.87053 16.6903 2.5 10.9674 2.5 5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H8.75C9.41304 2.5 10.0489 2.76339 10.5178 3.23223C10.9866 3.70107 11.25 4.33696 11.25 5V8.75C11.25 9.13811 11.1596 9.5209 10.9861 9.86803C10.8125 10.2152 10.5605 10.5171 10.25 10.75L9.665 11.1888C9.43552 11.364 9.27377 11.6132 9.20724 11.8942C9.1407 12.1751 9.17348 12.4705 9.3 12.73C11.0084 16.1998 13.818 19.006 17.29 20.71Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>;

function ResumeContent(){

    const [scale, setScale] = useState(1.0);

    const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.5));
    const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));

    return (
        <div className="w-full h-full pr-3 py-3 overflow-y-auto no-scrollbar overflow-hidden flex flex-col gap-3"> 
            <BentoCard title={"Resume"} icon={resumeIcon} className="w-full min-h-[200px] relative gap-8"> 
                
                
                <Button variant="outline" className={"absolute top-5 right-6 hover:text-black/50 cursor-pointer p-6 text-[16px] text-black/50 z-10"} asChild>
                    <a href="/Magollado-Lance-Kent-Geoffrey-Resume.pdf" download={"Lance_Kent_Geoffrey_B_Magollado_Resume.pdf"}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15V3" stroke="black" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="black" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 10L12 15L17 10" stroke="black" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Download</span>
                    </a>
                </Button>

                {/* --- MAIN VIEWER WRAPPER (Ito yung bintana) --- */}
                <div className="relative w-full h-[800px] rounded-[10px] border border-gray-200 overflow-hidden bg-[#1a1a1a]">
                    
                    
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        <Button variant="secondary" onClick={zoomOut} className="w-10 h-10 p-0 rounded-full text-lg shadow-md cursor-pointer hover:bg-gray-200">-</Button>
                        <Button variant="secondary" onClick={zoomIn} className="w-10 h-10 p-0 rounded-full text-lg shadow-md cursor-pointer hover:bg-gray-200">+</Button>
                    </div>

                    {/* SCROLLABLE AREA (Dito nag-iiscroll yung PDF) */}
                    <div className="w-full h-full overflow-auto no-scrollbar">
                        
                        {/* INNER WRAPPER (Ito yung pipilit sa browser na laging gitna at may p-10) */}
                        <div className="min-w-full min-h-full w-fit flex justify-center items-center p-10 mx-auto transition-all duration-300">
                            
                            {/* ANG MISMONG PDF */}
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
           
           <ContactMe className="min-h-[200px]"/>
        </div>
    )
}

export default ResumeContent;