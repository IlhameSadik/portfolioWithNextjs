import React from "react";
import WorkSlider from "../../components/WorkSlider"; // Composant du slider
import Circles from "../../components/Circles";

const Projects = () => {
  return (
   <div className="h-full min-h-screen bg-siel-blue/30 py-20 md:py-24 xl:py-36 flex items-center overflow-y-auto">
    <Circles />
    <div className="container mx-auto px-4 pt-24 md:pt-0">
      <div className="flex flex-col xl:flex-row gap-x-8 gap-y-8 xl:gap-y-0">
        {/* Texte et description */}
        <div className="flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
          <h2 className="h2 xl:mt-5 text-siel-blue">
              My Work <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-siel-blue">
              Here are some of my latest projects, from web applications to data science solutions. Combining my skills in backend, frontend, and data analysis, I create impactful digital experiences.
            </p>
          </div>

          {/* Slider des projets */}
          <div className="w-full max-w-[90%] lg:max-w-[65%] xl:w-[70vw] mx-auto">
            <WorkSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;