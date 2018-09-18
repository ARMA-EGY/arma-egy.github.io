/*jshint esversion: 6 */
$(function() {
	
	'use strict';
	
	
	
	const referenties = [
	{
		url: 'http://google.com',
		backgroundUrl: 'http://lorempixel.com/400/400',
		color: "rgba(65,131,215, 1)",
		title: 'Yeah Working Block creater function',
		paragraph: 'Paragraph text'
	},
	{
		url: 'http://facebook.com',
		backgroundUrl: 'http://lorempixel.com/400/400',
		color: "rgba(65,85,215, 1)",
		title: 'Yeah Working Block 2 creater function',
		paragraph: 'Paragraph text 2'
	},
	{
		url: 'http://nu.nl',
		backgroundUrl: 'http://lorempixel.com/400/400',
		color: "rgba(181,85,215, 1)",
		title: 'Yeah Working Block 3 creater function',
		paragraph: 'Paragraph text 3'
	}
];

/* Sticky header bar */
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.navbar').addClass("sticky-header");
  $('.navbar').css("margin-top", "0px");
  }
  else{
    $('.navbar').removeClass("sticky-header");
    $('.navbar').css("margin-top", "40px");
  }
});

/* ScrollSpy */
$('body').scrollspy({ target: '#navbar-spy' });

/* referentie creeëren */
function createReferenceBlock(reference){
	
	//Create the container for the reference
	let referenceHtml = document.createElement('a');
	referenceHtml.className = "reference__block";
	referenceHtml.setAttribute("href", reference.url);
	referenceHtml.style.backgroundImage = `url(${reference.backgroundUrl})`;
	
	//Create a background-color div
	let colorContainer = document.createElement('div');
	colorContainer.className = "reference__block__color-overlay";
	colorContainer.style.backgroundColor = reference.color;
	
	//Create a reference-block inner div
	let innerRefBlock = document.createElement('div');
	innerRefBlock.className = "reference__block__inner";
	
	//Create reference-title
	let titleComponent = document.createElement('p');
	titleComponent.className = "reference__block__inner__title";
	titleComponent.appendChild(document.createTextNode(reference.title));
	
	//Create reference-paragraph
	let paragraphComponent = document.createElement('p');
	paragraphComponent.className = "reference__block__inner__paragraph";
	paragraphComponent.appendChild(document.createTextNode(reference.paragraph));
	
	//Append the title and the paragraph inside the inner container
	innerRefBlock.appendChild(titleComponent);
	innerRefBlock.appendChild(paragraphComponent);
	
	// Append the color and inner container inside the reference container
	referenceHtml.appendChild(colorContainer);
	referenceHtml.appendChild(innerRefBlock);
	
	return referenceHtml;
	
}

function createReferenceContainer(obj){
	for(let i = 0;i <obj.length; i++){
		let block = createReferenceBlock(obj[i]);
		document.getElementById('reference').appendChild(block);
	}
}

createReferenceContainer(referenties);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	});