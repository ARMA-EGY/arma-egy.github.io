jQuery(document).ready(function($) {
"use strict";

	
	// ========================== SHOW NAVBAR BACKGROUND WHEN SCROLL   ==========================

	$(window).scroll(function()
	{
		
		if ($(window).scrollTop() > 50 )
			{
				$('.navbar , .nav-toggle , .logo').addClass('scrolled');
			}
		else if ($(window).scrollTop() < 50 )
			{
				$('.navbar , .nav-toggle , .logo').removeClass('scrolled');
			}	
		
	});
	
	
	// ========================== SCROLL BODY WEHN CLICK LINK IN NAVBAR ==========================

	
		$('.nav-link').click(function()
		{
		
			$('html,body').animate(
			{
				scrollTop: $('#' + $(this).data('scroll')).offset().top  - $('.navbar').height()
				
			},1000);
		
	});
	
	// ========================== PUT ACTIVE IN SCROLLED SECTION ==========================
	
	$(window).scroll(function(){
		
		$('section').each(function(){
			
			if ($(window).scrollTop() > $(this).offset().top - $('.navbar').height() ){
				
			var blockID = $(this).attr('id');
				
				$('.nav-link').removeClass('active');
				
				$('.nav-link[data-scroll="' + blockID + '"]').addClass('active');
			}	
		});
	});
	
	
	// ========================== SHOW AND HIDE ANSWER ==========================
	
	$('.slide').click(function(){
		
		$(this).prev('.answer').slideToggle("slow");
		$(this).toggleClass('show');
		
	if  	($(this).find('i').hasClass('fa-plus'))
			{
				$(this).find('i').removeClass('fa-plus').addClass('fa-minus');
			}
	else 	{
				$(this).find('i').removeClass('fa-minus').addClass('fa-plus');
			}
	});
	
	
	// ========================== SHOW AND HIDE SELECTED COMPANIES ==========================	
	
	
$(".filter").click(function(){

	  $(".filter").removeClass("selected");


	  $(this).addClass("selected");


	  var dataFilter = $(this).data('filter');


	  if(dataFilter === "all") {
		  $(".company").fadeIn();
	  }
	  else
	  {
		$(".company").fadeOut();
		$("." + dataFilter).fadeIn();
  	  }
});
	
// ========================== TOGGLE NAVBAR MENU IN MOBILE ==========================	
	
	$('.container2').click(function(){
		
		$(this).toggleClass('change');
		
		
	});
	
	
});