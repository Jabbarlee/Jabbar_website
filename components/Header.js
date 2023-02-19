import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion, AnimatePresence } from "framer-motion";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { mobileContext } from "../mobileContext";
import Link from "next/link";

import { useEffect } from "react";

const socialVariants = {
  hover: {
    scale: 1.1,

    transition: {
      duration: 0.3,
      repeat: "Infinity",

      repeatType: "mirror",
    },
  },
};
const buttonVariants = {
  hover: {
    scale: 1.1,

    textshadow: "0px 0px 8px, rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",

    transition: {
      duration: 0.3,
      repeat: "Infinity",

      repeatType: "mirror",
    },
  },
};

export default function Header() {
  const { hidden, setHidden } = useContext(mobileContext);

  const mobileNavheight = hidden ? "h-10" : "h-screen";

  const mobileNavColor = hidden ? "bg-white" : " bg-gray-200/90 ";

  const { theme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [menuOption, setMemuOption] = useState(false);
  useEffect(() => {
    setMounted(true);

    setTheme("dark");
  }, []);

  const firstStroke = menuOption ? "hidden" : "inline-block";

  const secondStroke = menuOption ? "-rotate-45" : "-rotate-0";

  const thirdStroke = menuOption ? "rotate-45" : "rotate-0";

  const fourthStroke = menuOption ? "hidden" : "inline-block";

  const translateItem = menuOption ? "translate-x-0" : "translate-x-full";

  const mobileClickTriggers = menuOption
    ? ""
    : "dark:bg-opacity-10 bg-opacity-10 dark:bg-white bg-black border-collapse border shadow-lg  border-b-0  ";
  const renderThemeChanger = () => {
    if (!mounted) return false;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-6 h-6 mr-2 text-white role-button hover:animate-spin z-20 "
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-6 h-6 mr-2 text-black  role-button hover:animate-spin-slow z-20 "
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  useEffect(() => {
    hidden
      ? ""
      : setTimeout(() => {
          setHidden(!hidden);
        }, 5000);
  }, [hidden]);

  return (
    <motion.header
      initial={{
        x: 500,
        opacity: 0,

        scale: 0.5,
      }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay: 2 }}
      className={`sticky top-0  ${mobileClickTriggers}   flex md:flex-row items-center justify-between   max-w-8xl  z-20  xl:items-center  md:h-14 2xl:h-20   h-10  `}
    >
      {/* Social icons */}

      <motion.div
        className=" hidden md:block "
        variants={socialVariants}
        whileHover="hover"
      >
        <motion.span>
          <SocialIcon
            url="https://www.youtube.com/@momohabduljabbar8469"
            fgColor="blue"
            bgColor="transparent"
          />
        </motion.span>

        <span>
          <SocialIcon
            url="https://twitter.com/NIGERIAN_KING2?s=09"
            fgColor="blue"
            bgColor="transparent"
          />
        </span>
        <span>
          <SocialIcon
            url="https://www.linkedin.com/in/momoh-abdul-jabbar-183260161"
            fgColor="blue"
            bgColor="transparent"
          />
        </span>

        <span>
          <SocialIcon
            url="https://github.com/jabbarlee"
            fgColor="blue"
            bgColor="transparent"
          />
        </span>
        <a href="MOMOH_ABDUL JABBAR_Resume.pdf">
          <span className="dark:text-blue-500 shadow-md shadow-blue-700">
            Download CV
          </span>
        </a>
      </motion.div>

      <div className="md:flex md:block hidden  md:flex-row md:items-center  cursor-pointer mr-6 ">
        {renderThemeChanger()}

        <motion.p
          className="uppercase  hidden md:inline-flex  text-blue-700 text-md  mr-4"
          variants={buttonVariants}
          whileHover="hover"
        >
          CONTACT ME
        </motion.p>
      </div>

      <div className="flex md:hidden  flex-row items-center  cursor-pointer ml-4  ">
        {renderThemeChanger()}
      </div>

      <div
        className="absolute md:hidden top-0 right-0 text-blue-600 h-8 w-8 cursor-pointer overflow-visible  mr-3 z-20"
        onClick={() => setMemuOption(!menuOption)}
      >
        <span
          className={`inline-block w-6 h-0.5 absolute 
         rounded-sm top-3 bg-blue-600 ${firstStroke}`}
        ></span>
        <span
          className={`inline-block w-6 h-0.5 absolute 
         rounded-sm top-5 bg-blue-600 ${secondStroke} duration-1000`}
        ></span>
        <span
          className={`inline-block w-6 h-0.5 absolute 
         rounded-sm top-5 bg-blue-600 ${thirdStroke} duration-1000`}
        ></span>

        <span
          className={`inline-block w-6 h-0.5 absolute 
         rounded-sm top-7 bg-blue-600 ${fourthStroke}`}
        ></span>
      </div>

      <div className=" md:hidden absolute top-0 right-0 w-48 h-96 overflow-hidden ">
        <div
          className={`abolute ${translateItem} flex flex-col justify-between w-48 h-96 transition duration-700 border-t-0 border-l-0 dark:bg-black bg-gray-400 font-GoblineOne border border-white opacity-80 -right-100`}
        >
          <div className="flex">
            <nav className="self-center ">
              <ul className="flex flex-col pt-5 space-y-2 ml-2 font-extrabold  ">
                <a href="#hero">
                  <li
                    className="my-2 mr-8 dark:text-white cursor-pointer"
                    onClick={() => setMemuOption(false)}
                  >
                    Portfolio
                  </li>
                </a>
                <a href="#about">
                  <li
                    className="my-2 mr-8 dark:text-white cursor-pointer"
                    onClick={() => setMemuOption(false)}
                  >
                    About
                  </li>
                </a>

                <a href="#quotes">
                  <li
                    className="my-2 mr-8 dark:text-white cursor-pointer"
                    onClick={() => setMemuOption(false)}
                  >
                    Quotes
                  </li>
                </a>

                <a href="#skills">
                  <li
                    className="my-2 mr-8 dark:text-white cursor-pointer"
                    onClick={() => setMemuOption(false)}
                  >
                    Skills
                  </li>
                </a>
                <a href="#projects2">
                  <li
                    className="my-2 mr-8 dark:text-white cursor-pointer"
                    onClick={() => setMemuOption(false)}
                  >
                    Projects
                  </li>
                </a>

                <a href="#contact">
                  <li
                    className="my-2 mr-8 dark:text-white cursor-pointer "
                    onClick={() => setMemuOption(false)}
                  >
                    Contact ME
                  </li>
                </a>

                <a href="MOMOH_ABDUL JABBAR_Resume.pdf">
                  <li
                    className="my-2 mr-8 dark:text-white cursor-pointer "
                    onClick={() => setMemuOption(false)}
                  >
                    Download CV
                  </li>
                </a>
              </ul>
            </nav>
            <div className="flex flex-col mt-10 space-y-4">
              <span>
                <SocialIcon
                  url="https://www.youtube.com/@momohabduljabbar8469"
                  fgColor="blue"
                  bgColor="transparent"
                  style={{ height: 45, width: 45 }}
                />
              </span>

              <span>
                <SocialIcon
                  url="https://twitter.com/NIGERIAN_KING2?s=09"
                  fgColor="blue"
                  bgColor="transparent"
                  style={{ height: 45, width: 45 }}
                />
              </span>
              <span>
                <SocialIcon
                  url="https://www.linkedin.com/in/momoh-abdul-jabbar-183260161"
                  fgColor="blue"
                  bgColor="transparent"
                  style={{ height: 45, width: 45 }}
                />
              </span>

              <span>
                <SocialIcon
                  url="https://github.com/jabbarlee"
                  fgColor="blue"
                  bgColor="transparent"
                  style={{ height: 45, width: 45 }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
