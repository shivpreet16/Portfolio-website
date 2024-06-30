import React from "react";
import { motion } from "framer-motion";
import ProjectCards from "./ProjectCards";
type Props = {};
import { projects } from "../assets/_constants";
interface Project {
  title: string;
  imageUrl: string;
  techs: string[];
  description: string;
  githubLink: string;
  deployLink: string;
  imgBg:boolean;
  imgStyles: { width: string; height: string };
}

const Projects = (props: Props) => {
  return (
    <div className="h-screen relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
        className="bground h-screen w-full flex flex-col relative text-center md:text-left md:flex-row  px-10 justify-evenly mx-auto items-center"
      >
        <motion.h3
          drag
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
          className="absolute uppercase top-20 tracking-[24px] text-gray-500 text-2xl"
        >
          Projects
        </motion.h3>
        <div className="w-full flex hover:scrollbar-thumb-[#303030b0] scrollbar-track-slate-400 scrollbar-thumb-[#5e5e5e8c] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full absolute top-24 space-x-5 overflow-x-scroll scroll whitespace-nowrap scroll-smooth p-10 xl:pl-20 snap-x snap-mandatory z-10">
          {projects.map((project: Project, index) => (
            <ProjectCards
            key={project.title}
              title={project.title}
              techs={project.techs}
              description={project.description}
              imageUrl={project.imageUrl}
              githubLink={project.githubLink}
              deployLink={project.deployLink}
              left={index != 0 ? true : false}
              right={index != projects.length - 1 ? true : false}
              imgBg={project.imgBg}
              imgStyles={project.imgStyles}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{
          skewY: 0,
        }}
        whileInView={{
          skewY: 10,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.1,
        }}
        className="w-full absolute top-[35%] lg:top-[20%] bg-[#f7ab0a]/10 h-[300px] md:h-[60vh] -skew-y-12"
      />
    </div>
  );
};

export default Projects;
