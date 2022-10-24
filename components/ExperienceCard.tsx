import React from 'react'
import { motion } from "framer-motion";

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
 
    <article className='flex flex-col rounded-lg items-centers space-y-7 flex-shrink-0 h-auto w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden'>
        <img src="../assets/img.jpg" alt="" className='h-32 w-32 rounded-full'/>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Intern at CliqMetrics</h4>
            <div className='font-bold text-2xl my-2'>
                {/* tech used */}
                {/* tech used */}
                {/* tech used */}
            </div>
            <p className='uppercase py-5 text-gray-300'>started...-Ended...</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard