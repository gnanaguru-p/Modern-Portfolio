"use client";

import { useState } from "react";
import { feats } from "@/data"; // Ensure that 'feats' is correctly imported from your data
import { PinContainer } from "./ui/Pin";

const Feats = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of <span className="text-purple">Features</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {feats.map((item) => (
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

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10 absolute bottom-0"
                >
                  <img src={item.img} alt="cover" />
                </a>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </h1>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feats;
