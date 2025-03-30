import React from "react";
import { motion } from "framer-motion";
import { backgrounds } from "../Styles/Styles";
import { workData } from "../appData";
import TechStack from "./TechStack";
import { Icons } from "../Assets/icons";

interface WorksProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

export const getBackground = (index: number) => {
  return backgrounds[index % backgrounds.length];
};

function Works(props: WorksProps) {
  const { scrollRef } = props;

  return (
    <div
      ref={scrollRef}
      className="flex flex-col justify-center items-center bg-dark1 px-8 py-14"
    >
      {workData.map((item, index) => {
        return (
          <div key={index} className="w-3/4 md:w-full sm:w-full my-3">
            <motion.div
              className="flex-1 flex flex-col  p-8 rounded-lg bg-white"
              whileHover={{ scale: 1.03 }}
              transition={{
                duration: 0.2,
              }}
              key={index}
              style={{
                background: getBackground(index),
              }}
            >
              <div className="flex flex-row md:flex-col sm:flex-col justify-center items-center">
                <div className="h-full w-full flex flex-1 justify-start items-start ">
                  <div className="flex flex-col">
                    <div className="font-extrabold text-5xl sm:text-3xl text-white">
                      {item.title}
                    </div>
                    <div className="h-5" />
                    <div className="text-white font-semibold text-xl">
                      {item.description}
                    </div>
                    <div className="h-5" />

                    {/* Tech Stack */}
                    <div className="text-white">Tech Stack used</div>
                    <div className="h-5" />
                    <TechStack techStacks={item.techStack} />
                    <div className="h-5" />
                  </div>
                </div>
                {/* Preview Image */}
                {item?.links?.imageLink && (
                  <div className="ml-10 md:my-5 md:ml-0 sm:my-3 sm:ml-0 ">
                    <img
                      src={item?.links?.imageLink}
                      height={300}
                      width={300}
                      style={{ objectFit: "fill" }}
                      alt={item.title}
                    />
                  </div>
                )}
              </div>

              <div className="h-5" />

              {/* buttons */}
              <div className="flex flex-row flex-wrap items-center gap-5 ">
                {item?.links?.clientSource && (
                  <a
                    href={item.links.clientSource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 rounded-lg shadow-sm text-white bg-gray-200 bg-opacity-20 flex justify-center items-center"
                  >
                    <Icons.github height={20} width={20} className="mr-3" />
                    <span className="text-ellipsis truncate">Client code</span>
                  </a>
                )}
                {item?.links?.serverSource && (
                  <a
                    href={item.links.serverSource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 rounded-lg shadow-sm text-white bg-gray-200 bg-opacity-20 flex justify-center items-center"
                  >
                    <Icons.github height={20} width={20} className="mr-3" />
                    <span className="text-ellipsis truncate">Server code</span>
                  </a>
                )}
                {item?.links?.source && (
                  <a
                    href={item.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 rounded-lg shadow-sm text-white bg-gray-200 bg-opacity-20 flex justify-center items-center"
                  >
                    <Icons.github height={20} width={20} className="mr-3" />
                    <span>Source</span>
                  </a>
                )}
                {item?.links?.visitSite && (
                  <motion.a
                    href={item.links.visitSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center px-2.5 py-1 rounded-lg bg-blue cursor-pointer text-white font-semibold"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                  >
                    Visit
                  </motion.a>
                )}
                {item?.links?.apkLink && (
                  <motion.a
                    href={item.links.apkLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center px-2.5 py-1 rounded-lg bg-blue cursor-pointer text-white font-semibold"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                  >
                    APK
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default Works;
