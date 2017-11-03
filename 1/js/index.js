$(document).ready(function(){
	//模拟命名空间，暴露一个全局变量
	//闭包
	var rating=(function(){
		function lightOn($item,num){
				$item.each(function(index){
					if(index<num){
						$(this).css("background-position","0 -54px");
					}else{
						$(this).css("background-position","0 0");
					}			
				});
		    };
		function init(el,num){
			var	$rating=$(el),
		        $item=$rating.find(".rating-item");		    
		    lightOn($item,num);
		    //事件绑定
		    $rating.on("mouseover",".rating-item",function(){
		    	lightOn($item,$(this).index()+1);
		    }).on("click",".rating-item",function(){
		    	num=$(this).index()+1;
		    }).on("mouseout",function(){
		    	lightOn($item,num);
		    });
		}
		//jQ插件
//		$.fn.extend({
//			rating:function(num){
//				return this.each(function(){
//					init(this,num);
//				})
//			}
//		})
$.fn.rating=function(num){
	return this.each(function(){
					init(this,num);
				})
}

		return {aa:init};	   
	})();
	//rating.aa("#rating",2)
	//rating.aa("#rating2",3)
	$("#rating2").rating(4);
})