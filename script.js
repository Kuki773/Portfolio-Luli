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