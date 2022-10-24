
import { motion } from "framer-motion"
import React from 'react'
// import {HomeModernIcon, NewspaperIcon, IdentificationIcon ,UserIcon, AdjustmentsVerticalIcon} from "@heroicons/react/24/solid"

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <motion.div
            className='absolute ml-2 t-0 rounded-full z-20 h-[70%] bg-[#3f3f3f] w-[2%]'
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
        >
            {/* <HomeModernIcon className="text-gray-300 h-6 w-6"/>
            <IdentificationIcon className="text-gray-300 h-6 w-6"/>
            <NewspaperIcon className="text-gray-300 h-6 w-6"/>
            <AdjustmentsVerticalIcon className="text-gray-300 h-6 w-6"/>
            <UserIcon className="text-gray-300 h-6 w-6"/> */}
        </motion.div>
    )
}

export default Sidebar