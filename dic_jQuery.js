$(document).ready(function(){

	var wWindow = $(window).width();
	var wOxfordDic = $('#oxfordDic_iframe').width();
	var leftMargin = 0.5*(wWindow - wOxfordDic -0.03*wWindow -780);
	var leftMargin_floor = Math.floor(leftMargin);
	$("#status_bar").html(leftMargin_floor);
	$("#oxfordDic_iframe").css("left",leftMargin_floor+"px");
	var leftMarginOfCdit = leftMargin_floor + wOxfordDic + 0.03*wWindow;
	$(".cditDiv").css("left",leftMarginOfCdit+"px");
	$(".inputArea").css("margin",'0 '+leftMargin_floor+"px "+ '40px '+leftMargin_floor+"px ");

	//margin: 0px 103px 40px 103px;

	// $('textarea').autosize();  
	// $('textarea').autoResize({
	// 	animate: {
	// 		enabled: true,
	// 		duration: 'fast'
	// 	}
	// });




	$( window ).resize(function() {

	var wWindow = $(window).width();
	var wOxfordDic = $('#oxfordDic_iframe').width();
	var leftMargin = 0.5*(wWindow - wOxfordDic -0.03*wWindow -780);
	var leftMargin_floor = Math.floor(leftMargin);
	$("#status_bar").html(leftMargin_floor);
	$("#oxfordDic_iframe").css("left",leftMargin_floor+"px");
	var leftMarginOfCdit = leftMargin_floor + wOxfordDic + 0.03*wWindow;
	$(".cditDiv").css("left",leftMarginOfCdit+"px");
	$(".inputArea").css("margin",'0 '+leftMargin_floor+"px "+ '40px '+leftMargin_floor+"px ");
	  
	});


});