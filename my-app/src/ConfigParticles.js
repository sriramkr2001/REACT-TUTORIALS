// src/config/particlesConfig.js

const ParticlesConfig = {
    /*   
      "particles": {
        ...
      }, 
      "retina_detect": true
    */
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 710.2328774690454
          }
        },
        "color": {
          // "value": "#16a7e3"
          "value": "ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            // "color": "#000000"
            "color": "ffffff"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.2725800503471389,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 3.2483088492053804,
            "opacity_min": 0.17865698670629593,
            "sync": false
          }
        },
        "size": {
          "value": 8.017060304327615,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 43.852169464272635,
            "size_min": 3.248308849205381,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 192.40944730386272,
          "color": "#0ea7d7",
          // "color": "ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "bottom",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 962.0472365193136,
            "rotateY": 721.5354273894853
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
  };
  
  export default ParticlesConfig;