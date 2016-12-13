var di = document.getElementsByTagName("footer")[0];
var img = document.getElementById("di").getElementsByTagName("img");
var weixin = document.getElementById("weixin");
img[0].onmouseenter = function(){
	img[0].src = "img/facebook1.png";
}
img[1].onmouseenter = function(){
	img[1].src = "img/xinlang1.png";
}
img[2].onmouseenter = function(){
	img[2].src = "img/weixin1.png";
}
img[0].onmouseleave = function(){
	img[0].src = "img/facebook.png";
}
img[1].onmouseleave = function(){
	img[1].src = "img/xinlang.png";
}
img[2].onmouseleave = function(){
	img[2].src = "img/weixin.png";
}
var heights = document.documentElement.clientHeight;
//$("#erweima").css({
//	position: "absolute",
//	bottom: "0px",
//	width: "100%",
//	height: heights,
//	backgroundColor: "rgba(0,0,0,0.7)"
//})