import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
// import icons fortawesome

import {
  faHome,
  faUser,
  faLaptopCode,
  faGears,
  faDiagramProject,
  faAward
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const Sidebar = (props: Props) => {
  
  return (
    <nav>
      <motion.div
        className="cursor-none hidden md:flex absolute ml-2 t-0 rounded-full z-20 h-[90%] lg:h-[70%] bg-[#3f3f3f] w-[5%] lg:w-[2%] flex-col justify-evenly items-center"
        drag
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragConstraints={{ left: 0, right: 700, top: 10, bottom: 10 }}
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <Link href="#hero">
          <button className="cursor-none button relative flex flex-col justify-center items-center z-20 h-auto w-[60%]">
            <FontAwesomeIcon icon={faHome} color="white" />
          </button>
        </Link>
        <Link href="#about">
          <button className="cursor-none button relative flex flex-col justify-center items-center z-20 h-auto w-[60%]">
            <FontAwesomeIcon icon={faUser} color="white" />
          </button>
        </Link>
        <Link href="#experience">
          <button className="cursor-none button relative flex flex-col justify-center items-center z-20 h-auto w-[60%]">
            <FontAwesomeIcon icon={faLaptopCode} color="white" />
          </button>
        </Link>
        <Link href="#achievements">
          <button className="cursor-none button relative flex flex-col justify-center items-center z-20 h-auto w-[60%]">
            <FontAwesomeIcon icon={faAward} color="white" />
          </button>
        </Link>
        <Link href="#project">
          <button className="cursor-none button relative flex flex-col justify-center items-center z-20 h-auto w-[60%]">
            <FontAwesomeIcon icon={faDiagramProject} color="white" />
          </button>
        </Link>
        <Link href="#skills">
          <button className="cursor-none button relative flex flex-col justify-center items-center z-20 h-auto w-[60%]">
            <FontAwesomeIcon icon={faGears} color="white" />
          </button>
        </Link>
      </motion.div>
    </nav>
  );
};

export default Sidebar;
