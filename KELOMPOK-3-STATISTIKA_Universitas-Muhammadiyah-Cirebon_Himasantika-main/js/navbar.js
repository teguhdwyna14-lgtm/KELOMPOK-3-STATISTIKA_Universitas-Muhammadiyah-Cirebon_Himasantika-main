let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll < 0) {
        currentScroll = 0;
    }
    if (currentScroll > lastScrollTop && currentScroll > 80) {
        header.classList.add('nav-hidden');
    } else {

        header.classList.remove('nav-hidden');
    }
    lastScrollTop = currentScroll;
});