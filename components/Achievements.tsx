import React from "react";
import { motion } from "framer-motion";
import { achievments } from "../assets/_constants";
import Achievement from "./Achievement";
// Example images for achievements, replace these with appropriate images
// import award from "../assets/award.png";
// import paper from "../assets/paper.png";
// import hackathon from "../assets/hackathon.png";
// import ngo from "../assets/ngo.png";

const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0 }}
      className="h-screen flex relative flex-col text-center items-center xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto"
    >
      <motion.h3
        drag
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
      >
        Achievements
      </motion.h3>

      <motion.h3
        drag
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
        className="absolute top-36 uppercase tracking-[3px] text-gray-500"
      >
        Celebrating Successes
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-9 lg:gap-11 ">
        {/* <Achievement img="/thirdeye_logo_black.svg" directionLeft={true} title="Best Research Forum Award"/>
        <Achievement img="/thirdeye_logo_black.svg" directionLeft={false} title="Presented IoT Paper"/>
        <Achievement img="/thirdeye_logo_black.svg" directionLeft={true} title="JPMC Hackathon Finalist"/>
        <Achievement img="/thirdeye_logo_black.svg" directionLeft={false} title="Contributions to NGO"/> */}
        {achievments.map((achievement, index: number) => (
          <Achievement
            img={achievement.imgUrl}
            directionLeft={index % 2 == 0 ? true : false}
            title={achievement.title}
            width={achievement.width}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;
