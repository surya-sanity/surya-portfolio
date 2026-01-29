"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { backgrounds } from "@/styles/Styles";
import { workData } from "@/appData";
import TechStack from "@/components/TechStack";
import { Icons } from "@/assets/icons";

interface WorksProps {
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

export const getBackground = (index: number) => {
  return backgrounds[index % backgrounds.length];
};

function Works(props: WorksProps) {
  const { scrollRef } = props;

  return (
    <section
      ref={scrollRef}
      className="flex flex-col justify-center items-center bg-dark1 px-6 py-20 gap-12"
    >
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-4xl md:text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 gap-20 w-full max-w-7xl">
        {workData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-[40px] p-12 lg:p-20 transition-all font-montserrat shadow-2xl"
            style={{
              background: getBackground(index),
            }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-[1.5] space-y-10 text-left">
                <div className="space-y-6">
                  <h3 className="text-[64px] lg:text-[56px] md:text-[44px] sm:text-[36px] font-extrabold text-white leading-[1.1] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white font-normal text-[20px] leading-relaxed max-w-2xl opacity-90">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <span className="text-[18px] font-bold text-white/70 block">Tech Stack used</span>
                  <TechStack techStacks={item.techStack} />
                </div>

                {/* Buttons: Client Code (Ghost) then Visit (Blue) */}
                <div className="flex flex-wrap items-center gap-4 pt-6">
                  {item?.links?.clientSource && (
                    <a
                      href={item.links.clientSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-lg transition-all border border-white/10"
                    >
                      <Icons.github className="mr-2 h-6 w-6" />
                      Client code
                    </a>
                  )}
                  {item?.links?.visitSite && (
                    <motion.a
                      href={item.links.visitSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-10 py-3 rounded-xl bg-[#0070f3] text-white font-bold text-lg transition-all shadow-xl"
                    >
                      Visit
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Vertical Image Stack (Right Side) */}
              {item?.links?.imageLink && (
                <div className="flex-1 flex flex-col gap-6 w-full lg:max-w-[450px]">
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-[1.5/1] rounded-2xl overflow-hidden shadow-2xl border border-white/5"
                  >
                    <Image
                      src={item.links.imageLink}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 0.4 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full aspect-[1.5/1] rounded-2xl overflow-hidden shadow-2xl border border-white/5 grayscale-[30%]"
                  >
                    <Image
                      src={item.links.imageLink}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Works;
