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
        title: "compétences",
        info: [
            {
                title: "Développement Back-end",
                description: "Java, Python, Spring Boot, MySQL, MongoDB"
            },
            {
                title: "Développement Front-end",
                description: "React.js, JavaScript, HTML/CSS, Bootstrap, Tailwind"
            },
            {
                title: "Outils & IDE",
                description: "VS Code, Eclipse, IntelliJ IDEA, Postman, Git, Figma"
            },
        ],
    },
    {
        title: "formation",
        info: [
            {
                title: "Ingénieure d'État en Génie Mathématique et Informatique",
                stage: "2023 - 2025",
                description: "Faculté des sciences et techniques Mohammedia"
            },
            {
                title: "DEUST",
                stage: "2020 - 2022",
                description: "Faculté des sciences et techniques Mohammedia"
            },
            {
                title: "Baccalauréat Science Mathématique (A)",
                stage: "2019 - 2020",
                description: "Lycée Mohammed Zaraktoni Casablanca"
            },
        ],
    },
    {
        title: "expérience",
        info: [
            {
                title: "Stage de développement web",
                stage: "Avril 2024 - Septembre 2024",
                description: "Webcom - Développement front-end et optimisation UX/UI"
            },
            {
                title: "Application Web de Gestion d'Hôtel",
                stage: "Projet Personnel",
                description: "Full-stack avec React.js, Spring Boot et MySQL"
            },
            {
                title: "Application Desktop de Gestion d'une Salle de Sport",
                stage: "Projet Académique",
                description: "Application Java avec JavaFX et MySQL"
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
