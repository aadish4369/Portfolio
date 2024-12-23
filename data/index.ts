export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I focus on optimizing efficiency and solving complex problems to elevate my projects.",
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
    title: "Currently building a game in C++ using Unreal Engine",
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
    title: "MeetX - Real Time Meeting Transcription App",
    des: "Developed a React Native meeting transcription app with backend integration, leveraging Google's Speech-to-Text API for real-time transcription and analysis.",
    img: "/MeetX.jpg",
    iconLists: [
      "/p1.svg",
      "/nodejs.svg",
      "/socketio.svg",
      "/google-speech.svg",
      "/analysis.svg",
    ],
    link: "/ui.meetx.com",
  },
  {
    id: 2,
    title: "Crowd-Funding DAPP using Blockchain Network",
    des: "Engineered a user-centric crowd-funding platform using React, offering an engaging interface and seamless interactions for users by keeping 100% transparency for the users. Employed Sepolia blockchain network, Solidity smart contracts, and web3.js integration to ensure secure and efficient transaction processing, achieving remarkable throughput and significant cost savings while maintaining real-time updates with minimal latency.",
    img: "/crowdfunding.png",
    iconLists: [
      "/Solidity.svg",
      "/blockchain.svg",
      "/solidity.svg",
      "/web3js.svg",
      "/transparency.svg",
    ],
    link: "https://crowdfunding-dapp-pi.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "Full Stack Chat App Project with real-time messaging functionality",
  //   des: "Engineered a feature-rich Full Stack Chat App, integrating Node.js, MongoDB, Socket IO, React, and Passport.js, delivering real-time messaging capabilities and garnering a 95% usability rating in UI design.",
  //   img: "/p3.svg",
  //   iconLists: [
  //     "/nodejs.svg",
  //     "/mongodb.svg",
  //     "/socketio.svg",
  //     "/react.svg",
  //     "/passportjs.svg",
  //   ],
  //   link: "",
  // },
];


export const testimonials = [
  {
    quote:
      "Aadish Jain has been a crucial contributor to the development of a PACS (Picture Archiving and Communication System) application for CT and MRI systems. His expertise in implementing DICOM and HL7 protocols has been invaluable, significantly enhancing the application’s ability to manage and exchange medical imaging data efficiently.Additionally, Aadish worked on an independent project called Puru Sanchar, an innovative application built on the concept of multiple communication channels using webhooks, developed with Electron.js.",
    name: "Aagam Jain",
    title: "Director of PURU Technologies",
  },
{
  quote: 
    "Aadish Jain has been a key contributor to the development of Amazon’s Disaster Relief Portal, playing a pivotal role in building the backend of a SaaS tool co-branded with Amazon. This innovative platform was designed to manage CSR funds effectively, enabling rapid disaster relief within 72 hours. Aadish’s expertise in Node.js and TypeScript was instrumental in creating a robust and efficient backend architecture.Through his efforts, the platform achieved an impressive 56% improvement in the efficiency of donation and fund distribution processes, significantly streamlining disaster relief operations.",
  name: "Sarang Bobade",
  title: "CEO Donatekart"
},
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
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
    title: "Junior Software Developer-Donatekart",
    desc: "Designed and developed a Node.js and TypeScript backend for a SaaS tool featuring a 3-way portal, focused on natural disaster management.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full-Stack Developer Intern- Quninx Innovations",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native, NodeJs and AWS.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Development Intern-Puru Technologies",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", 
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Mobile Development Freelance",
    desc: "Developed an application for real time transcription and meeting managements.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/aadish4369 ",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/jaaadish2",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/aadish-jain-2904/",
  },
];

