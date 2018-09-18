
jQuery(document).ready(function($) {
	"use strict";
	
$(window).scroll(function(){
	
	
		
		var sticky = $('.social-section').offset().top;
		
		if ($(window).scrollTop() > sticky)
			{
				$('.navbar').addClass('scrolled');
			}
		else if ($(window).scrollTop() < sticky)
			{
				$('.navbar').removeClass('scrolled');
			}	
		
	});

$('.tabs-section li').click(function(){
	
	
	$(this).addClass('active2').siblings().removeClass('active2');
	
	$('.tabs-section .tabs-content > div').hide();
	
	$($(this).data('class')).show();
});

var zindex = 0;
	
	$('.tabs-section li').eq(0).click(function(){
		
		
		$('.cards .t7').animate({
			
			bottom: '120%',
			
			
			
			
		},400,  function(){
			
			zindex++;
			
			$('.cards .t7').css('z-index', zindex);
			
		}).animate({
			
			bottom : $('.cards .t7').css('bottom'),
			
			
			
		});
	});
	
	$('.tabs-section li').eq(1).click(function(){
		
		
		$('.cards .ym').animate({
			
			right: '120%',
			
			marginTop: '10%'
			
			
		},400,  function(){
			
			zindex++;
			
			$('.cards .ym').css('z-index', zindex);
			
		}).animate({
			
			right : $('.cards .ym').css('right'),
			
			marginTop: 0
			
		});
	});
	
	$('.tabs-section li').eq(2).click(function(){
		
		
		$('.cards  .fo').animate({
			
			top: '120%',
			
			
			
			
		},400,  function(){
			
			zindex++;
			
			$('.cards  .fo').css('z-index', zindex);
			
		}).animate({
			
			top : $('.cards  .fo').css('top'),
			
			
			
		});
	});
	
	
	
	
	
	
	
	
	$('.type').focus(function(){
		
		$('.ov').css('background', 'rgba(0,0,0,0)' );
		$('.type').css('color', '#000' );
		$('.type1').css('color', '#000' );
	});
	
	
	$('.type').blur(function(){
		
		$('.ov').css('background', 'rgba(0,0,0,0.2)' );
		$('.type').css('color', '#FFF' );
		$('.type1').css('color', '#FFF' );
	});
	
	
	
	
	$('.navbar li a').click(function(e){
		
		e.preventDefault();
		
		$('html,body').animate({
			
			scrollTop: $('#' + $(this).data('scroll')).offset().top  - $('.navbar').innerHeight() + 1
			
		},1000);
		
	});
	
	
	
	$('.navbar li a').click(function(){
		
		$('.navbar li a').removeClass('active');
		
		$(this).addClass('active');
		
		
	});
	
	$(window).scroll(function(){
		
		$('.section').each(function(){
			
			if ($(window).scrollTop() > $(this).offset().top - $('.navbar').innerHeight() ){
				
			var blockID = $(this).attr('id');
				
				$('.navbar li a').removeClass('active');
				
				$('.navbar li a[data-scroll="' + blockID + '"]').addClass('active');
			}	
		});
	});
	
	
	
	
	
	
	
	
	
});