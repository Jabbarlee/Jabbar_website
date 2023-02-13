import React from "react";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { mobileContext } from "../mobileContext";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import Link from "next/link";
import { db } from "../firebase";

import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

export default function Projects2() {
  const { stopCurrentIndex, setStopCurrentIndex } = useContext(mobileContext);
  const { project, setProject } = useContext(mobileContext);
  var { currentIndex, setCurrentIndex } = useContext(mobileContext);
  const { projects, setProjects } = useContext(mobileContext);

  useEffect(() => {
    const getProject = async () => {
      setProject((await getDoc(doc(db, "Projects", `${currentIndex}`))).data());
    };

    getProject();
  }, [currentIndex]);

  useEffect(() => {
    const getProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "Projects"));

      setProjects(
        querySnapshot.docs.map(
          (doc) => (doc.data(), "collection Projects is showing")
        )
      );
    };

    getProjects();
  }, []);

  const NextProject = () => {
    if (currentIndex == projects.length) {
      setCurrentIndex(1);
    } else setCurrentIndex(currentIndex + 1);
  };

  const PreviousProject = () => {
    if (currentIndex == 1) {
      setCurrentIndex(projects.length);
    } else setCurrentIndex(currentIndex - 1);
  };

  console.log(projects.length, "Projects length");

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute font-GoblineOne md:top-20 top-16 uppercase tracking-[20px] text-blue-500 text-2xl">
        PROJECTS
      </h3>

      <div className="relative w-full flex  overflow-y-hidden  z-20">
        <div className="w-screen  flex-shrink-0 snap-start flex flex-col space-y-5 items-center text-black dark:text-white justify-center p-20 md:p-44 h-screen  ">
          <div className="pl-10 pr-10  flex justify-evenly items-center  ">
            <ArrowLeftCircleIcon
              className="md:h-12 h-8 min-w-fit pr-4 hover:w-10 hover:h-10 bg-blue-500 rounded-full  "
              onClick={PreviousProject}
            />
            <Link href={`${project?.link}`}>
              {" "}
              <motion.img
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 5 }}
                src={project?.url}
                className="w-80 md:w-[500px] md:h-[200px] "
              />
            </Link>

            <ArrowRightCircleIcon
              className="md:h-12 h-8 min-w-fit  pl-4 hover:w-10 hover:h-10  bg-blue-500 rounded-full  "
              onClick={NextProject}
            />
          </div>

          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <Link href={`${project?.link}`}>
              {" "}
              <h4 className="text-xl font-semibold text-center">
                {project?.number} {""} {"."}
                {""}
                {project?.title}
              </h4>
            </Link>

            <motion.div
              className="shadow-lg shadow-blue-800 hover:shadow-sm"
              initial={{ x: -200 }}
              whileInView={{ x: 1 }}
              transition={{
                duration: 3,
              }}
            >
              <Link href={`${project?.link}`}>
                <p className="">{project?.writeUp}</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
