export const navItems = [
  // { name: "Home", link: "/", smallScreen: false },
  { name: "About", link: "/#about", smallScreen: false },
  { name: "Services", link: "/#services", smallScreen: true },
  { name: "Projects", link: "/projects", smallScreen: true },
  { name: "Skills", link: "/#skills", smallScreen: true },
  { name: "Blogs", link: "/#blogs", smallScreen: true },
  { name: "Contact", link: "/contact-us", smallScreen: true },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Turning concepts into Real Applications",
    description: "Behind the Code",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "CODEWEB",
    isFeatured: true,
    des: "A web-based code editor with a real-time preview feature, Seamlessly create, edit, and Share your work.",
    img: "/Screenshot (107)-min.png",
    iconLists: ["/re.svg", "/tail.svg", "/mongo-svgrepo-com.svg", "/node-svgrepo-com.svg", "/cloud.svg"],
    link: "https://codeweb.kuntalmaity.in",
    github: 'https://github.com/kuntal-hub/codeweb-frontend'
  },
  {
    id: 2,
    title: "CALLUP",
    isFeatured: true,
    des: "Simplify your video conferencing experience with CALLUP. Seamlessly connect with colleagues and friends.",
    img: "/Screenshot (108)-min.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://callup.kuntalmaity.in",
    github: 'https://github.com/kuntal-hub/callup'
  },
  {
    id: 3,
    title: "Photoin",
    isFeatured: true,
    des: "An e-commerce platform for selling customised photo prints, with a focus on user experience and performance.",
    img: "/Screenshot (109)-min.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/mongo-svgrepo-com.svg"],
    link: "https://photoin.in",
    github: 'https://github.com/kuntal-hub/photoin',
  },
  {
    id: 4,
    title: "Imaginify",
    isFeatured: true,
    des: "An Ai powered image generation tool with advanced features like image restore, object removal, and more.",
    img: "/Screenshot (105)-min.png",
    iconLists: ["/next.svg", "/mongo-svgrepo-com.svg", "/ts.svg", "/cloud.svg", "/c.svg"],
    link: "https://imaginify.kuntalmaity.in",
    github: 'https://github.com/kuntal-hub/imaginify',
  },
  {
    id: 5,
    title: "MEGA BLOG",
    isFeatured: true,
    des: "A blogging platform build with Appwrite and Reactjs, Seamlessly create, edit, and Share your blog.",
    img: "/Screenshot (106)-min.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/app.svg"],
    link: "https://mega-blog.kuntalmaity.in",
    github: 'https://github.com/kuntal-hub/mega-blog',
  },
  {
    id: 6, // not done yet
    title: "Share Learner",
    isFeatured: true,
    des: "A social media platform for learners, Seamlessly connect with learners and share your knowledge.",
    img: "/Screenshot (111)-min.png",
    iconLists: ["/re.svg", "/tail.svg", "/node-svgrepo-com.svg", "/shadcn.png", "/mongo-svgrepo-com.svg"],
    link: "https://sharelearner.vercel.app",
    github: 'https://github.com/dasamritendu619/sharelearner-client',
  },
  {
    id: 7,
    title: "Portfolio",
    isFeatured: false,
    des: "My personal portfolio website, built with Next.js, Tailwind CSS, and Aceternity UI.",
    img: "/Screenshot (115)-min.png",
    iconLists: ["/next.svg", "/tail.svg", "/acter.webp", "/ts.svg"],
    link: "https://kuntalmaity.in",
    github: 'https://github.com/kuntal-hub/portfolio-v2',
  },
  {
    id: 8,
    title: "Music School",
    isFeatured: false,
    des: "A sample ui showcasing a music school website, built with Next js, Tailwind CSS and Aceternity UI.",
    img: "/Screenshot (112)-min.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/acter.webp"],
    link: "https://music-academy.kuntalmaity.in",
    github: 'https://github.com/kuntal-hub/music-academy',
  },
  {
    id: 9,
    title: "My TODO App",
    isFeatured: false,
    des: "A simple todo app built plain HTML, CSS, JavaScript and LocalStorage.",
    img: "/Screenshot (113)-min (1).png",
    iconLists: ["/icons8-html.svg", "/icons8-css.svg", "/js.svg"],
    link: "https://kuntal-hub.github.io/my-todo-app",
    github: 'https://github.com/kuntal-hub/my-todo-app',
  },
  {
    id: 10,
    title: "Music Player",
    isFeatured: false,
    des: "A simple music player built with plain HTML, CSS, and JavaScript.",
    img: "/Screenshot (114)-min.png",
    iconLists: ["/icons8-html.svg", "/icons8-css.svg", "/js.svg"],
    link: "https://kuntal-hub.github.io/spotify_clone",
    github: 'https://github.com/kuntal-hub/spotify_clone',
  },
];


