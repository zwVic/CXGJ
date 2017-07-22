/**
 * Created by Administrator on 2017/7/21.
 */
(function($){

    $("footer").remove();
    var photoNumber = 3;  //照片数量
    var maxHeight = (photoNumber-1)*100;

    var li = $(".photoWrap li");
    $(li[0]).find('p').slideDown(1500,function(){
        $(li[0]).find(".shade").css('background','rgba(0,0,0,0.31)');
    });

    var top = 0;
    $(document).on("mousewheel DOMMouseScroll", function (e) {
        throttle(scroll,this,e)
    })

    function scroll(e){
        var delta = -e.originalEvent.wheelDelta || e.originalEvent.detail;
        top = parseInt(top);
        if(delta > 0){  //向下滚动
            if( top != -maxHeight ){
                top = top-100 ;
            }

        }else{          //向上滚动
            if( top != 0)
                top = top + 100 ;
        }
        top = top + '%';
        $(".photoWrap").animate({top:top},'slow',function(){

            //显示图片上的文字
            var index = parseInt(top)/100;
            index = index > 0 ? index : -index;
            $(li[index]).find('p').slideDown(1500,function () {

                //背景变亮
                $(li[index]).find(".shade").css('background','rgba(0,0,0,0.31)');
        });

        });
    }

    //函数节流
    function throttle(method,context,arg){
        clearTimeout(method.tId);
        method.tId = setTimeout(function(){
            method.call(context,arg);
        },80);
    }

})(window.jQuery)
