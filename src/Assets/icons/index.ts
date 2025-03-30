import Firebase from "../icons/firebase-logo.svg?react";
import Flutter from "../icons/flutter-logo.svg?react";
import ReactLogo from "../icons/react-logo.svg?react";
import Dart from "../icons/dart.svg?react";
import Figma from "../icons/figma.svg?react";
import Github from "../icons/github.svg?react";
import JavaScript from "../icons/javascript.svg?react";
import NodeJS from "../icons/nodejs.svg?react";
import Redis from "../icons/redis.svg?react";
import Redux from "../icons/redux.svg?react";
import Sequelize from "../icons/sequelize.svg?react";
import SocketIO from "../icons/socketio.svg?react";
import Tailwind from "../icons/tailwind.svg?react";
import TypeScript from "../icons/typescript.svg?react";
import NextJS from "../icons/nextjs.svg?react";

export type IconsType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

export const Icons = {
  dart: Dart,
  figma: Figma,
  github: Github,
  javascript: JavaScript,
  nodejs: NodeJS,
  redis: Redis,
  redux: Redux,
  sequelize: Sequelize,
  socketio: SocketIO,
  tailwind: Tailwind,
  typescript: TypeScript,
  firebase: Firebase,
  flutter: Flutter,
  react: ReactLogo,
  nextjs: NextJS,
};
