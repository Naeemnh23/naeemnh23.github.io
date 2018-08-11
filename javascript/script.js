$(document).ready(function() {
	
	$(".sidebar").addClass("state");
	
	$(".exit").click(function() {
		$(".sidebar").removeClass("expand");
		$(".section").removeClass("expand");
		$(".item").removeClass("expand");
		$(".sidebar").addClass("close");
		$(".section").addClass("close");
		$(".item").addClass("close");
	});
	
	$(".open").click(function() {
		$(".item").removeClass("close");
		$(".section").removeClass("close");
		$(".sidebar").removeClass("close");
		$(".sidebar").removeClass("state");
		$(".item").addClass("expand");
		$(".section").addClass("expand");
		$(".sidebar").addClass("expand");
	});
	
});