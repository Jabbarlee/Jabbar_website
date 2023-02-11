import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import BackgroundCircles from "./BackgroundCircles";
import { useEffect, useState } from "react";

import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

type Props = {};

export default function Skills({}: Props) {
  useEffect(() => {
    const getSkills = async () => {
      const querySnapshot = await getDocs(collection(db, "Skills"));

      setSkills(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, data: { link: doc.data().link } };
        })
      );
    };

    getSkills();
  }, []);

  const [skills, setSkills] = useState([]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
    >
      <h3 className="absolute font-GoblineOne md:top-20 top-16 uppercase tracking-[20px] text-blue-500 text-2xl">
        Skills
      </h3>

      <BackgroundCircles />
      <div className="grid grid-cols-4 md:grid-cols-6 gap-5">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </div>
    </motion.div>
  );
}
