
export const achievementsData = [
  {
    id: 1,
    category: "certification",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issuerLogo: "./achievements-logo/ffc-logo.png",
    image: "./achievements-logo/certificates/responsive-web-design.jpg",
    date: "November 24, 2024",
    verifyLink: "https://freecodecamp.org/certification/fcce8b17ee6-8dd5-4c50-b625-61519cd8759e/responsive-web-design",
    linkText: "Verify Credential",
    description: "Certificate for completing 300 hours of work in freeCodeCamp that structured my fundamentals in Web Development!"
  },
  {
    id: 2,
    category: "certification",
    title: "Exploratory Testing + Mob Testing",
    issuer: "QE360",
    issuerLogo: "./achievements-logo/qe360-logo.png",
    image: "./achievements-logo/certificates/mob-testing-certificate.png",
    date: "October 22, 2025",
    verifyLink: null,
    linkText: null,
    description: "Taken a Crash Course with the President of QE360 Ma'am Michele Chua by providing an actual system with testing."
  },
  {
    id: 3,
    category: "education",
    title: "Resource Speaker",
    issuer: "Quezon City University",
    issuerLogo: "./about-png/QCU-Logo.png",
    image: "./achievements-logo/education/speaker-certificate.png",
    date: "February 09, 2026",
    verifyLink: null,
    linkText: null,
    description: "Delivered a great talk and insights on Logical Mapping and the importance of System Designs for Apollo 2026."
  },
  {
    id: 4,
    category: "education",
    title: "Volunteer Trainer",
    issuer: "Quezon City University",
    issuerLogo: "./about-png/QCU-Logo.png",
    image: "./achievements-logo/education/Little-KOWders-Certificate.jpg",
    date: "November 19, 2025",
    verifyLink: null,
    linkText: null,
    description: "A Student Volunteer of the even Little KOWders:Coding for Early Learners in Barangay Sauyo, Quezon City."
  },
  {
    id: 5,
    category: "education",
    title: "Third Place Web Design Figma Contest",
    issuer: "Quezon City University",
    issuerLogo: "./about-png/QCU-Logo.png",
    image: "./achievements-logo/education/nyx-project.jpg",
    date: "November 18, 2025",
    verifyLink: null,
    linkText: null,
    description: "Achieving Third Place in Design IT: A Group-Based Web Design Contest Using Figma without AI Assitant."
  }, {
    id: 5,
    category: "education",
    title: "Youth Summit on Leadership 2024",
    issuer: "Quezon City University",
    issuerLogo: "./about-png/QCU-Logo.png",
    image: "./achievements-logo/education/youth-summit.jpg",
    date: "September 05, 2024",
    verifyLink: null,
    linkText: null,
    description: "Attended my first Youth Summit Leadership with different schools to promote leadership, security in digital realm, and society."
  },
];

export const skillsData = [
  {
    id: 1,
    img: "/technology-icons/html.svg",
    skillName: "HTML"
  },
  {
    id: 2,
    img: "/technology-icons/css.svg",
    skillName: "CSS"
  },
  {
    id: 3,
    img: "/technology-icons/javascript.svg",
    skillName: "Javascript"
  },
  {
    id: 4,
    img: "/technology-icons/tailwind.svg",
    skillName: "Tailwind"
  },
  {
    id: 5,
    img: "/technology-icons/laravel.svg",
    skillName: "Laravel"
  },
  {
    id: 6,
    img: "/technology-icons/mysql.svg",
    skillName: "MySQL"
  },
  {
    id: 7,
    img: "/technology-icons/php.svg",
    skillName: "PHP"
  },
  {
    id: 8,
    img: "/technology-icons/java.svg",
    skillName: "Java"
  },
  {
    id: 9,
    img: "/technology-icons/canva.svg",
    skillName: "Canva"
  },
  {
    id: 10,
    img: "/technology-icons/trello.svg",
    skillName: "Trello"
  },
  {
    id: 11,
    img: "/technology-icons/react.svg",
    skillName: "React"
  },
  {
    id: 12,
    img: "/technology-icons/vite.svg",
    skillName: "Vite"
  },
  {
    id: 13,
    img: "/technology-icons/bootstrap.svg",
    skillName: "Bootstrap"
  },
  {
    id: 14,
    img: "/technology-icons/git.svg",
    skillName: "Git"
  },
  {
    id: 15,
    img: "/technology-icons/python.svg",
    skillName: "Python"
  },
  {
    id: 16,
    img: "/technology-icons/node.svg",
    skillName: "Node"
  },
]

