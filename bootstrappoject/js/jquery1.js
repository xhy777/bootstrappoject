$(function() {
		var settime;
		$(".scrollNotice").hover(function() {
			clearInterval(settime);
		}, function() {
			settime = setInterval(function() {
				var $first = $(".scrollNotice ul:first"); //选取div下的第一个ul 而不是li；
				var height = $first.find("li:first").height(); //获取第一个li的高度，为ul向上移动做准备；
				$first.animate({
					"marginTop": -height + "px"
				}, 600, function() {
					$first.css({
						marginTop: 0
					}).find("li:first").appendTo($first); //设置上边距为零，为了下一次移动做准备
				});
			}, 3000);
		}).trigger("mouseleave"); //trigger()方法的作用是触发被选元素的制定事件类型
	});

$(document).ready(function(){
	$("#ulPEPlatform .list-group-item").hover(
		function(){
			$(this).find(".divPicText").stop().animate({"height":80
		});
	},
	function(){
		$(this).find(".divPicText").stop().animate({
			"height":0
		});
	}
);$('#editor').wysiwyg();$('a[title]').tooltip({container:'body'});
})



