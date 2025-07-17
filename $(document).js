$(document).ready(function() {	

	$(".burger_menu").on("click", function() {
		var clicks = $(this).data('clicks');
		if (clicks) {
			$(".bgm_item_wrap_top").css("animation", "0.5s forwards c");
			$(".bgm_item_wrap_bottom").css("animation", "0.5s forwards d");
		} else {
			$(".bgm_item_wrap_top").css("animation", "0.5s forwards a");
			$(".bgm_item_wrap_bottom").css("animation", "0.5s forwards b");
		}
		$(this).data("clicks", !clicks);
		$("header").toggleClass("header_active");
	});

});