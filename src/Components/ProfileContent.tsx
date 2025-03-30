import { motion } from "framer-motion";
import CTA from "../Components/CTA";
import { getBackground } from "../Components/Works";
import { MyStackList } from "../appData";
import Socials from "./Socials";

const ProfileContent = ({ triggerScroll }: { triggerScroll: Function }) => {
  return (
    <div className="flex justify-center items-center mx-auto px-10 py-14 max-w-7xl">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="h-5 lg:h-5 xl:h-5 sm:h-2" />

        <motion.img
          animate={{ opacity: [0, 0.2, 0.3, 0.5, 1] }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="h-60 w-60 rounded-full bg-white"
          src="src/Assets/surya.jpeg"
        />
        <div className="h-2" />
        <motion.div
          animate={{ opacity: [0, 1], translateX: [200, 0] }}
          transition={{ duration: 0.2 }}
        >
          <div className="py-2 text-start text-8xl md:text-3xl sm:text-2xl font-extrabold text-white">
            Hey, I am
            <span>&nbsp;</span>
            <span className="text-start text-8xl md:text-3xl sm:text-2xl font-extrabold purplePinkGradient">
              Surya
            </span>
          </div>
        </motion.div>
        <div className="h-1" />
        <Socials />
        <div className="h-1" />
        <motion.div
          animate={{ opacity: [0, 1], translateX: [-200, 0] }}
          transition={{ duration: 0.2 }}
          className="py-2 text-start text-xl text-white font-normal mb-4"
        >
          Front-end Developer
        </motion.div>

        <motion.div
          animate={{ opacity: [0, 0.2, 0.3, 0.5, 1] }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="flex flex-row gap-4 flex-wrap justify-center items-center"
        >
          {MyStackList.map((item, index) => (
            <div
              key={index.toString()}
              className="rounded-full px-2 py-1 justify-center items-center flex text-white font-semibold hover:scale-125  transition-all ease-in-out cursor-default"
              style={{
                background: getBackground(item.length),
              }}
            >
              {item}
            </div>
          ))}
        </motion.div>

        <div className="md:h-3 sm:h-2 h-5" />
        <motion.div
          animate={{ opacity: [0, 1], translateX: [100, 0] }}
          transition={{ duration: 0.1, delay: 0.2 }}
        >
          <CTA
            text="View my work 👇"
            onPress={() => {
              triggerScroll();
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileContent;
