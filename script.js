// Función para abrir la imagen ampliada
function toggleImage(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block"; // Muestra el modal
    modalImg.src = img.src; // Asigna la imagen clickeada al modal
}

// Función para cerrar la imagen ampliada
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Oculta el modal
}

// Cerrar el modal al hacer clic fuera de la imagen
window.onclick = function (event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none"; // Oculta el modal si se hace clic fuera
    }
};

// Funciones para el carrusel
function showSlide(category, index) {
    const carouselInner = document.querySelector(`.carousel.${category} .carousel-inner`);
    const offset = -index * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function prevSlide(category) {
    const carouselInner = document.querySelector(`.carousel.${category} .carousel-inner`);
    const items = carouselInner.querySelectorAll('.carousel-item');
    let index = Array.from(items).findIndex(item => item.classList.contains('active'));
    index = (index - 1 + items.length) % items.length;
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
    showSlide(category, index);
}

function nextSlide(category) {
    const carouselInner = document.querySelector(`.carousel.${category} .carousel-inner`);
    const items = carouselInner.querySelectorAll('.carousel-item');
    let index = Array.from(items).findIndex(item => item.classList.contains('active'));
    index = (index + 1) % items.length;
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
    showSlide(category, index);
}

// Inicializar los carruseles
document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const category = carousel.classList[1]; // Obtiene la categoría del carrusel
        showSlide(category, 0); // Muestra la primera imagen al cargar la página
    });

    // Manejar el menú hamburguesa
    const mobileMenu = document.getElementById('mobile-menu');
    const navGroup = document.getElementById('nav-group');

    mobileMenu.addEventListener('click', () => {
        navGroup.classList.toggle('active');
    });
});