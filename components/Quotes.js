import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

import { db } from "../firebase";
import { useState, useEffect } from "react";

export default function Quotes() {
  const [quoteIndex, setQuoteindex] = useState(3);
  const [quotes, setQuotes] = useState([]);

  const [quote, setQuote] = useState(null);
  useEffect(() => {
    const getQuote = async () => {
      setQuote((await getDoc(doc(db, "Quotes", `${quoteIndex}`))).data());
    };

    getQuote();
  }, [quoteIndex]);

  useEffect(() => {
    const getQuotes = async () => {
      const querySnapshot = await getDocs(collection(db, "Quotes"));

      setQuotes(querySnapshot.docs.map((doc) => doc.data()));
    };

    getQuotes();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (quoteIndex == quotes.length) {
        setQuoteindex(1);
      } else setQuoteindex(quoteIndex + 1);
    }, 20000);
  }, [quoteIndex]);

  return (
    <div className="flex flex-row relative h-screen  justify-center  w-screen">
      <div className="absolute 2xl:top-[150px] 2xl:tracking-[30px] 2xl:text-4xl font-GoblineOne lg:top-20 top-16 uppercase tracking-[20px] text-blue-500 lg;text-2xl text-2xl  ">
        Quotes
      </div>

      <div className="absolute top-40 lg:max-w-4xl md:max-w-md max-w-[350px]  2xl:max-w-[1400px]  flex flex-col space-y-8 2xl:space-y-16">
        <div className="w-full flex lg:justify-end 2xl:justify-end justify-center ">
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Image
              src={`https://res.cloudinary.com/demo/image/fetch/${quote?.quoteImage}`}
              width={100}
              height={100}
              alt=""
              className="h-[250px] w-[300px] lg:h-[200px] lg:w-[200px]  2xl:w-[400px] 2xl:h-[400px]   2xl:pt-8 "
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="dark:text-white text-black font-PlayFair lg:text-2xl 2xl:text-4xl text-center"
        >
          {quote?.writeUp}
        </motion.p>
        <div className="w-full flex justify-end ">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 3 }}
            className="dark:text-white text-black font-GreatVibes lg:text-xl 2xl:text-2xl"
          >
            {`~ ${quote?.authorName}`}
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
