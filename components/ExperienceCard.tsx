/* eslint-disable */ 

import React from "react";
import Image from "next/image";
import img from "../assets/img.jpg";

const ExperienceCard = (props: any) => {
  return (
    <div>
      <article className="flex flex-col rounded-lg items-centers flex-shrink-0 h-[70vh] w-[400px] md:w-[600px] xl:w-[700px] snap-center  bg-[#292929] p-10 hover:opacity-100 opacity-40 items-center text-justify transition-opacity duration-200 overflow-hidden">
        <div className="px-0 md:px-10 lg:scale-75">
          <div className="w-[100%] flex justify-center mb-7">
            <Image src={img} height={100} width={100} 
            className="rounded-full" alt='image'/>
          </div>
          <h4 className="text-4xl font-light">{props.title}</h4>
          <div className="font-bold text-2xl my-2">
            {props.techs.map((tech: any) => (
              <span className="pr-5">{tech}</span>
            ))}
          </div>
          <p className="uppercase py-5 text-gray-300">
            {props.startDate} - {props.endDate}
          </p>

          <ul className="list-none flex flex-col space-y-4 ml-5 text-lg">
            {props.works.map((work: any) => (
              <li>{work}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
};

export default ExperienceCard;
