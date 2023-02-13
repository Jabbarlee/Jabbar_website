import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Skill({ skill }) {
  const [skillMotion, setSkillMotion] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (skillMotion == 6) {
        setSkillMotion(1);
      } else {
        setSkillMotion(skillMotion + 1);
      }
    }, 6000);
  }, [skillMotion]);

  console.log(skillMotion, "skillmotion");

  if (skillMotion == 1) {
    return (
      <div className=" group relative flex cursor-pointer">
        <motion.img
          initial={{ y: 100, rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 4 }}
          whileInView={{ y: 0, rotate: 0 }}
          src={skill?.data?.link}
          className="rounded-full border border-gray-500 object-cover w-12 h-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-blue-500 group-hover:shadow-lg group-hover:shadow-white group-hover:animate-spin w-10 h-10 xl:w-20 xl:h-20 rounded-full z-0">
          <div className="flex items-center justify-center h-full "></div>
        </div>
      </div>
    );
  }
  if (skillMotion == 2) {
    return (
      <div className=" group relative flex cursor-pointer">
        <motion.img
          initial={{ y: -100 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 4 }}
          whileInView={{ y: 0 }}
          src={skill?.data?.link}
          className="rounded-full border border-gray-500 object-cover w-12 h-12 md:w-16 md:h-16  filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-blue-500 group-hover:shadow-lg group-hover:shadow-white group-hover:animate-spin w-10 h-10 xl:w-20 xl:h-20 rounded-full z-0">
          <div className="flex items-center justify-center h-full "></div>
        </div>
      </div>
    );
  }

  if (skillMotion == 3) {
    return (
      <div className=" group relative flex cursor-pointer">
        <motion.img
          initial={{ x: 100 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 4 }}
          whileInView={{ x: 0 }}
          src={skill?.data?.link}
          className="rounded-full border border-gray-500 object-cover w-12 h-12 md:w-16 md:h-16  filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-blue-500 group-hover:shadow-lg group-hover:shadow-white group-hover:animate-spin w-10 h-10 xl:w-20 xl:h-20 rounded-full z-0">
          <div className="flex items-center justify-center h-full "></div>
        </div>
      </div>
    );
  }
  if (skillMotion == 4) {
    return (
      <div className=" group relative flex cursor-pointer">
        <motion.img
          initial={{ x: -100, scale: 1.2 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 4 }}
          whileInView={{ x: 0, scale: 1 }}
          src={skill?.data?.link}
          className="rounded-full border border-gray-500 object-cover w-12 h-12 md:w-16 md:h-16  filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-blue-500 group-hover:shadow-lg group-hover:shadow-white group-hover:animate-spin w-10 h-10 xl:w-20 xl:h-20 rounded-full z-0">
          <div className="flex items-center justify-center h-full "></div>
        </div>
      </div>
    );
  }

  if (skillMotion == 5) {
    return (
      <div className=" group relative flex cursor-pointer">
        <motion.img
          initial={{ rotate: 360, scale: 0.7 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 4 }}
          whileInView={{ rotate: 0, scale: 1 }}
          src={skill?.data?.link}
          className="rounded-full border border-gray-500 object-cover w-12 h-12 md:w-16 md:h-16  filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-blue-500 group-hover:shadow-lg group-hover:shadow-white group-hover:animate-spin w-10 h-10 xl:w-20 xl:h-20 rounded-full z-0">
          <div className="flex items-center justify-center h-full "></div>
        </div>
      </div>
    );
  }

  if (skillMotion == 6) {
    return (
      <div className=" group relative flex cursor-pointer">
        <motion.img
          initial={{ rotate: 180 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 4 }}
          whileInView={{ rotate: 0 }}
          src={skill?.data?.link}
          className="rounded-full border border-gray-500 object-cover w-12 h-12 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-blue-500 group-hover:shadow-lg group-hover:shadow-white group-hover:animate-spin w-10 h-10 xl:w-20 xl:h-20 rounded-full z-0">
          <div className="flex items-center justify-center h-full "></div>
        </div>
      </div>
    );
  }
}
