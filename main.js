function scrollToTop() {
	$('html, body').animate({ scrollTop: $('.top-container').offset().top }, 1500);
}

// $('.logo').hover(function() {
// 	$('.navhover').children('ul').stop(true, false, true).fade();
// 	$('.logo').hover(function(e) {
//       	e.stopPropagation()});
// });

function scrollDown1() {
	$('html, body').animate({ scrollTop: $('.design').offset().top }, 1000);
}


function scrollDown2() {
	$('html, body').animate({ scrollTop: $('.about').offset().top }, 1500);
}

function scrollDes() {
	$('html, body').animate({ scrollTop: $('#design').offset().top }, 1000);
}

function scrollArt() {
	$('html, body').animate({ scrollTop: $('.art').offset().top }, 1000);
}

// function process() {
// 	$('html, body').animate({ scrollTop: $('proc').offset().top }, 1000);
// 	var target = $(this.getAttribute('href'))
// 	 $('html, body').stop().animate({
//             scrollTop: target.offset().top
//         }, 1000);
// 		// $('html, body').animate({ scrollTop: $('#proc').offset().top }, 1000);
// 	}
// }

$(document).ready(function() {
	$(".pro").click(function() {
		$(".proc").fadeIn(500);
	})
})


// $(window).scroll(function() {
// 	console.log($(window).scrollTop());

// 	var des = document.getElementById('#design');
// 	var pro = document.getElementById('#process');
// 	var art = document.getElementById('#art');
// 	var abo = document.getElementById('#about');

// 	if ($(window).scrollTop() >= des) {
// 		$('.design').css('visibility', 'visible').hide().fadeIn(100);
// 		// $(this).off('scroll');
// 	}

// 	if ($(window).scrollTop() >= pro + 3) {
// 		$('.process').css('visibility', 'visible').hide().fadeIn(1500);
// 		// $(this).off('scroll');
// 	}

// 	if ($(window).scrollTop() >= art + 3) {
// 		$('.art').css('visibility', 'visible').hide().fadeIn(2000);
// 		// $(this).off('scroll');
// 	}

// 	if ($(window).scrollTop() >= abo + 3) {
// 		$('.about').css('visibility', 'visible').hide().fadeIn(2500);
// 		$(this).off('scroll');
// 	}
// });
