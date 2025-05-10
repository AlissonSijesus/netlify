// Animação no Scroll
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.fade-in');
  const options = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, options);

  elements.forEach(element => {
    observer.observe(element);
  });
});

// Animações de Fade-In
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => {
    element.classList.add('opacity-0');
  });
  window.addEventListener('scroll', () => {
    fadeElements.forEach(element => {
      const position = element.getBoundingClientRect().top;
      if (position < window.innerHeight) {
        element.classList.add('opacity-100');
        element.classList.remove('opacity-0');
      }
    });
  });
});
