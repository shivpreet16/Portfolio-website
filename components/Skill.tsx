import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {
  img: any;
  directionLeft?:boolean;
};

const Skill = (props: Props) => {
  return (
    <motion.div
      drag
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
      initial={{
        x: props.directionLeft?-200:200,
        opacity:0
      }}
      transition={{
        duration: 1
      }}
      whileInView={{
        opacity:1,
        x:0
      }}
      className="group relative flex md:w-16 md:h-16 w-20 h-20 z-29"
    >
      <Image
        src={props.img}
        height={50}
        className="rounded-full pointer-events-none md:rounded-lg object-cover absolute z-0"
        alt="img"
      />
    </motion.div>
  );
};

export default Skill;
