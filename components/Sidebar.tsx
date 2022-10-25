import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
// import icons fortawesome

import {
  faHome,
  faUser,
  faLaptopCode,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <nav>
      <motion.div
        className="cursor-none absolute ml-2 t-0 rounded-full z-20 h-[70%] bg-[#3f3f3f] w-[2%] flex flex-col justify-evenly items-center"
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
          <button className="cursor-none button relative z-20 h-auto w-[60%]">
            <FontAwesomeIcon icon={faHome} color="white" />
          </button>
        </Link>
        <Link href="#about">
          <button className="cursor-none button relative z-20 h-auto w-[60%]">
            <FontAwesomeIcon icon={faUser} color="white" />
          </button>
        </Link>
        <Link href="#experience">
          <button className="cursor-none button relative z-20 h-auto w-[60%]">
            <FontAwesomeIcon icon={faLaptopCode} color="white" />
          </button>
        </Link>
        <Link href="#skills">
          <button className="cursor-none button relative z-20 h-auto w-[60%]">
            <FontAwesomeIcon icon={faGears} color="white" />
          </button>
        </Link>
      </motion.div>
    </nav>
  );
};

export default Sidebar;
