$(document).ready(function() {

	$(".arrow_right, .arrow_left").on("click", function() {
		$(".bottom_bar").addClass("btb_active");
		setTimeout(function() {
			$(".social_media").addClass("not_displayed");
		}, 300);
		$(".close_button").css({"animation": "0.3s cb_appearance ease-in-out 0.8s forwards", "visibility": "visible", "pointer-events": "auto"});
		// $(".bottom_bar").addClass("height100vh");
		// $(".social_media").css({"opacity": "0", "visibility": "hidden"});
		// $(".close_button").css({"animation": "0.3s cb_appearance ease-in-out 0.8s forwards", "visibility": "visible"});
		$("#btb_slider").css({"opacity": "1", "visibility": "visible", "clip-path": "polygon(0 100%, 100% 100%, 100% 0, 0 0)"});
	});


	$(".bottom_bar .close_button").on("click", function() {
		$(this).css({"animation": "0.3s cb_disappearance ease-in-out", "pointer-events": "none"});
		setTimeout(function() {
			$(".social_media").addClass("socmedia_active").removeClass("not_displayed");
		}, 1200);
		setTimeout(function() {
			$(".bottom_bar").removeClass("btb_active");
		}, 500);
		$("#btb_slider").css({"opacity": "0", "visibility": "hidden", "clip-path": "polygon(0 0, 100% 0, 100% 0, 0 0)"});
	});

	$("#btb_slider").owlCarousel({
		items: 1,
		nav: false,
		dots: false
	})

	$('.arrow_left').click(function() {
    $("#btb_slider").owlCarousel().trigger('prev.owl.carousel', [800]);
	})

	$('.arrow_right').click(function() {
		$("#btb_slider").owlCarousel().trigger('next.owl.carousel', [800]);
	})

});
