import React from "react";
import { motion } from "framer-motion";

const AnimatedTextCharacter = ({ text, text2 }) => {
  const letters = Array.from(text);
  const letters2 = Array.from(text2);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div>
      <motion.div
        style={{ overflow: "hidden", display: "flex" }}
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        {letters.map((letter, index) => (
          <motion.p
            className="text-base text-justify"
            variants={child}
            key={index}
          >
            {letter === " " ? "\u00A0" : letter}
            <br />
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        style={{ overflow: "hidden", display: "flex" }}
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        {letters2.map((letter2, index) => (
          <motion.p
            className="text-base text-justify"
            variants={child}
            key={index}
          >
            {letter2 === " " ? "\u00A0" : letter2}
            <br />
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedTextCharacter;
