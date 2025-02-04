export const navItems = [
  // { name: "Home", link: "/" },
  { name: "About", link: "/#about" },
  { name: "Projects", link: "/#projects" },
  { name: "Skills", link: "/#skills" },
  { name: "Contact", link: "/#contact" },
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
    title: "Currently working on a react native project",
    description: "The Inside Scoop",
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
    name: 'JavaScript',
    logo: '/js.svg',
    percent: 92,
    color: '#FAC42F'
  },
  {
    name: 'React',
    logo: '/re.svg',
    percent: 95,
    color: '#61DBFB'
  },
  {
    name: 'Redux Toolkit',
    logo: '/redux-logo-svgrepo-com.svg',
    percent: 90,
    color: '#764abc'
  },
  {
    name: 'Next.js',
    logo: '/next.svg',
    percent: 90,
    color: '#FFFFFF'
  },
  {
    name: 'React Native',
    logo: '/re.svg',
    percent: 85,
    color: '#61DBFB'
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
    name: 'Tailwind CSS',
    logo: '/tail.svg',
    percent: 95,
    color: '#01CBC6'
  },
  {
    name: 'TypeScript',
    logo: '/ts.svg',
    percent: 85,
    color: '#3178C6'
  },
  {
    name: 'Appwrite',
    logo: '/app.svg',
    percent: 85,
    color: '#fe019a'
  },
  {
    name: 'Cloudinary',
    logo: '/cloud.svg',
    percent: 80,
    color: '#FFFFFF'
  },
  // {
  //   name:'Docker',
  //   logo:'/dock.svg',
  //   percent:75,
  //   color:'#4F46E5'
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