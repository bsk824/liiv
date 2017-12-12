var winW = $(window).width();
function fontSize(w) {
	if (w <= 480) {
		var fontSize = w / 5.12;
		$('html').css('font-size', Math.floor(fontSize*100)/100 + '%');
	} else {
		$('html').css('font-size','62.5%');
	}
}
fontSize(winW);
$(window).resize(function(){
	var winW = $(window).width();
	fontSize(winW);
});
$(function(){
	var btnMenu = $('#header .btnMenu');
	
	btnMenu.on('click',function(){
		var $this = $(this);
		$this.toggleClass('menuOn');
	});
});
