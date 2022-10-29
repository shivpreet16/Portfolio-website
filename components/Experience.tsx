import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      viewport={{ once: true }}
      className="h-screen flex flex-col relative overflow-hidden md:flex-row max-w-full justify-evenly mx-auto items-center"
    >
      <motion.h3 
      drag
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
      className="absolute uppercase top-20 md:top-16 tracking-[24px] x-20 text-gray-500 text-2xl">
        Experience
      </motion.h3>

      <div className="w-full flex absolute top-24 space-x-5 overflow-x-scroll scroll whitespace-nowrap scroll-smooth p-10 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        {/* ExperienceCard */}
        {/* ExperienceCard */}
        {/* ExperienceCard */}
      </div>
    </motion.div>
  );
};

export default Experience;
