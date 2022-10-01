import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Particle = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      Loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
            },
          },
        },
        particles: {
          color: {
            value: {
              r: 255,
              g: 255,
              b: 255,
              a: 0,
            },
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            outModes: {
              default: "out",
            },
            speed: 2,
          },
          number: {
            value: 7,
          },

          shape: {
            stroke: {
              width: 7,
              color: ["#00d1ff", "#fc7cff", "#77b5ff"],
            },
            type: "circle",
          },
          size: {
            anim: { enable: true, speed: 20 },
            value: { min: 0, max: 55 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
