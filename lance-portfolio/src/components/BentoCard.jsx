function BentoCard(){
    return (
       <div className={`w-full flex flex-col overflow-hidden bg-white rounded-[10px] p-4 gap-4 shrink-0 ${className}`}>
            
            {/* Card Header (Icon + Title) */}
            <div className="flex items-center gap-2">
                {icon}
                <span className="font-medium text-[20px]">{title}</span>
            </div>

            {/* Card Body (Dito papasok yung specific content ng bawat card) */}
            <div className="w-full flex-1">
                {children}
            </div>

        </div>
    )
}

export default BentoCard;