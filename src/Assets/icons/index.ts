import Firebase from "./firebase-logo.svg";
import Flutter from "./flutter-logo.svg";
import ReactLogo from "./react-logo.svg";
import Dart from "./dart.svg";
import Figma from "./figma.svg";
import Github from "./github.svg";
import JavaScript from "./javascript.svg";
import NodeJS from "./nodejs.svg";
import Redis from "./redis.svg";
import Redux from "./redux.svg";
import Sequelize from "./sequelize.svg";
import SocketIO from "./socketio.svg";
import Tailwind from "./tailwind.svg";
import TypeScript from "./typescript.svg";
import NextJS from "./nextjs.svg";

export type IconsType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

export const Icons: Record<string, IconsType> = {
  dart: Dart as IconsType,
  figma: Figma as IconsType,
  github: Github as IconsType,
  javascript: JavaScript as IconsType,
  nodejs: NodeJS as IconsType,
  redis: Redis as IconsType,
  redux: Redux as IconsType,
  sequelize: Sequelize as IconsType,
  socketio: SocketIO as IconsType,
  tailwind: Tailwind as IconsType,
  typescript: TypeScript as IconsType,
  firebase: Firebase as IconsType,
  flutter: Flutter as IconsType,
  react: ReactLogo as IconsType,
  nextjs: NextJS as IconsType,
};
