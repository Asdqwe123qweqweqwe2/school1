$(document).ready(function() {

	$("button.drop_down_button").on( "click", function() {
		$(".detailed").toggleClass("detailed_active");
		$(".drop_down").toggleClass("transparent");
		$("svg.arrow_top").toggleClass("arrow_rotate");
	});

	$('a').each(function() {
		var a = new RegExp('/' + window.location.host + '/');
		if(!a.test(this.href)) {
			$(this).click(function(event) {
				event.preventDefault();
				event.stopPropagation();
				window.open(this.href, '_blank');
			});
		}
	});

});