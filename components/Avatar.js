import Image from "next/image";  
import { motion } from "framer-motion";
// Fonction fadeIn
const fadeIn = (direction, delay) => {
  return {
      hidden: {
          opacity: 0,
          y: direction === "up" ? 20 : -20,
      },
      show: {
          opacity: 1,
          y: 0,
          transition: {
              duration: 0.6,
              delay: delay,
              ease: "easeOut",
          },
      },
  };
};
const Avatar = () => {  
  return (  
    <motion.div
    className="hidden xl:flex xl:max-w-none"
    variants={fadeIn("up", 0.6)}
     initial="hidden"
      animate="show"
      exit="hidden">  
      <Image   
        src={'/avatar.jpg'}   
        width={300}   
        height={300}   
        alt=''   
        className=' h-full rounded-full' // Add rounded-full to create a circular shape  
      />  
    </motion.div>  
  );  
};  

export default Avatar;