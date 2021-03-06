 $('document').ready(function() {

    //Открытие модального окна
    $('.header__container--btn button').click(function(e) {
        e.preventDefault();
        $('.form__fixed').fadeIn();
    });
    //Открытие моадльного конец
    //Закрытие модального окна
    $('.form__fixed__close').click(function() {
        $('.form__fixed').fadeOut();
    });
    $(document).mouseup(function (e) {
        var elem = $('.form__fixed');
        var elems = $('.form__fixed__block');
        if (!elems.is(e.target)
            && elems.has(e.target).length === 0) {
            $('.form__fixed').fadeOut();
        }
    });
    //Закрытие модального окна конец
    $('.inthistory__otzivi span').click(function() {
        $('.inthistory__otzivi span').removeClass('inthistory__active')
        $(this).addClass('inthistory__active')
    })

    //Инпут поиска
    $('.fa-search').click(function(){
    $('.search__input').css('display','inline')
    });

    $('.form__fixed__close').click(function() {
        $('.form__fixed').css('display','none')
    })

   $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".search__input"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide();//скрыть
        }
    });


   $('.product__prevnext li').click(function(e) {
    $('.product__prevnext li').removeClass('li__current')
    $(this).addClass('li__current')
   })

       // Все для меню
     //Открытие при наведении
     $('.li__topmenu, .mm-listview').hover(function() {
         $(this).addClass('hover__menu--li');
         $('.topmenu__products a').css('color', 'white')
         $(this).children('ul').slideDown();    
     }, function() {
         $(this).removeClass('hover__menu--li');
         $(this).children('ul').slideUp();
     });


// Менюшка - гамбургер
    $('#my-menu').mmenu({
        extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: '<img alt="" src="img/logo.png">'
        },
        offCanvas: {
            position: 'right'
        }
        
    });

     

    //Popup

    //При клике на ссылку выводится галерея
    $('a.btn-gallery').on('click', function(event) {
        event.preventDefault();

        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type:'image',
            gallery: {
                enabled: true
            }
        }).magnificPopup('open');
    });
     $('.popup-block').magnificPopup({
         delegate: 'a',
         type: 'image',
         tLoading: 'Loading image #%curr%...',
         mainClass: 'mfp-img-mobile',
         gallery: {
             enabled: true,
             navigateByImgClick: true,
             preload: [0,1] // Will preload 0 - before current, and 1 after the current image
         },
         image: {
             tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
             titleSrc: function(item) {
                 return item.el.attr('title');
             }
         }
     });

    $('.index__owl').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
         2000:{
            items:1
        },

    }

})


var owl2 = $('.part');
     owl2.owlCarousel({
         loop: true,
         nav: false,
         dots: false,
         //autoWidth: true,
         //center: true,
         autoplay: true,
         //margin: 10,
         responsive: {
             0: {
                 margin: 0,
                 items: 1
             },
             600: {
                 margin: 20,
                 items: 2
             },
             1000: {
                 margin: 30,
                 items: 4
             }
         }
     });
     owl2.on('changed.owl.carousel', function(event) {
         var items = $('.part .owl-item.active div');
         var activeItem = items[0];
         var title = activeItem.attributes[0].value;
         $('.partners h6').text(title || 'Наши партнеры');
     });
var owl = $('.owl-carousel');
$('.forward').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.back').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

$(".phone").mask("+ 9(999)999-9999");

});

$(document).ready(function () {
    //Калькулятор
    //Переключение качества
    if ($('.calc__check').length) {
        $('.calc__check').click(function () {
            if (!$(this).hasClass('active')) {
                $('.calc__check').removeClass('active');
                $(this).addClass('active');
                var noise = $(this).attr('data-noise');
                var protect = $(this).attr('data-protect');
                var sun = $(this).attr('data-sun');
                var energy = $(this).attr('data-energy');
                editProgress(noise, 'noise');
                editProgress(protect, 'protect');
                editProgress(sun, 'sun');
                editProgress(energy, 'energy');
                activeWindow();
            }
        })
        //Переключение изображений
        $('.calc__lists li ul li').click(function () {
            if (!$(this).hasClass('active')) {
                $('.calc__lists li ul li').removeClass('active');
                $('.calc__lists_item').removeClass('active');
                var image = $(this).children('img').attr('data-image');
                var window = $(this).parents('.calc__lists_item');
                window.addClass('active');
                $(this).addClass('active');
                $('.calculator__image').attr('src', image);
                activeWindow();
            }
        })
        //Чекбоксы модификаций
        $('.modify li').click(function () {
            $(this).toggleClass('active');
            var ind = $(this).index();
            var price = calc[3][ind];
            var mod = $(this).attr('data-modify');
            if ($(this).hasClass('active')) {
                addModify(price, mod);
            }
            else {
                removeModify(price, mod);
            }
        });
        $('.button__calc').click(function (e) {
        e.preventDefault();
        $('.modal__calc').fadeIn();
        $('.modal__calc input[name=window]').val(callback_window);
        $('.modal__calc input[name=modify]').val(modifiers);
    })
    }
});
 if ($('.calc__check').length) {
    function editProgress(width, elem) {
        $('.calculator__progress_'+elem).children('.progress').children('span').css('width', width+'%')
    }
    var price = 0;
    var modify = 0;
    var modifiers = [];
    var callback_window = 'Качество окна: 0 Вид окна: 0 Окно: 0';
    var active_window = calc[0][0][0]
    function pricing() {
        var price = active_window;
        var full_price = active_window+modify;
        $('.price__item_empty .price__var span').text(price);
        $('.price__item_full .price__var span').text(full_price);
    }
    function activeWindow() {
        var tab = $('.calc__lists_item.active').index();
        var window = $('.calc__lists li ul li.active').index();
        var status = $('.calc__check.active').index();
        active_window = calc[status][tab][window];
        callback_window = 'Качество окна: '+status+' Вид окна: '+tab+' Окно: '+window;
        pricing();
    }
    function addModify(price, mod) {
        modify+=price;
        var sum = active_window + modify;
        modifiers.push(mod);
        $('.price__item_full .price__var span').text(sum);
    }
    function removeModify(price, mod) {

        modify-=price;
        var sum = active_window + modify;
        var findMod = modifiers.indexOf(mod);
        modifiers.splice(findMod, 1);

        $('.price__item_full .price__var span').text(sum);
    }
    pricing()
 }
