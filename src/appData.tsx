import folioHive from "./assets/mocks/folio-hive.png";
import spacex from "./assets/mocks/spacexmock.png";
import flashchat from "./assets/mocks/flashchatmock.png";
import flash from "./assets/mocks/flashmock.png";
import weatherx from "./assets/mocks/weatherxmock.png";
import gpay from "./assets/mocks/gpaymock.png";
import instagram from "./assets/mocks/instagrammock.png";
import clubhouse from "./assets/mocks/clubhousemock.png";
import auth from "./assets/mocks/authmock.png";
import timex from "./assets/mocks/timexmock.png";

import { StaticImageData } from "next/image";

export const MyStackList = [
  "Flutter",
  "React JS",
  "Redux JS",
  "Redux Toolkit",
  "Tailwind CSS",
  "Firebase",
  "React Native",
  "Figma",
  "Adobe XD",
  "Express Js",
  "Dart",
  "Typescript",
  "Javascript",
  "Node JS",
  "Sequelize ORM",
  "Socket IO",
  "Redis",
  "Web Sockets",
  "NextJS",
  "SEO",
];

export enum Stack {
  Dart = "Dart",
  Figma = "Figma",
  Github = "Github",
  JavaScript = "JavaScript",
  NodeJS = "NodeJS",
  Redis = "Redis",
  Redux = "Redux",
  Sequelize = "Sequelize",
  SocketIO = "SocketIO",
  Tailwind = "Tailwind",
  TypeScript = "TypeScript",
  React = "React",
  Flutter = "Flutter",
  ReactNative = "React Native",
  Firebase = "Firebase",
  NextJS = "NextJS",
}

export interface WorkData {
  title: string;
  description: string;
  techStack: Stack[];
  links: {
    clientSource?: string;
    serverSource?: string;
    source?: string;
    visitSite?: string;
    apkLink?: string;
    imageLink?: string | StaticImageData;
  };
}

