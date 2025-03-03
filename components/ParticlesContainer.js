import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback, useMemo } from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } }, // Fond transparent
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        push: { quantity: 90 },
        repulse: { distance: 200, duration: 0.4 },
      }
    },
    particles: {
      color: { value: '#1E3A8A' },
      links: {
        color: '#1E3A8A',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: { enable: true },
      move: {
        enable: true,
        direction: 'none',
        outModes: { default: 'bounce' },
        random: false,
        speed: 2,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 5 } },
    }
  }), []);

  return (
    <Particles
      id="tsparticles"
      className="absolute top-0 left-0 w-full h-full"
      init={particlesInit}
      options={options}
    />
  );
};

export default ParticlesContainer;
