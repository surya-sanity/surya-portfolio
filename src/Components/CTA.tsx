import { motion } from "framer-motion";
import { IconType } from "react-icons/lib";

interface CTAProps {
  text: string;
  onPress: () => void;
  icon?: IconType;
}

function CTA(props: CTAProps) {
  const { text, onPress } = props;

  return (
    <motion.button
      onClick={onPress}
      className="flex flex-row items-center px-2.5 py-1 rounded-lg bg-blue cursor-pointer"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      <div className="text-white font-semibold ">{text}</div>
    </motion.button>
  );
}

export default CTA;
