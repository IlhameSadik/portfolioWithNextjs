"use client";

import { useState, useRef } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Sociale = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ilhame-sadik-4a2404163/"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/ilhame_sadik/"
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/IlhameSadik"
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:sadikilham2002@gmail.com"
    }
  ];

  return (
    <div className="flex md:flex-row flex-col md:space-x-6 space-y-6 md:space-y-0 items-center">
      {/* Audio Element - Caché mais toujours actif */}
      <audio 
        ref={audioRef}
        src="/music.mp3"
        loop
      />

      {/* Liens sociaux */}
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target={social.name !== "Email" ? "_blank" : undefined}
          rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
          title={social.name}
          className="flex items-center gap-3 text-white hover:text-red-500 transition-all duration-300 group w-full md:w-auto"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform">
            {social.icon}
          </span>
          <span className="md:hidden text-lg font-medium">
            {social.name}
          </span>
        </a>
      ))}

      {/* Switch pour le son avec icône note de musique - Desktop uniquement */}
      <div className="hidden md:flex items-center gap-3">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-6 h-6 transition-all duration-300 ${
              isPlaying ? 'text-red-500 animate-pulse' : 'text-white'
            }`}
          >
            <path fillRule="evenodd" d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z" clipRule="evenodd" />
          </svg>

          <input
            type="checkbox"
            id="switchforsound"
            checked={isPlaying}
            onChange={toggleSound}
            className="hidden"
          />
          <label
            htmlFor="switchforsound"
            id="labelforsound"
            tabIndex="0"
            aria-label="switch sound"
            className="needtobeinvert cursor-pointer block w-12 h-6 bg-gray-600 rounded-full relative transition-all duration-300 hover:bg-gray-500"
            style={{
              backgroundColor: isPlaying ? 'red' : '#4B5563'
            }}
          >
            <span
              className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-md"
              style={{
                transform: isPlaying ? 'translateX(24px)' : 'translateX(0)'
              }}
            ></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sociale;