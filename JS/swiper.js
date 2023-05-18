import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
});
const swiper2 = new Swiper(".mySwiper2", {
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiper,
    },
});