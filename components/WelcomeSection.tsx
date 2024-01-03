"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import BigMemojiLogo from "@/components/BigMemojiLogo";
import ViewModals from "./ViewModals/ViewModals";

const WelcomeSection = () => {
  useEffect(() => {
    const options = {
      strings: ["FullStack", "Front-End", "Back-End"],
      typeSpeed: 50,
      backSpeed: 50,
      startDelay: 1000,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(".typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex shadow-xl px-2 py-12 sm:p-4 md:p-6 lg:p-12 xl:py-28 xl:px-24 2xl:py-44 2xl:px-36 dark:bg-[#121212]">
      <section className="w-full justify-center items-center text-center sm:w-1/2 sm:flex flex-col">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-bold mb-2 text-4xl sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
        >
          Hi, I am{" "}
          <span className="">
            Lihuel
          </span>
          , a{" "}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-semibold text-3xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
        >
          <span className="typed-text"></span> Developer.
        </motion.h2>
        <ViewModals />
      </section>

      <section className="hidden sm:block sm:w-1/2 justify-center items-center">
        <BigMemojiLogo />
      </section>
    </div>
  );
};

export default WelcomeSection;
