"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BigMemoji1 from "@/app/Images/BigMemoji.png";
import BigMemoji2 from "@/app/Images/BigMemoji2.png";

const BigMemojiLogo = () => {
  const [image, setImage] = React.useState(BigMemoji1);

  const onMouseEnter = () => {
    setImage(BigMemoji2);
  };

  const onMouseOut = () => {
    setImage(BigMemoji1);
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
    },
    initial: {
      scale: 1,
    },
  };

  return (
    <div className="flex justify-center items-center">
      <section className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        <motion.div
          variants={imageVariants}
          initial="initial"
          whileHover="hover"
        >
          <Image
            src={image}
            width={150}
            alt="BigMemoji1"
            className=""
            onMouseEnter={onMouseEnter}
            onMouseOut={onMouseOut}
          />
        </motion.div>
      </section>

      <section className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
        <motion.div
          variants={imageVariants}
          initial="initial"
          whileHover="hover"
        >
          <Image
            src={image}
            width={200}
            alt="BigMemoji1"
            className=""
            onMouseEnter={onMouseEnter}
            onMouseOut={onMouseOut}
          />
        </motion.div>
      </section>

      <section className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
        <motion.div
          variants={imageVariants}
          initial="initial"
          whileHover="hover"
        >
          <Image
            src={image}
            width={250}
            alt="BigMemoji1"
            className=""
            onMouseEnter={onMouseEnter}
            onMouseOut={onMouseOut}
          />
        </motion.div>
      </section>

      <section className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
        <motion.div
          variants={imageVariants}
          initial="initial"
          whileHover="hover"
        >
          <Image
            src={image}
            width={300}
            alt="BigMemoji1"
            className=""
            onMouseEnter={onMouseEnter}
            onMouseOut={onMouseOut}
          />
        </motion.div>
      </section>

      <section className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
        <motion.div
          variants={imageVariants}
          initial="initial"
          whileHover="hover"
        >
          <Image
            src={image}
            width={400}
            alt="BigMemoji1"
            className=""
            onMouseEnter={onMouseEnter}
            onMouseOut={onMouseOut}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default BigMemojiLogo;
