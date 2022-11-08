import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  let props1 = {
    title: "Intern at Cliqmetrics",
    techs: ["GoLang", "GCP", "PostgreSQL"],
    startDate: "1/09/2022",
    endDate: "present",
    works: ["Marketing automation tool.","Database Management","Backend"],
  };
  let props2 = {
    title: "GDSC KIIT ML team",
    techs: ["Python"],
    startDate: "1/08/2022",
    endDate: "present",
    works: ["PyTorch", "Tensorflow", "SciKit Learn"],
  };
  let props3 = {
    title: "More to come",
    techs: ["Dev working on it."],
    startDate: "present",
    endDate: "present",
    works: ["Full Stack", "ML", "Blockchain"],
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="h-screen flex flex-col relative overflow-hidden md:flex-row max-w-full justify-evenly mx-auto items-center"
    >
      <h3 className="absolute uppercase top-20 md:top-16 tracking-[24px] x-20 text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex hover:scrollbar-thumb-[#303030b0] scrollbar-track-slate-400 scrollbar-thumb-[#5e5e5e8c] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full absolute top-24 space-x-5 overflow-x-scroll scroll whitespace-nowrap scroll-smooth p-10 snap-x snap-mandatory">
        <ExperienceCard {...props1} />
        <ExperienceCard {...props2} />
        <ExperienceCard {...props3} />
      </div>
    </motion.div>
  );
};

export default Experience;