// Sa loob ng data.js
export const blogsData = [
  {
    id: 1,
    slug: "apollo-2026-blueprint",
    title: "Apollo 2026: Blueprint of Insights",
    date: "February 09, 2026",
    thumbnail: "/blog-assets/thumbnails/apollo-2026-thumbnail.png",
    contentImages: [
      "/blog-assets/apollo/me-apollo.jpg",
      "/blog-assets/apollo/apollo-groupie.jpg"
    ],

    content: [
      { type: "paragraph", text: "Every great application starts long before the first line of code is written. This was the core message I shared at Apollo 2026: Blueprint of Insights, where I had the incredible opportunity to step up as a resource speaker for the very first time." },
      { type: "paragraph", text: "As an IT student and aspiring full-stack developer, I have come to realize that deeply understanding a system's architecture is just as crucial as the code implementation itself. During my talk, we dove into the foundational elements of Logical Mapping in System Design." },
      { type: "subtitle", text: "Key Tools Explored:" },
      {
        type: "list", items: [
          { keyword: "Flowcharts:", text: " For tracing logic." },
          { keyword: "Context Diagrams:", text: " For big-picture boundaries." },
          { keyword: "Data Flow Diagrams (DFD):", text: " For data movement." },
          { keyword: "Use Case Diagrams:", text: " For user interactions." }
        ]
      },
      {},
      { type: "paragraph", text: "But I didn't want it to be just another theoretical lecture. To make the concepts truly stick, we went back to basics. I gave the attendees specific project scenarios, and we used good old pen and paper to manually draft system designs." },
      { type: "paragraph", text: "This milestone wouldn't have been possible without the trust and support of an amazing community. A massive thank you to QCU Batasan for making this happen!" },
      { type: "quote", text: "First, solve the problem. Then, write the code." }
    ]
  },
  {
    id: 2,
    slug: "fcc-responsive-certificate",
    title: "Building the Foundation: Earning My First Web Certificate",
    date: "November 24, 2024",
    thumbnail: "/blog-assets/responsive-fcc/fcc-responsive-thumbnail.png",
    contentImages: [
      "/blog-assets/responsive-fcc/fcc-image.png",
      "/achievements-logo/certificates/fcc-certificate.png"
    ],
    content: [
      { type: "paragraph", text: "Every developer has an origin story—that pivotal moment when curiosity turns into a structured learning path. For me, that journey officially began with the freeCodeCamp Responsive Web Design Certification. I had always been fascinated by 'A Day in the Life' vlogs of software engineers on YouTube, and a recurring piece of advice from industry professionals kept standing out: if you want to be a web developer, start building with freeCodeCamp." },

      { type: "paragraph", text: "Earning this certification wasn't just a weekend project. I tackled this rigorous curriculum from August to November of 2024, balancing it alongside my heavy academic workload as an IT student. It required late nights, intense focus, and serious time management, but I was determined to solidify my fundamentals." },

      { type: "quote", text: "Great web development isn't just about making things look good; it's about building structures that adapt seamlessly to any environment." },
{},
      { type: "subtitle", text: "Core Technologies Mastered:" },
      {
        type: "list", items: [
          { keyword: "Semantic HTML5:", text: " Structuring content for accessibility and modern web standards." },
          { keyword: "Advanced CSS3:", text: " Styling with precision, including complex animations and transforms." },
          { keyword: "CSS Flexbox:", text: " Building dynamic, one-dimensional layouts efficiently." },
          { keyword: "CSS Grid:", text: " Architecting complex, two-dimensional responsive web pages." }
        ]
      },

      { type: "paragraph", text: "What makes freeCodeCamp exceptional is its hands-on approach. Instead of just watching tutorials, I was immediately thrust into practical laboratories and workshops, writing actual code to solve real problems. Building projects like the Tribute Page and the Product Landing Page forced me to apply theoretical concepts into tangible, working web structures." },

      { type: "paragraph", text: "This certification is more than just a digital credential; it is the bedrock of my web development journey. It gave me the confidence to transition from a consumer of technology to a creator. With my frontend layout skills firmly established, I am now actively pursuing my JavaScript Algorithms and Data Structures certification to bring these static pages to life. The journey continues!" }
    ]
  },
]