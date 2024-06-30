import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../assets/_constants";

interface Exp {
  title: string;
  techs: string[];
  startDate: string;
  endDate: string;
  works: string[];
  imgUrl:string;
}

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0 }}
      className="h-screen flex flex-col relative overflow-hidden md:flex-row max-w-full justify-evenly mx-auto items-center"
    >
      <h3 className="absolute uppercase top-20 md:top-16 tracking-[24px] x-20 text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex hover:scrollbar-thumb-[#303030b0] scrollbar-track-slate-400 scrollbar-thumb-[#5e5e5e8c] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full absolute top-24 space-x-5 overflow-x-scroll scroll whitespace-nowrap scroll-smooth p-10 xl:pl-20 snap-x snap-mandatory ">
        {experiences.map((experience: Exp, index: number) => (
          <ExperienceCard
            key={experience.title} 
            title={experience.title}
            techs={experience.techs}
            startDate={experience.startDate}
            endDate={experience.endDate}
            works={experience.works}
            left={index!=0?true:false}
            right={index!=experiences.length-1?true:false}
            imgUrl={experience.imgUrl}
            
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
