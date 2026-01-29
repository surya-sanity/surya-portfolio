"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CTA from "@/components/CTA";
import { getBackground } from "@/components/Works";
import { MyStackList } from "@/appData";
import Socials from "./Socials";
import { getTechStyle } from "@/utils/colors";
import surya from "@/assets/surya.jpeg";

const ProfileContent = ({ triggerScroll, hideCTA = false }: { triggerScroll: () => void; hideCTA?: boolean }) => {
  return (
    <section className="flex flex-col justify-center items-center h-screen mx-auto px-6 max-w-7xl overflow-hidden font-montserrat">
      <div className="flex flex-col justify-center items-center w-full text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative h-[clamp(150px,25vw,240px)] w-[clamp(150px,25vw,240px)] rounded-full overflow-hidden shadow-2xl mb-8"
        >
          <Image
            src={surya}
            alt="Surya Sanity"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-[clamp(2rem,10vw,6rem)] font-extrabold text-white tracking-tight leading-[0.9] mb-4">
            Hey, I am
            <span>&nbsp;</span>
            <span className="purplePinkGradient">
              Surya
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-[clamp(1rem,2.5vw,1.25rem)] text-white font-normal mb-6 tracking-wide"
        >
          Front-end Developer
        </motion.div>

        <Socials />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-row gap-3 flex-wrap justify-center items-center max-w-3xl px-4 mt-10"
        >
          {MyStackList.map((item, index) => {
            const style = getTechStyle(item);
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.25 }}
                className="rounded-lg px-4 py-2 flex text-[14px] font-semibold transition-all cursor-default backdrop-blur-sm border border-white/10"
                style={{
                  backgroundColor: style.bg,
                  color: style.text,
                }}
              >
                {item}
              </motion.div>
            );
          })}
        </motion.div>

        {!hideCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-12"
          >
            <CTA
              text="View my work 👇"
              onPress={() => triggerScroll()}
              className="rounded-lg px-10"
            />
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        whileHover={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 text-[10px] font-mono tracking-[0.15em] uppercase text-white/40 flex items-center gap-2 transition-opacity"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
        </span>
        <span>
          Running on my 8 years old{" "}
          <a
            href="https://pocof1-observability.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold hover:underline decoration-blue/50 underline-offset-4 transition-all"
          >
            POCO F1
          </a>
        </span>
      </motion.div>
    </section>
  );
};

export default ProfileContent;
