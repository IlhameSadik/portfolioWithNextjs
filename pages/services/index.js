import React from "react";
import ServiceSlider from "../../components/ServiceSlider";
import Circles from "../../components/Circles";

const Services = () => {
  return (
    <div className="h-full min-h-screen bg-siel-blue/30 py-36 flex items-center overflow-y-auto">
    <Circles />
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8 gap-y-8 xl:gap-y-0">
        {/* Texte et description */}
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
          <h2 className="h2 xl:mt-5 text-siel-blue">
        
              My Services <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Exploring the future of innovation, we strive to bring forward solutions that challenge the status quo. Our approach combines creativity with cutting-edge technology to drive meaningful change and exceed expectations.
            </p>
          </div>
          
          {/* Slider section - Centré en mobile */}
          <div className="w-full max-w-[90%] lg:max-w-[65%] xl:w-[70vw] mx-auto">
            <ServiceSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
