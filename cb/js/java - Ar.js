

// Cofigure/Customize Carousel
$(document).ready(function() {
	"use strict";
              var owl = $('.owl-carousel.services-carousel');
              owl.owlCarousel({
                margin: 10,
                nav: true,
				dots: false,
                loop: true,
				rtl: true,
                responsive: {
                  0: {
                    items: 2
                  },
                  700: {
                    items: 3
                  },
                  992: {
                    items: 4
                  },
				  1200: {
                    items: 5
                  }
                }
              });
            });


// Configure/customize  variables. Show/less more
$(document).ready(function() {
	"use strict";
    var showChar = 200;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "أقراء المزيد >";
    var lesstext = "عرض أقل";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
	
	
	
	
});



// Configure/customize Load More.

$(function () {
	"use strict";
    $(".load").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".load:hidden").slice(0, 3).fadeIn(500);
        if ($(".load:hidden").length === 0) {
            $("#loadMore").fadeOut(1000);
        }
       
    });
	
	

	
});



// Configure/customize Counter.

var a = 0;
$(window).scroll(function() {
"use strict";
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a === 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
	


// Configure/customize Testimonial.

$(function() {
	"use strict";
  $('.owl-carousel.testimonial-carousel').owlCarousel({
    nav: true,
    dots: false,
	rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 2,
      }
    }
  });
});

// Configure/customize Our Team.

$(function() {
	"use strict";
  $('.owl-carousel.team-carousel').owlCarousel({
    nav: true,
    dots: false,
	rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
	  992: {
        items: 3,
      }
    }
  });
});


// Configure/customize Contact Form

$( '.js-input1' ).keyup(function() {
	"use strict";
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});




// Configure/customize Navbar

jQuery(document).ready(function($) {
 "use strict";

	
	
	$('.navbar a').click(function(){
		
		
		
		$('html,body').animate({
			
			scrollTop: $('#' + $(this).data('scroll')).offset().top  - 90 + 1
			
		},1000);
		
	});
	
	
	
	$('.navbar  a').click(function(){
		
		$('.navbar  a').removeClass('active');
		
		$(this).addClass('active');
		
		
	});
	
	$(window).scroll(function(){
		
		$('.section').each(function(){
			
			if ($(window).scrollTop() > $(this).offset().top - 90 ){
				
			var blockID = $(this).attr('id');
				
				$('.navbar li a').removeClass('active');
				
				$('.navbar li a[data-scroll="' + blockID + '"]').addClass('active');
			}	
		});
	});
	
	
	
	
	$('.container2').click(function(){
		
		$(this).toggleClass('change');
		
		
	});
	
	
	var prevScrollpos = window.pageYOffset;

	$(window).scroll(function() {

	var currentScrollPos = window.pageYOffset;

			  if (prevScrollpos > currentScrollPos)
			  {
				$('#navbar').css('top', 0);
			  }
				else 
			  {
				$('#navbar').css('top', '-90px');
			  }
			  prevScrollpos = currentScrollPos;

			});
	
	
	
	
	
	});







