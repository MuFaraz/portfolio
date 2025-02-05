import emoji from "react-easy-emoji";

import projectImg from "./assets/imgs/dummy-project.png";
import projectImgs from "./assets/imgs/babusoft.png";
import affordable from './assets/imgs/legalhelp.PNG';
import atterney from './assets/imgs/atterneyleads.PNG';
import perfume from './assets/imgs/wordpress.PNG';
import expense from './assets/imgs/expenseReact.PNG';
import covid from './assets/imgs/covid.PNG';
import carJava from './assets/imgs/carRentaljava.PNG';
import schoolJava from './assets/imgs/Schooljava.PNG';

import shaykis from './assets/imgs/shaykis.PNG';
import savackers from './assets/imgs/savacker.PNG';

import bitereel from './assets/imgs/bitereel.PNG';
import tomy from './assets/imgs/tomy.PNG';
import hydraway from './assets/imgs/hydraway.PNG';
import khoja from './assets/imgs/khoja.PNG';
import nutriwest from './assets/imgs/nutriwest.PNG';
import plugin from './assets/imgs/plugin.webp';


import schoolCsharp from './assets/imgs/schoottimetableC.PNG';
import foodcplus from './assets/imgs/foodorderCplus.PNG';
import student from './assets/imgs/StudentperAI.PNG';
import unitc from './assets/imgs/mobileunit.PNG';
import linux from './assets/imgs/linuxcalculator.PNG';







/* 1. Main App */
/* 2. Social Networks */
/* 3. Banner Section  */
/* 4. About Section  */
/* 5. Skills Section */
/* 6. Open Source Section  */
/* 7. Projects Section */
/* 8. Experience Section */
/* 9. Contact Section */

/* wrap your text in emoji("") if you want to show emoji in your text

/*=====================
    1. Main App
    Desc: set what's in the document's head section
==========================*/

const app = {
  title: "Muhammad Faraz",
  // Note : consider leaving null if you dont have any head icon
  icon: "ayin_qoph.png",
  description: "An ordinary karachitte Web Developer, Mobile Shutterbug, and Writer.",
};

/*=====================
    2. Social Networks 
    Desc: your social network links
==========================*/

const socialNetworks = {
  //Note : if you dont need or have any social network just add null value
  github: "https://github.com/MuFaraz",
  linkden: "https://www.linkedin.com/in/muhammad-faraz-644135199/",
  facebook: "https://www.facebook.com/muhammad.faraz.79/",
  instagram: null,
  twitter: null,
};

/*=====================
    3. Banner Section
    Desc: techfolio logo, greetings, summary and avatar,
==========================*/

const bannerSection = {
  username: "Muhammad Faraz",
  bannerHeading: "Full Stack Developer | Turning Ideas into Reality with Code",
  bannerTagLine: emoji(
    "Innovative Full Stack Developer with 4+ years of experience, passionate about coding, exploring new technologies, and crafting scalable, high-performance solutions."
  ),
  //Note:Simply add you avatar image in src/assets/imgs folder 
  //and add the name along with extention e.g xyz.png , abc.svg
  //Note : if you want to use default illustration instead of adding your avatar add defaultAvatar.svg
  bannerAvatar: "avatar.jpg",
  resumeLink:
    "https://drive.google.com/file/d/1Uw-eHeLGjx3aUCspsrrdcJFqIBmw9f1G/view",
};

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command 
    line concept so it asked you to add the admin of the command line 
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: "muhammadfaraz",
  firstCommand: "sudo run about.exe",
  secondCommand: "executing about.exe",
  about:
    "I am a highly skilled Full Stack Developer with 4+ years of experience, specializing in both frontend and backend development. My expertise spans across Laravel, React.js, Next.js, Node.js, Nuxt.js, Vue.js, WordPress, JavaScript, PHP, and MySQL. I have extensive experience in building scalable web applications, optimizing performance, and developing custom WordPress plugins, including WooCommerce customizations. Whether it's API development, server-side logic, or creating dynamic UI/UX experiences, I deliver efficient and high-quality solutions tailored to business needs.",
};



