
// Cofigure/Customize NavBar

$("#nav-container").click(function() {
  "use strict";
	$('#nav-container').toggleClass("pushed");
});

$("#nav-container").click(function() {
  "use strict";
	$('.menu').toggleClass("mov");
});



// Cofigure/Customize skills-circle

$(function() {
	"use strict";
  $('.chart').easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 20,
    lineCap: 'butt',
    barColor: '#6ddce5',
    trackColor:	"#ecf0f1",
    size: 160,
    animate: 500
  });
});



// Cofigure/Customize Carousel
$(document).ready(function() {
	"use strict";
              var owl = $('.owl-carousel.services-carousel');
              owl.owlCarousel({
                margin: 10,
                nav: true,
				dots: false,
                responsive: {
                  0: {
                    items: 1
                  },
                  700: {
                    items: 2
                  },
                  992: {
                    items: 3
                  }
                }
              });
            });



$(document).ready(function() {
	"use strict";
  $('.circle-container').find('a').click(function(event) {
    event.preventDefault();
  });
  $('.circle-container').find('li').hover(function() {
    $('.circle-container').find('li').removeClass('active');
    $(this).addClass('active');
    $('.services-container').find('li.active').removeClass('active');

    $(".services-container").find('li').eq($(this).data('id')).addClass('active');

  });

});




// Configure/customize Load More.

$(function () {
	"use strict";
    $(".load").slice(0, 2).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".load:hidden").slice(0, 2).fadeIn(500);
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
	


// Configure/customize Menu

jQuery(document).ready(function($) {
 "use strict";

	
	
	$('.menu a').click(function(){
		
		$('html,body').animate({
			
			scrollTop: $('#' + $(this).data('scroll')).offset().top  + 1
			
		},1000);
		
	});
	
	
	
	$(window).scroll(function(){
		
		$('.section').each(function(){
			
			if ($(window).scrollTop() > $(this).offset().top  ){
				
			var blockID = $(this).attr('id');
				
				$('.menu li a').removeClass('active');
				
				$('.menu li a[data-scroll="' + blockID + '"]').addClass('active');
			}	
		});
	});
	

	});







