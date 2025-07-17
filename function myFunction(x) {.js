function myFunction(x) {
	if (x.matches) { // If media query matches
		$("#main_nav>ul").append($(".detailed_nav>ul>li"));
		$(".fhs_wrap").append($(".third_hp"));
	} else {
		$(".detailed_nav>ul").append($("#main_nav>ul>li.detailed_links"));
		$(".shs_wrap").append($(".third_hp"));
	}
}

var x = window.matchMedia("(max-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


		
