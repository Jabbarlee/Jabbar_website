import React from "react";
import { motion } from "framer-motion";

type Props = {
  text: string;

  text2: string;
  text3: string;
  text4: string;
};

const AnimatedTextCharacterMobile = ({ text, text2, text3, text4 }: Props) => {
  const letters = Array.from(text);
  const letters2 = Array.from(text2);
  const letters3 = Array.from(text3);
  const letters4 = Array.from(text4);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.03 * i },
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
          <motion.p className="text-base" variants={child} key={index}>
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
          <motion.p className="text-base" variants={child} key={index}>
            {letter2 === " " ? "\u00A0" : letter2}
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
        {letters3.map((letter3, index) => (
          <motion.p className="text-base" variants={child} key={index}>
            {letter3 === " " ? "\u00A0" : letter3}
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
        {letters4.map((letter4, index) => (
          <motion.p className="text-base" variants={child} key={index}>
            {letter4 === " " ? "\u00A0" : letter4}
            <br />
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedTextCharacterMobile;
