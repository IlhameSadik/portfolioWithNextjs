import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import Particles from "../components/ParticlesContainer";

import { motion } from "framer-motion";

// Fonction fadeIn
const fadeIn = (direction, delay) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === "down" ? -20 : 20,
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

const Home = () => {
    return (
        
        <div className="relative h-screen xl:h-[100vh]">    
            {/* Texte */}
            <div className="w-full h-full bg-gradient-to-r   from-primary/10 via-black/30">
                <div className="flex flex-col justify-center  pt-24 sm:pt-28 xl:text-left h-auto container mx-auto">
      
                    {/* Titre */}
                    <motion.h2
                         variants={fadeIn("down", 0.6)}
                         initial="hidden"
                         animate="show"
                         exit="hidden" className="h2  mt-10">
                        Shaping Ideas
                        <br />
                        Into <span className="text-accent">Digital Solutions</span>
                    </motion.h2>

                    {/* Sous-titre */}
                    <motion.p
                         variants={fadeIn("down", 0.6)}
                         initial="hidden"
                         animate="show"
                         exit="hidden"
                         className="max-w-sm xl:max-w-xl  xl:mx-0 mb-10 xl:mb-16">
                        Passionate about innovation, I create efficient and user-focused digital solutions using the latest technologies.
                    </motion.p>

                    {/* Bouton pour mobile */}
                    <div className="flex justify-center xl:hidden ">
                        <ProjectsBtn />
                    </div>

                    {/* Bouton pour desktop avec animation */}
                    <motion.div
                        className="hidden xl:flex items-center -mt-10 "
                        variants={fadeIn("down", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <ProjectsBtn />
                    </motion.div>
                    
                </div>
                <div className="w-[1200px] h-full absolute right-0 top-0">
                     <div className="bg-none  xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full mix-blend-color-dodge translate-z-0">  
                    
                                        
                     </div>
                     <div><Particles/></div>
                     <div className="w-full h-full max-w-[600px] max-h-[600px] absolute -bottom-32 lg:-bottom-90 lg:right-[-15%]">
                     <Avatar />
                     </div>
            
                </div>
            </div>
        </div>
    );
};

export default Home;
