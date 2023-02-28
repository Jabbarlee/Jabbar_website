import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { mobileContext } from "../mobileContext";

import AnimatedTextCharacterMobile from "./AnimatefTextCharacterMobile";

import AnimatedTextCharacterPhones from "./AnimatefTextCharacterPhones";
import AnimatedTextCharacterIpad from "./AnimatedTextCharacterIpad";
import { useEffect } from "react";
import AnimatedTextCharacter2xl from "./AnimatedTextCharacter2xl";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

export default function About() {
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
    <div className="  flex flex-col relative h-screen text-center md:text-left lg:flex-row md:flex-col max-w-7xl      px-10 justify-evenly mx-auto items-center  ">
      <h3 className="absolute md:top-20 top-16 2xl:top-[150px] uppercase tracking-[20px] 2xl:tracking-[30px] text-blue-500 font-GoblineOne text-2xl 2xl:text-4xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={myImages?.AboutImage}
        className="md:mb-0 md:mt-10 object-cover md:rounded-lg md:w-[400px] 2xl:h-[650px] 2xl:w-[500px] md:h-[500px] xl:w-[400px] xl:h-[500px] hidden md:block lg:h-[300px] lg:w-[180px] xl:pt-6 xl:mt-8"
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

      <div className="dark:text-white hidden   2xl:block text-black 2xl:text-2xl text-justify   md:px-10 2xl:w-[1100px]">
        <AnimatedTextCharacter2xl
          text={`I am Abdul Jabbar, i am a Software engineer but mostly called a
software wizard by my friends `}
          text2={`because of how fast i was able to pick
up coding . i have experience with web development . `}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5, delay: 3 }}
        >
          my principle in life is "There is nothing on earth that is difficuit
          if you put your mind and effort into it." I have a high work ethic and
          I have worked on different projects. I am a fullstack developer who
          never accepts no as an answer . I have acquired a number of skills
          with my
        </motion.p>

        <motion.p
          initial={{ y: 400, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{ duration: 4, delay: 6 }}
        >
          determination which includes, html, css, javacript,tailwind
          css,framer-motion ,firebase,sanity ,next.js and so on. I am currently
          still improving and adding more skillset and learning Web 3
          development
        </motion.p>
      </div>

      <div className="dark:text-white hidden 2xl:hidden lg:block md:hidden text-black text-justify  md:px-10">
        <AnimatedTextCharacter
          text={`I am Abdul Jabbar, I am a Software engineer but mostly called a
software wizard by my friends because of how`}
          text2={`fast i was able to pick
up coding . I have experience with web development . my principle in
life is "There is `}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5, delay: 3 }}
        >
          nothing on earth that is difficuit if you put your mind and effort
          into it." I have a high work ethic and I have worked on different
          projects. I am a fullstack developer who never accepts no as an answer
          . I have acquired a
        </motion.p>

        <motion.p
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{ duration: 4, delay: 6 }}
        >
          number of skills with my determination which includes, html, css,
          javacript,tailwind css,framer-motion ,firebase,sanity ,next.js and so
          on. I am currently still improving and adding more skillset and
          learning Web 3 development
        </motion.p>
      </div>

      <div className="dark:text-white hidden 2xl:hidden lg:hidden md:block text-black w-[700px] text-justify  md:px-10">
        <AnimatedTextCharacterIpad
          text={`I am Abdul Jabbar, i am a Software engineer but mostly called a
software wizard by my `}
          text2={`friends because of how fast i was able to pick
up coding . I have experience with web `}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5, delay: 3 }}
        >
          development .My principle in life is "There is nothing on earth that
          is difficuit if you put your mind and effort into it." I have a high
          work ethic and I have worked on different projects. I am a fullstack
          developer who never accepts no as an answer . I have acquired
        </motion.p>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{ duration: 4, delay: 6 }}
        >
          a number of skills with my determination which includes, html, css,
          javacript,tailwind css,framer-motion ,firebase,sanity ,next.js and so
          on. I am currently still improving and adding more skillset and
          learning Web 3 development
        </motion.p>
      </div>
      {!showing && (
        <div className="dark:text-white md:hidden hidden min-[500px]:block mt-6 mx-auto max-w-sm text-justify ">
          <AnimatedTextCharacterMobile
            text={`I am Abdul Jabbar, i am a Software engineer but`}
            text2={`mostly called a software wizard by my friends because`}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 5, delay: 3 }}
          >
            of how fast i was able to pick up coding . I have experience with
            web development . My principle in life is "There is nothing on earth
            that is difficuit if you put your mind and effort into it." I have a
            high work ethic and i have worked on different projects. I am a
            fullstack developer who never accepts no as an answer . I have
            acquired a number of skills with my
          </motion.p>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 1, opacity: 1 }}
            transition={{ duration: 4, delay: 7 }}
          >
            determination which includes, html, css, javacript,tailwind
            css,framer-motion ,firebase,sanity ,next.js and so on. I am
            currently still improving and adding more skillset and learning Web
            3 development.
          </motion.p>
        </div>
      )}

      {!showing && (
        <div className="dark:text-white md:hidden  min-[500px]:hidden mt-6 mx-auto max-w-[300px] text-justify ">
          <AnimatedTextCharacterPhones
            text={`I am Abdul Jabbar, i am a Software engine-`}
            text2={`er but mostly called a software wizard by`}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 5, delay: 3 }}
          >
            my friends because of how fast i was able to pick up coding . I have
            experience with web development . My principle in life is "There is
            nothing on earth that is difficuit if you put your mind and effort
            into it." I have a high work ethic and i have worked on different
            projects. I am a fullstack developer who never accepts no as an
            answer . I have acquired a number of ski-
          </motion.p>

          <motion.p
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 1, opacity: 1 }}
            transition={{ duration: 4, delay: 7 }}
          >
            lls with my determination which includes, html, css,
            javacript,tailwind css,framer-motion ,firebase,sanity ,next.js and
            so on. I am currently still improving and adding more skillset and
            learning Web 3 development.
          </motion.p>
        </div>
      )}
    </div>
  );
}
