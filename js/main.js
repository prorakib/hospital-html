(function ($) {
  "use strict";



  // data-background
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  })


  // meanmenu

  $('#mobile-menu').meanmenu({

    meanMenuContainer: '.mobile-menu',

    meanScreenWidth: "991",

    onePage: true

  });

  // Stikey Js  
  (function () {
    var nav = $('.maan-menu-nav-sec');
    var scrolled = false;
    $(window).on('scroll', function () {
      if (120 < $(window).scrollTop() && !scrolled) {
        nav.addClass('sticky_menu animated fadeInDown').animate({ 'margin-top': '0px' });
        scrolled = true;
      }
      if (90 > $(window).scrollTop() && scrolled) {
        nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
        scrolled = false
      }
    });
  }());

  // Menu Nav

  function smoothSctollTop() {

    $('.maan-main-menu ul li > a,.maan-mean-nav ul li > a').on('click', function (event) {

      var target = $(this.getAttribute('href'));

      if (target.length) {

        event.preventDefault();

        $('html, body').stop().animate({

          scrollTop: target.offset().top - 100

        }, 1000);

      }

    });

  }

  smoothSctollTop();


  // swiper 


  var swiper = new Swiper(".maan-department-image-container", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".maan-department-swiper-dotted",
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
    }
  });

  var swiper = new Swiper(".maan-blog-image-container", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".maan-blog-swiper-dotted",
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
    }
  });

  var swiper = new Swiper(".maan-testimonial-container", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".maan-testimonial-swiper-dotted",
      clickable: true,
    },
    breakpoints: {
      1400: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
    }
  });


  /* ==================================================
  # Magnific popup init
 ===============================================*/
  $(".popup-link").magnificPopup({
    type: 'image',
    // other options
  });

  $(".popup-gallery").magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    // other options
  });


  // dark mode 
  function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  }



  // Counter Up




  var counter = $('.timer');
  if (counter.length) {
    $('.timer').counterUp({
      delay: 20,
      time: 1500
    });
  }

  // wow init
  new WOW().init();



  var navListItems = $('div.setup-panel li a'),
    allWells = $('.setup-content'),
    allNextBtn = $('.nextBtn'),
    allPrevBtn = $('.prevBtn');

  allWells.hide();

  navListItems.click(function (e) {
    e.preventDefault();
    var $target = $($(this).attr('href')),
      $item = $(this);

    if (!$item.hasClass('disabled')) {
      navListItems.removeClass('is-active').addClass('btn-default');
      $item.addClass('is-active');
      allWells.hide();
      $target.show();
      $target.find('input:eq(0)').focus();
    }
  });

  allPrevBtn.click(function () {
    var curStep = $(this).closest(".setup-content"),
      curStepBtn = curStep.attr("id"),
      prevStepSteps = $('div.setup-panel li a[href="#' + curStepBtn + '"]').parent().prev().children("a");

    prevStepSteps.removeAttr('disabled').trigger('click');
  });

  allNextBtn.click(function () {
    var curStep = $(this).closest(".setup-content"),
      curStepBtn = curStep.attr("id"),
      nextStepWizard = $('div.setup-panel li a[href="#' + curStepBtn + '"]').parent().next().children("a"),
      curInputs = curStep.find("input[type='text'],input[type='url']"),
      isValid = true;

    $(".form-group").removeClass("has-error");
    for (var i = 0; i < curInputs.length; i++) {
      if (!curInputs[i].validity.valid) {
        isValid = false;
        $(curInputs[i]).closest(".form-group").addClass("has-error");
      }
    }

    if (isValid)
      nextStepWizard.removeAttr('disabled').trigger('click');
  });

  $('div.setup-panel li a.btn-indigo').trigger('click');



  $(document).ready(function () {
    $('select').niceSelect();
  });


  $(function () {
    $("#datepicker").datepicker();
  });
  $(function () {
    $("#datepicker1").datepicker();
  });
  $(function () {
    $("#datepicker2").datepicker();
  });

    }) (jQuery);
