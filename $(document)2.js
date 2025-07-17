$(document).ready(function() {

	// Q&A popup window
	function popupQandA() {
		$(".close_button").clone().appendTo(".popup_content_wrap");

		setTimeout(function popupAppearance() {	 
			$("#whole_page_wrap").addClass("blurry");
			$(".popup").removeClass("hidden_element");
		}, 2000);

		$(".close_button").on("click", function() {
			$(".popup").addClass("hidden_element").css("transition", "1.2s");
			$("#whole_page_wrap").removeClass("blurry").css("transition", "1.3s");
		});
	}

	// popupQandA();
		
	// dymanic header for desktop

	// function dynamicHeader() {
	// 	var prevScrollPos = $(window).scrollTop();
	// 	var headerChangingPoint = $("#main").height();

	// 	$(window).scroll(function () {
	// 		var currentScrollPos = $(window).scrollTop();
			
	// 		if (currentScrollPos > 150 && $(window).width() > 960) {
	// 			$("header").addClass("header_mini");
	// 		} else {
	// 			$("header").removeClass("header_mini");
	// 		}
			
	// 		if (prevScrollPos < currentScrollPos && prevScrollPos > headerChangingPoint * 1.5 && $(window).width() > 960) {
	// 			$("header").removeClass("header_scroll_up");
	// 			$("header").addClass("header_scroll_down");		
	// 		} else if (prevScrollPos > currentScrollPos && prevScrollPos > headerChangingPoint * 1.5 && $(window).width() > 960) {
	// 			$("header").removeClass("header_scroll_down");
	// 			$("header").addClass("header_scroll_up")
	// 		} else if (currentScrollPos < headerChangingPoint * 1.5 && $(window).width() > 960) {
	// 			$("header").removeClass("header_scroll_up");
	// 			$("header").removeClass("header_scroll_down");
	// 		}

	// 		if (prevScrollPos < currentScrollPos && currentScrollPos > 150 && $(window).width() > 960) {
	// 			$("header .logo").addClass("logo_centered");
	// 		} else {
	// 			$("header .logo").removeClass("logo_centered");
	// 		}

	// 		prevScrollPos = currentScrollPos;

	// 		if (currentScrollPos > headerChangingPoint - 150 && $(window).width() > 960) {
	// 			$("header").css("transition", "transform 0.5s");
	// 		} else {
	// 			$("header").css("transition", "transform 0s");
	// 		}
	// 	})
	// }

	// dynamicHeader();

	function dynamicHeader() {
		var prevScrollPos = $(window).scrollTop();
		var headerChangingPoint = $("#main").height();
		var mediaBreakPoint = 992;

		if (prevScrollPos > 150) {
			$("header").addClass("header_mini");
			$(".detailed").removeClass("detailed_active");
			$(".drop_down").removeClass("transparent");
			$("svg.arrow_top").removeClass("arrow_rotate");
		} else {
			$("header").removeClass("header_mini");
		}

		$(window).scroll(function () {
			var currentScrollPos = $(window).scrollTop();
			if ($(window).width() > mediaBreakPoint) {
				if (currentScrollPos > 150) {
					$("header").addClass("header_mini");
					$(".detailed").removeClass("detailed_active");
					$(".drop_down").removeClass("transparent");
					$("svg.arrow_top").removeClass("arrow_rotate");
				} else {
					$("header").removeClass("header_mini");
				}
				
				if (prevScrollPos < currentScrollPos && currentScrollPos > headerChangingPoint * 1.5) {
					$("header").removeClass("header_scroll_up");
					$("header").addClass("header_scroll_down");		
				} else if (prevScrollPos > currentScrollPos && currentScrollPos > headerChangingPoint * 1.5) {
					$("header").removeClass("header_scroll_down");
					$("header").addClass("header_scroll_up")
				} else if (currentScrollPos < headerChangingPoint * 1.5) {
					$("header").removeClass("header_scroll_up");
					$("header").removeClass("header_scroll_down");
				}

				if (prevScrollPos < currentScrollPos && currentScrollPos > 150) {
					$("header .logo").addClass("logo_centered");
				} else {
					$("header .logo").removeClass("logo_centered");
				}

				if (currentScrollPos > headerChangingPoint - 150) {
					$("header").css("transition", "transform 0.5s");
				} else {
					$("header").css("transition", "transform 0s");
				}
			} else {
				$("header").removeClass("header_mini");
				$("header").removeClass("header_scroll_up");
				$("header").removeClass("header_scroll_down");
				$("header .logo").removeClass("logo_centered");
			}

			prevScrollPos = currentScrollPos;
		});
	}

	dynamicHeader();

	function scrollToAnchor()  {
		var scrollLink = $(".scroll_link");

		scrollLink.click(function(e) {
			e.preventDefault();
			$("body, html").animate({
				scrollTop: $(this.hash).offset().top
			}, 1300, $.bez([.4,.18,.15,.99]));
		});
	}

	scrollToAnchor();

	// $(window).scroll(function () {
	// 	var sectionScrollTop = $(window).scrollTop();
	// 	var sectionHeight = $("#history").height();
	// 	var resultInteger = sectionScrollTop / sectionHeight;
	// 	if (sectionHeight > sectionScrollTop) {
	// 		$(".fhs_wrap").css("opacity", resultInteger);
	// 	} else {
	// 		$(".fhs_wrap").css("opacity", "1");
	// 	}
	// })		

	// $(window).scroll(function () {
	// 	var sectionHeight = $("#history").height();
	// 	var sectionScrollTop = $(window).scrollTop() - sectionHeight;
	// 	var resultInteger = ((sectionScrollTop / (sectionHeight * 0.5)) * 100) - 100;

	// 	console.log(resultInteger);
		
	// 	if (resultInteger < 0 && resultInteger > -100) {
	// 		$(".header_mini").css({"transform": "translateY(" + resultInteger + "%)"});
	// 	} if (resultInteger > 0) {
	// 		$(".header_mini").css({"transform": "translateY(0%)"});
	// 	} else if (resultInteger < -100) {
	// 		$(".header_mini").css({"transform": "translateY(-100%)"});
	// 	}
	// });

});