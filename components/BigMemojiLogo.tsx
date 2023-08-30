'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BigMemoji1 from "@/app/Images/BigMemoji.png";
import BigMemoji2 from "@/app/Images/BigMemoji2.png";

const LogoMemoji = () => {
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
    <div>
      <div>
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
      </div>
    </div>
  );
};

export default LogoMemoji;
