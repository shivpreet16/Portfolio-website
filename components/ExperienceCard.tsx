/* eslint-disable */

import React from "react";
import Image from "next/image";
import img from "../assets/img.jpg";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  title: string;
  techs: string[];
  startDate: string;
  endDate: string;
  works: string[];
  left: boolean;
  right: boolean;
}

const ExperienceCard = (props: Props) => {
  return (
    <div className="relative">
      <article className="flex flex-col rounded-lg items-centers flex-shrink-0 h-[70vh] w-[400px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 items-center text-justify transition-opacity duration-200 overflow-hidden">
        <div className="px-0 md:px-10 lg:scale-75">
          <div className="w-[100%] flex justify-center mb-7">
            <Image
              src={img}
              height={100}
              width={100}
              className="rounded-full"
              alt="image"
            />
          </div>
          <h4 className="text-xl md:text-4xl font-light">{props.title}</h4>
          <div className="font-bold text-lg md:text-2xl my-2">
            {props.techs.map((tech: any) => (
              <span className="pr-5" key={tech}>{tech}</span>
            ))}
          </div>
          <p className="uppercase py-5 text-gray-300">
            {props.startDate} - {props.endDate}
          </p>

          <ul className="list-none flex flex-col space-y-4 ml-5 text-lg">
            {props.works.map((work: any,idx) => (
              <li key={idx}>{work}</li>
            ))}
          </ul>
        </div>
        {props.right && (
          <div className="absolute bottom-0 right-0 m-10 h-5 w-5">
            <FontAwesomeIcon icon={faCircleChevronRight} color="white" />
          </div>
        )}
        {props.left && (
          <div className="absolute bottom-0 left-0 m-10 h-5 w-5">
            <FontAwesomeIcon icon={faCircleChevronLeft} color="white" />
          </div>
        )}
      </article>
    </div>
  );
};

export default ExperienceCard;
