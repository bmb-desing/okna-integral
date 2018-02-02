
$('document').ready(function() {
	$('li.li__topmenu').click(function() {
		$('li.li__topmenu').removeClass('active__menu--li')
		$(this).addClass('active__menu--li');
        $('.topmenu__products').css('display','none')
	})

    $('.li__topmenu a').click(function(e) {
        e.preventDefault();
     })

    $('li.li__topmenu--products').click(function() {
        $('.topmenu__products').css('display','block')
        $('.topmenu__products li a').css('color','white')
    })

     $('li.li__topmenu--products').hover(function() {
        $('.topmenu__products').css('display','block')
        $('.topmenu__products li a').css('color','white')
    })
     $('li.li__topmenu--products').mouseleave(function() {
        $('.topmenu__products').css('display','none')
    })


      $('.topmenu__products li a').hover(function() {
        $('.topmenu__products li a').css('color','white')
        $(this).css('color','#dc3236')
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
	
