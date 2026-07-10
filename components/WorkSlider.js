import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const projectData = [
  {
    title: "AutoPostule AI",
    path: "/autopostule.png",
    description:
      "AI-powered job application platform that analyzes resumes, matches candidates",
    tech: "Next.js, React, TypeScript, Tailwind CSS, n8n, AI APIs",
    github: "https://github.com/IlhameSadik",
    category: "AI & Web Development",
    demoLink:
      "https://drive.google.com/file/d/1VtLt2wxKlSLopw42qVFqkzAbIiF5vzM8/view?usp=drive_link",
  },
  {
    title: "You Can Win",
    path: "/youcanwin.png",
    description: "Web app developed from Figma design, fully responsive and interactive",
    tech: "HTML, CSS, JavaScript, React.js",
    github: "https://github.com/IlhameSadik",
    category: "Web Development",
    demoLink: "https://you-can-win.vercel.app/",
  },
  {
    title: "Restaurant",
    path: "/projet5.png",
    description: "Modern restaurant website with interactive UI and smooth navigation",
    tech: "React.js, Tailwind CSS",
    github: "https://github.com/IlhameSadik",
    category: "Web Development",
    demoLink: "https://bistro-bliss-git-main-ilhame-sadiks-projects.vercel.app/",
  },
  {
    title: "Hotel Management System",
    path: "/1.png",
    description: "Web application for hotel reservations and management",
    tech: "React.js, Spring Boot, MySQL",
    github: "https://github.com/IlhameSadik",
    category: "Web Development",
    demoLink: "https://drive.google.com/file/d/1Zdebzk-EjJukSDKml6lhbb2VxoUHFnCL/view?usp=drivesdk",
  },
  {
    title: "Gym Management Application",
    path: "/2.png",
    description: "Desktop app for gym operations",
    tech: "JavaFX, MySQL",
    github: "https://github.com/IlhameSadik",
    category: "Desktop Application",
    demoLink: "https://drive.google.com/file/d/1liR0P3ZBu8dljrJdT63XeaX1aOmaGyv8/view?usp=drivesdk",
  },
  {
    title: "Automata Management System",
    path: "/4.png",
    description: "Application for modeling and visualizing automata",
    tech: "Python, Tkinter, Graphviz",
    github: "https://github.com/IlhameSadik",
    category: "Scientific Computing",
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 12 },
        480: { slidesPerView: 1.15, spaceBetween: 14 },
        640: { slidesPerView: 2, spaceBetween: 16 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      autoHeight={true}
      className="pt-12 sm:pt-16 md:pt-20 pb-10 work-slider"
    >
      {projectData.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white/10 rounded-lg p-4 sm:p-5 md:p-6 flex flex-col group cursor-pointer active:bg-white/20 hover:bg-white/20 transition-all duration-300">
            {/* Project Image */}
            <div className="relative mb-2 sm:mb-3 overflow-hidden rounded-lg w-full h-[110px] sm:h-[140px] md:h-[180px] flex-shrink-0">
              <Image
                src={project.path}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 md:bg-black/50 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex items-end md:items-center justify-center gap-6 z-10 p-3 md:p-0">
                <a
                  href={project.github}
                  className="text-white hover:text-accent active:text-accent transition-colors p-2 -m-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Code source de ${project.title}`}
                >
                  <FiGithub size={22} className="sm:w-6 sm:h-6" />
                </a>

                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    className="text-white hover:text-accent active:text-accent transition-colors p-2 -m-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Démo de ${project.title}`}
                  >
                    <FiExternalLink size={22} className="sm:w-6 sm:h-6" />
                  </a>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col min-w-0">
              <div className="text-accent text-xs sm:text-sm mb-1 sm:mb-2">
                {project.category}
              </div>
              <h3 className="text-lg sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 truncate">
                {project.title}
              </h3>
              <p className="text-white/70 text-xs sm:text-xs md:text-sm mb-2 sm:mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="text-xs sm:text-sm text-accent/80 truncate whitespace-nowrap">
                {project.tech}
              </div>

              {project.demoLink && (
                <a
                  href={project.demoLink}
                  className="mt-3 inline-block text-white text-sm font-medium py-1.5 px-2 -mx-2 rounded-md hover:bg-accent/80 active:bg-accent/80 transition-colors w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Demo →
                </a>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;