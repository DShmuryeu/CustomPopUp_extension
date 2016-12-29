/*
 * CustomPopUp
 * document extension for changing of the native stule of PopUp hints 
 * author Dzmitry Shmuryeu <Dzmitry_Shmuryeu@epam.com>
 * 
 * Date: 2016-12
 * 
 * This document extention allows to change the native style of some PopUp hints.
 * In the extenntion there are 5 different part of code which change popup stype for different parts of qlikview objects:
 * - Test box (popup help text);
 * - Grid cells (popup cell value);
 * - List box (particular values);
 * - Caption popup text;
 * - Popup titles of caption buttons;
 */

Qva.LoadCSS("/QvAjaxZfc/QvsViewClient.aspx?public=only&type=document&name=Extensions/CustomPopUp/CustomPopUp.css");
Qva.AddDocumentExtension('CustomPopUp', function () {
	var _this = this;
	
	_this.Document.SetOnUpdateComplete(CustomPopUp);
		
}); 

function CustomPopUp() {
    var mouseX;
	var mouseY;
	var fadeInInterval = 80;
	var offsetPopup = 15;
	var delay = 500;
//Test box	
	$(".TextObject").each(function(){	
	$(this).attr("orirginalTitle", $(this).find("td").attr("title"));
	
	$(this).mousemove(function() {
	mouseX = event.pageX;
	mouseY = event.pageY;
	});
	
    $(this).mouseover(function() {
	$(".CustomPopUp").remove();
	var title = $(this).attr("orirginalTitle");
	$(this).find("td").removeAttr("title");
    $(".QvPageBody").append("<div class='CustomPopUp'><p>"+ title +"</p></div>");
	$(".CustomPopUp").css({opacity:1, display:"none"});
	setTimeout(function() {
		$(".CustomPopUp").fadeIn(fadeInInterval);
		$(".CustomPopUp").css({left:mouseX+offsetPopup, top:mouseY+offsetPopup});
		},delay);
	});
	
	$(this).mouseout(function() {
	$(".CustomPopUp").remove();
	});
});
//Grid cells
$(".injected").parent().each(function(){	
	$(this).attr("orirginalTitle", $(this).attr("title"));
	$(this).children().removeAttr("title");
	
	$(this).mousemove(function() {
	mouseX = event.pageX;
	mouseY = event.pageY;
	});
	
    $(this).mouseover(function() {
	$(".CustomPopUp").remove();
	var title = $(this).attr("orirginalTitle");
	$(this).removeAttr("title");
    $(".QvPageBody").append("<div class='CustomPopUp'><p>"+ title +"</p></div>");
	$(".CustomPopUp").css({opacity:1, display:"none"});
	setTimeout(function() {
		$(".CustomPopUp").fadeIn(fadeInInterval);
		$(".CustomPopUp").css({left:mouseX+offsetPopup, top:mouseY+offsetPopup});
		},delay);
	});
	
	$(this).mouseout(function() {
	$(".CustomPopUp").remove();
	});
});
//List box (list of values)
$(".QvListbox").children().children().each(function(){	
	$(this).attr("orirginalTitle", $(this).attr("title"));
	$(this).children().removeAttr("title");
	
	$(this).mousemove(function() {
	mouseX = event.pageX;
	mouseY = event.pageY;
	});
	
    $(this).mouseover(function() {
	$(".CustomPopUp").remove();
	var title = $(this).attr("orirginalTitle");
	$(this).removeAttr("title");
    $(".QvPageBody").append("<div class='CustomPopUp'><p>"+ title +"</p></div>");
	$(".CustomPopUp").css({opacity:1, display:"none"});
	setTimeout(function() {
		$(".CustomPopUp").fadeIn(fadeInInterval);
		$(".CustomPopUp").css({left:mouseX+offsetPopup, top:mouseY+offsetPopup});
		},delay);
	});
	
	$(this).mouseout(function() {
	$(".CustomPopUp").remove();
	});
});
//Caption
$(".QvCaptiontext").each(function(){	
	$(this).attr("orirginalTitle", $(this).parent().attr("title"));
	$(this).parent().removeAttr("title");
	
	$(this).mousemove(function() {
	mouseX = event.pageX;
	mouseY = event.pageY;
	});
	
    $(this).mouseover(function() {
	$(".CustomPopUp").remove();
	var title = $(this).attr("orirginalTitle");
    $(".QvPageBody").append("<div class='CustomPopUp'><p>"+ title +"</p></div>");
	$(".CustomPopUp").css({opacity:1, display:"none"});
	setTimeout(function() {
		$(".CustomPopUp").fadeIn(fadeInInterval);
		$(".CustomPopUp").css({left:mouseX+offsetPopup, top:mouseY+offsetPopup});
		},delay);
	});
	
	$(this).mouseout(function() {
	$(".CustomPopUp").remove();
	});
});
//Caption icons
$(".QvCaptionIcon").each(function(){	
	$(this).attr("orirginalTitle", $(this).attr("title"));
	$(this).removeAttr("title");
	$(this).parent().parent().attr("orirginalTitle", $(this).parent().parent().attr("title"));
	$(this).parent().parent().removeAttr("title");
	
	$(this).mousemove(function() {
	mouseX = event.pageX;
	mouseY = event.pageY;
	});
	
    $(this).mouseover(function() {
	$(".CustomPopUp").remove();
	var title = $(this).attr("orirginalTitle");
    $(".QvPageBody").append("<div class='CustomPopUp'><p>"+ title +"</p></div>");
	$(".CustomPopUp").css({opacity:1, display:"none"});
	setTimeout(function() {
		$(".CustomPopUp").fadeIn(fadeInInterval);
		$(".CustomPopUp").css({left:mouseX+offsetPopup, top:mouseY+offsetPopup});
		},delay);
	});
	
	$(this).mouseout(function() {
	$(".CustomPopUp").remove();
	$(this).parent().parent().attr("title", $(this).parent().parent().attr("orirginalTitle"));
	});
});

$(".CustomPopUp").remove();
};
