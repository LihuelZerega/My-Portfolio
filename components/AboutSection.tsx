"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="flex flex-col text-center p-6">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold p-4"
      >
        About
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-lg p-4 xl:mx-24 2xl:mx-56"
      >
        I am a developer with a strong focus on quality and performance. I am
        constantly learning new technology and I am always willing to go above
        and beyond to get the job done. I am looking for a job in a software
        development team where I can use my skills and experience to create
        products that make a difference in the world. I am particularly
        interested in web development. I am confident that I can be a valuable
        asset to any team. I am a hard worker, I am a team player, and I am
        always willing to go above and beyond to get the job done. I am excited
        to start my career as a full stack web developer. I am confident that I
        can make significant contributions to the technology industry.
      </motion.p>
    </div>
  );
};

export default AboutSection;
