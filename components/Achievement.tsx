import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  img: string; // Adjust this type based on your image import types
  directionLeft: boolean;
  title: string;
  width:number;
};

const Achievement: React.FC<Props> = ({ img, directionLeft, title, width }) => {
  // Animation variants based on the direction prop
  const variants = {
    initial: {
      x: directionLeft ? -50 : 50, // Start from left or right based on directionLeft
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <Image src={img} alt={title} width={width} height={100} className="rounded-full" />
      <p className="text-sm text-center mt-2">{title}</p>
    </motion.div>
  );
};

export default Achievement;
