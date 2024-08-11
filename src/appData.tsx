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
    imageLink?: string;
  };
}

const workData: WorkData[] = [
  {
    title: "Foliohive ",
    description:
      "A simple portfolio hub where users can explore top curated portfolio sites and submit their own portfolios. Discover and be inspired by the best portfolio designs from various fields such as design, development, and photography. Users can also submit their own portfolios to be featured, gaining visibility and recognition for their work.",
    techStack: [Stack.NextJS, Stack.TypeScript],
    links: {
      clientSource: "https://github.com/surya-sanity/craftex",
      visitSite: "https://foliohive.vercel.app/",
      imageLink: "folio-hive.png",
    },
  },
  {
    title: "SpaceX UI ",
    description:
      "SpaceX UI developed using React, Redux, Redux Toolkit and Tailwind CSS, for data SpaceX API is used.",
    techStack: [Stack.React, Stack.Redux, Stack.Tailwind, Stack.TypeScript],
    links: {
      clientSource: "https://github.com/surya-sanity/spacex",
      visitSite: "https://spacex-surya.vercel.app/",
      imageLink: "spacexmock.png",
    },
  },
  {
    title: "Full Stack Chat App (Flash Chat)",
    description:
      "Chat Application using React, NodeJs, Express, Sequelize, MySQL and Socket IO. Users can SignUp, Login, choose their display avatar, edit their profile, see other users and their Online status in realtime, text chat with them and also implemented message status (sending, send and seen). Made fully realtime using Socket IO. The site is fully responsive too.",
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
      imageLink: "flashchatmock.png",
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
    title: "Chat App (Flash)",
    description:
      "A Fullstack Chat application using the Flutter and Firebase Firestore Database, Users can Register, SignIn, View other users, can Chat with others and see who's online and offline.",
    techStack: [Stack.Flutter, Stack.Dart, Stack.Firebase],
    links: {
      source: "https://github.com/surya-sanity/flash",
      apkLink:
        "https://drive.google.com/file/d/1OQtVBL3K1qcijoMXhIWktOb_jHOP2i6j/view?usp=sharing",
      imageLink: "flashmock.png",
    },
  },
  {
    title: "Weather App (WeatherX)",
    description:
      "A Simple weather application built with Flutter and Open Weather API.",
    techStack: [Stack.Flutter, Stack.Dart],
    links: {
      source: "https://github.com/surya-sanity/weatherx",
      apkLink:
        "https://drive.google.com/file/d/1AgN9Lw3CJ2XirKLKtnBYMnR2UcoWvEHi/view?usp=sharing",
      imageLink: "weatherxmock.png",
    },
  },
  {
    title: "Gpay UI Clone",
    description: "A clone of Gpay Home UI built with Flutter.",
    techStack: [Stack.Flutter, Stack.Dart],
    links: {
      source: "https://github.com/surya-sanity/gpay_ui_clone",
      imageLink: "gpaymock.png",
    },
  },
  {
    title: "Instagram UI Clone",
    description: "A clone of Instagram UI built with Flutter.",
    techStack: [Stack.Flutter, Stack.Dart],
    links: {
      source: "https://github.com/surya-sanity/instagram",
      imageLink: "instagrammock.png",
    },
  },
  {
    title: "Clubhouse UI Clone",
    description: "A clone of Clubhouse UI built with Flutter.",
    techStack: [Stack.Flutter, Stack.Dart],
    links: {
      source: "https://github.com/surya-sanity/clubhouse_ui_clone",
      imageLink: "clubhousemock.png",
    },
  },
  {
    title: "Simple Authentication UI",
    description: "Login, SignUp UI using Flutter.",
    techStack: [Stack.Flutter, Stack.Dart],
    links: {
      source: "https://github.com/surya-sanity/authui",
      imageLink: "authmock.png",
    },
  },
  {
    title: "Clock App (TimeX)",
    description: "A Simple Clock application built with Flutter.",
    techStack: [Stack.Flutter, Stack.Dart],
    links: {
      source: "https://github.com/surya-sanity/datetime",
      apkLink:
        "https://drive.google.com/file/d/103VfD0gqEjnwYfhpVLCJQl9zNgzXgiBD/view?usp=sharing",
      imageLink: "timexmock.png",
    },
  },
];

export { workData };
