"use client";

import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const Socials = () => {
  const size = 35;

  const socialLinks = [
    { url: 'https://www.linkedin.com/in/surya-t/', label: 'LinkedIn' },
    { url: 'https://github.com/surya-sanity', label: 'GitHub' },
    { url: 'https://www.instagram.com/sanitycodes/', label: 'Instagram' },
    { url: 'mailto:surya.sanity@gmail.com', label: 'Email' },
  ];

  return (
    <div className='flex flex-wrap justify-center items-center gap-[12px]'>
      {socialLinks.map((link, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.25, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <SocialIcon
            target="_blank"
            rel="noopener noreferrer"
            url={link.url}
            style={{ height: size, width: size }}
            fgColor="white"
            bgColor="rgba(255,255,255,0.1)"
            className="hover:!bg-white/20 transition-colors"
            aria-label={link.label}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Socials;