export const skills = [
  {
    name: 'HTML',
    logo: '/icons8-html.svg',
    percent: 94,
    color: '#e34c26'
  },
  {
    name: 'CSS',
    logo: '/icons8-css.svg',
    percent: 90,
    color: '#2965f1'
  },
  {
    name: 'Tailwind CSS',
    logo: '/tail.svg',
    percent: 95,
    color: '#01CBC6'
  },
  {
    name: 'JavaScript',
    logo: '/js.svg',
    percent: 92,
    color: '#FAC42F'
  },
  {
    name: 'TypeScript',
    logo: '/ts.svg',
    percent: 85,
    color: '#3178C6'
  },
  {
    name: 'React',
    logo: '/re.svg',
    percent: 95,
    color: '#61DBFB'
  },
  {
    name: 'React Native',
    logo: '/re.svg',
    percent: 85,
    color: '#61DBFB'
  },
  {
    name: 'Redux Toolkit',
    logo: '/redux-logo-svgrepo-com.svg',
    percent: 90,
    color: '#764abc'
  },
  {
    name: 'React Hook Form',
    logo: '/react-hook-form-logo-only.svg',
    percent: 80,
    color: '#CC6699'
  },
  {
    name: 'Next.js',
    logo: '/next.svg',
    percent: 90,
    color: '#FFFFFF'
  },
  {
    name: 'Shadcn UI',
    logo: '/shadcn2.png',
    percent: 80,
    color: '#4F46E5'
  },
  {
    name: 'Appwrite',
    logo: '/app.svg',
    percent: 85,
    color: '#fe019a'
  },
  {
    name: 'PostgreSQL',
    logo: '/postgresql-logo-svgrepo-com.svg',
    percent: 75,
    color: '#4F46E5'
  },
  {
    name: 'MongoDB',
    logo: '/mongo-svgrepo-com.svg',
    percent: 85,
    color: '#4DB33D'
  },
  {
    name: 'Node.js',
    logo: '/node-svgrepo-com.svg',
    percent: 80,
    color: '#3C873A'
  },
  {
    name: "Express",
    logo: "/Express.png",
    percent: 80,
    color: '#FFFFFF'
  },
  {
    name: 'Docker',
    logo: '/dock.svg',
    percent: 75,
    color: '#4F46E5'
  },
  {
    name: 'GraphQL',
    logo: '/graphql-svgrepo-com.svg',
    percent: 80,
    color: '#F24E1E'
  },
  {
    name: 'Redis',
    logo: '/redis-logo-svgrepo-com.svg',
    percent: 80,
    color: '#F24E1E'
  },
  {
    name: 'Socket.io',
    logo: '/socket-dot-io-svgrepo-com.svg',
    percent: 75,
    color: '#4F46E5'
  },
  // {
  //   name: 'Cloudinary',
  //   logo: '/cloud.svg',
  //   percent: 80,
  //   color: '#FFFFFF'
  // },
  // {
  //   name: 'Azure',
  //   logo: '/azure-svgrepo-com.svg',
  //   percent: 70,
  //   color:'#4F46E5'
  // }
]

