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

     
    var ap = $('#my-menu').data('mmenu');
    ap.bind('open:start', function() {
        $('.hamburger').addClass('is-active');
    }).bind('close:finish', function() {
        $('.hamburger').removeClass('is-active');
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

var owl = $('.owl-carousel');
$('.forward').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.back').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

$(".phone").mask("+ 9(999)999-9999");

});

function validateForm() {
    let textar = document.querySelector('textarea').value
    let phone = document.querySelector('.phone').value
    let elem = document.querySelector('.form__error--first')
    let elem2 = document.querySelector('.form__error--sec')
    

    if(phone.length < 2) {
        elem.style.display = 'block'
        return false
        } else {
            elem.style.display = 'none'         
    } 

    if(textar.length < 10) {
        elem2.style.display = 'block'
        return false
        } else {
            elem2.style.display = 'none'    
    }

    if(textar.length > 10 && phone.length > 2) {
        return true;
    }
    
}