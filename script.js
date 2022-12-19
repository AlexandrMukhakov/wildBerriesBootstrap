const nav = document.querySelectorAll('.navigation-link');
const navs = document.querySelector('.navigation');

navs.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains('navigation-link')) {
        nav.forEach(item => {
            if (e.target == item) {
                item.classList.toggle('red');
            }
        });
    }
});


const swiper = new Swiper('.swiper', {
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });