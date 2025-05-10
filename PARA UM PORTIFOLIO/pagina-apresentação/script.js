// Seleciona o contêiner do slider e as bolinhas de navegação
const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.navigation-dot');

// Número de funcionalidades visíveis por vez
const visibleItems = 3;

// Largura total das funcionalidades
const totalItems = document.querySelectorAll('.feature-card').length;

// Função para mover o slider de acordo com o índice
function moveSliderTo(index) {
  const itemWidth = document.querySelector('.feature-card').offsetWidth + 20; // Calculando a largura de cada item, incluindo a margem
  const newTransform = -(itemWidth * index);

  // Aplica o novo deslocamento
  slider.style.transform = `translateX(${newTransform}px)`;

  // Atualiza as bolinhas de navegação para refletir a posição atual
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Adiciona o evento de clique nas bolinhas de navegação
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => moveSliderTo(index));
});

// Inicializa o carrossel com a primeira bolinha ativa
moveSliderTo(0);
