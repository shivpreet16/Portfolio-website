import React from 'react'
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard';

type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ y:-200,opacity: 0 }}
      whileInView={{ y:0,opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    className='h-screen flex flex-col relative overflow-hidden md:flex-row max-w-full justify-evenly mx-auto items-center'>
        <h3 className="absolute uppercase top-20 md:top-11 tracking-[24px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll scroll whitespace-nowrap scroll-smooth p-10 snap-x snap-mandatory'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        {/* ExperienceCard */}
        {/* ExperienceCard */}
        {/* ExperienceCard */}
      </div>
    </motion.div>
  )
}

export default Experience