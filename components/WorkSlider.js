import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const projectData = [
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
    path: "/1.png", // Image directement dans public
    description: "Web application for hotel reservations and management",
    tech: "React.js, Spring Boot, MySQL",
    github: "https://github.com/IlhameSadik",
    category: "Web Development",
    demoLink: "https://drive.google.com/file/d/1Zdebzk-EjJukSDKml6lhbb2VxoUHFnCL/view?usp=drivesdk", // Lien vers la vidéo
  },
  {
    title: "Gym Management Application",
    path: "/2.png", // Image directement dans public
    description: "Desktop app for gym operations",
    tech: "JavaFX, MySQL",
    github: "https://github.com/IlhameSadik",
    category: "Desktop Application",
    demoLink: "https://drive.google.com/file/d/1liR0P3ZBu8dljrJdT63XeaX1aOmaGyv8/view?usp=drivesdk", // Lien vers la vidéo
  },
  {
    title: "Automata Management System",
    path: "/4.png", // Image directement dans public
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
        320: {
          slidesPerView: 1,  // Afficher 1 slide à la fois sur les petits écrans
          spaceBetween: 10,  // Espacement réduit entre les slides
        },
        640: {
          slidesPerView: 2,  // Afficher 2 slides à la fois sur les écrans moyens
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,  // Afficher 3 slides à la fois sur les grands écrans
          spaceBetween: 30,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[400px]"
    >
      {projectData.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white/10 rounded-lg p-6 h-full flex flex-col group cursor-pointer hover:bg-white/20 transition-all duration-300">
            {/* Project Image */}
            <div className="relative mb-4 overflow-hidden rounded-lg w-full h-[200px]">
              <Image
                src={project.path}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 z-10">
                <a
                  href={project.github}
                  className="text-white hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size={24} />
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    className="text-white hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col flex-grow">
              <div className="text-accent text-sm mb-2">{project.category}</div>
              <h3 className="text-xl sm:text-lg md:text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/70 text-sm sm:text-xs md:text-sm mb-4 flex-grow">{project.description}</p>
              <div className="text-sm text-accent/80">{project.tech}</div>

              {/* Demo Button */}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  className="mt-1 inline-block text-white py-1 px-1 rounded-md hover:bg-accent/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Demo
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
