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

}

export interface WorkData {
  title: string;
  description: string;
  techStack: Stack[];
  image: string;
  links: {
    clientSource?: string;
    serverSource?: string;
    source?: string;
    visitSite?: string;
  };
}

const workData: WorkData[] = [
  {
    title: "Full Stack Ebook Web Application",
    description: "Ebook Application using React, NodeJs, Express, Sequelize, MySQL. Admin can login, add, delete & edit books, and monitor the books rented by the users, Users can Register, Login, View, Rent books, Read Books, Manage his wallet balance. Focussed mainly on the server part of the application, Front End needs to be improved.",
    techStack: [Stack.React, Stack.Sequelize, Stack.NodeJS, Stack.Redux, Stack.Tailwind, Stack.TypeScript],
    image: "https://i.imgur.com/qQqQqQq.png",
    links: {
      clientSource: "https://github.com/surya-sanity/ebook-react",
      serverSource: "https://github.com/surya-sanity/server",
      visitSite: "https://ebook-react.vercel.app/",
    },
  },
  {
    title: "Chat Application",
    description: "A Fullstack Chat application using the Flutter and Firebase Realtime Database, Users can Register, SignIn, View other users, can Chat with others, see whos online and offline.",
    techStack: [Stack.Flutter, Stack.Dart, Stack.Firebase],
    image: "https://i.imgur.com/qQqQqQq.png",
    links: {
      visitSite: "",
    },
  },
  {
    title: "Weather Application (WeatherX)",
    description:
      "A Simple weather application built with Flutter and Open Weather API.",
    techStack: [Stack.Flutter, Stack.Dart],
    image: "https://i.imgur.com/qQqQqQq.png",
    links: {
      visitSite: "",
    },
  },
  {
    title: "Clubhouse UI Clone",
    description: "A clone of Clubhouse UI built with Flutter.",
    techStack: [Stack.Flutter, Stack.Dart],
    image: "https://i.imgur.com/qQqQqQq.png",
    links: {
      source: "https://github.com/surya-sanity/clubhouse_ui_clone"
    },
  },
  {
    title: "Instagram UI Clone",
    description: "A clone of Instagram UI built with Flutter.",
    techStack: [Stack.Flutter, Stack.Dart],
    image: "https://i.imgur.com/qQqQqQq.png",
    links: {
      visitSite: "",
    },
  },
  {
    title: "Gpay UI Clone",
    description: "A clone of Gpay Home UI built with Flutter.",
    techStack: [Stack.Flutter, Stack.Dart],
    image: "https://i.imgur.com/qQqQqQq.png",
    links: {
      visitSite: "",
    },
  },
  {
    title: "Simple Authentication UI",
    description: "Login, SignUp UI using Flutter.",
    techStack: [Stack.Flutter, Stack.Dart],
    image: "https://i.imgur.com/qQqQqQq.png",
    links: {
      source: "https://github.com/surya-sanity/authui"
    },
  },
  {
    title: "Clock Application (TimeX)",
    description: "A Simple Clock application built with Flutter.",
    techStack: [Stack.Flutter, Stack.Dart],
    image: "https://i.imgur.com/qQqQqQq.png",
    links: {
      visitSite: "",
    },
  },
];

export { workData };
