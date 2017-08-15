/**
 * Created by Administrator on 2017/7/31.
 */
(function ($) {
    var _this = this;
    var wheelrate = 30;
    var position = 0;
    var lastposition = 0;
    $(".content-wrapper").on("mousewheel DOMMouseScroll",function (e) {
        var oev = e.originalEvent;
        lastposition = position;
        position = (oev.wheelDelta ? -oev.wheelDelta / 120 : (oev.detail / 3)) * wheelrate + this.scrollTop;
        $(this).scrollTop(position);
        if(lastposition != position)
            return false;
    })


    // var searchURL = window.location.search;
    // var searchURL = searchURL.substring(1,searchURL.length).split("&");
    // var type = searchURL[0].split("=")[1];
    // var  id= searchURL[1].split("=")[1];
    // switch (type){
    //     case 'theory':
    //         $("header .item:eq(1) li:eq(0)").addClass("active");
    //         break;
    //     case 'experiment':
    //         $("header .item:eq(1) li:eq(1)").addClass("active");
    //         break;
    //     case 'theatre':
    //         $("header .item:eq(1) li:eq(2)").addClass("active");
    //         break;
    //     case 'notes':
    //         $("header .item:eq(1) li:eq(3)").addClass("active");
    //         break;
    //
    //
    // }
    var searchURL = window.location.search;
    var re = /id=([\w]+)&?/;
    var id = searchURL.match(re)[1];
   $.ajax({
        url:"http://127.0.0.1:3000/articles/lrArticle/find",
        type:'get',
        data:{
            _id:id
        },
        success:function(data){
            console.log(data);
            $(" .info .title").html(data.data.title);
            $(" .info .author").html(data.data.publisher);
            $(" .info .time").html(data.data.date);
            $(" .article").append(data.data.content);
        }
    })
})(window.jQuery)