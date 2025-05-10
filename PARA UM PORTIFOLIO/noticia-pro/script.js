// Exemplo: animação futura de produto rotativo ou interações
console.log("Site carregado!");
particlesJS('particles-js', {
    particles: {
      number: { value: 80 },
      color: { value: "#0ff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 1.5 }
    },
    interactivity: {
      events: { onhover: { enable: true, mode: "repulse" } }
    }
  });
  