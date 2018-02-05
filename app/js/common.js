
$('document').ready(function() {

    //Инпут поиска
    $('.fa-search').click(function(){
    $('.search__input').css('display','inline')
    });

   $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".search__input"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide();//скрыть
        }
    });

       // Все для меню
     //Открытие при наведении
     $('.li__topmenu').hover(function() {
         $(this).addClass('active__menu--li');
         $('.topmenu__products a').css('color', 'white')
         $(this).children('ul').slideDown();    
     }, function() {
         $(this).removeClass('active__menu--li');
         $(this).children('ul').slideUp();
     });
     //Все для меню окончание , коментируй свой код

	$('.pls__otkos').owlCarousel({
    loop: true,
    dots: true,
    nav: true,
    navText : ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
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
	
