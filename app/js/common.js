
$('document').ready(function() {

    // Все для меню
    //Отмена на нажатие
	$('.li__topmenu').click(function(e) {
        e.preventDefault();
        return false;
    });
    //Конец Отмены на нажатие
    //Открытие при наведении
    $('.li__topmenu').hover(function() {
        $(this).addClass('active__menu--li');
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

	$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
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
    let elem = document.querySelector('.form__error')
    if(textar.length < 10) {
		elem.style.display = 'block'
		return false
		} else {
			elem.style.display = 'none'
			return true;
	}
}
	
