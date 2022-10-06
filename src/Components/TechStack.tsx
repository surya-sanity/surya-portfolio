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
                <Tippy content="React" placement="bottom">
                  <div key={index} className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.react height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Dart:
              return (
                <Tippy content="Dart" placement="bottom">
                  <div key={index} className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.dart height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Figma:
              return (
                <Tippy content="Figma" placement="bottom">
                  <div key={index} className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.figma height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Github:
              return (
                <Tippy content="Github" placement="bottom">
                  <div key={index} className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.github height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.JavaScript:
              return (
                <Tippy content="JavaScript" placement="bottom">
                  <div key={index} className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.javascript height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.NodeJS:
              return (
                <Tippy content="NodeJS" placement="bottom">
                  <div key={index} className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.nodejs height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Redis:
              return (
                <Tippy content="Redis" placement="bottom">
                  <div key={index} className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.redis height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Redux:
              return (
                <Tippy content="Redux" placement="bottom">
                  <div key={index} className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.redux height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Sequelize:
              return (
                <Tippy content="Sequelize" placement="bottom">
                  <div key={index} className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.sequelize height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.SocketIO:
              return (
                <Tippy content="SocketIO" placement="bottom">
                  <div key={index} className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.socketio height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Tailwind:
              return (
                <Tippy content="Tailwind" placement="bottom">
                  <div key={index} className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.tailwind height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.TypeScript:
              return (
                <Tippy content="TypeScript" placement="bottom">
                  <div key={index} className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.typescript height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Flutter:
              return (
                <Tippy content="Flutter" placement="bottom">
                  <div key={index} className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.flutter height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.ReactNative:
              return (
                <Tippy content="ReactNative" placement="bottom">
                  <div key={index} className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                    <Icons.react height={30} width={30} />
                  </div>
                </Tippy>
              );
            case Stack.Firebase:
              return (
                <Tippy content="Firebase" placement="bottom">
                  <div key={index} className="p-2 rounded-full bg-white hover:scale-110 transition-all">
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
