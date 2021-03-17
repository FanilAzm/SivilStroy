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
    ],
    nextArrow: '.licenses-slider__next',
    prevArrow: '.licenses-slider__prev'
  });

  $('.services-item button').click(function(e){
    let target = $(e.target);
    if(target.closest('div').attr('id', 'services-btn')) {
      $(this).css({'display':'none'});
      $(this).closest('.services-item_text').css({'padding':'30px', 'height':'564px'});
      $(this).siblings('.services-item__descr').css({'display':'none'});
      $(this).siblings('.services-item__descr_full').css({'display':'block'});
      $('.services-item_img img').css({'height':'100%'});
    }
    
  });

  $('#all-licenses').click(function(){
    $('.licenses-action').css({ 'display' : 'none' });
    $('.licenses-items .slick-dotted.slick-slider').css({ 'margin-bottom' : '80px' });
    $('.licenses-item[data-slick-index="3"]').css({ 'opacity' : '1' });
    $('.licenses-item[data-slick-index="4"]').css({ 'opacity' : '1' });
    $('.slick-dots').css({ 'opacity' : '1' });
    $('.licenses-slider__next').css({ 'opacity' : '1' });
    $('.licenses-slider__prev').css({ 'opacity' : '1' });
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