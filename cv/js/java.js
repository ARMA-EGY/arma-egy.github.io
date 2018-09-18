$(function() {
	
	'use strict';

$('.menu').on('click',function() {
		
		$('.bar').slideUp(1000);
	    $('.page').animate({
			
			marginLeft: '320px',
			marginTop: '30px'
			
		},1000);
		
			$('.menu1').animate({
				
			left: '0%'
				
			},1000);
		
	});
	
	
	$('.remove').on('click',function() {
		
			$('.bar').slideDown(1000);
			$('.page').animate({
			
			marginLeft: '0',
			marginTop: '0px'
			
		},1000);
		
		$('.menu1').animate({
				
			left: '-300px'
				
			},1000);
		
	});
	
	
	
	$('.theme ul li').eq(0).css("backgroundColor","#363636").end()
	.eq(1).css("backgroundColor","#868282").end()
	.eq(2).css("backgroundColor","#3498db").end()
	.eq(3).css("backgroundColor","#17a2b8").end()
	.eq(4).css("backgroundColor","#e74c3c");
	
	$('.theme ul li').click(function(){
		
		$("link[href*='theme']").attr("href",$(this).attr("data-value"));
		
	});
	
	
	
	
	$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
	
	
	$('.plus1').on('click',function() {
		
		$('.plus1').toggleClass('vis1');
		
		$('.slide1').slideDown(500);
		
		if ($('.plus1').hasClass('vis1')){
			
			$('.plus1').css("transform","rotate(45deg)");
			
		} else
			
		{
			$('.plus1').css("transform","rotate(0)");
			$('.slide1').slideUp(500);
			
		}
	});
	
	
	$('.plus2').on('click',function() {
		
		$('.plus2').toggleClass('vis2');
		
		$('.slide2').slideDown(500);
		
		if ($('.plus2').hasClass('vis2')){
			
			$('.plus2').css("transform","rotate(45deg)");
			
			
		} else
			
		{
			$('.plus2').css("transform","rotate(0)");
			$('.slide2').slideUp(500);
			
		}
	});
	
	
	
	
	$('.buttons').click(function(){
		
		$('.buttons').removeClass('active');
		
		$(this).addClass('active');
		
		
	});
	
	$('.buttons2').click(function(){
		
		$('.buttons2').removeClass('active');
		
		$(this).addClass('active');
		
		
	});
	
	
	$(window).scroll(function(){
		
		
		if ($(window).scrollTop() >= 1000)
			{
				$('.up1').fadeIn(1000);
			}
		else 
			{
				$('.up1').fadeOut(1000);
			}	
		
	});
	
	
	
	$('.up1').click(function(){
				   
	$('html,body').animate({
			
	scrollTop: 0
			
		},2000);	   
				   
	});
	
	
	
	
	$('.navy a').click(function(){
		
		
		
		$('html,body').animate({
			
			scrollTop: $('#' + $(this).data('scroll')).offset().top  -  1
			
		},1000);
		
	});
	
	
	
	$('.navy a').click(function(){
		
		$('..navy a').removeClass('active');
		
		$(this).addClass('active');
		
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	$(function(){
		$('.list li:first-child').click(function(){
			 window.setTimeout(function() {
           $('.profile').slideToggle();
                }, 300);
		});
		$('.list li:nth-child(2)').click(function(){
			 window.setTimeout(function(){
			$('.trivia').slideToggle();
					},300);
		});
		$('.list li:nth-child(3)').click(function(){
			 window.setTimeout(function(){
			$('.movies').slideToggle(); 
					},300);
		});
		$('.list li:nth-child(4)').click(function(){
			 window.setTimeout(function(){
			$('.awards').slideToggle();
				}, 300);
		});
		$('.list li:nth-child(5)').click(function(){
			 window.setTimeout(function(){
			$('.quotes').slideToggle();
				}, 300);
		});
		$('.btn-close').click(function(){
			$('.list-content').hide(300);
		});
	});
	
	
	
	$(".logo1").click(function(){
		
		$('.page2').fadeIn(500).animate({
			
			left: '0%'
			
		},1000);
		
		$('.page1').animate({
			
			right: '110%'
			
		},1000);
		
	});
	
	$(".web1").click(function(){
		
		$('.page1').animate({
			
			right: '0%'
			
		},1000);
		
		$('.page2').animate({
			
			left: '110%'
			
		},1000).fadeOut();
		
	});
	
	

	
	
	
	
	});