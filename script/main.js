const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 16
        },   1040: {
          slidesPerView: 3,
          spaceBetween: 16
        }
      }
  });
  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 16
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 16
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween:16
        },
        1040: {
          slidesPerView: 2,
          spaceBetween: 16
        }
      }
  });
  const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 16
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween:20
        }
      }
  });
  const swiper4 = new Swiper('.swiper4', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
    },breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 16
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween:16
        },
        1040: {
          slidesPerView: 2,
          spaceBetween: 16
        }
      }
  });
  $(document).ready(function(){
    $('.header-burger').click(function(e){
      e.preventDefault();
  
      $('.header-links2').slideToggle();
 
    })
    $('.clicked').click(function(){
    
      $('.header-links2').slideToggle();
 
    })
    $('.header__close').click(function(e){
      e.preventDefault();
  
      $('.header-links2').slideToggle();
 
    })
    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
  
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
  });
  
  AOS.init();
  })
  $('.popupbtn').click( function(e) {
    e.preventDefault();
      $('.overlay').fadeIn();
    });
    
        // Закрытие окна на крестик
        $('.close-popup').click( function() {
          $('.overlay').fadeOut();
        });
        
        // Закрытие окна на поле
        $(document).mouseup( function (e) { 
          var popup = $('.popup');
          if (e.target != popup[0] && popup.has(e.target).length === 0){
            $('.overlay').fadeOut();
          }
        });