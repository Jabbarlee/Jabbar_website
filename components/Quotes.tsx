import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

import { db } from "../firebase";
import { useState, useEffect } from "react";
type Props = {};

export default function Quotes({}: Props) {
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
      <div className="absolute font-GoblineOne md:top-20 top-16 uppercase tracking-[20px] text-blue-500 text-2xl  ">
        Quotes
      </div>

      <div className="absolute top-40 md:max-w-4xl max-w-md  flex flex-col space-y-4">
        <div className="w-full flex md:justify-end justify-center ">
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Image
              src={`https://res.cloudinary.com/demo/image/fetch/${quote?.quoteImage}`}
              width={200}
              height={200}
              alt=""
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="dark:text-white text-black font-PlayFair md:text-2xl text-center"
        >
          {quote?.writeUp}
        </motion.p>
        <div className="w-full flex justify-end ">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 3 }}
            className="dark:text-white text-black font-GreatVibes"
          >
            {`~ ${quote?.authorName}`}
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
