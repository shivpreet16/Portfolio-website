import React from "react";
import { motion } from "framer-motion";
import img from "../assets/img.jpg";
import Image from "next/image";

// Example about text structured with line breaks for multiple paragraphs
const about = "Hello! I'm Shivpreet, a dedicated Computer Science student at Kalinga Institute of Industrial Technology, where I've maintained an exceptional CGPA of 9.51/10. My passion for emerging technologies has led me to delve into programming languages such as JavaScript, Python, GoLang, and frameworks like React.js, Next.js, and Flask.\n\nMy academic pursuits have been complemented by internships at prestigious institutions, where I've developed expertise in backend development, computer vision, deep learning, and data analytics. Currently, I'm exploring the cutting-edge fields of genetic algorithms and quantum computing. I was a finalist in the JPMC Code for Good 2024, contributing to robust software development for Room To Read NGO, enhancing their educational outreach initiatives.\n\nMy achievements include receiving the Best Award of Research Forum for 'Revolutionizing Talent Acquisition' and presenting a paper on 'IoT in Pisciculture' at an IEEE conference. My project portfolio includes 'ThirdEye', a decentralized video sharing platform that integrates blockchain and traditional web technologies, and 'Trade Hive', which utilizes LSTM models for stock price prediction. These projects highlight my ability to merge advanced machine learning algorithms with modern web solutions. I'm eager to collaborate and share insights into the dynamic world of technology!";

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
          className="absolute uppercase top-24 tracking-[24px] text-gray-500 text-2xl"
        >
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
            src={img}
            height={200}
            width={200}
            className="rounded-full md:rounded-lg object-cover"
            alt="img"
          />
        </motion.div>
        <div className="space-y-10 px-0 md:px-10">
          {/* <h4 className="text-2xl md:text-4xl font-semibold tracking-[2px] mt-4">
            Wondering who am I?
          </h4> */}
          <p className="text-[1em] md:text-[0.9em] mt-2 text-justify">
            {about.split("\n\n").map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                <br /><br />
              </React.Fragment>
            ))}
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
        className="w-full absolute top-[35%] lg:top-[20%] bg-[#f7ab0a]/10 h-[300px] md:h-[60vh] -skew-y-12"
      />
    </div>
  );
};

export default About;
