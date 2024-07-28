import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Stack } from "../appData";
import { techStackIconData } from "../helpers";

const TechStack = ({ techStacks }: { techStacks: Stack[] }) => {
  return (
    <div className="flex gap-4 flex-wrap ">
      {techStacks.length &&
        techStacks.map((stack, index) => {
          const CurrentIcon = techStackIconData[stack];

          if (!CurrentIcon) {
            return null;
          }

          return (
            <Tippy key={index} content={stack} placement="bottom">
              <div className="p-2 rounded-full bg-white hover:scale-110 transition-all">
                <CurrentIcon height={30} width={30} />
              </div>
            </Tippy>
          );
        })}
    </div>
  );
};

export default TechStack;