/*=====================
    5. Skils Section
    Desc: This section hep you set your skills 
==========================*/

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  // skillsTagLines: [
  //   "Excitable towards giving breath to different mockup PSDs and web designs using Html / Css.",
  //   "Love to Build Scalable web and native application using React with the several stacks, packages, and services.",
  //   "Also Passionate towards other stuff like WordPress development, python scripting",
  //   "Build Desktop applications for providing all solutions regarding your business using Java,C#,C++",
  //   "Applications for all your problems",
  //   "Love to Build Application in AI",
  // ],
  skillsTagLines: [
    "Crafting modern, responsive, and pixel-perfect websites using Next.js, React.js, and cutting-edge front-end technologies.",
    "Developing scalable, secure, and high-performance web applications with Laravel, CodeIgniter, and Node.js.",
    "Optimizing website speed and performance to ensure lightning-fast load times and seamless user experiences.",
    "Building dynamic and feature-rich WordPress websites, including custom themes, plugins, and advanced WooCommerce integrations.",
    "Expert in WordPress plugin development and customization, modifying existing plugins and creating new ones tailored to business needs.",
    "Providing full-stack development solutions, from front-end UI/UX to robust back-end architecture and database management.",
    "Creating highly optimized eCommerce solutions with WooCommerce, Shopify, and custom-built platforms.",
    "Developing secure and efficient APIs using Laravel, Node.js, and Python, enabling seamless integration between services.",
    "Enhancing business automation with AI-powered applications and Python scripting for data processing and automation.",
    "Designing and managing scalable MySQL and MongoDB databases for optimal data storage and retrieval.",
    "Building progressive web apps (PWAs) and serverless applications for modern, fast, and scalable digital solutions.",
    "Custom web development tailored to unique business requirements, ensuring flexibility and high performance.",
    "Creating and optimizing custom dashboards, admin panels, and CRM solutions to improve business workflows.",
    "Developing secure and feature-rich desktop applications using Java, C#, and C++ for various industries.",
    "Delivering high-quality web solutions with a focus on user experience, scalability, and maintainability."
  ],


  // Recommended : don't add more than 12 skills.
  // Note : go to https://fontawesome.com/icons?d=gallery > select the icon you want to show 
  //        > copy its class > paste it as {fontAwesomeClassname: "fab fa-html5"} in SkillsSet

  skillsSet: [
    {
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      fontAwesomeClassname: "fab fa-php",
    },
    {
      fontAwesomeClassname: "fab fa-js",
    },
    {
      fontAwesomeClassname: "fab fa-react",
    },
    {
      fontAwesomeClassname: "fab fa-vuejs",
    },
    {
      fontAwesomeClassname: "fas fa-database",
    },
    {
      fontAwesomeClassname: "fab fa-wordpress",
    },
    {
      fontAwesomeClassname: "fab fa-python",
    },
    {
      fontAwesomeClassname: "fab fa-linux",
    },
    {
      fontAwesomeClassname: "fab fa-node",
    },
  ],
};

/*=====================
    6. Open Source Section
    Desc: This section hlep you configure your github repos section 
==========================*/
const openSourceSection = {

  //Note :  don't edit the githubToken
  githubToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,

  githubUserName: "MuFaraz",
  //Note :  no of open source projects you want to show.
  numberOfRepos: 6,
};

/*=====================
    7. Projects Section
    Desc: This section hlep you configure your major projects.
==========================*/

