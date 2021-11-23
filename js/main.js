const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: "auto",
    spaceBetween: 73,
    slidesPerGroup: 2,
    centeredSlides: true,
    freeMode: true,
    loop: true,
    speed: 1000,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: '.special-offers__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.special-offers__button-next',
        prevEl: '.special-offers__button-prev',
    },
});

const btnMenu = document.querySelector('.hero__header-btn-menu');
const menu = document.querySelector('.hero__nav');
const body = document.querySelector('body');

function toggleMobileMenu() {
    btnMenu.classList.toggle('hero__header-btn-menu--open');
    menu.classList.toggle('hero__nav--open');
    body.classList.toggle('overflow-hidden');
}

btnMenu.addEventListener('click', toggleMobileMenu);