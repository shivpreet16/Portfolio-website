import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="h-screen flex relative flex-col text-center items-center xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto"
    >
      
      <motion.h3 
      drag
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
      className="absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl">
        skills
      </motion.h3>

      <motion.h3 
      drag
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
      className="absolute top-44 uppercase tracking-[3px] text-gray-500">
        Hover over for current proficiency
      </motion.h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
