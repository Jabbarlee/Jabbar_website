import React from "react";
import Tilt from "react-parallax-tilt";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion, useDragControls } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";

import Image from "next/image";
type Props = {};

export default function Hero({}: Props) {
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
        className="absolute z-0 top-96 md:left-4 -left-20 animate-spin-slow"
        initial={{ y: -800, scale: 0.1 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <div className=" relative w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem]    rounded-full overflow-hidden dark:shadow-white shadow-blue-100 dark:shadow-5xl shadow-lg animate-spin-2">
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
        <motion.div className="container w-[400px] h-80 dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-10 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm z-30 md:w-[800px] md:h-[500px]">
          <div className="flex flex-col h-80 items-center justify-evenly md:h-[500px] ">
            <img
              className="border z-10 h-44 w-56  object-cover  overflow-hidden rounded-md border-r-0 border-b-0 md:h-64 md:w-96 opacity-90"
              src="https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif"
              alt="unable to load image"
            />
            <div className="z-10 font-poppins dark:text-white text-black  text-2xl tracking-wider md:text-3xl dopacity-50">
              Web Wizard
            </div>
            <div className="font-poppins text-black dark:text-white text-2xl opacity-90 ">
              {text}
              <Cursor />
            </div>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
}
