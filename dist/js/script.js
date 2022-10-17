window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
});

$(document).ready(function(){
    $('.review__slider').slick({
        centerMode: true,
        speed:800,
        infinite: true,
        slidesToShow: 3,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/left.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/right.svg" alt=""></button>',
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 1

            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 1
            }
          }
        ]
      });
  });

