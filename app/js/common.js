
$(function(){
	$('li.li__topmenu').click(function() {
		$('li.li__topmenu').removeClass('active__menu--li')
		$(this).addClass('active__menu--li');
	})

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
owl.owlCarousel();
// Go to the next item
$('.forward').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.back').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

$("#phone").mask("+ 9(999)999-9999");
   


});

function submitBut() {
	let textar = document.querySelector('textarea').value
	let elem = document.querySelector('.form__error')
	if(textar.length < 10) {
	elem.style.display = 'block'
	return false
	} else {
		elem.style.display = 'none'
	}
}

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
