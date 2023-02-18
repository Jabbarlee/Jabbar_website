import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Skill({ skill }) {
  const [skillMotion, setSkillMotion] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (skillMotion == 3) {
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
          initial={{ rotate: -360, scale: 1.2 }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
          whileInView={{ rotate: 0, scale: 1 }}
          src={skill?.data?.link}
          className="rounded-full lg:w-[55px] lg:h-[55px]  border border-gray-500 object-cover h-12 w-12 2xl:h-[80px] 2xl:w-[80px]  min-[500px]:h-12 min-[500px]:w-12 md:w-16 md:h-16 filter "
        />
        <div className="absolute opacity-0  w-10 h-10 xl:w-20 xl:h-20 rounded-full z-0">
          <div className="flex items-center justify-center h-full "></div>
        </div>
      </div>
    );
  }

  if (skillMotion == 2) {
    return (
      <div className=" group relative flex cursor-pointer">
        <motion.img
          initial={{ rotate: 360, scale: 0.8 }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
          whileInView={{ rotate: 0, scale: 1 }}
          src={skill?.data?.link}
          className="rounded-full lg:w-[55px] lg:h-[55px]  border border-gray-500 h-12 w-12 2xl:h-[80px] 2xl:w-[80px] min-[1728px]:w-[100px] min-[1728px]:h-[100px]  object-cover min-[500px]:h-12 min-[500px]:w-12 md:w-16 md:h-16  filter"
        />
        <div className="absolute opacity-0  w-10 h-10 xl:w-20 xl:h-20 rounded-full z-0">
          <div className="flex items-center justify-center h-full "></div>
        </div>
      </div>
    );
  }

  if (skillMotion == 3) {
    return (
      <div className=" group relative flex cursor-pointer">
        <motion.img
          initial={{ rotate: -180 }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
          whileInView={{ rotate: 0 }}
          src={skill?.data?.link}
          className="rounded-full border border-gray-500 h-12 w-12 2xl:h-[80px] min-[1728px]:w-[100px] min-[1728px]:h-[100px]  2xl:w-[80px] object-cover min-[500px]:h-12 min-[500px]:w-12 md:w-16 md:h-16 lg:w-[55px] lg:h-[55px]  filter "
        />
        <div className="absolute opacity-0 w-10 h-10 xl:w-20 xl:h-20 rounded-full z-0">
          <div className="flex items-center justify-center h-full "></div>
        </div>
      </div>
    );
  }
}
