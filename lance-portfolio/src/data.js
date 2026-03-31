
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

export const blogsData = [
  {
    id: 1,
    slug: "apollo-2026-blueprint",
    title: "Stepping Up to the Stage: My First Talk on System Architecture at Apollo 2026",
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
    thumbnail: "/blog-assets/responsive-fcc/fcc-thumbnail.png",
    contentImages: [
      "/blog-assets/responsive-fcc/fcc-image1.png",
      "/blog-assets/responsive-fcc/fcc-image2.jpg"
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
  {
    id: 3,
    slug: "little-kowders-volunteer", 
    title: "Little KOWders: My Experience as a Volunteer Trainer",
    date: "November 19, 2025",
    thumbnail: "/blog-assets/little-kowder/little-kowder-thumbnail.jpg",
    contentImages: [
      "/blog-assets/little-kowder/little-kowder-image1.jpg",
      "/blog-assets/little-kowder/little-kowder-image2.jpg"
    ],
    content: [
      { type: "paragraph", text: "Technology is at its best when it is shared. While I spend countless hours staring at IDEs and building system architectures, I recently experienced a different, deeply rewarding side of tech: community building. This realization came during my very first stint as a Volunteer Trainer for 'Little KOWders,' an initiative aimed at teaching early learners in Barangay Sauyo, Quezon City." },
      
      { type: "paragraph", text: "This meaningful community engagement was made possible through the Quezon City University (QCU) Extension Management Office. I had the privilege of working alongside Sir Lenard F. Bien, the Acting Director and Head of the Community Engagement Unit, as well as my fellow League of Excellent Students in Information Technology (LESIT) members: Rommel Jose, Abigail Marquez, Meryl Alcantara, and Stefani Vienne Carcer. Together, we formed a solid team with a shared mission." },
      
      { type: "subtitle", text: "Empowering the Next Generation:" },
      { type: "list", items: [
          { keyword: "The Hour of Code:", text: " We introduced the kids to the fundamentals of programming through interactive, gamified learning to make logic-building fun." },
          { keyword: "Demystifying AI:", text: " Through engaging videos and discussions, we explained how Artificial Intelligence works and its growing impact on the real world." },
          { keyword: "Hands-on Mentorship:", text: " We guided the children through practical activities using tablets provided by the barangay, ensuring every kid got to experience the magic of tech firsthand." }
      ]},
      
      { type: "paragraph", text: "Seeing the kids' faces light up as they understood AI concepts and completed their coding challenges was incredibly memorable. It wasn't just about teaching them technology; it was about sparking curiosity and showing them that they, too, can be creators in this digital age. Guiding them through these foundational steps was just as inspiring for me as it was for them." },
      
      { type: "paragraph", text: "I am immensely grateful to LESIT and QCU for granting me the opportunity to be part of this initiative. It taught me that being an IT professional isn't just about the software you build, but the community you uplift." },
      
      // THE MIC DROP QUOTE:
      { type: "quote", text: "Code builds applications, but sharing knowledge builds communities." }
    ]
  },
 {
    id: 4, 
    slug: "nyx-figmathon-evante", 
    title: "Design IT: 2nd Runner-Up with E'vante",
    date: "November 18, 2026", // Note: Nilagay mo 2026 sa prompt mo, adjust if 2025 talaga
    thumbnail: "/blog-assets/nyx/nyx-thumbnail.jpg",
    contentImages: [
      "/blog-assets/nyx/nyx-image1.jpg", // TWEAK: Update with actual screenshots of your design
      "/blog-assets/nyx/nyx-image2.jpg"
    ],
    content: [
      { type: "paragraph", text: "As a developer, my comfort zone usually lies within lines of code and IDEs. But on November 18, 2026, I stepped completely out of that zone and into the high-pressure world of competitive UI/UX design. I joined 'Design IT: A Group-Based Web Design Contest Using Figma'—a core event of The Nyx Project 2026: Dreamers of Night, IT Arise." },
      
      { type: "paragraph", text: "This wasn't your typical design jam. The rules were strict: absolutely no AI tools allowed. It was a true test of raw creativity, rapid prototyping, and design thinking under immense time constraints. I teamed up with two incredibly talented individuals, Ronan M. Sanico and Elizar Ayuyang. Together, we faced off against 9 other competitive teams." },
      
      { type: "subtitle", text: "The Challenge: E'vante Event Management" },
      { type: "paragraph", text: "The contest featured a roulette system that dictated our project theme on the spot. Fate handed us the 'Event Management' category. We conceptualized 'E'vante'—an extravagant, classy, and high-end event planning platform designed for luxurious experiences. We had to immediately align on a visual identity: deep, sophisticated color palettes, elegant typography, and a seamless, premium user flow." },
      
      { type: "list", items: [
          { keyword: "Rapid Prototyping:", text: " Translating abstract ideas into high-fidelity Figma screens within a tight deadline." },
          { keyword: "Pure Design Thinking:", text: " Relying solely on our fundamental understanding of layout, contrast, and UX principles without AI generation." },
          { keyword: "The Pitch:", text: " Presenting and defending our design decisions live in front of a panel of judges from the IT field." }
      ]},
      
      { type: "paragraph", text: "The pressure of simultaneously designing and preparing a pitch was intense, but the synergy within our team made it an amazing experience. We pushed through the challenges and ultimately secured the 2nd Runner-Up (3rd Place) spot! I want to express my deepest gratitude to Ronan and Elizar for their hard work, and to the League of Excellent Students in Information Technology (LESIT) for organizing such a rigorous and rewarding event." },
      
      { type: "paragraph", text: "This Figmathon taught me invaluable lessons about collaborative design, working under pressure, and trusting my creative instincts. It proved that a great interface starts with human empathy and solid design fundamentals." },

      { type: "button-group", links: [
          { label: "View Figma File", url: "https://www.figma.com/design/CJEwOsprFDe9QwXQWJqkRH/Group-3-Event-Management-System?node-id=0-1&t=0yabS5cteBKdDuPI-1" },
          { label: "Watch Live Demo", url: "https://res.cloudinary.com/dxatb3m2q/video/upload/v1774932618/nyx-video-demo_bqgv4c.mp4" }
      ]},

      { type: "quote", text: "True design isn't generated; it is engineered through empathy, pressure, and human collaboration." }
    ]
  },
  {
    id: 5, 
    slug: "first-event-gdg", 
    title: "GDG I/O Extended 2025: Reigniting Myself",
    date: "July 26, 2025", 
    thumbnail: "/blog-assets/gdg/gdg-thumbnail.jpg",
    contentImages: [
      "/blog-assets/gdg/gdg-image1.jpg", 
      "/blog-assets/gdg/gdg-image2.jpg"
    ],
    content: [
      { type: "paragraph", text: "Every developer hits a wall eventually. After months of grinding through rigorous academic coursework and complex personal projects, I found myself facing the all-too-common reality of burnout. I needed a change of pace, a spark to reignite my passion for technology. That spark came when I attended my very first tech conference: Google I/O Extended Manila 2025, held at Uptown Mall, BGC." },
      
      { type: "paragraph", text: "Organized by Google Developer Groups (GDG) and supported by Accenture, the event was a massive eye-opener. Stepping into a room filled with professionals and enthusiasts who shared the same career aspirations was an incredible feeling. It was my first time truly experiencing the scale and energy of the local tech community outside of the university setting." },
      
      { type: "subtitle", text: "Key Takeaways & Tech Horizons:" },
      { type: "list", items: [
          { keyword: "Generative AI:", text: " Exploring the practical applications and future trajectory of LLMs in software development." },
          { keyword: "Visual Generation Systems:", text: " Understanding how models are bridging the gap between text prompts and complex visual outputs." },
          { keyword: "Multi-modals & MCP Toolbox:", text: " Learning how to integrate various AI capabilities to create more intelligent and context-aware applications." }
      ]},
      
      { type: "paragraph", text: "The sessions were deeply informative, but the most profound realization I had was how much I still have to learn. Instead of feeling intimidated, I felt energized. The sheer vastness of the tech landscape reminded me why I chose this path in the first place." },
      
      { type: "paragraph", text: "I didn't experience this alone. Sharing the excitement with my friends—Jv, Jayson, Julius, and my new Japanese friend, Shugo—made the event even more memorable. We walked away not just with new knowledge, but with new connections and a shared drive to push our boundaries." },
      
      { type: "paragraph", text: "To any aspiring developer feeling the weight of burnout: step away from the IDE and step into the community. Attending GDG Manila 2025 reminded me that we are part of something bigger. We will improve, we will thrive, and we will become the best versions of ourselves as developers." },

      // THE MIC DROP QUOTE:
      { type: "quote", text: "Burnout is cured not by stopping, but by finding a new reason to keep building." }
    ]
  },
  {
    id: 6, 
    slug: "sfd-open-source", 
    title: "Software Freedom Day: Tara, Mag Open Source Tayo!",
    date: "September 20, 2025", 
    thumbnail: "/blog-assets/sfd/sfd-thumbnail.png",
    contentImages: [
      "/blog-assets/sfd/sfd-image1.jpg", 
      "/blog-assets/sfd/sfd-image2.jpg"
    ],
    content: [
      { type: "paragraph", text: "The tech industry isn't just built on proprietary code and closed ecosystems; its true foundation lies in collaboration. I recently had the incredible opportunity to dive deep into this philosophy by attending Software Freedom Day 2025 at Yspaces, BGC. Hosted by the WordPress User Group Philippines, it was an eye-opening experience dedicated to celebrating Free and Open Source Software (FOSS)." },
      
      { type: "paragraph", text: "I didn't go alone. I was joined by my fellow tech enthusiasts—Christopher, Ronan, Julius, JV, and John Rey. Experiencing this with a solid group of peers made the insights we gained even more impactful, as we spent the day absorbing knowledge from industry veterans." },
      
      { type: "subtitle", text: "Key Insights from the Experts:" },
      { type: "list", items: [
          { keyword: "The Open Web:", text: " Sir Robert 'Bob' Reyes (Community Lead, Mozilla Firefox) kicked things off by detailing Mozilla's journey. It was a powerful reminder of how open-source browsers act as the frontline defense for internet freedom and user privacy." },
          { keyword: "Terminal Velocity:", text: " Sir Cyrus 'Cy' Mante (AI/ML Analyst, Accenture) shifted our perspective on workflows. His hands-on session demonstrated the raw power and efficiency of relying on terminal tools over juggling multiple GUI applications." },
          { keyword: "Open Source in Governance:", text: " Sir Voj Jeturian (CMD Engineer, Pantheon Systems Inc.) showcased the Open Source Government Web Template (GWT), proving how accessible tech can drastically improve transparency and public service efficiency." }
      ]},
      
      { type: "paragraph", text: "Beyond the main stage, the event featured a 'Happiness Bar' breakout session. Here, we had a localized, deeply inspiring conversation with Ma'am Michelle Chua-Lagare. We discussed the evolving landscape of software quality in the age of AI. Her advice resonated strongly: we must transcend being mere 'coders' to become holistic problem solvers, testers, and security advocates." },
      
      { type: "paragraph", text: "The day concluded with passionate developers showcasing their personal FOSS projects. Witnessing how individuals use open tools to build community-driven solutions was the perfect capstone to the event. It reinforced my belief that the best way to grow as an aspiring IT professional is to actively participate in and give back to the tech community." },

      // THE MIC DROP QUOTE:
      { type: "quote", text: "We are not just coders; we are problem solvers, quality advocates, and architects of the open web." }
    ]
  },

]