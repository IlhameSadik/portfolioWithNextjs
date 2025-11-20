import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Icons
import { RxCrop, RxPencil2, RxReader, RxArrowTopRight } from "react-icons/rx";

// Data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Back-end Development",
    description:
      "Building robust applications with Java, Python, Spring Boot, MySQL, and MongoDB.",
  },
  {
    icon: <RxPencil2 />,
    title: "Front-end Development",
    description:
      "Creating modern, responsive UIs with React.js, JavaScript, HTML/CSS, Bootstrap, and Tailwind.",
  },
  {
    icon: <RxReader />,
    title: "UX/UI Optimization",
    description: "Designing intuitive and user-friendly web interfaces.",
  },
];

// Component
const ServiceItem = ({ icon, title, description }) => (
  <div
    className="
      h-full 
      bg-white/10 shadow-lg rounded-lg 
      px-6 py-6 sm:py-8 
      flex flex-col 
      items-center 
      justify-between
      gap-y-4 
      group cursor-pointer 
      transition-all duration-300 
      hover:scale-105 hover:shadow-xl
    "
  >
    <div className="text-2xl sm:text-4xl text-indigo-400">{icon}</div>

    <div className="text-base sm:text-lg font-semibold text-white text-center">
      {title}
    </div>

    <p className="text-sm sm:text-base text-gray-300 text-center flex-1">
      {description}
    </p>

    <div
      className="
        text-xl sm:text-2xl 
        text-white 
        mt-4 
        transition-all duration-300 
        group-hover:translate-x-2 
        group-hover:text-indigo-400
      "
    >
      <RxArrowTopRight />
    </div>
  </div>
);

const MyServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1.2, spaceBetween: 10 },
        480: { slidesPerView: 1.5, spaceBetween: 15 },
        640: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-auto sm:h-[360px] overflow-hidden"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index} className="h-full">
          <ServiceItem {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MyServiceSlider;