const projectsSection = {
  projects: [
    {
      projectName: "Nutriwest",
      projectBio:
        "Nutriwest is an e-commerce platform with both a website and a mobile app, allowing providers and patients to order medicines directly from distributors. Built with Laravel and Blade templates, the platform ensures a smooth and secure ordering experience. The project involved updating the website, developing and optimizing RESTful APIs for the mobile app, managing server-side logic, and implementing authentication to enhance security and performance.",
      projectUrl: "https://www.nutriwest.com/",
      stackList: ["HTML", "CSS", "JS", "PHP", "LARAVEL", "BLADE", "MYSQL"],
      image: nutriwest,
    },
    {
      projectName: "BiteReel – Social Networking Web App",
      projectBio:
        "BiteReel is a social networking web app designed to enhance user engagement with features like post creation, likes, comments, sharing, and real-time push notifications. Built with Nuxt.js for a seamless and dynamic front-end experience and powered by Laravel on the back end, the platform ensures high performance, security, and scalability. The project involved developing and integrating RESTful APIs, managing database interactions, implementing authentication, and handling server-side logic to create a smooth and interactive user experience",
      projectUrl: "https://www.bitereel.com/",
      stackList: ["HTML", "CSS", "JS", "NUXTJS", "LARAVEL", "FIREBASE", "MYSQL"],
      image: bitereel,
    },
    {
      projectName: "Hydraway",
      projectBio:
        "Hydraway is a leading drainage solution website built on WordPress, featuring extensive customization to meet client-specific requirements. The project involved deep customization of WordPress plugins, creation of custom post types, and modifications to enhance functionality and user experience. Through tailored development, the platform was optimized for performance, scalability, and seamless content management.",
      projectUrl: "https://hydraway.net/",
      stackList: ["HTML", "CSS", "JS", "PHP", "WORDPRESS", "PLUGIN CUSTOMIZATION", "MYSQL"],
      image: hydraway,
    },
    {
      projectName: "Tomy Amuzainc",
      projectBio:
        "Tomy Amuzainc is an online platform for purchasing accessories, built using WooCommerce and extensively customized to meet client-specific requirements. The project involved deep WooCommerce customization, developing numerous custom plugins, and optimizing the platform for seamless performance. All modifications were implemented within a tight deadline while ensuring a smooth shopping experience and enhanced functionality.",
      projectUrl: "https://tomy.amuzainc.com/",
      stackList: ["HTML", "CSS", "JS", "PHP", "WORDPRESS", "PLUGIN CUSTOMIZATION", "WOOCOMMERCE", "MYSQL"],
      image: tomy,
    },
    {
      projectName: "Khoja business Directory",
      projectBio:
        "KBD is a secure and fully moderated directory platform built exclusively for the Khoja community, developed using the MERN stack (MongoDB, Express.js, React, Node.js). Designed to help community-led businesses connect while ensuring strict data privacy, KBD is GDPR-compliant and requires identity verification for all users. A key feature of the platform is end-to-end encryption, ensuring that all stored data remains secure and protected. With restricted access, KBD does not accept registrations or data requests from outside the Khoja community, maintaining a private and trusted network.",
      projectUrl: "https://khojabusiness.genetechz.com/",
      stackList: ["HTML", "CSS", "JS", "REACT", "EXPRESS JS", "NODE JS", "MONGODB"],
      image: khoja,
    },
    {
      projectName: "Savackers",
      projectBio:
        "Custom Project created in laravel ",
      projectUrl: "https://www.savackers.com/",
      stackList: ["HTML", "CSS", "JS", "PHP", "LARAVEL"],
      image: savackers,
    },
    {
      projectName: "Wordpress Plugin",
      projectBio:
        "I have developed multiple custom WordPress plugins, enhancing functionality and optimizing user experiences for diverse business needs. From WooCommerce customizations to unique feature implementations, I specialize in creating scalable, secure, and high-performance plugins tailored to client requirements. My expertise spans API integrations, advanced settings panels, custom shortcodes, and database-driven functionalities, ensuring seamless integration with WordPress core and third-party services.",
      projectUrl: "#",
      stackList: ["HTML", "CSS", "JS", "PHP", "WORDPRESS", "PLUGIN CUSTOMIZATION", "MYSQL"],
      image: plugin,
    },
    {
      projectName: "Ecoomerce Website in laravel",
      projectBio:
        "This Project has been based on ecommerce that created custom in laravel when work remotely in rolling cherry company",
      projectUrl: "https://www.shaykis.co.uk/",
      stackList: ["HTML", "CSS", "JS", "PHP", "LARAVEL", "STRIPE", "PAYMENT"],
      image: shaykis,
    },
    {
      projectName: "Affordable Legal Help",
      projectBio:
        "This Project has been created for Client , Affordable Legal Help is a legal assistance company dedicated to providing you with low-cost and high-quality legal services.",
      projectUrl: "https://affordablelegalhelp.com",
      stackList: ["HTML", "CSS", "JS", "PHP", "AJAX"],
      image: affordable,
    },
    {
      projectName: "Affordable Atterney Leads",
      projectBio:
        "This Project has been created for Client, It Offering high quality legal leads, helping find new clients. Attorney leads are not always easy to get; browse high quality law leads now!",

      projectUrl: "https://affordableattorneyleads.com/",
      stackList: ["Wordpress", "HTML", "CSS", "JS", "PHP", "STRIPE"],
      image: atterney,
    },
    {
      projectName: "Student Performance Predictor",
      projectBio:
        "This project is designed to find relationship between students’ outcome of a particular course and their social backgrounds, previous achievements and the academic environments by using Artificial Intelligence. Data of many students will be collected.",

      projectUrl: "https://rb.gy/ctihwq",
      stackList: ["Python", "AI", "Algorithm", "Decision Tree", "Neural Network"],
      image: student,
    },
    {
      projectName: "Online Perfume Shop",
      projectBio: "Online Perfume Shop is an ecommerce website made in wordpress which is about selling men and women perfumes",

      projectUrl: "https://rb.gy/lnlrhx",
      stackList: ["Wordpress", "Woocommerce", "Plugin", "Astra", "Elementor", "PHP"],
      image: perfume,
    },
    ,
    {
      projectName: "Expense Tracker App",
      projectBio: "This Project can help you reach a whole new level of financial knowledge and preparedness. If you need to track a budget, one of these expense tracker apps is likely a great fit for you. Expense Tracker App made in React using hooks (useState, useContext, useReducer) and the context API.",

      projectUrl: "http://muhammadfaraz-expense-app.surge.sh/",
      stackList: ["React", "JSX", "CSS", "Material-UI", "Hooks"],
      image: expense,
    },
    {
      projectName: "Covid-19 Tracker",
      projectBio:
        "Covid-19 is an real-time web application which give real-time update about the corono-virus cases in the world build on ReactJs",

      projectUrl: "http://covid-19-muhammad-faraz.surge.sh/",
      stackList: ["React", "JSX", "CSS", "Material-UI", "API"],
      image: covid,

    },
    {
      projectName: "School Timetable",
      projectBio:
        "School Timetable is Desktop Based application and it has been developed in C#,SQL Server Management studio and we can manage Attendance, Class,Subject,Teacher,Exam, Timetable from this project",
      projectUrl: "https://rb.gy/h9pmzd",
      stackList: ["C#", "Desktop Application", "Sql Server Management Studio"],
      image: schoolCsharp,
    },
    {
      projectName: "Car Rental Management System",
      projectBio:
        "Car Rental Management system is a simple java project. The whole project is completed Netbean IDE.This system is based on a concept to rent cars and generate rental invoice of a rental company",

      projectUrl: "https://rb.gy/gb0bx4",
      stackList: ["JAVA", "Desktop Application", "OOP", "Ms Access", "Oracle", "C#"],
      image: carJava,
    },

    {
      projectName: "School Management System",
      projectBio:
        "The School Management System in Java is an application developed for schools. It is an application developed in Java which is used to store all the school-related records. It stores information related to students, staff, and teachers. The database used is MS-Access. The objective of developing such a system was to reduce the errors that creep in the manual system where it was very difficult to store the records. It also provides the facility to calculate the attendance of the student. There are four types of login for this system the administrator login. The whole system is handled by the administrator who has all the rights to edit or modify any school member information. The student can view the details by logging with their details. This system was developed to provide a secure, easy to use a reliable system. This was created to handle all the school-related information and save it in records.",

      projectUrl: "https://rb.gy/smqeor",
      stackList: ["JAVA", "Desktop Application", "OOP", "Ms Access", "Oracle", "Netbean"],
      image: schoolJava,
    },
    {
      projectName: "Linux Calculator",
      projectBio:
        "The Linux Calculator basically works in the sense that it displays information and/or calculations about your Linux Operating System through a range of commands. So the objective was to construct an application that aids the user in discovering information about his/her Operating System",

      projectUrl: "",
      stackList: ["Python", "Linux", "sudo", "Pyqt5"],
      image: linux,
    },
    {
      projectName: "Food Ordering Management System",
      projectBio:
        "Food Ordering Management system is a simple C++ project. The whole project is completed without database and use the concept of linked list.This system is based on a concept to buy foods and generate bill of a food company",

      projectUrl: "https://rb.gy/ee27qm",
      stackList: ["C++", "Link List", "Algorithm", "Binary Tree"],
      image: foodcplus,
    },
    {
      projectName: "Unit Converter APP",
      projectBio:
        "This Unit Converter is developed for Android Application.The whole project is completed in Android Studio . It is an handy calculator you can use to do all types of unit conversion. ",
      projectUrl: "https://rb.gy/qy8dfv",
      stackList: ["Java", "Android Studio", "Conversion", "Android"],
      image: unitc,
    },



  ],
};

