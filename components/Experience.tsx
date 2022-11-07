import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";



const Experience = () => {

  return (
    <motion.div
      initial={{  opacity: 0 }}
      whileInView={{  opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="h-screen flex flex-col relative overflow-hidden md:flex-row max-w-full justify-evenly mx-auto items-center"
    >
      <h3 

      className="absolute uppercase top-20 md:top-16 tracking-[24px] x-20 text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex hover:scrollbar-thumb-[#303030b0] scrollbar-track-slate-400 scrollbar-thumb-[#5e5e5e8c] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full absolute top-24 space-x-5 overflow-x-scroll scroll whitespace-nowrap scroll-smooth p-10 snap-x snap-mandatory">
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
