import { Icons } from "../Assets/icons";
import { Stack } from "../appData";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const TechStack = ({ techStacks }: { techStacks: Stack[] }) => {
  return (
    <div className="flex gap-4 flex-wrap ">
      {techStacks.length &&
        techStacks.map((stack, index) => {
          switch (stack) {
            case Stack.React:
              return (
                <Tippy key={index} content="React" placement="bottom">
                  <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.react height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Dart:
              return (
                <Tippy key={index} content="Dart" placement="bottom">
                  <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.dart height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Figma:
              return (
                <Tippy key={index} content="Figma" placement="bottom">
                  <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.figma height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Github:
              return (
                <Tippy key={index} content="Github" placement="bottom">
                  <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.github height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.JavaScript:
              return (
                <Tippy key={index} content="JavaScript" placement="bottom">
                  <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.javascript height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.NodeJS:
              return (
                <Tippy key={index} content="NodeJS" placement="bottom">
                  <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.nodejs height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Redis:
              return (
                <Tippy key={index} content="Redis" placement="bottom">
                  <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.redis height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Redux:
              return (
                <Tippy key={index} content="Redux" placement="bottom">
                  <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.redux height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Sequelize:
              return (
                <Tippy key={index} content="Sequelize" placement="bottom">
                  <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.sequelize height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.SocketIO:
              return (
                <Tippy key={index} content="SocketIO" placement="bottom">
                  <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.socketio height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Tailwind:
              return (
                <Tippy key={index} content="Tailwind" placement="bottom">
                  <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.tailwind height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.TypeScript:
              return (
                <Tippy key={index} content="TypeScript" placement="bottom">
                  <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.typescript height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Flutter:
              return (
                <Tippy key={index} content="Flutter" placement="bottom">
                  <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.flutter height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.ReactNative:
              return (
                <Tippy key={index} content="ReactNative" placement="bottom">
                  <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.react height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Firebase:
              return (
                <Tippy key={index} content="Firebase" placement="bottom">
                  <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.firebase height={30} width={30} />
                  </div>
                </Tippy>
              );
            default:
              return <></>;
          }
        })}
    </div>
  );
};

export default TechStack;
