$(document).foundation();


// --- ANIMATION MENU TWIST

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});



// --- ANIMATION SHAKE

function hoverShake(myElement, speed, deg) {
	$(myElement).mouseenter(function() {
		myInterval = setInterval(function() {
			$(myElement).css('transform', 'rotate('+deg+'deg)');
			myTimeout = setTimeout(function() {
				$(myElement).css('transform', 'rotate('+(360-deg)+'deg)');
			}, speed);
		}, speed * 2);
	});
	
	$(myElement).mouseleave(function() {
		clearInterval(myInterval);
		clearTimeout(myTimeout);
		$(myElement).css('transform', 'rotate(0deg)');
	});
}


hoverShake('#link-mediasocial', 100, 5);
hoverShake('#link-home', 100, 5);
hoverShake('#link-test', 100, 5);