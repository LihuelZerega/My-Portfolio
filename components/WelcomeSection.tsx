"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import ImImage from "./ImImage";

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
    <div className="flex">
      <section className="w-1/2 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-7xl font-bold mb-4"
        >
          Hi, I am{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bac3d2] via-[#fdefd5] to-[#f8d3c0]">
            Lihuel
          </span>
          , a{" "}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-4xl font-semibold"
        >
          <span className="typed-text"></span> Developer.
        </motion.h2>
      </section>

      <section className=" w-1/2 flex justify-center items-center">
        <ImImage />
      </section>
    </div>
  );
};

export default WelcomeSection;
