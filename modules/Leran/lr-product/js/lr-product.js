/**
 * Created by admin on 2017/8/2.
 */
(function($){
    $(".navList").find("li").on("click",function () {
        $(".content-wrapper").scrollTop(anchorArr[$(this).index()]);
        $(this).addClass("active").siblings().removeClass("active")
    })

    var anchorArr = [];
    for(var i=0;i<$(".anchor").length;i++){
        anchorArr.push($(".anchor").eq(i).position().top);
    }

    $(".content-wrapper").on("scroll",function(){

    })
})(window.jQuery)