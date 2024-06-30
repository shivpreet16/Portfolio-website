/* eslint-disable */
import React from "react";
import Image from "next/image";
import img from "../assets/img.jpg";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from "react-social-icons";
interface Props {
  title: string;
  techs: string[];
  description: string;
  imageUrl: string;
  githubLink: string;
  deployLink: string;
  left: boolean;
  right: boolean;
  imgBg: boolean;
  imgStyles: { width: string; height: string };
}

// const techStack = [
//   "React",
//   "Node.js",
//   "Express",
//   "MongoDB",
//   "GraphQL",
//   "TypeScript",
// ]; // Example tech stack

const ProjectCards = (props: Props) => {
  const numberOfColumns = Math.ceil(props.techs.length / 4);
  return (
    <div className="relative">
      <article className="flex flex-col rounded-lg items-center flex-shrink-0 h-[70vh] w-[400px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 pt-5 hover:md:opacity-100 opacity-80 md:opacity-40 text-center transition-opacity duration-200 overflow-hidden ">
        <div className="hidden md:block">
          <h3 className="text-4xl">{props.title}</h3>
          <div className="h-full w-full grid md:grid-cols-2 md:gap-4">
            <div className="flex flex-col">
              <div className="justify-center items-center w-full h-1/2 hidden md:flex">
                <div
                  style={{
                    position: "relative",
                    borderRadius: "50%",
                    backgroundColor: props.imgBg ? "slategray" : "transparent",
                    width: props.imgStyles.width,
                    height: props.imgStyles.height,
                  }}
                >
                  <Image
                    src={props.imageUrl}
                    layout="fill"
                    style={{ position: "absolute" }}
                  />
                </div>
              </div>
              <div className="grid items-center justify-center">
                <p className="text-lg tracking-[5px] uppercase py-3">
                  Techs & Stack
                </p>
                <ul
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
                    listStyle: "circle",
                  }}
                  className="gap-x-10 gap-y-2 pt-3"
                >
                  {props.techs.map((tech, index) => (
                    <li
                      key={index}
                      style={{ textAlign: "left" }}
                      className="text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="h-full">
              <div className="py-10 w-full h-5/6 flex flex-col items-center">
                <p className="text-md tracking-[10px] uppercase">Description</p>
                <div className="w-full h-full pt-4 overflow-auto flex justify-center">
                  <p className="text-sm whitespace-normal text-justify">
                    {props.description}
                  </p>
                </div>
              </div>
              <div className="h-1/6 flex justify-center items-center gap-4">
                <SocialIcon
                  url={`https://github.com/${props.githubLink}`}
                  fgColor="grey"
                  bgColor="transparent"
                />
                <p
                  className={`h-6 w-6 ${
                    props.deployLink === "/404" ? "hidden" : "block"
                  } flex justify-center items-center opacity-50 cursor-pointer`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = props.deployLink;
                  }}
                >
                  <FontAwesomeIcon icon={faLink} color="white" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:hidden gap-5 mt-10">
          <div className="flex justify-between">
            <h3 className="text-2xl font-medium">{props.title}</h3>
            <div className="flex gap-2 justify-center items-center">
              <SocialIcon
                url={`https://github.com/${props.githubLink}`}
                fgColor="grey"
                bgColor="transparent"
              />
              <p
                  className={`h-6 w-6 ${
                    props.deployLink === "/404" ? "hidden" : "block"
                  } flex justify-center items-center opacity-50 cursor-pointer`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = props.deployLink;
                  }}
                >
                  <FontAwesomeIcon icon={faLink} color="white" />
                </p>
            </div>
            
          </div>
          <div>
            <p className="text-md tracking-[10px] uppercase">Description</p>
            <div className="w-full h-full pt-4 overflow-auto flex justify-center">
              <p className="text-md whitespace-normal text-justify">
                {props.description}
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-md tracking-[10px] uppercase">techs & stack</p>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
                listStyle: "circle",
              }}
              className="gap-x-10 gap-y-2 pt-3 pl-3"
            >
              {props.techs.map((tech, index) => (
                <li
                  key={index}
                  style={{ textAlign: "left" }}
                  className="text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
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

export default ProjectCards;
