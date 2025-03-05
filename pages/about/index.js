import { useState } from "react";
import Circle from "../../components/Circles";  
import { motion } from "framer-motion";

// Fonction d'animation fadeIn
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

const aboutData = [
    {
        title: "Skills",
        info: [
            {
                title: "Back-end Development",
                description: "Java, Python, Spring Boot, MySQL, MongoDB"
            },
            {
                title: "Front-end Development",
                description: "React.js, JavaScript, HTML/CSS, Bootstrap, Tailwind"
            },
            {
                title: "Tools & IDEs",
                description: "VS Code, Eclipse, IntelliJ IDEA, Postman, Git, Figma"
            },
        ],
    },
    {
        title: "Education",
        info: [
            {
                title: "State Engineer in Mathematical and Computer Engineering",
                stage: "2023 - 2025",
                description: "Faculty of Science and Technology, Mohammedia"
            },
            {
                title: "DEUST (Diploma in Science and Technology)",
                stage: "2020 - 2022",
                description: "Faculty of Science and Technology, Mohammedia"
            },
            {
                title: "Mathematical Sciences Baccalaureate (A)",
                stage: "2019 - 2020",
                description: "Mohammed Zaraktoni High School, Casablanca"
            },
        ],
    },
    {
        title: "Experience",
        info: [
            {
                title: "Web Development Internship",
                stage: "April 2024 - September 2024",
                description: "Webcom - Front-end development and UX/UI optimization"
            },
            {
                title: "Hotel Management Web Application",
                stage: "Personal Project",
                description: "Full-stack development using React.js, Spring Boot, and MySQL"
            },
            {
                title: "Gym Management Desktop Application",
                stage: "Academic Project",
                description: "Java application using JavaFX and MySQL"
            },
        ],
    },
];


const About = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="min-h-screen from-primary/10 via-black/30 py-8 sm:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Navigation avec effet hover et soulignement animé */}
                <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto">
                    <div className="relative flex gap-x-2 sm:gap-x-8 px-4">
                        {aboutData.map((item, itemIndex) => (
                            <button
                                key={itemIndex}
                                className={`relative whitespace-nowrap text-sm sm:text-lg font-medium capitalize px-3 py-2 sm:px-4 rounded-lg transition-all
                                    ${index === itemIndex 
                                        ? "text-accent text-white" 
                                        : "text-gray-600 hover:text-accent"
                                    }`}
                                onClick={() => setIndex(itemIndex)}
                            >
                                {item.title}
                                {index === itemIndex && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Contenu animé avec transition fluide */}
                <motion.div
                    key={index} // Réactive l'animation à chaque changement
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
                >
                    {aboutData[index].info.map((item, itemIndex) => (
                        <motion.div
                            variants={fadeIn("down", 0.2 * itemIndex)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            key={itemIndex}
                            className="backdrop-blur-sm bg-white/10 p-4 sm:p-6 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                                {item.title}
                            </h3>
                            {item.stage && (
                                <p className="text-blue-600 font-medium mb-2 text-sm sm:text-base">
                                    {item.stage}
                                </p>
                            )}
                            {item.description && (
                                <p className="text-gray-300 text-sm sm:text-base">
                                    {item.description}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <Circle />
        </div>
    );
};

export default About;
