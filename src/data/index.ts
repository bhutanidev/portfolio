const data = {
    "links":[
        {
            "name":"leetcode",
            "icon":"/leetcode.png",
            "url":"https://leetcode.com/u/devbhutani10/"
        },        {
            "name":"codeforces",
            "icon":"/codeforces.png",
            "url":"https://codeforces.com/profile/devbhutani10"
        },        {
            "name":"github",
            "icon":"/github.png",
            "url":"https://github.com/bhutanidev"
        },        {
            "name":"linkedin",
            "icon":"/linkedin.png",
            "url":"https://www.linkedin.com/in/dev-bhutani-9b983428b/"
        },        {
            "name":"x.com",
            "icon":"/xcom.png",
            "url":"https://x.com/dev_bhutani10"
        },
    ],
    "skills":["C++","Javascript", "Typescript" , "React.js", "Next.js", "Node.js",
         "Express Js", "Rest API's" , "Web Sockets" , "MongoDB" , "PostgreSQL" , "SQL" , "AWS" , "Docker" ]
    ,
    "projects" : [
        {
          title: "Uptime",
          link:"https://github.com/bhutanidev/uptime",
          description: "A modern, full-stack uptime monitoring system built. Monitor HTTP services, track incidents in real-time, and view statuses on a clean dashboard.",
          image: "/up.png",
          technologies: ["Redis Streams" ,"React", "Express.js" , "TypeScript" , "Turborepo"],
        },
        {
          title: "Rotflix",
          link: "https://github.com/bhutanidev/flix-backend",
          url:"https://www.rotflix.xyz/",
          description: "Full-stack video streaming platform with adaptive quality, secure access, and CDN-based delivery.",
          image: "/rotflix.png",
          technologies: ["TypeScript", "Next.js", "Node.js", "FFmpeg", "AWS S3", "CloudFront", "Docker"]
        },
        {
          title: "CodeShare",
          link: "https://github.com/bhutanidev/code-share",
          description: "A real-time collaborative code editor built with Turborepo. Sync code across users using Yjs, WebSockets, and room-based sessions.",
          image: "/codeshare.png",
          technologies: ["TypeScript", "Next.js", "Turborepo", "Yjs", "WebSockets", "Prisma", "PostgreSQL"],
        },            
        {
          title: "XSampatti",
          link:"https://github.com/bhutanidev/XSampatti-backend",
          description: "A smart expense tracker to manage finances effortlessly. Track expenses in real time, visualize spending with graphs, and gain budgeting insights.",
          image: "/expenseTracker.jpeg",
          technologies: ["JavaScript", "React.js", "Node.js","MongoDB"],
        },
        {
          title: "Conversify",
          link:"https://github.com/bhutanidev/chatApp",
          description: "An intuitive and seamless messaging application designed to bring people closer through vibrant and interactive conversations.",
          image: "/Conversify.png",
          technologies: ["JavaScript", "React.js", "Node.js","MongoDB" , "Socket.io"],
        },  {
          title: "Reval",
          link:"https://github.com/Niketiiitd/Reval-Frontend",
          description: "A decentralized circular marketplace on the Eth blockchain for pre-owned goods with an extension that finds similar pre-owned items by scraping products.",
          image: "/reval.png",
          technologies: ["JavaScript", "React.js", "Node.js","MongoDB"],
        }

      ],
      achievements : [
        { title: "TCS CodeVita Finalist", desc: "Global Rank 134 among 1.6L+ participants in CodeVita 2024.", icon: "🏆" },
        { title: "Pre Finalist in TIC", desc: "Top 7,000 out of 3L+ participants in Tata Imagination Challenge 2024.", icon: "💻" },
        { title: "Knight on Leetcode , Specialist on CF", desc: "Top 3% on LeetCode. 1418 on Codeforces", icon: "⚔️" },
        { title: "1st position in Code Clash", desc: "A competitive programming contest organized by IEEE GGSIPU", icon: "🚀" },
      ],
      experienceData : [
        {
          title: "Virtual training and internship program",
          company: "IBM CSRBOX",
          location: "Remote",
          duration: "July 2024 - August 2024",
          points: [
            "Completed over 30 modules covering key areas of web development and deployment.",
            "Gained hands-on experience with modern web technologies, development frameworks and deployment strategies.",
          ],
        },
        {
          title: "Freelance Web Developer",
          company: "Self-Employed",
          location: "Remote",
          duration: "2023 – Present",
          points: [
            "Designed and developed responsive web applications using the MERN stack.",
            "Built a portfolio website and contributed to open-source projects.",
          ],
        },
      ]
}

export default data