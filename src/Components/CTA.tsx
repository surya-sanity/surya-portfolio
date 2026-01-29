"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons/lib";

interface CTAProps {
  text: string;
  onPress: () => void;
  icon?: IconType;
  className?: string;
}

function CTA(props: CTAProps) {
  const { text, onPress, icon: Icon, className = "" } = props;

  return (
    <motion.button
      onClick={onPress}
      className={`
        group relative flex flex-row items-center gap-2 px-8 py-3.5 
        rounded-lg bg-blue text-white font-bold text-lg
        shadow-[0_0_20px_rgba(0,112,243,0.3)] hover:shadow-[0_0_30px_rgba(0,112,243,0.5)]
        transition-all duration-300 overflow-hidden ${className}
      `}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

      {Icon && <Icon className="w-5 h-5" />}
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
}

export default CTA;
