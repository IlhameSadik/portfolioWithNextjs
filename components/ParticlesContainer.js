import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback, useMemo } from "react";

const ParticlesContainer = () => {
  // Initialisation de tsparticles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Options des particules
  const options = useMemo(() => ({
    fullScreen: { enable: false }, // pas full screen pour respecter le parent
    background: { color: { value: "transparent" } }, // fond transparent
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#1E3A8A" },
      links: {
        color: "#1E3A8A",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        enable: true,
        direction: "none",
        outModes: { default: "bounce" },
        random: false,
        speed: 2,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
    responsive: [
      {
        maxWidth: 768, // Mobile
        options: {
          particles: {
            number: { value: 40 }, // réduire le nombre pour la performance
            links: { enable: false }, // moins gourmand
            move: { enable: true, speed: 1.5 },
            size: { value: { min: 1, max: 3 } },
          },
        },
      },
    ],
  }), []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default ParticlesContainer;
