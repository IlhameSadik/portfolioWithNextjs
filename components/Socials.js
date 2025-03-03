import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Sociale = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.linkedin.com/in/ilhame-sadik-4a2404163/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        className="text-white text-2xl hover:scale-110 transition-transform cursor-pointer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/ilhame_sadik/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
        className="text-white text-2xl hover:scale-110 transition-transform cursor-pointer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://github.com/IlhameSadik"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        className="text-white text-2xl hover:scale-110 transition-transform cursor-pointer"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:sadikilham2002@gmail.com"
        title="Email"
        className="text-white text-2xl hover:scale-110 transition-transform cursor-pointer"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default Sociale;
