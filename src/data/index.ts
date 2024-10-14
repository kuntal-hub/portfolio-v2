export const navItems = [
    // { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Projects", link: "/#projects" },
    { name: "Testimonials", link: "/#testimonials" },
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
      iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/node-svgrepo-com.svg", "/cloud.svg"],
      link: "https://codeweb-woad.vercel.app",
      github:'https://github.com/kuntal-hub/codeweb-frontend'
    },
    {
      id: 2,
      title: "CALLUP", // not done yet
      isFeatured: true,
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/Screenshot (108)-min.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "#",
      github:'https://github.com/kuntal-hub/callup'
    },
    {
      id: 3,
      title: "Photoin",
      isFeatured: true,
      des: "An e-commerce platform for selling customised photo prints, with a focus on user experience and performance.",
      img: "/Screenshot (109)-min.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/cloud.svg"],
      link: "https://photoin.in",
      github:'https://github.com/kuntal-hub/photoin',
    },
    {
      id: 4,
      title: "Imaginify",
      isFeatured: true,
      des: "An Ai powered image generation tool with advanced features like image restore, object removal, and more.",
      img: "/Screenshot (105)-min.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/cloud.svg", "/c.svg"],
      link: "https://imaginify-theta-self.vercel.app/",
      github:'https://github.com/kuntal-hub/imaginify',
    },
    {
      id: 5,
      title: "MEGA BLOG",
      isFeatured: true,
      des: "A blogging platform build with Appwrite and Reactjs, Seamlessly create, edit, and Share your blog.",
      img: "/Screenshot (106)-min.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/app.svg"],
      link: "https://mega-blog-coral.vercel.app/",
      github:'https://github.com/kuntal-hub/mega-blog',
    },
    {
      id: 6, // not done yet
      title: "Share Learner",
      isFeatured: true,
      des: "A social media platform for learners, Seamlessly connect with learners and share your knowledge.",
      img: "/Screenshot (111)-min.png",
      iconLists: ["/re.svg", "/tail.svg", "/node-svgrepo-com.svg", "/shadcn.png", "/cloud.svg"],
      link: "#",
      github:'https://github.com/kuntal-hub/share-learner',
    },
    {
      id: 7,
      title: "Portfolio",
      isFeatured: false,
      des: "My personal portfolio website, built with Next.js, Tailwind CSS, and Aceternity UI.",
      img: "/Screenshot (115)-min.png",
      iconLists: ["/next.svg", "/tail.svg", "/acter.webp", "/ts.svg"],
      link: "https://kuntalmaity.me",
      github:'https://github.com/kuntal-hub/portfolio-v2',
    },
    {
      id: 8,
      title: "Music School",
      isFeatured: false,
      des: "A sample ui showcasing a music school website, built with Next js, Tailwind CSS and Aceternity UI.",
      img: "/Screenshot (112)-min.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/acter.webp"],
      link: "https://music-academy-pink.vercel.app/",
      github:'https://github.com/kuntal-hub/music-academy',
    },
    {
      id: 9,
      title: "My TODO App",
      isFeatured: false,
      des: "A simple todo app built plain HTML, CSS, JavaScript and LocalStorage.",
      img: "/Screenshot (113)-min (1).png",
      iconLists: ["/icons8-html.svg", "/icons8-css.svg", "/js.svg"],
      link: "https://kuntal-hub.github.io/my-todo-app",
      github:'https://github.com/kuntal-hub/my-todo-app',
    },
    {
      id: 10,
      title: "Music Player",
      isFeatured: false,
      des: "A simple music player built with plain HTML, CSS, and JavaScript.",
      img: "/Screenshot (114)-min.png",
      iconLists: ["/icons8-html.svg", "/icons8-css.svg", "/js.svg"],
      link: "https://github.com/kuntal-hub/spotify_clone",
      github:'https://github.com/kuntal-hub/spotify_clone',
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
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
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
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
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];