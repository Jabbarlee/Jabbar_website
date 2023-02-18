import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import BackgroundCircles from "./BackgroundCircles";
import { useEffect, useState } from "react";

import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default function Skills({}) {
  const [skills, setSkills] = useState([]);

  const [skillsNames, setSkillsNames] = useState([]);

  const [skillsIndex, setskillsIndex] = useState(1);

  const [SkillsName, setSkillsName] = useState([]);

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

  useEffect(() => {
    const getSkillsNames = async () => {
      const querySnapshot = await getDocs(collection(db, "skillsNames"));

      setSkillsNames(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, data: { skillsName: doc.data().skillsName } };
        })
      );
    };

    getSkillsNames();
  }, []);

  useEffect(() => {
    const getSkillsName = async () => {
      setSkillsName(
        (await getDoc(doc(db, "skillsNames", `${skillsIndex}`))).data()
      );
    };

    getSkillsName();
  }, [skillsIndex]);

  console.log("skilssname", SkillsName);

  useEffect(() => {
    setTimeout(() => {
      if (skillsIndex == skillsNames.length) {
        setskillsIndex(1);
      } else setskillsIndex(skillsIndex + 1);
    }, 5000);
  }, [skillsIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex relative flex-col text-center md:text-left  max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
    >
      <h3 className="absolute 2xl:top-[100px] 2xl:tracking-[30px] 2xl:text-4xl  font-GoblineOne md:top-20 top-16 uppercase tracking-[20px] text-blue-500 text-2xl">
        Skills
      </h3>
      <h2 className="absolute top-[110px] lg:top-[130px] 2xl:top-[180px] 2xl:text-2xl md:top-[130px]  text-[#8693AB] shadow-lg shadow-blue-300 font-bold tracking-[2px] rounded-full">
        {SkillsName?.skillsName}
      </h2>

      <BackgroundCircles />
      <div className="grid min-[500px]:grid-cols-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </div>
    </motion.div>
  );
}
