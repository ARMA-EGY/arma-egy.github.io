$("#nav-container").click(function(){"use strict";$('#nav-container').toggleClass("pushed");});$("#nav-container").click(function(){"use strict";$('.menu').toggleClass("mov");});$(function(){"use strict";$('.chart').easyPieChart({scaleColor:"#ecf0f1",lineWidth:20,lineCap:'butt',barColor:'#6ddce5',trackColor:"#ecf0f1",size:160,animate:500});});$(document).ready(function(){"use strict";var owl=$('.owl-carousel.services-carousel');owl.owlCarousel({margin:10,nav:true,dots:false,responsive:{0:{items:1},700:{items:2},992:{items:3}}});});$(document).ready(function(){"use strict";$('.circle-container').find('a').click(function(event){event.preventDefault();});$('.circle-container').find('li').hover(function(){$('.circle-container').find('li').removeClass('active');$(this).addClass('active');$('.services-container').find('li.active').removeClass('active');$(".services-container").find('li').eq($(this).data('id')).addClass('active');});});$(function(){"use strict";$(".load").slice(0,2).show();$("#loadMore").on('click',function(e){e.preventDefault();$(".load:hidden").slice(0,2).fadeIn(500);if($(".load:hidden").length===0){$("#loadMore").fadeOut(1000);}});});var a=0;$(window).scroll(function(){"use strict";var oTop=$('#counter').offset().top-window.innerHeight;if(a===0&&$(window).scrollTop()>oTop){$('.counter-value').each(function(){var $this=$(this),countTo=$this.attr('data-count');$({countNum:$this.text()}).animate({countNum:countTo},{duration:2000,easing:'swing',step:function(){$this.text(Math.floor(this.countNum));},complete:function(){$this.text(this.countNum);}});});a=1;}});jQuery(document).ready(function($){"use strict";$('.menu a').click(function(){$('html,body').animate({scrollTop:$('#'+$(this).data('scroll')).offset().top+1},1000);});$(window).scroll(function(){$('.section').each(function(){if($(window).scrollTop()>$(this).offset().top){var blockID=$(this).attr('id');$('.menu li a').removeClass('active');$('.menu li a[data-scroll="'+blockID+'"]').addClass('active');}});});var nameError=true,emailError=true,msgError=true;function validateEmail(email){var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(email);}
function validate(){var email=$("#email").val();if(validateEmail(email))
{$('#email').css("border-color","#2ecc71");$('.a-mail').fadeOut(500);emailError=false;}
else if(email==='')
{$('#email').css("border-color","#fff");$('.a-mail').fadeOut(500);emailError=true;}
else
{$('#email').css("border-color","#e74c3c");$('.a-mail').fadeIn(500);emailError=true;}
return false;}
$("#email").bind("blur",validate);$("#name").blur(function(){if($(this).val().length>4)
{$(this).css("border-color","#2ecc71");$('.a-name').fadeOut(500);nameError=false;}
else if($(this).val().length==0)
{$(this).css("border-color","#fff");$('.a-name').fadeOut(500);nameError=true;}
else
{$(this).css("border-color","#e74c3c");$('.a-name').fadeIn(500);nameError=true;}});$("#message").blur(function(){if($(this).val().length>10)
{$(this).css("border-color","#2ecc71");$('.a-msg').fadeOut(500);msgError=false;}
else if($(this).val().length==0)
{$(this).css("border-color","#fff");$('.a-msg').fadeOut(500);msgError=true;}
else
{$(this).css("border-color","#e74c3c");$('.a-msg').fadeIn(500);msgError=true;}
$(".contact-form1").submit(function(e){if(nameError===true||emailError===true||msgError===true)
{e.preventDefault();$("#name, #email, #message").blur();}});});});