// Inicializa o AOS
AOS.init();

// Botão "voltar ao topo"
const topBtn = document.getElementById("top-btn");
window.onscroll = () => {
    topBtn.style.display = window.scrollY > 300 ? "flex" : "none";
};

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
// Esconde o banner ao rolar
window.addEventListener("scroll", () => {
    const banner = document.getElementById("banner");
    if (window.scrollY > 100) {
        banner.classList.add("fade-out");
    } else {
        banner.classList.remove("fade-out");
    }
});