/*=====================
    8. Experience Section
    Desc: This section help you configure your experience.
==========================*/

const experienceSection = {
  experiences: [
    {
      experienceTitle: "Software Developer",
      experienceDesc:
        "A Full time Job work in different technology like wordpress customization, Laravel, Vuejs ,python and React ",
      experienceDuration: "April-2021 to Current",
      experienceTags: ["PHP", "Javascript", "Laravel", "Wordpress", "Woocommerce", "NUXTjs", "Vuejs", "Nextjs"],
    },

    // {
    //   experienceTitle: "Web Developer",
    //   experienceDesc:
    //     "Working remotely for company rolling cherry to handle projects in wordpress, laravel and php",
    //   experienceDuration: "April-2021 to Oct-2021",
    //   experienceTags: ["PHP","Laravel","Wordpress","Woocommerce","Vue"],
    // },
    {
      experienceTitle: "Backend Developer",
      experienceDesc:
        "Handle Backend Development Either Develop API for Mobile APP or Website in MS global inc",
      experienceDuration: "Dec-2020 to March-2021",
      experienceTags: ["PHP", "3 Month", "CSS", "Javascript", "Laravel"],
    },
    {
      experienceTitle: "Web Developer",
      experienceDesc:
        "Design and develop some project in PHP for Increase Rev.",
      experienceDuration: "April-2020 to Sep-2020",
      experienceTags: ["PHP", "7 Month", "CSS", "Javascript"],
    },
    {
      experienceTitle: "React Boot Camper",
      experienceDesc:
        "Successfully learned to React from 0%. Developed and Implement different React projects in the group. Improved communication skills while interacting with people of a different caliber.",
      // Recommended : don't add full date.
      experienceDuration: "April-2020",
      // Recommended : don't add more than 3 tags.
      experienceTags: ["Panacloud", "5 months", "karachi"],
    },
    {
      experienceTitle: "Wordpress Intern",
      experienceDesc:
        "Improved remotely managing skills by giving 20+ hours per week. Expanded knowledge of creating static and responsive sites using WordPress.",
      experienceDuration: "August-2020",
      experienceTags: ["Interns.Pk", "1 month", "Remote"],
    },




  ],
};

/*=====================
    9. Contact Section
    Desc: This section help you configure your contact.
==========================*/

const contactSection = {
  contactTagline:
    "Hey Folks, Love to see you sliding here, Y'all can reach me.",
  // Note : add your all contacts in the contactList seperating with *,* .
  contactList: ["+923128542140", "muhammadfaraz991@gmail.com"],
};


// Bingo :))

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  openSourceSection,
  projectsSection,
  experienceSection,
  contactSection,
};
