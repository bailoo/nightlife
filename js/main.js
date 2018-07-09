jQuery(function($) {

	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 5000,
			pause: false
		});
	});






	//Ajax contact
	var form = $('.contact-form');
	form.submit(function () {
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	//smooth scroll
	$('.navbar-nav > li').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		if($(target).offset()!=undefined){
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500); }

	});

	//scrollspy
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
	})

	//PrettyPhoto
	$("a.preview").prettyPhoto({
		social_tools: false
	});
	setTimeout(function() {

		modal.style.display = "block";
nam.focus();
		nav.style.display="none";
}, 10000);

	//Isotope
	$(window).load(function(){
		$portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'fitRows'
		});
		$portfolio_selectors = $('.portfolio-filter >li>a');
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});
});
// Get the modal
var modal = document.getElementById('myModal');
var nav=document.getElementById('header');
// Get the button that opens the modal
var btn = document.getElementById("flol");
var fronbtn = document.getElementById("frontbtn");
var babtn = document.getElementById("backbtn");
var talk=document.getElementById("talk");
var cal=document.getElementById("mycalBtn");
var url=window.location.href.toString();
let check=1;
// Get the <span> element that closes the modal
var span = document.getElementById("close-btn");


// When the user clicks on the button, open the modal
talk.onclick = function() {
    modal.style.display = "block";
nam.focus();
		nav.style.display="none";

}
cal.onclick = function() {
    modal.style.display = "block";
nam.focus();
		nav.style.display="none";

}
btn.onclick = function() {
    modal.style.display = "block";
nam.focus();
		nav.style.display="none";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";

		nav.style.display="block";

		displaymod();

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";

				nav.style.display="block";
				displaymod();
    }
}
mail=document.getElementById("input_197");
nam=document.getElementById("input_196");
num=document.getElementById("input_195");
mail_li=document.getElementById("id_197");
name_li=document.getElementById("id_196");
num_li=document.getElementById("id_195");
artist_li=document.getElementById("id_184");
function displaymod(){



}
