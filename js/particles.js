document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
    "particles": {
      "number": { "value": 80, "density": { "enable": true } },
      "color": { "value": "#0ff0fc" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.7, "random": true },
      "size": { "value": 3, "random": true },
      "line_linked": { 
        "enable": true, 
        "distance": 150, 
        "color": "#0ff0fc", 
        "opacity": 0.4, 
        "width": 1 
      },
      "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" }
      }
    }
  });
});