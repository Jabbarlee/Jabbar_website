import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { mobileContext } from "../mobileContext";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import AnimatedTextCharacterMobile from "./AnimatefTextCharacterMobile";

import { useEffect } from "react";

type Props = {};

export default function About({}: Props) {
  const {
    isVisible,
    setIsVisible,
    options,
    callbackFunction,
    myRef,
    showing,
    setShowing,
    myImages,
  } = useContext(mobileContext);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    if (myRef.current) observer.observe(myRef.current);

    return () => {
      if (myRef.current) observer.unobserve(myRef.current);
    };
  }, [myRef, options]);

  console.log(isVisible, "jabbarlee");

  useEffect(() => {
    isVisible
      ? setTimeout(() => {
          setShowing(!showing);
        }, 3000)
      : "";
  }, [isVisible]);

  return (
    <div className="  flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl      px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute md:top-20 top-16 uppercase tracking-[20px] text-blue-500 font-GoblineOne text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={myImages?.AboutImage}
        className="md:mb-0 object-cover md:rounded-lg md:w-60 md:h-80 xl:w-[400px] xl:h-[500px] hidden md:block"
      />

      {showing && (
        <motion.img
          ref={myRef}
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          src={myImages?.AboutImage}
          className={`mb-0 h-[400px] w-[300px] rounded-lg object-cover md:hidden`}
        />
      )}

      <div className="dark:text-white hidden md:block text-black   md:px-10">
        <AnimatedTextCharacter
          text={`I am Abdul Jabbar, i am a Software engineer but mostly called a
software wizard by my friends because of how`}
          text2={`Fast i was able to pick
up coding . i have experience with web devlopment . my principle in
life is "There is `}
          text3={`nothing on earth that is difficuit if you put your mind and effort into it." i have a high work ethic and i have`}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5, delay: 3 }}
        >
          worked on different projects. i am a fullstack developer who never
          accepts no as an answer . i have acquired a number of skills with my
          determination which includes, html, css, javacript,tailwind
          css,framer-motion ,firebase,sanity ,next.js and so on. i am currently
          still improving and adding more skillset and learning Web 3
        </motion.p>
      </div>

      {!showing && (
        <div className="dark:text-white md:hidden mt-6 mx-auto max-w-sm text-justify ">
          <AnimatedTextCharacterMobile
            text={`I am Abdul Jabbar, i am a Software engineer but`}
            text2={`mostly called a software wizard by my friends because`}
            text3={`of how fast i was able to pick up coding . i have`}
            text4={`experience with web devlopment . my principle in life `}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 5, delay: 3 }}
          >
            is "There is nothing on earth that is difficuit if you put your mind
            and effort into it." i have a high work ethic and i have worked on
            different projects. i am a fullstack developer who never accepts no
            as an answer . i have acquired a number of skills with my
            determination which includes, html, css, javacript,tailwind
            css,framer-motion ,firebase,sanity ,next.js and so on. i am
            currently still improving and adding more skillset and learning Web
            3 development.
          </motion.p>
        </div>
      )}
    </div>
  );
}
