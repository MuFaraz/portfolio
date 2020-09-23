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
  bannerHeading: "Full Stack Developer",
  bannerTagLine: emoji(
    "A Programmer Who love coding and always eager to learn a new and make skill sharper whenever  get any chance"
  ),
  //Note:Simply add you avatar image in src/assets/imgs folder 
  //and add the name along with extention e.g xyz.png , abc.svg
  //Note : if you want to use default illustration instead of adding your avatar add defaultAvatar.svg
  bannerAvatar: "avatar.jpg",
  resumeLink:
    "https://drive.google.com/file/d/1snSGVboK6lKngUcTbKR1Kk9EnacrTSVH/view?usp=sharing",
};

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command 
    line concept so it asked you to add the admin of the command line 
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: "mfaraz@ayin_qoph",
  firstCommand: " sudo run about.exe",
  secondCommand: " executing about.exe",
  about:
    "A Computer Science Student and Full Stack Developer, Passionate about solving problems that will benefit others in the area of IT or in real life. from haven't think about computer science and then picking it as a carrier back in 2017 I have discovered a lot in this system.",
};

/*=====================
    5. Skils Section
    Desc: This section hep you set your skills 
==========================*/

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    "Excitable towards giving breath to different mockup PSDs and web designs using Html / Css.",
    "Love to Build Scalable web and native application using React with the several stacks, packages, and services.",
    "Also Passionate towards other stuff like WordPress development, python scripting",
    "Build Desktop applications for providing all solutions regarding your business using Java,C#,C++",
    "Applications for all your problems",
    "Love to Build Application in AI",
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
      fontAwesomeClassname: "fab fa-java",
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
      fontAwesomeClassname: "fab fa-cuttlefish",
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
    {
      experienceTitle: "Web Developer",
      experienceDesc:
        "Design and develop some project in PHP for Increase Rev.",
      experienceDuration: "Current",
      experienceTags: ["PHP", "March-2020 to Current", "CSS", "Javascript"],
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
