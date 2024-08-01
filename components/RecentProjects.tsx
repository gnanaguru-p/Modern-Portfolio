"use client";

import { useState } from "react";
import {
  FaLocationArrow,
  FaAngleDown,
  FaAngleUp,
  FaGithub,
} from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import MagicButton from "./MagicButton";

const RecentProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple"> projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {displayedProjects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src="/bg.png"
                    alt="bgimg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center mt-4">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={icon} alt={`icon-${index}`} className="p-2" />
                  </div>
                ))}
              </div>
              <br />
              <hr />

              <div className="flex justify-between mt-4">
                <a
                  href={item.dlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex lg:text-xl md:text-xs text-sm text-white hover:text-purple"
                >
                  <FaGithub
                    size={40}
                    className="ms-3  text-white hover:text-purple hover:scale-110 transition-transform"
                  />
                </a>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex lg:text-xl md:text-xs text-sm text-white hover:text-purple"
                >
                  <FaLocationArrow
                    size={40}
                    className="ms-3  text-white hover:text-purple hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <MagicButton
          handleClick={handleToggle}
          icon={""}
          title={
            showAll ? (
              <>
                Show Less <FaAngleUp />
              </>
            ) : (
              <>
                Show More <FaAngleDown />
              </>
            )
          }
          position="right"
        />
      </div>
    </div>
  );
};

export default RecentProjects;
