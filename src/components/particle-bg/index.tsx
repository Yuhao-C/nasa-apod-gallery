import React from 'react';
import Particles, { ISourceOptions, EasingType } from 'react-tsparticles';

const options: ISourceOptions = {
  autoPlay: true,
  background: {
    color: {
      value: '#232741',
    },
  },
  backgroundMask: {
    composite: 'destination-out',
    cover: {
      color: {
        value: '#fff',
      },
      opacity: 1,
    },
    enable: false,
  },
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'window' as const,
    events: {
      onClick: {
        enable: true,
        mode: 'repulse',
      },
      onHover: {
        enable: true,
        mode: 'bubble',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        mix: false,
        opacity: 0,
        size: 8,
      },
      repulse: {
        distance: 250,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: EasingType.easeOutQuad,
      },
    },
  },
  manualParticles: [],
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
  particles: {
    color: {
      value: '#ffffff',
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
      },
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 600,
          y: 600,
        },
      },
      decay: 0,
      distance: {},
      direction: 'none',
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
        options: {},
      },
      outModes: {
        default: 'out',
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out',
      },
      random: true,
      size: false,
      speed: 1,
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: '#000000',
        },
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 160,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.1,
      },
      value: {
        min: 0,
        max: 1,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 1,
        sync: false,
        destroy: 'none',
        startValue: 'random',
        minimumValue: 0,
      },
    },
    shape: {
      options: {},
      type: 'circle',
    },
    size: {
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: {
        min: 1,
        max: 3,
      },
      animation: {
        count: 0,
        enable: false,
        speed: 4,
        sync: false,
        destroy: 'none',
        startValue: 'random',
        minimumValue: 0.3,
      },
    },
    stroke: {
      width: 0,
    },
    zIndex: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  zLayers: 100,
};

const ParticleBg: React.FC<Record<never, never>> = () => (
  <Particles options={options} />
);
export default ParticleBg;
