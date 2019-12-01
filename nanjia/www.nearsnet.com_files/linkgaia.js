// JavaScript Document
$(function(){
	 $('.detail').click(function(){
	 	var display=$(this).find('dd').css("display");
	 	if(display!="block"){
	 		$(this).find('dd').css("display","block");
	 		$(this).siblings().find('dd').css("display","none");
	 		if(!$(this).hasClass("intro")){
	 			$(".icon1").css("background-image","url(./images/newImages/icon11.png)");
	 		}else{
	 			$(".icon1").css("background-image","url(./images/newImages/icon1.png)");
	 		}
	 		if($(this).hasClass("idea")){
	 			$(".icon3").css("background-image","url(./images/newImages/icon3.png)");
	 		}else{
	 			$(".icon3").css("background-image","url(./images/newImages/icon33.png)");
	 		}
	 		if($(this).hasClass("team")){
	 			$(".icon2").css("background-image","url(./images/newImages/icon2.png)");
	 		}else{
	 			$(".icon2").css("background-image","url(./images/newImages/icon22.png)");
	 		}
	 	}
	})
	//  function autoplay(){
	// 	 if(num>=3){
	// 		 num=0;
	// 		 }
	// 	 	$('.lunbo b').eq(num).addClass('now').siblings().removeClass();
	// 		$('.picture ul li').eq(num).addClass('current').siblings().removeClass();
	// 		num++;
	// 	 }
	// timer=setInterval(autoplay,3000);
	//  $('.picture ul li').mouseover(function(){
	// 	clearInterval(timer);
	//  }).mouseout(function(){
	// 	 timer=setInterval(autoplay,3000);
	// 	 })
 })

