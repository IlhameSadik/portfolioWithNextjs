import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
const ProjectsBtn = () => {
  return  (
  <div className="max-auto xl:mx-0">
    <Link href="/work" className=" w-[100px] h-[100px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat ">
  <Image 
    src="/rounded-text.png" 
    width={70} 
    height={70} 
    alt="icon"
    className="animate-spin-slow  max-w-[70px] max-h-[70px]"
  />
  <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
</Link>

  </div>);
};

export default ProjectsBtn;
