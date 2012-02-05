/*
*
*	coderwall.js
*	
*	Code to display coderwall.com badges 
*
*/

var coderwallJSONurl ="http://www.coderwall.com/gradus.json?callback=?";
var height = 75;
var width = 75;	

$(document).ready(function(){

	$.getJSON(coderwallJSONurl, function(data) {
		
		$.each(data.data.badges, function(i, item) {
		
			$("<img/>").attr("src", item.badge)
			.attr("float", "left")
			.attr("title", item.name + ": " + item.description)
			.attr("alt", item.name)
			.attr("height", height)
			.attr("width", width)
			.appendTo("#coderwall")
			.hover(
				function(){  
					$(this).css("opacity","0.6");
				},
				function(){
					$(this).css("opacity","1.0");
				}
			)
			.click(
				function(){
					window.location = "http://www.coderwall.com/gradus/";
				}
			);		
		});
	});
});
