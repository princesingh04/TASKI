import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "DSA Enthusiast",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Blockchain Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "DSA",
      company_name: "",
      icon: tesla,
      iconBg: "#383E56",
      date: "Sept 2022 - Present",
      points: [
        "Excellent Command on C++ in solving DSA questions",
        "Solved 400+ Questions on Geeks for Geeks and ranked in top 5 in my Institute",
        "Grand Master on CodeStudio and solved 150+ questions on this platform .",
        "Solved 200+ Leetcode Problems",
        ,
      ],
    },
    {
      title: "Web Developer",
      company_name: "",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Oct 2023",
      points: [
        "Achieved Different Certifications in Web Devlopment and Created many Projects.",
        "First Project was Real Estate Service Webpage followed by a Fully Responsive Food Delivery Webpage",
        "Created a Clock and a Random Joke Chrome Extension followed by a Portfolio Website.",
        
      ],
    },
    {
      title: "React Developer",
      company_name: "Scrimba/freeCodeCamp",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - Oct2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Completed React Course on Scrimba and created a To Do List followed by a Meme Generator.",
        "Achieved React Certification on freeCodeCamp.",
       
      ],
    },
    {
      title: "BlockChain Developer",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Present",
      points: [
        "Learning BlockChain Development from different platform.",
        "Completed the Basics of Blockchain Course on Coursera.",
        "Learning Solidity and Writing SmartContracts.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "To Do List",
      description:
        "The React To-Do List is a dynamic web application built using React, a popular JavaScript library for building user interfaces. Users can add new tasks, mark them as completed, and remove tasks they no longer need. The application provides a clean and intuitive user interface, making it easy for users to stay organized and on top of their daily tasks..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/princesingh04/ToDo-List/",
    },
    {
      name: "Fully Responsive Food Delivery ",
      description:
        "I designed and developed a fully responsive food delivery webpage that brings culinary delights right to your doorstep. This project showcases a user-friendly interface, ensuring an effortless browsing experience on any device. Explore a world of flavors with Foodie Delight and enjoy a hassle-free dining experience, anytime, anywhere.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/princesingh04/food-delivering-website",
    },
    {
      name: "Personal Portfolio",
      description:
        "Personalized portfolio project that shows my journey in the realm of digital design and development. With a clean and intuitive interface, highlighting my proficiency in various design tools and programming languages , web-app development and problems solving skills. The main technology used are html, css and js.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };