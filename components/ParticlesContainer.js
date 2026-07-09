"use client";

import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 60, // 120 est inutile et sollicite le GPU pour rien
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 80,   // un peu réduit pour un effet plus subtil
            duration: 0.4,
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: "#D97757", // couleur accent (remplace le bleu qui jurait avec le reste)
        },
        links: {
          color: "#D97757",
          distance: 150,
          enable: true,
          opacity: 0.3, // un peu plus discret
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6, // vitesse ralentie (était à 2, trop rapide/nerveux)
          outMode: "bounce",
        },
        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: 60, // légèrement réduit pour de meilleures perfs mobile
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesContainer;