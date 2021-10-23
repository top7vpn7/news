(function ($) {
    "use strict";

    /*--
		Header Sticky
    -----------------------------------*/
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll <= 1) {
            $(".header-area").removeClass("sticky");
        } else{
            $(".header-area").addClass("sticky");
        }
	});


    /*--
		Menu Active
    -----------------------------------*/
    $(function () {
    var url = window.location.pathname; 
    var activePage = url.substring(url.lastIndexOf('/') + 1); 
        $('.nav-menu li a').each(function () { 
            var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1); 
    
            if (activePage == linkPage) { 
                $(this).closest("li").addClass("active"); 
            }
        });
    });

    /*--
		Menu Script
	-----------------------------------*/
	
	function menuScript() {
		$('.menu-toggle').on('click', function(){
			$('.mobile-menu').addClass('open')
			$('.overlay').addClass('open')
		});
		
		$('.menu-close').on('click', function(){
			$('.mobile-menu').removeClass('open')
			$('.overlay').removeClass('open')
		});
		
		$('.overlay').on('click', function(){
			$('.mobile-menu').removeClass('open')
			$('.overlay').removeClass('open')
		});
			
		
		/*Variables*/
		var $offCanvasNav = $('.mobile-menu-items ul'),
			$offCanvasNavSubMenu = $offCanvasNav.find('ul ');
	
		/*Add Toggle Button With Off Canvas Sub Menu*/
		$offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');
	
		/*Close Off Canvas Sub Menu*/
		$offCanvasNavSubMenu.slideUp();
	
		/*Category Sub Menu Toggle*/
		$offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
			var $this = $(this);
			if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
				e.preventDefault();
				if ($this.siblings('ul:visible').length) {
					$this.parent('li').removeClass('active-expand');
					$this.siblings('ul').slideUp();
				} else {
					$this.parent('li').addClass('active-expand');
					$this.closest('li').siblings('li').find('ul:visible').slideUp();
					$this.closest('li').siblings('li').removeClass('active-expand');
					$this.siblings('ul').slideDown();
				}
			}
		});
		
		$( ".sub-menu" ).parent( "li" ).addClass( "menu-item-has-children" );
	}
	menuScript();


    /*--
        Slider
    -----------------------------------*/
    var slider = new Swiper('.slider-active .swiper-container', {
        speed: 600,
        effect: "fade",
        loop: true,
        pagination: {
            el: '.slider-active .swiper-pagination',
            clickable: true,
        },
        // autoplay: {
        //     delay: 8000,
        // },
    });


    /*--
        Magnific Popup Activation
    -----------------------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery:{
          enabled:true
        }
    });
    

    /*--
        Cases
    -----------------------------------*/
    var slider = new Swiper('.cases-active .swiper-container', {
        speed: 600,
        navigation: {
            nextEl: '.cases-active .swiper-button-next',
            prevEl: '.cases-active .swiper-button-prev',
        }        
    });
    

    /*--
        Customer
    -----------------------------------*/
    var slider = new Swiper('.customer-active .swiper-container', {
        speed: 600,
        spaceBetween: 70,
        navigation: {
            nextEl: '.customer-active .swiper-button-next',
            prevEl: '.customer-active .swiper-button-prev',
        },
        pagination: {
            el: '.customer-active .swiper-pagination',
            type: 'fraction',
        },        
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },            
            992: {
                slidesPerView: 2,
                spaceBetween: 40,
            },            
            1200: {
                slidesPerView: 2,
                spaceBetween: 70,
            }
        },
    });
    

    /*--
        Consultant
    -----------------------------------*/
    var slider = new Swiper('.consultant-active .swiper-container', {
        speed: 600,
        spaceBetween: 0,        
        pagination: {
            el: '.consultant-active .swiper-pagination',
            clickable: true,
        },        
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },  
            768: {
                slidesPerView: 2,
            },            
            992: {
                slidesPerView: 3,
            }
        },
    });


    /*--
		Contact Form Validation
	-----------------------------------*/
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				name: {
					required: true
				},
				subject: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			}
		});
	}


    /*--
		Back to top Script
	-----------------------------------*/
    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
    event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    /*--
		AOS Scroll Animation
	-----------------------------------*/
	AOS.init({
		once: true,
		duration: 1200,
	});




    
})(jQuery);

