import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    id:"html",
    img: "/technology-icons/html.svg",
  },
  {
    img: "/technology-icons/css.svg",
  },
  {
    img: "/technology-icons/javascript.svg",
  },
  {
    img:"/technology-icons/tailwind.svg",
  },
  {
    img: "/technology-icons/laravel.svg",
  },
  {
    img: "/technology-icons/mysql.svg",
  },
  {
    img: "/technology-icons/php.svg",
  },
  {
    img: "/technology-icons/java.svg",
  },
  {
    img: "/technology-icons/canva.svg",
  },
  {
    img: "/technology-icons/trello.svg",
  },
  {
    img: "/technology-icons/react.svg",
  },
  {
    img: "/technology-icons/vite.svg",
  },
  {
    img: "/technology-icons/bootstrap.svg",
  },
  {
    img: "/technology-icons/git.svg",
  },
  {
    img: "/technology-icons/python.svg",
  },
  {
    img: "/technology-icons/node.svg",
  },
  
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

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
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-card pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-card pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  )
}

export default TechMarquee;
