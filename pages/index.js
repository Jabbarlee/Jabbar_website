import Head from "next/head";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";

import ContactMe from "../components/ContactMe";

import Projects2 from "../components/Projects2";
import Quotes from "../components/Quotes";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setMounted(true);
  }, []);

  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  if (!mounted) return false;
  const PageTheme =
    theme === "dark"
      ? "dark:bg-gray-900"
      : "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900";
  return (
    <div
      className={` h-screen snap-y  snap-mandatory z-0 overflow-y-scroll  ${PageTheme}  overflow-x-hidden scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-blue-800 bg-regal-blue  `}
    >
      <Head>
        <title>Jabbars Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="quotes" className="snap-start">
        <Quotes />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects2" className="snap-start">
        <Projects2 />
      </section>

      {/*contact me*/}

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
