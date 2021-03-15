;
// Начинать писать отсюда!!!!

$(document).ready(function(){

	$('.js-slider').slick({
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '.js-slider__next',
  prevArrow: '.js-slider__prev',
  dots: true,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1, 
        nextArrow: '.price-slider__next',
        prevArrow: '.price-slider__prev'
      }
    }
  ]
  });

  $('.solutions-slider').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.solutions-slider__next',
    prevArrow: '.solutions-slider__prev',
    dots: true,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false
        }
      }
    ]
  });

  $('.completed-slider').slick({
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '.completed-slider__next',
    prevArrow: '.completed-slider__prev',
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          arrows: false
        }
      }
    ]
  });
  
  $('.clients-slider').slick({
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '.clients-slider__next',
    prevArrow: '.clients-slider__prev',
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          arrows: false
        }
      }
    ]
  });
  
  $('.comments-slider').slick({
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '.comments-slider__next',
    prevArrow: '.comments-slider__prev'
  });

  $('.nav-mobile').click(function(){
    $(this).toggleClass('active');
    $('.main-nav__list').toggleClass('mobile-show');
  });



  $('.scroll-link').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

  $('.popup-link').magnificPopup({
    type: 'inline'
  });

});