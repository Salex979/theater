Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

const burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', function() {
  const menuMobile = document.querySelector('.nav>ul');
  const btnClose = document.querySelector('.menu-close');

  menuMobile.classList.add('active');

  btnClose.addEventListener('click', function() {
    menuMobile.classList.remove('active');
  });
});


const swiper = new Swiper('.swiper-main', {
  // Optional parameters
  loop: false,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

const swiperPoster = new Swiper('.swiper-poster', {
  loop: true,

  navigation: {
    nextEl: '.next',
    prevEl: '.back',
  },
});
