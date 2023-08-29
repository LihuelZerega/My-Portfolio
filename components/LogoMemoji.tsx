'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Memoji1 from "@/app/Images/Logo1.png";
import Memoji2 from "@/app/Images/Logo2.png";

const LogoMemoji = () => {
  const [image, setImage] = React.useState(Memoji1);

  const onMouseEnter = () => {
    setImage(Memoji2);
  };

  const onMouseOut = () => {
    setImage(Memoji1);
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
    <div>
      <div>
        <motion.div
          variants={imageVariants}
          initial="initial"
          whileHover="hover"
        >
          <Image
            src={image}
            width={30}
            alt="Memoji1"
            className=""
            onMouseEnter={onMouseEnter}
            onMouseOut={onMouseOut}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LogoMemoji;