const workData: WorkData[] = [
  {
    title: "FolioHive - Portfolio Discovery Platform",
    description:
      "A curated portfolio discovery platform that enables creative professionals to showcase and explore exceptional portfolio websites. The platform facilitates inspiration and networking across various disciplines including design, development, and photography, while offering creators the opportunity to submit their work for featured placement.",
    techStack: [Stack.NextJS, Stack.TypeScript],
    links: {
      clientSource: "https://github.com/surya-sanity/craftex",
      visitSite: "https://foliohive.vercel.app/",
      imageLink: folioHive,
    },
  },
  {
    title: "SpaceX Dashboard",
    description:
      "An interactive dashboard application built with modern web technologies, providing real-time access to SpaceX mission data through their public API. Features a responsive interface developed with React, Redux Toolkit, and Tailwind CSS.",
    techStack: [Stack.React, Stack.Redux, Stack.Tailwind, Stack.TypeScript],
    links: {
      clientSource: "https://github.com/surya-sanity/spacex",
      visitSite: "https://spacex-surya.vercel.app/",
      imageLink: spacex,
    },
  },
  {
    title: "FlashChat - Real-time Messaging Platform",
    description:
      "A comprehensive real-time messaging platform built with a modern tech stack. Features include user authentication, customizable avatars, profile management, real-time presence indicators, and message status tracking. The application leverages Socket.IO for real-time communications and offers a fully responsive design for seamless cross-device usage.",
    techStack: [
      Stack.React,
      Stack.Sequelize,
      Stack.NodeJS,
      Stack.Redux,
      Stack.Tailwind,
      Stack.TypeScript,
      Stack.SocketIO,
    ],
    links: {
      clientSource: "https://github.com/surya-sanity/chat-client",
      serverSource: "https://github.com/surya-sanity/chat-server",
      imageLink: flashchat,
    },
  },
  // {
  //   title: "Full Stack Ebook Web App",
  //   description: "Ebook Application using React, NodeJs, Express, Sequelize, MySQL. Admin can login, add, delete & edit books, and monitor the books rented by the users, Users can Register, Login, View, Rent books, Read Books, Manage his wallet balance. Focussed mainly on the server part of the application, Front End needs to be improved.",
  //   techStack: [Stack.React, Stack.Sequelize, Stack.NodeJS, Stack.Redux, Stack.Tailwind, Stack.TypeScript],
  //   links: {
  //     clientSource: "https://github.com/surya-sanity/ebook-react",
  //     serverSource: "https://github.com/surya-sanity/server",
  //     visitSite: "https://ebook-react.vercel.app/",
  //     imageLink: "ebookmock.png"
  //   },
  // },
  {
    title: "Flash - Mobile Chat Application",
    description:
      "A mobile-first chat application developed with Flutter and Firebase. The application provides seamless real-time messaging capabilities, user authentication, contact management, and presence awareness. Built with a focus on performance and user experience.",
    techStack: [Stack.Flutter, Stack.Dart, Stack.Firebase],
    links: {
      source: "https://github.com/surya-sanity/flash",
      apkLink:
        "https://drive.google.com/file/d/1OQtVBL3K1qcijoMXhIWktOb_jHOP2i6j/view?usp=sharing",
      imageLink: flash,
    },
  },
  {
    title: "WeatherX - Weather Forecast Application",
    description:
      "A sophisticated weather application that provides accurate forecasts using the OpenWeather API. Built with Flutter, the app delivers a clean, intuitive interface for accessing weather information.",
    techStack: [Stack.Flutter, Stack.Dart],
    links: {
      source: "https://github.com/surya-sanity/weatherx",
      apkLink:
        "https://drive.google.com/file/d/1AgN9Lw3CJ2XirKLKtnBYMnR2UcoWvEHi/view?usp=sharing",
      imageLink: weatherx,
    },
  },
  {
    title: "Google Pay UI Implementation",
    description:
      "A precise implementation of Google Pay's user interface using Flutter, demonstrating attention to detail in modern mobile app design and development practices.",
    techStack: [Stack.Flutter, Stack.Dart],
    links: {
      source: "https://github.com/surya-sanity/gpay_ui_clone",
      imageLink: gpay,
    },
  },
  {
    title: "Instagram Interface Recreation",
    description:
      "A detailed recreation of Instagram's mobile interface using Flutter, showcasing complex UI implementation and modern mobile design patterns.",
    techStack: [Stack.Flutter, Stack.Dart],
    links: {
      source: "https://github.com/surya-sanity/instagram",
      imageLink: instagram,
    },
  },
  {
    title: "Clubhouse Interface Implementation",
    description:
      "A faithful reproduction of Clubhouse's distinctive user interface built with Flutter, demonstrating expertise in implementing modern social media application designs.",
    techStack: [Stack.Flutter, Stack.Dart],
    links: {
      source: "https://github.com/surya-sanity/clubhouse_ui_clone",
      imageLink: clubhouse,
    },
  },
  {
    title: "Authentication UI Framework",
    description:
      "A modular authentication interface framework featuring login and registration flows, built with Flutter. Designed for reusability and easy integration into various applications.",
    techStack: [Stack.Flutter, Stack.Dart],
    links: {
      source: "https://github.com/surya-sanity/authui",
      imageLink: auth,
    },
  },
  {
    title: "TimeX - Chronograph Application",
    description:
      "A precision-focused chronograph application developed with Flutter, offering essential time management and tracking functionality with a clean, modern interface.",
    techStack: [Stack.Flutter, Stack.Dart],
    links: {
      source: "https://github.com/surya-sanity/datetime",
      apkLink:
        "https://drive.google.com/file/d/103VfD0gqEjnwYfhpVLCJQl9zNgzXgiBD/view?usp=sharing",
      imageLink: timex,
    },
  },
];

export { workData };
