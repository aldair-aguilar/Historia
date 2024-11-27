// Inicializar AOS
AOS.init({
    duration: 1200, // Duración de las animaciones
    easing: 'ease-in-out', // Efecto de suavizado de la animación
    once: true, // Solo animar una vez cuando el elemento se muestra
    mirror: false // No reflejar las animaciones en elementos visibles al desplazarse hacia atrás
});

// Botón Volver Arriba
const scrollUpBtn = document.getElementById("scrollUp");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};

scrollUpBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
