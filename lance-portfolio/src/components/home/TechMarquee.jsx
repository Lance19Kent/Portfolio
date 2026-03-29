import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import { skillsData } from "@/data"


const firstRow = skillsData.slice(0, skillsData.length / 2)
const secondRow = skillsData.slice(skillsData.length / 2)

const ReviewCard = ({
  img,
}) => {
  return (
    <figure
      className={cn(
        "relative h-full cursor-pointer overflow-hidden py-4 px-3",
      )}
    >
      <div className="flex flex-row items-center">
        <img width="38" height="36" alt="" src={img} />
      </div>
    </figure>
  )
}

function TechMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((skillsData) => (
          <ReviewCard key={skillsData.username} {...skillsData} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((skillsData) => (
          <ReviewCard key={skillsData.username} {...skillsData} />
        ))}
      </Marquee>
      <div className="from-card pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-card pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  )
}

export default TechMarquee;
