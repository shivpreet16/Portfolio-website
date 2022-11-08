import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import react from "../assets/react.png"
import js from "../assets/js.png"
import golang from "../assets/golang.png"
import html from "../assets/html.png"
import sass from "../assets/sass.png"
import css from "../assets/css.png"
import tailwind from "../assets/tailwind.jpg"
import next from "../assets/next.jpg"
import Postgresql from "../assets/Postgresql.png"
import cpp from "../assets/cpp.png"
import python from "../assets/python.png"
import java from "../assets/java.png"
import framer from "../assets/framer.png"
import github from "../assets/github.jpg"
import c from "../assets/c.png"

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
      className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        skills
      </motion.h3>

      <motion.h3 
      drag
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
      className="absolute top-32 uppercase tracking-[3px] text-gray-500">
        This is evergrowing!
      </motion.h3>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-9 lg:gap-11 absolute top-48 md:top-72">
        <Skill img={html} directionLeft={true}/>
        <Skill img={css} directionLeft={true}/>
        <Skill img={js} directionLeft={false}/>
        <Skill img={tailwind} directionLeft={false}/>
        <Skill img={react} directionLeft={false}/>
        <Skill img={sass} directionLeft={true}/>
        <Skill img={golang} directionLeft={true}/>
        <Skill img={Postgresql} directionLeft={false}/>
        <Skill img={next} directionLeft={false}/>
        <Skill img={framer} directionLeft={false}/>
        <Skill img={cpp} directionLeft={true}/>
        <Skill img={c} directionLeft={true}/>
        <Skill img={python} directionLeft={false}/>
        <Skill img={java} directionLeft={false}/>
        <Skill img={github} directionLeft={false}/>
        {/* <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill /> */}
      </div>
    </motion.div>
  );
};

export default Skills;