export const testimonials = [
  {
    quote:
      "Collaborating with Kuntal was an absolute pleasure. His professionalism, promptness, and dedication to delivering quality results were evident throughout our project. Kuntal's enthusiasm for every facet of development truly stands out. I am very happy with the work he has done for me. I highly recommend Kuntal for any web development project.",
    name: "Subrata Jana",
    title: "Founder of Photoin.in",
    photo: '/WhatsApp Image 2024-11-02 at 10.30.36 AM (1)-min.jpeg',
  },
  {
    quote:
      "Programming is not about what you know; it's about what you can figure out. Kuntal is a great example of this. His ability to solve complex problems and learn new technologies quickly is impressive. His work quality is excellent, Kuntal always over delivers with respect to quality and timeliness. I am totally satisfied with his work. If you are looking for a web developer, I highly recommend Kuntal.",
    name: "Polash Panja",
    title: "Owner of M Enterprises",
    photo: 'WhatsApp Image 2024-11-02 at 10.30.36 AM-min.jpeg',
  },
  {
    quote:
      "Collaborating with Kuntal was an absolute pleasure. His professionalism, promptness, and dedication to delivering quality results were evident throughout our project. Kuntal's enthusiasm for every facet of development truly stands out. I am very happy with the work he has done for me. I highly recommend Kuntal for any web development project.",
    name: "Subrata Jana",
    title: "Founder of Photoin.in",
    photo: '/WhatsApp Image 2024-11-02 at 10.30.36 AM (1)-min.jpeg',
  },
  {
    quote:
      "Programming is not about what you know; it's about what you can figure out. Kuntal is a great example of this. His ability to solve complex problems and learn new technologies quickly is impressive. His work quality is excellent, Kuntal always over delivers with respect to quality and timeliness. I am totally satisfied with his work. If you are looking for a web developer, I highly recommend Kuntal.",
    name: "Polash Panja",
    title: "Owner of M Enterprises",
    photo: 'WhatsApp Image 2024-11-02 at 10.30.36 AM-min.jpeg',
  },
  {
    quote:
      "Collaborating with Kuntal was an absolute pleasure. His professionalism, promptness, and dedication to delivering quality results were evident throughout our project. Kuntal's enthusiasm for every facet of development truly stands out. I am very happy with the work he has done for me. I highly recommend Kuntal for any web development project.",
    name: "Subrata Jana",
    title: "Founder of Photoin.in",
    photo: '/WhatsApp Image 2024-11-02 at 10.30.36 AM (1)-min.jpeg',
  },
  {
    quote:
      "Programming is not about what you know; it's about what you can figure out. Kuntal is a great example of this. His ability to solve complex problems and learn new technologies quickly is impressive. His work quality is excellent, Kuntal always over delivers with respect to quality and timeliness. I am totally satisfied with his work. If you are looking for a web developer, I highly recommend Kuntal.",
    name: "Polash Panja",
    title: "Owner of M Enterprises",
    photo: 'WhatsApp Image 2024-11-02 at 10.30.36 AM-min.jpeg',
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer",
    desc: "Build and deploy many web applications using modern frontend and backend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a E-commerce web app for a client, from initial concept to deployment on vercle",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Mobile App Developer",
    desc: "Develop mobile apps for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: 'https://github.com/kuntal-hub'
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/kuntal582"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kuntal-maity-8aa4612a9"
  },
];


