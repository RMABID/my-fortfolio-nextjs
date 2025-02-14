import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import full_stack_icon from "./Full-Stack Development.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  full_stack_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work-1.png",
    id: 0,
    link: "",
  },
  {
    title: "E-commerce Website",
    description: "Full-Stack Development",
    bgImage: "/work-2.png",
    id: 1,
    link: "https://rstiles.netlify.app",
    project_details: {
      project_name: "RS Tiles and Sanitary – E-commerce Website",
      project_overview:
        "RS Tiles and Sanitary is a modern e-commerce platform designed for purchasing high-quality tiles and sanitary products. The website offers a seamless shopping experience, allowing users to browse products, add them to their cart, and complete transactions effortlessly.",
      technologies:
        "React.js, Tailwind CSS, Firebase, Node.js, Express.js, MongoDB",
      features: [
        "User Authentication with Firebase",
        "Product Listing & Filtering",
        "Shopping Cart & Secure Checkout",
        "Responsive UI with Tailwind CSS",
        "Admin Dashboard for product and order management",
        "Real-Time Database with MongoDB",
      ],
      challenges: [
        {
          challenge: "Handling real-time user authentication",
          solution:
            "Implemented Firebase Authentication for secure login and signup.",
        },
        {
          challenge: "Optimizing UI performance for fast page loads",
          solution:
            "Used Tailwind CSS and lazy loading to improve speed and responsiveness.",
        },
      ],
      live_site: "https://rstiles.netlify.app/",
      github_site: "https://github.com/RMABID/rs-tiles",
    },
  },
  {
    title: "Tech Finder",
    description: "Full-Stack Development",
    bgImage: "/work-3.png",
    id: 2,
    link: "",

    project_details: {
      project_name: "Tech Finder",
      project_overview:
        "Tech Finder is a platform designed to help users discover and explore the latest technology products, including mobile apps, websites, and other tech innovations. It offers a curated list of new products, allowing users to stay updated with the latest trends in technology.",
      technologies: "React.js, Firebase, Tailwind CSS, Node.js, MongoDB, JWT",
      features: [
        "User authentication with JWT and Firebase",
        "Product submission and approval system",
        "Upvote/downvote system for user engagement",
        "Categorization of products for easy navigation",
        "Search functionality to find specific products",
        "Admin panel for product moderation",
        "Responsive design for seamless experience across devices",
      ],
      challenges: [
        {
          challenge: "Ensuring real-time updates of new products",
          solution:
            "Implemented Firebase and MongoDB to manage and update the product database efficiently.",
        },
        {
          challenge: "Creating an intuitive and responsive user interface",
          solution:
            "Utilized Tailwind CSS to design a clean and responsive UI that adapts to different screen sizes.",
        },
        {
          challenge: "Securing user authentication and authorization",
          solution:
            "Integrated JWT for secure authentication and Firebase for identity management.",
        },
      ],
      live_site: "https://product-hunter-59f35.web.app/",
      github_site: "https://github.com/RMABID/Tech-Finder-assignment-12-client",
    },
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
    id: 3,
    link: "",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description:
      "Web development involves building interactive and scalable websites using modern technologies like React.js, Next.js, and Node.js.",
    link: "",
  },
  {
    icon: assets.full_stack_icon,
    title: "Full-Stack Development",
    description:
      "Full-stack development includes both frontend and backend solutions, integrating MongoDB, Express, React, and Node.js for seamless performance.",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on crafting intuitive and visually appealing interfaces using Tailwind CSS and modern design principles.",
    link: "",
  },
  {
    icon: assets.firebase,
    title: "Firebase & Next.js Solutions",
    description:
      "Leverage Firebase and Next.js to build fast, SEO-friendly, and real-time applications with seamless authentication and database management.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js, Node js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Bachelor of Arts",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
