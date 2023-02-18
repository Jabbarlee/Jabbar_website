import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center "
    >
      <div className="absolute border [#333333] rounded-full md:h-[200px] md:w-[200px] h-[50px] w-[50px] mt-52 animate-ping" />
      <div className="absolute border [#333333] rounded-full md:h-[300px] md:w-[300px] h-[100px] w-[100px] mt-52 animate-ping" />
      <div className="absolute border [#333333] rounded-full  h-[150px] w-[150px] md:hidden mt-52 animate-ping" />
      <div className="absolute border [#333333] rounded-full md:h-[500px] md:w-[500px] h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border [#333333] rounded-full h-[800px] w-[800px] mt-52 animate-ping" />
    </motion.div>
  );
}
