import Bulb from "../(components)/bulb/Bulb";
import React, { createContext } from 'react';
import Circles from "../(components)/circles/Circles";
import ServiceSlider from "../(components)/serviceSlider/ServiceSlider";

export default function Services() {
  return (
    <div className="h-full bg-primary/30 py-34 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text- */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <h2 className="h2 xl:mt-8 ">
              My Services <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, autem inventore sed excepturi nostrum amet 
            </p>
          </div>
          {/* slider */}
          <ServiceSlider />
        </div>
      </div>
      <Bulb />
    </div>
  );
}
