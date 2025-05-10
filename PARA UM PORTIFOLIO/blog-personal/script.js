const botaoCarregarMais = document.getElementById('carregar-mais');
const galeriaGrid = document.getElementById('galeria-grid');

botaoCarregarMais.addEventListener('click', () => {
    const novasImagens = [
        'img/transformacao4.jpg',
        'img/transformacao5.webp',
        'img/transformacao6.jpeg'
    ];

    novasImagens.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Antes e Depois';
        galeriaGrid.appendChild(img);
    });

    botaoCarregarMais.style.display = 'none'; // Oculta o botão após carregar
});
// Duplicar os itens da carrossel para criar efeito infinito real
const carousel = document.getElementById('qualCarousel');
const items = carousel.innerHTML;
carousel.innerHTML += items; // duplicar conteúdo
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});
