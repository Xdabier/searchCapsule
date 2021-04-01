const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDjzoivzG1HL6aD93UnHpkJWYBnEaS66FA",
  authDomain: "tachanytime.firebaseapp.com",
  projectId: "tachanytime"
});

var db = firebase.firestore();

var menu =[
  {
    "Uid": "845ZkxEzY8N4Rnh3PgwHQPRvmCw2",
    "courseID": "RNvxp2UUoogfz3JcAbUl",
    "course Name": "Photography Masterclass: A Complete Guide to Photography",
    "courseShortdesc": "The Best Online Professional Photography Class: How to Take Amazing Photos for Beginners & Advanced Photographers",
    "course Description": "This online photography course will teach you how to take amazing images and even sell them, whether you use a smartphone, mirrorless or DSLR camera.",
    "course Image": "https://ta-dev-card-image-store.s3.amazonaws.com/RNvxp2UUoogfz3JcAbUl-photography.png",
    "coursePreviewVideo": "",
    "courseFormatId": 100,
    "courseFormat": "Online Video",
    "categoryId": "C010",
    "category": "Photography",
    "subCategoryId": "SC108",
    "subCategory": "Digital Photography",
    "domainId": "D941",
    "domainName": "DSLR",
    "sessionLevelId": 300,
    "sessionLevelsName": "Advanced",
    "course.schoolId": "SCH0001",
    "course.schoolName": "Pratt Institute - West Village",
    "course.Teacher[uid]": "845ZkxEzY8N4Rnh3PgwHQPRvmCw2",
    "course.Teacher[teachername]": "Leah Tonsenhall",
    "prerequisite": "You should be excited to learn photography, and ready to take action!\nNo fancy camera is required, having camera (even a smartphone) will help you learn as we prompt you with practice activities.\nNo prior knowledge of photography is required - this course is geared for absolute beginners.",
    "whoisitFor": "Anyone who wants to take better photos\nAbsolute beginners who want to become skilled photographers\nMoms, dads, kids, grandparents, and anyone else who wants to document their lives in a beautiful way\nAmateur photographers wanting to improve their skills\nPhotographers looking to make money with their skills",
    "whatyouwilllearn": "What you'll learn\nYou will know how to take amazing photos that impress your family and friends\nYou will know how the camera truly works, so you can take better photos using manual settings\nYou will know how to photograph in different scenarios like family portraits, landscapes, aerial, product, wildlife, and much more\nYou will know how to compose images beautifully with basic photography rules\nYou will know how to light your subjects with flash and natural lighting\nYou will know how to edit your photos like a professional\nYou will know how to make money with photography\nYou will know how to take better photos with your smart phones",
    "highlight": "This course is aimed at teaching photographers what it takes to improve your techniques to earn more money.\n\nYou'll start with the basics and tackle how a camera operates, the types of cameras and lenses available, and equipment you'll need for accomplishing your goals. You'll then dive into the different styles of photography you can focus on.\n\nYou'll learn about your camera settings (DSLR, mirrorless, or other), including how to shoot in manual mode. You'll use stabilization tools and master how to properly compose and light a scene. You'll even learn how to take great photos with a smartphone or tablet and how to edit images.\n\nSo you can sell your photos, you'll learn how to brand yourself, create a portfolio and website, and find freelance work or a full-time position. Gain insight into licensing, fair use, and more. And if you want to get into wedding photography, you'll learn how to start your own business.\n\nBy the end of this master course, your confidence as a photographer will soar. You'll have a thorough understanding of your camera and gear so you can use them to their fullest potential to take unforgettable photos and start a profitable photography career.",
    "benefit": "",
    "specialnote": "A DSLR camera or mirrorless camera is a great option for taking this course. It doesn't have to be an expensive or fancy model. Any interchangeable lens camera like a DSLR or mirrorless is fine. You can even use a smartphone or point and shoot camera, although you may not have all the manual settings and options that we cover in this course.",
    "coursedefaultLanguageId": "en",
    "coursedefaultLanguage": "English",
    "courseTranslateStatus": "",
    "courseHours": "22hr",
    "cost": "$74.99 ",
    "Certificate": "Yes",
    "courseRating": 4.4,
    "CreateDate": "3/1/2019",
    "Coursestatus": "Active",
    "totalRaters":4,
    "AvgRating":"4.9",
    "Last updated": "5/5/2020"
  },
  {
    "Uid": "wrk8D9veYrcvUQUZLxagqaxNBJR2",
    "courseID": "42lJN0KgTQknyQ513WuA",
    "course Name": "Complete Python Bootcamp: Go from zero to hero in Python 3",
    "courseShortdesc": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
    "course Description": "\"Become a Python Programmer and learn one of employer's most requested skills of 2020!",
    "course Image": "https://ta-dev-card-image-store.s3.amazonaws.com/42lJN0KgTQknyQ513WuA-python.jpeg",
    "coursePreviewVideo": "",
    "courseFormatId": 100,
    "courseFormat": "Online Video",
    "categoryId": "C001",
    "category": "Development",
    "subCategoryId": "SC002",
    "subCategory": "Web Development",
    "domainId": "D004",
    "domainName": "Angular",
    "sessionLevelId": 300,
    "sessionLevelsName": "Advanced",
    "course.schoolId": "SCH0002",
    "course.schoolName": "Acade dsis school of management",
    "course.Teacher[uid]": "wrk8D9veYrcvUQUZLxagqaxNBJR2",
    "course.Teacher[teachername]": "Tara Hugginton",
    "prerequisite": "",
    "whoisitFor": "Who this course is for:               •\tThose with no prior knowledge of Python. \n•\tThose who know Python basics and want to master Python",
    "whatyouwilllearn": "The course follows a modern-teaching approach where students learn by doing. You will start Python from scratch by creating simple programs first. Once you learn the basics, you will then start with the fun part, which is building 10 real-world applications. You will code the apps, guided step-by-step by easy video explanations and continuous support from the course instructor. The applications you will build in the course consist of database apps, web apps, desktop apps, web scraping scripts, webcam object detectors, web maps, data visualization dashboards, and more. These programs are not only great examples to help master Python, but you can also use them for your portfolio.\n",
    "highlight": "",
    "benefit": "",
    "specialnote": "",
    "coursedefaultLanguageId": "en",
    "coursedefaultLanguage": "English",
    "courseTranslateStatus": "",
    "courseHours": "22hr",
    "cost": "$174.99 ",
    "Certificate": "Yes",
    "courseRating": 4.4,
    "CreateDate": "3/1/2019",
    "Coursestatus": "Active",
    "totalRaters":4,
    "AvgRating":"4.8",
    "Last updated": "5/5/2020"
  },
  {
    "Uid": "jPqZDsQTcgYwNoREhnF7cPgLoOe2",
    "courseID": "17A5UD8NuaIb0WLgHa4E",
    "course Name": "Stripe Payments with Angular",
    "courseShortdesc": "Marketplaces and platforms use Stripe Connect to accept money and pay out to third parties. Connect provides a complete set of building blocks to support virtually any business model, including on-demand businesses, e‑commerce, crowdfunding, and travel and events.",
    "course Description": "Online payment processing for internet businesses. Stripe is a suite of payment APIs that powers commerce for online businesses of all sizes, including fraud. We believe that payments is a problem rooted in code, not finance. We obsessively seek out elegant, composable abstractions that enable robust, scalable, flexible integrations. Because we eliminate needless complexity and extraneous details, you can get up and running with Stripe in just a couple of minutes.",
    "course Image": "https://ta-dev-card-image-store.s3.amazonaws.com/delaltain.jpeg",
    "coursePreviewVideo": "",
    "courseFormatId": 100,
    "courseFormat": "Online Video",
    "categoryId": "C001",
    "category": "Development",
    "subCategoryId": "SC002",
    "subCategory": "Web Development",
    "domainId": "D004",
    "domainName": "Angular",
    "sessionLevelId": 300,
    "sessionLevelsName": "Advanced",
    "course.schoolId": "SCH0003",
    "course.schoolName": "Sguru institute",
    "course.Teacher[uid]": "jPqZDsQTcgYwNoREhnF7cPgLoOe2",
    "course.Teacher[teachername]": "Rajesh Shetty",
    "prerequisite": "•\tNO Angular 1 or Angular 2 knowledge is required!\n•\tBasic HTML and CSS knowledge helps, but isn't a must-have\n•\tPrior TypeScript knowledge also helps but isn't necessary to benefit from this course\n•\tBasic JavaScript knowledge is required",
    "whoisitFor": "Who this course is for:               \n•\tThose with no prior knowledge of Angular.\n•\tThose who know Angular basics and want to master Angular",
    "whatyouwilllearn": "This course starts from scratch, you neither need to know Angular 1 nor Angular 2!\nAngular 9 simply is the latest version of Angular 2, you will learn this amazing framework from the ground up in this course!\nJoin the most comprehensive, popular and bestselling Angular course on Udemy and benefit not just from a proven course concept but from a huge community as well! \nFrom Setup to Deployment, this course covers it all! You'll learn all about Components, Directives, Services, Forms, Http Access, Authentication, Optimizing an Angular App with Modules and Offline Compilation and much more - and in the end: You'll learn how to deploy an application!\nBut that's not all! This course will also show you how to use the Angular CLI and feature a complete project, which allows you to practice the things learned throughout the course!",
    "highlight": "",
    "benefit": "",
    "specialnote": "Need to have laptop.",
    "coursedefaultLanguageId": "en",
    "coursedefaultLanguage": "English",
    "courseTranslateStatus": "",
    "courseHours": "22hr",
    "cost": "$88.99 ",
    "Certificate": "Yes",
    "courseRating": 4.4,
    "CreateDate": "3/1/2019",
    "Coursestatus": "Active",
    "totalRaters":4,
    "AvgRating":"4.7",
    "Last updated": "5/5/2020"
  },
  {
    "Uid": "jPqZDsQTcgYwNoREhnF7cPgLoOe2",
    "courseID": "1D3rN9yQEBgfz3JcAbUl",
    "course Name": "Learning Angular NgRx",
    "courseShortdesc": "NgRx Store provides reactive state management for Angular apps inspired by Redux. Unify the events in your application and derive state using RxJS.",
    "course Description": "Why NgRx for State Management?",
    "course Image": "https://ta-dev-card-image-store.s3.amazonaws.com/1D3rN9yQEBgfz3JcAbUl-ngrx.png",
    "coursePreviewVideo": "",
    "courseFormatId": 100,
    "courseFormat": "Online Video",
    "categoryId": "C001",
    "category": "Development",
    "subCategoryId": "SC002",
    "subCategory": "Web Development",
    "domainId": "D004",
    "domainName": "Angular",
    "sessionLevelId": 100,
    "sessionLevelsName": "Begineers",
    "course.schoolId": "SCH0003",
    "course.schoolName": "Sguru institute",
    "course.Teacher[uid]": "jPqZDsQTcgYwNoREhnF7cPgLoOe2",
    "course.Teacher[teachername]": "Rajesh Shetty",
    "prerequisite": "•\tNO Angular 1 or Angular 2 knowledge is required!\n•\tBasic HTML and CSS knowledge helps, but isn't a must-have\n•\tPrior TypeScript knowledge also helps but isn't necessary to benefit from this course\n•\tBasic JavaScript knowledge is required",
    "whoisitFor": "Who this course is for:               \n•\tThose with no prior knowledge of Angular.\n•\tThose who know Angular basics and want to master Angular",
    "whatyouwilllearn": "This course starts from scratch, you neither need to know Angular 1 nor Angular 2!\nAngular 9 simply is the latest version of Angular 2, you will learn this amazing framework from the ground up in this course!\nJoin the most comprehensive, popular and bestselling Angular course on Udemy and benefit not just from a proven course concept but from a huge community as well! \nFrom Setup to Deployment, this course covers it all! You'll learn all about Components, Directives, Services, Forms, Http Access, Authentication, Optimizing an Angular App with Modules and Offline Compilation and much more - and in the end: You'll learn how to deploy an application!\nBut that's not all! This course will also show you how to use the Angular CLI and feature a complete project, which allows you to practice the things learned throughout the course!",
    "highlight": "",
    "benefit": "",
    "specialnote": "Need to have laptop.",
    "coursedefaultLanguageId": "en",
    "coursedefaultLanguage": "English",
    "courseTranslateStatus": "",
    "courseHours": "22hr",
    "cost": "$49.99 ",
    "Certificate": "Yes",
    "courseRating": 4.4,
    "CreateDate": "3/1/2019",
    "Coursestatus": "Active",
    "totalRaters":4,
    "AvgRating":"4.6",
    "Last updated": "5/5/2020"
  },
  {
    "Uid": "wrk8D9veYrcvUQUZLxagqaxNBJR2",
    "courseID": "1D3rN9yQEBgfz3KeMOL",
    "course Name": "RxJS - What and Why?",
    "courseShortdesc": "ReactiveX is a library for composing asynchronous and event-based programs by using observable sequences. It extends the observer pattern to support sequences of data and/or events and adds operators that allow you to compose sequences together declaratively while abstracting away concerns about things like low-level threading, synchronization, thread-safety, concurrent data structures, and non-blocking I/O.",
    "course Description": "It is sometimes called “functional reactive programming” but this is a misnomer. ReactiveX may be functional, and it may be reactive, but “functional reactive programming” is a different animal. One main point of difference is that functional reactive programming operates on values that change continuously over time, while ReactiveX operates on discrete values that are emitted over time",
    "course Image": "https://ta-dev-card-image-store.s3.amazonaws.com/1D3rN9yQEBgfz3KeMOL-Rx_Logo.png",
    "coursePreviewVideo": "",
    "courseFormatId": 100,
    "courseFormat": "Online Video",
    "categoryId": "C001",
    "category": "Development",
    "subCategoryId": "SC002",
    "subCategory": "Web Development",
    "domainId": "D004",
    "domainName": "Angular",
    "sessionLevelId": 400,
    "sessionLevelsName": "Expert",
    "course.schoolId": "SCH0002",
    "course.schoolName": "Acade dsis school of management",
    "course.Teacher[uid]": "wrk8D9veYrcvUQUZLxagqaxNBJR2",
    "course.Teacher[teachername]": "Tara Hugginton",
    "prerequisite": "•\tNO Angular 1 or Angular 2 knowledge is required!\n•\tBasic HTML and CSS knowledge helps, but isn't a must-have\n•\tPrior TypeScript knowledge also helps but isn't necessary to benefit from this course\n•\tBasic JavaScript knowledge is required",
    "whoisitFor": "Who this course is for:               \n•\tThose with no prior knowledge of Angular.\n•\tThose who know Angular basics and want to master Angular",
    "whatyouwilllearn": "This course starts from scratch, you neither need to know Angular 1 nor Angular 2!\nAngular 9 simply is the latest version of Angular 2, you will learn this amazing framework from the ground up in this course!\nJoin the most comprehensive, popular and bestselling Angular course on Udemy and benefit not just from a proven course concept but from a huge community as well! \nFrom Setup to Deployment, this course covers it all! You'll learn all about Components, Directives, Services, Forms, Http Access, Authentication, Optimizing an Angular App with Modules and Offline Compilation and much more - and in the end: You'll learn how to deploy an application!\nBut that's not all! This course will also show you how to use the Angular CLI and feature a complete project, which allows you to practice the things learned throughout the course!",
    "highlight": "This course starts from scratch, you neither need to know Angular 1 nor Angular 2!\n\nAngular 9 simply is the latest version of Angular 2, you will learn this amazing framework from the ground up in this course!\n\nJoin the most comprehensive, popular and bestselling Angular course on Udemy and benefit not just from a proven course concept but from a huge community as well! \n\nFrom Setup to Deployment, this course covers it all! You'll learn all about Components, Directives, Services, Forms, Http Access, Authentication, Optimizing an Angular App with Modules and Offline Compilation and much more - and in the end: You'll learn how to deploy an application!\n\nBut that's not all! This course will also show you how to use the Angular CLI and feature a complete project, which allows you to practice the things learned throughout the course!\n\nAnd if you do get stuck, you benefit from an extremely fast and friendly support - both via direct messaging or discussion. You have my word! ;-)\n\nAngular is one of the most modern, performance-efficient and powerful frontend frameworks you can learn as of today. It allows you to build great web apps which offer awesome user experiences! Learn all the fundamentals you need to know to get started developing Angular applications right away.",
    "benefit": "",
    "specialnote": "Need to have laptop.",
    "coursedefaultLanguageId": "en",
    "coursedefaultLanguage": "English",
    "courseTranslateStatus": "",
    "courseHours": "22hr",
    "cost": "$74.99 ",
    "Certificate": "Yes",
    "courseRating": 4.4,
    "CreateDate": "3/1/2019",
    "Coursestatus": "Active",
    "totalRaters":4,
    "AvgRating":"2.2",
    "Last updated": "5/5/2020"
  }
];

menu.forEach(function(obj) {
  db.collection("courses").add(obj).then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
});