import React from "react";
import { motion } from "framer-motion";
// import img from "../assets/ken.jpg";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        
        className="bground h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <motion.h3 
        drag
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
        className="absolute uppercase top-24 tracking-[24px] text-gray-500 text-2xl">
          About
        </motion.h3>
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className="mb-20 md:mb-0 relative left-16 hidden flex-shrink-0 w-56 h-56 md:w-64 md:h-95 md:block"
        >
          <Image
            src=""
            height={200}
            width={200}
            className="rounded-full md:rounded-lg object-cover"
            alt="img"
          />
        </motion.div>
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-2xl md:text-4xl font-semibold tracking-[2px] mt-4">
            Wondering who am I?
          </h4>
          <p className="text-[1em] md:text-[0.9em] mt-2 text-justify">
            I am currently working as a Backend Engineer at CliqMetrics. I am
            persuing BTech. (2021-2025) at KIIT, Bhubaneshwar in Computer
            Science and Engineering. I am also a part of the ML Team at GDSC
            KIIT. Math as intrigued me from a young and in 11th Computer Sience
            found a soft spot in my heart. I started programming when I was in
            8th grade. Most of my experience has been with Web Dev and ML. I am
            currently focusing on full-stack development and i am aiming to move
            towards blockchain.
          </p>
        </div>
      </motion.div>
  <motion.div 
  initial={{
    skewY:0,
  }}
  whileInView={{
    skewY:-10,
  }}
  transition={{
    type:"spring",
    stiffness: 100,
    delay:0.1
  }}
  className="w-full absolute top-[35%] lg:top-[20%] bg-[#f7ab0a]/10 h-[300px] md:h-[500px] -skew-y-12"/>
    </div>
  );
};

export default About;