export const ourServices = [
  {
    "title": "Web Development",
    "description": "Build responsive, scalable, and secure websites tailored to your business.",
    "points": [
      "Custom UI/UX design",
      "Frontend & Backend development",
      "Integration with databases and APIs",
      "Responsive design for all devices",
    ],
    "closing": "We bring your digital vision to life with precision and performance."
  },
  {
    "title": "Mobile App Development",
    "description": "Create high-performance mobile apps for iOS and Android platforms.",
    "points": [
      "Native & cross-platform development",
      "Smooth user experiences",
      "Integration with APIs & databases",
      "Play Store & App Store deployment"
    ],
    "closing": "We turn ideas into intuitive, powerful mobile solutions."
  },
  {
    "title": "Custom Software Solutions",
    "description": "Tailor-made software built specifically for your business needs.",
    "points": [
      "Enterprise-level systems",
      "Industry-specific software tools",
      "Workflow automation & optimization",
      "End-to-end development & delivery"
    ],
    "closing": "We solve complex problems with simple, scalable software."
  },
  {
    "title": "API Development & Integration",
    "description": "Enable your platforms to connect and communicate effectively.",
    "points": [
      "Custom REST & GraphQL APIs",
      "Third-party API integration",
      "Secure authentication systems",
      "Real-time data handling"
    ],
    "closing": "Connectivity is key—we ensure your services talk to each other smoothly."
  },
  {
    "title": "E-commerce Solutions",
    "description": "Develop fast, secure, and user-friendly online stores.",
    "points": [
      "Shopify, WooCommerce, or custom platforms",
      "Secure payment gateway integration",
      "Product & inventory management systems",
      "Mobile-friendly store experience"
    ],
    "closing": "We help you sell smarter and scale faster online."
  },
  {
    "title": "Maintenance & Support",
    "description": "Keep your systems running at peak performance 24/7.",
    "points": [
      "Regular updates & patches",
      "Bug fixes & performance monitoring",
      "Security enhancements",
      "Ongoing technical support"
    ],
    "closing": "Our job doesn’t end at launch—we’re with you all the way."
  },
]


export const myBlogs = [
  {
    id: 1,
    title: "🚀 Supercharge Your Node.js App with Caching: A Developer’s Guide with Code Examples",
    link: 'https://blog.kuntalmaity.in/different-caching-mechanisms-to-optimize-application-performance',
    image: "/blog1_img-min.png",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Docker Simplified: What It Is, Why It Matters, and How It Solves Real-Life Dev Problems",
    link: 'https://blog.kuntalmaity.in/docker-simplified-what-it-is-why-it-matters-and-how-it-solves-real-life-dev-problems',
    image: "/blog2_img-min.png",
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "🚀 Supercharge Your Node.js App with node-cache: In-Memory Caching Made Easy",
    link: 'https://blog.kuntalmaity.in/supercharge-your-nodejs-app-with-node-cache-in-memory-caching-made-easy',
    image: "/blog3_img-min.png",
    readTime: "9 min read"
  },
  {
    id: 4,
    title: "🐳 The Ultimate Docker Command Cheat Sheet for Developers",
    link: 'https://blog.kuntalmaity.in/docker-command-cheat-sheet-for-developers',
    image: "/blog4_img-min.png",
    readTime: "20 min read"
  },
  {
    id: 5,
    title: "🧠 Understanding Memory Leaks in JavaScript – With Real-World Examples & Solutions",
    link: 'https://blog.kuntalmaity.in/understanding-memory-leaks-in-javascript',
    image: "/blog5_img-min.png",
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "⚡ Real-Time Development with Docker Volumes (Bind Mounts) – No More Rebuilding for Every Change",
    link: 'https://blog.kuntalmaity.in/real-time-development-with-docker-volumes-bind-mounts',
    image: "/blog6_img-min.png",
    readTime: "4 min read"
  },
  {
    id: 7,
    title: "🐳 Dockerfile Explained – How to Build Your Own Docker Images Step by Step",
    link: 'https://blog.kuntalmaity.in/how-to-build-your-own-docker-images-step-by-step',
    image: "/blog7_img-min.png",
    readTime: "9 min read"
  },
  {
    id: 8,
    title: "🐳 Everything About Docker Compose – Simplify Your Multi-Container Development",
    link: 'https://blog.kuntalmaity.in/everything-about-docker-compose-simplify-your-multi-container-development',
    image: "/blog8_img-min.png",
    readTime: "10 min read"
  },
  {
    id: 9,
    title: "🌐 Docker Networks Explained – A Complete Beginner’s Guide",
    link: 'https://blog.kuntalmaity.in/docker-networks-explained-a-complete-beginners-guide',
    image: "/blog9_img-min.png",
    readTime: "8 min read"
  },
]

export const chatWithMeUrl = "https://wa.me/919679154766?text=Hello+there!";