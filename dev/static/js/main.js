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
        slidesToShow: 1,
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
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
    nextArrow: '.solutions-slider__next',
    prevArrow: '.solutions-slider__prev',
  });

  $('.completed-slider').slick({
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '.completed-slider__next',
    prevArrow: '.completed-slider__prev'
  });
  
  $('.clients-slider').slick({
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '.clients-slider__next',
    prevArrow: '.clients-slider__prev'
  });
  
  $('.comments-slider').slick({
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
    nextArrow: '.comments-slider__next',
    prevArrow: '.comments-slider__prev'
  });

  $('.licenses-slider').slick({
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
    nextArrow: '.licenses-slider__next',
    prevArrow: '.licenses-slider__prev'
  });

  $('.sets-slider').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
    nextArrow: '.sets-slider__next',
    prevArrow: '.sets-slider__prev',
  });

  $('.reviews-slider').slick({
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '.reviews-slider__next',
    prevArrow: '.reviews-slider__prev'
  });

  // Слайдер в попап

  const slickSlide = $('.completed-popup__slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.completed-popup__nav'
  });
  const slickNav = $('.completed-popup__nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.completed-popup__slide',
    nextArrow: '.completed-popup__next',
    prevArrow: '.completed-popup__prev'
  });

  // Модальное окно

  function openModal(btn, selector) {
    $(btn).click(function(){
      slickSlide.slick('refresh');
      slickNav.slick('refresh');
    });
  
    $(btn).click(function(e){
      e.preventDefault();
      $(selector).addClass('active');
      $('body').addClass('popup-open');
    });
    $('.popup-close').click(function(){
      $(selector).removeClass('active');
      $('body').removeClass('popup-open');
    });
  }

  openModal('.completed-popup__btn', '.completed-popup');
  openModal('.sets-popup__btn', '.sets-popup');
  openModal('.services-popup__btn', '.services-popup');
  openModal('.solutions-popup__btn', '.solutions-popup');
  openModal('.section-form-popup__btn', '.section-form-popup');
  openModal('.calculate-form-popup__btn', '.calculate-form-popup');
  openModal('.sent-success__btn', '.sent-success-popup');

  // Нажатие не по элементу, закрывает его

  $(document).mouseup(function(e){
    if ($('.header-nav__menu-item').has(e.target).length === 0){
      $('.header-nav__menu-item').removeClass('active');
    }
    if ($('.new-select').has(e.target).length === 0){
      $('.new-select').removeClass('on');
      $('.new-select__list').css({'display':'none'});
    }
    if ($('.popup').has(e.target).length === 0){
      $('.popup').removeClass('active');
      $('body').removeClass('popup-open');
    }
  });

  // Выпадающее меню навигации

  $('.header__btn').click(function(e){
    $(this).closest('.header-nav__menu-item').toggleClass('active');
    $(this).closest('.header-nav__menu-item').siblings().removeClass('active');
  });

  // 

  // $('.services-item button').click(function(e){
  //   let target = $(e.target);
  //   if(target.closest('div').attr('id', 'services-btn')) {
  //     $(this).closest('.services-item__wrap').addClass('active');
  //   }
  // });

  // 

  $('#all-licenses').click(function(){
    $('.licenses').addClass('active');
  });

  $('.security-item .btn-action').click(function(){
    $(this).closest('.security-items').css({'min-height':'745px'});
    $(this).closest('.security-item').addClass('active');
  });

  $('.security-item__img').click(function(){
    $(this).closest('.security-item').addClass('active');
    $(this).closest('.security-item').siblings().removeClass('active');
  });

  $('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});

  $('.nav-mobile').click(function(){
    $(this).toggleClass('active');
    $('.header-nav__tablet').toggleClass('active');
  });

  $('.btn-close').click(function(){
    $('.header-nav__tablet').removeClass('active');
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