import React from "react";
import Tilt from "react-parallax-tilt";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion, useDragControls } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";

import Image from "next/image";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi ,i'm ABDUL JABBAR",
      "i am coding from space ",
      "Learning and improving is my hobby",
      "i breath codes ",
      "I am not afraid of challenges..",
    ],

    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen w-screen  flex justify-center items-center relative overflow-hidden">
      <BackgroundCircles />

      <motion.div
        className="absolute z-0 top-96 md:left-4 -left-20  min-[500px]:left-6 min-[500px]:left-6 min-h-[1366px]:top-10 animate-spin-slow 2xl:hidden"
        initial={{ y: -800, scale: 0.1 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <div className=" relative w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem]   2xl:hidden rounded-full overflow-hidden dark:shadow-white shadow-blue-100 dark:shadow-5xl shadow-lg animate-spin-2 ">
          <Image
            className=" absolute w-full h-full object-cover"
            src="https://res.cloudinary.com/demo/image/fetch/https://toppng.com/uploads/preview/earth-png-transparent-image-transparent-background-earth-11563182789blbg560h5w.png"
            width={100}
            height={100}
            alt="earth"
          ></Image>
        </div>
      </motion.div>

      <motion.div
        className="absolute z-0 top-96  -left-20  hidden 2xl:block animate-spin-slow 2xl:top-[700px]"
        initial={{ y: -1700, scale: 0.1 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <div className=" relative   2xl:w-[40rem] 2xl:h-[40rem] rounded-full overflow-hidden dark:shadow-white shadow-blue-100 dark:shadow-5xl shadow-lg animate-spin-2 hidden 2xl:block ">
          <Image
            className=" absolute w-full h-full object-cover"
            src="https://res.cloudinary.com/demo/image/fetch/https://toppng.com/uploads/preview/earth-png-transparent-image-transparent-background-earth-11563182789blbg560h5w.png"
            width={100}
            height={100}
            alt="earth"
          ></Image>
        </div>
      </motion.div>

      <Tilt tiltReverse>
        <motion.div className=" w-[300px] h-[450px] dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-10 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm z-30 lg:w-[800px] lg:h-[480px] md:w-[600px] md:h-[400px] lg:mt-12 md:mt-0 min-[500px]:w-[400px] min-[500px]:h-80 2xl:w-[1000px] 2xl:h-[600px] ">
          <div className="flex flex-col h-[450px] min-[500px]:h-80  items-center justify-evenly lg:h-[500px] md:h-[370px] ">
            <img
              className="border z-10 h-[250px] min-[500px]:h-44   min-[500px]:w-56  w-42 object-cover  overflow-hidden rounded-md border-r-0 border-b-0 lg:h-64 lg:w-96 md:h-[200px] md:w-[350px] 2xl:h-[300px] 2xl:w-[500px] opacity-90"
              src="https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif"
              alt="unable to load image"
            />
            <div className="z-10 font-poppins dark:text-white text-black text-2xl md:text-2xl 2xl:text-4xl lg:tracking-wider lg:text-3xl dopacity-50">
              Web Wizard
            </div>
            <div className="font-poppins text-black font-bold dark:text-white md:text-2xl opacity-90 text-center 2xl:text-4xl ">
              {text}
              <Cursor />
            </div>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
}
