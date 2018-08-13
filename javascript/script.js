$(document).ready(function() {
	
	$(".sidebar").addClass("state");
	
	$(".exit").click(function() {
		$(".sidebar").removeClass("expand");
		$(".sidebar").addClass("close");
	});
	
	$(".open").click(function() {
		$(".sidebar").removeClass("close");
		$(".sidebar").removeClass("state");
		$(".sidebar").addClass("expand");
	});
	
});