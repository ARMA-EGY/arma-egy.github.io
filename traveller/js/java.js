jQuery(document).ready(function($) {
 "use strict";


$('.box').click(function(){
	
	
	
	$('.tabs-content > div').hide();
	
	$($(this).data('class')).show();
});
	
	
	$('.reflect').click(function(){
		
		$(this).toggleClass('reflect1');
		
	});
	
	
	$('.navbar li a').click(function(e){
		
		e.preventDefault();
		
		$('html,body').animate({
			
			scrollTop: $('#' + $(this).data('scroll')).offset().top  - 66 + 1
			
		},1000);
		
	});
	
	
	
	$('.navbar li a').click(function(){
		
		$('.navbar li a').removeClass('active');
		
		$(this).addClass('active');
		
		
	});
	
	$(window).scroll(function(){
		
		$('.section').each(function(){
			
			if ($(window).scrollTop() > $(this).offset().top - 66 ){
				
			var blockID = $(this).attr('id');
				
				$('.navbar li a').removeClass('active');
				
				$('.navbar li a[data-scroll="' + blockID + '"]').addClass('active');
			}	
		});
	});
	
	
	
	
	
	$(window).scroll(function(){
	
	
		
		var sticky = $('.backgroundb').offset().top - 66 - 20;
		
		if ($(window).scrollTop() > sticky)
			{
				$('.navbar').addClass('scrolled');
			}
		else if ($(window).scrollTop() < sticky)
			{
				$('.navbar').removeClass('scrolled');
			}	
		
	});
	
	
	
	
	/* Start Login */
	
	$("#newUser").click(function(){
  $(".backgrounda h2").text("Registration");
  $(".logo").css({
    "width":"120px",
    "height":"120px",
    "top":"10px"
  });
  $("#login-form").fadeOut(200);
  $("#registration-form").delay(300).fadeIn(500);
  $(".other-options").fadeOut(200);
});

$("#signup-btn,#getpass-btn").click(function(){
  $(".backgrounda h2").text("Log in");
  $(".logo").css({
    "width":"150px",
    "height":"150px",
    "top":"30px"
  });

  $("#registration-form,#fpass-form").fadeOut(200);
  $("#login-form").delay(300).fadeIn(500);
  $(".other-options").fadeIn(300);
});

$("#fPass").click(function(){
  $(".backgrounda h2").text("Forgotten password");
  $(".logo").css({
    "width":"190px",
    "height":"190px",
    "top":"40px"
  });

  $("#login-form").fadeOut(200);
  $("#fpass-form").delay(300).fadeIn(500);
  $(".other-options").fadeOut(200);
});
	
	/* End Login */
	
	
	
	});

