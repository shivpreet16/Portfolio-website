import React from "react";
import { motion } from "framer-motion";
import {
  faPhone,
  faMailBulk,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = handleSubmit((data,e) => {
    window.location.href = `mailto:shivpreet16@gmail.com?subject=${data.subject}&body=Hi, I am ${data.name}. ${data.message} (${data.email})`;
    
  });
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-screen flex relative flex-col text-center items-center xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
          Contact Me
        </h3>
        <h4 className="top-40 absolute mt-2 md:mt-7 lg:mt-10 flex tracking-[2px] text-sm flex-col md:flex-row text-gray-300 md:text-xl">
          Did I get your attention?
          <span className="ml-[2px] text-[#f7ab0a] flex">
            Get in touch.
          </span>
        </h4>
        <div className="absolute top-72 flex md:mt-20 lg:mt-24 flex-col items-center lg:flex-row lg:space-x-96 scale-90 md:scale-110 lg:scale-100">
          <div className=" text-[#f7ab0a] flex flex-col justify-center items-center lg:items-baseline">
            <motion.div
              drag
              dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
              dragConstraints={{ left: 0, right: 70, top: 0, bottom: 0 }}
              className="flex flex-row"
            >
              <FontAwesomeIcon className="h-auto w-4 mr-3" icon={faPhone} />
              <span className="text-gray-300 text-sm">+91 9438180705</span>
            </motion.div>
            <motion.div
              drag
              dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
              dragConstraints={{ left: 0, right: 70, top: 0, bottom: 0 }}
              className="flex flex-row mt-4"
            >
              <FontAwesomeIcon className="h-auto w-4 mr-3" icon={faMailBulk} />
              <span className="text-gray-300 text-sm">
                shivpreet16@gmail.com
              </span>
            </motion.div>
            <motion.div
              drag
              dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
              dragConstraints={{ left: 0, right: 70, top: 0, bottom: 0 }}
              className="flex flex-row mt-4"
            >
              <FontAwesomeIcon
                className="h-auto w-4 mr-3"
                icon={faLocationCrosshairs}
              />
              <span className="text-gray-300 text-sm">Bhubaneswar</span>
            </motion.div>
          </div>
          <form
            onSubmit={onSubmit}
            className="flex flex-col space-y-2 mt-4 md:mt-40 lg:mt-4 lg:ml-12 w-fit mx-auto scale-90 md:scale-125"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className=" contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className=" contactInput"
                type="text"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className=" contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className=" contactInput"
            />
            <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg cursor-none">
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
