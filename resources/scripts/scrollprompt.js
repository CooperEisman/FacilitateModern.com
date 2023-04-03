// Listen for scroll events and add class to body if scrolled
const scrollDown = document.querySelector('.scroll-prompt');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollDown.classList.add('visible');
    } else {
        scrollDown.classList.remove('visible');
    }
});

window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;
    let particles = document.getElementById("particles-js");
    let content = document.querySelector(".content");
    let opacity = 1 - scrollPos / 800;
    particles.style.opacity = opacity;
    content.style.opacity = opacity;
});