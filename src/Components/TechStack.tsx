"use client";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Stack } from "@/appData";
import { techStackIconData } from "@/helpers";
import { motion } from "framer-motion";

const TechStack = ({ techStacks }: { techStacks: Stack[] }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {techStacks.length > 0 &&
        techStacks.map((stack, index) => {
          const CurrentIcon = techStackIconData[stack];

          if (!CurrentIcon) {
            return null;
          }

          return (
            <Tippy key={index} content={stack} placement="bottom">
              <span>
                <motion.div
                  whileHover={{ scale: 1.25, rotate: 5 }}
                  className="p-2.5 rounded-full bg-white shadow-lg shadow-black/5 hover:shadow-black/10 transition-shadow cursor-help"
                >
                  <CurrentIcon height={30} width={30} className="w-8 h-8 md:w-6 md:h-6" />
                </motion.div>
              </span>
            </Tippy>
          );
        })}
    </div>
  );
};

export default TechStack;
