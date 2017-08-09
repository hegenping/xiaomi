$(function() {
//下拉菜单开始
	var seeW =$("body").width();
	$(".erjii").css({"width":seeW+55+"px","margin-left":-seeW/2+"px"})
	
	$(window).resize(function(){
		var seeW =$("body").width();
		$(".erjii").css({"width":seeW+55+"px","margin-left":-seeW/2+"px"})
		
	})

	$("li").mouseenter(function(){
		$(this).find(".erjii").css({"border-top":"1px solid #B0B0B0"})
		$(this).find('.erjii').show().stop().animate({'height':'200px'},200);
		$(this).siblings('li').find('.erjii').css({'height':'200px'}).hide();	
	})
	
	$('ul').mouseleave(function(){
	$(this).find(".erjii").css({"border-top":"none"})	
	$(this).find('.erjii').stop().animate({'height':'0px'},200);
})


//	定义大总管变量
	var num = 0;
	//				公共函数
	function public() {
		//					找到id为lunbo里的所有img标签让num号元素淡入,让img的兄弟元素淡出
		$("#lunbo img").eq(num).stop().fadeIn(500).siblings("img").stop().fadeOut(500);
		$(".dzb li").eq(num).addClass("active").siblings("li").removeClass("active");

	}
	//				定时器函数
	function run() {
		//					让大总管变量自增
		num++;
		//					界限判断
		if(num == 4) {
			num = 0;
		}
		//					调用函数
		public();
	}

	//			设置定时器	
	var timer = setInterval(run, 1000)

	//			给lunbo添加移入事件	
	$("#lunbo").mouseenter(function() {
		//				清理定时器
		clearInterval(timer)
	})
	//			给lunbo添加移出事件
	$("#lunbo").mouseleave(function() {
		//				恢复定时器
		timer = setInterval(run, 1000)
	})
	//			给左右添加点击事件
	$("#lleft").click(function() {
		num--;
		if(num == -1) {
			num = 3
		}
		//				调用函数
		public();
	})

	$("#right").click(function() {
		num++;
		if(num == 4) {
			num = 0;
		}
		//		调用函数
		public()
	})

	//	给li标签添加点击事件			
	$(".dzb li").mouseenter(function() {
		//		获得li标签的序号
		num = $(this).index();
		//		调用函数
		public()
	})

	//				明星单品
	//				设置定时器
//	var n=0;
//	setInterval(function() {
//		//					大宗管变量自增
//		n++;
//		//					当走到最后一张图的时候
//		if(n ==2) {
//			//						瞬间调到第一章图
//			$('#mingxing ul').css({ 'left': '0px' });
//			////						再让他滚动到第二章图上
//			n = 0;
//		}
//		//						设置left值,500毫秒变化
//		//						animate()改变css样式
//		$('#mingxing ul').stop().animate({ 'left': -1226 * n + 'px' }, 500);
//		//					
//	}, 3000)
	
			var nu=0;
			var timerr =setInterval(rn,3000);			
			function rn(){
				nu++;
				if(nu==2){
					nu=0;
				}
				
				$("#mingxing .ull").stop().animate({"left":-1229*nu+"px"})
				if(nu==0){
					$(".jian").eq(nu).addClass("active").siblings().removeClass("active");
				}else if(nu==1){
					$(".jian").eq(nu).addClass("active").siblings().removeClass("active");
				}
			}
			
			$(".jian").hover(function(){
				clearInterval(timerr);
			},function(){
				timerr =setInterval(run,3000);
			
		})
			
			$(".leftt").click(function(){
				nu--;
				if(nu<=0){
					nu=0;
				}
			
			$(this).addClass("active").siblings().removeClass("active");
			$(".ull").stop().animate({"left":-1229*nu+"px"});
		})
		
	$(".rightt").click(function(){
		nu++;
		if(nu>=1){
			nu=1;
		}
		$(this).addClass('active').siblings().removeClass('active');
						
		$('.ull').stop().animate({'left':-1229*nu+'px'});

		
})		
		
		
	//				家电开始
	$(".zi a").hover(function() {
		var abc = $(this).index();
		$(".yu").eq(abc).show().siblings(".yu").hide();
		$(this).addClass().siblings().removeClass();
	})
	//		家电结束	
	
	//智能开始
	$(".zii a").hover(function() {
		var abc = $(this).index();
		$(".yui").eq(abc).show().siblings(".yui").hide();
		$(this).addClass().siblings().removeClass();
	})




//内容开始
//	给左箭头添加点击事件
//	设变量

	var cui =0;
	$(".left").click(function(){
		cui++;
		if(cui==3){
			cui=2;
		}
		$(this).siblings(".dakuang").animate({"left":-296*cui+"px"})
		$(this).siblings("ul").find("li").eq(cui).addClass("active").siblings("li").removeClass('active')
	})
//	给右箭头添加点击事件
	$(".right").click(function(){
		cui--;
		if(cui==-1){
			cui=0;
		}
//		alert(cui)
		$(this).siblings(".dakuang").animate({"left":-296*cui+"px"})
		$(this).siblings("ul").find("li").eq(cui).addClass("active").siblings("li").removeClass("active")
	})
	
	
	
	$("ul li").click(function(){
//		获得当前序号
		var xuhaoo =$(this).index();
//		让大总管变量等于xuhaoo;
		cui=xuhaoo; 
		$(this).parent().siblings(".dakuang").animate({"left":-296*cui+"px"})
		$(this).addClass("active").siblings("li").removeClass("active");
		
	})
	$(".nei").mouseenter(function(){
//		获得nei里面小点的数组长度
		var Slen = $(this).find("ul li").length;
		for(var a=0;a<Slen;a++){
//			判断
			if($(this).find("ul li").eq(a).hasClass("active")){
				cui=a;
//              alert(cui)
			}
		}
	})
	
	
	
})
	





