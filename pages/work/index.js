import React from "react";
import WorkSlider from "../../components/WorkSlider";
import Circles from "../../components/Circles";

const Projects = () => {
  return (
<div className="relative min-h-screen bg-siel-blue/30 pt-28 sm:pt-32 md:pt-24 pb-32 xl:py-36 flex flex-col overflow-x-hidden">      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-x-8 gap-y-8 xl:gap-y-0 xl:items-center xl:min-h-[60vh]">
          {/* Texte et description */}
          <div className="flex xl:w-[30vw] flex-col text-center lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-5 text-siel-blue">
              My Work <span className="text-accent">.</span>
            </h2>
          <p className="mb-4 max-w-[320px] sm:max-w-[400px] mx-auto lg:mx-0 text-sm sm:text-base text-siel-blue/90 leading-relaxed">
  Here are some of my latest projects. Combining my skills in
  backend and frontend, I create impactful digital experiences.
</p>
          </div>

          {/* Slider des projets */}
          <div className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[65%] xl:w-[70vw] mx-auto">
            <WorkSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;