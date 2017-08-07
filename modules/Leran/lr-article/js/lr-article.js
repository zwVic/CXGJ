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


    /*var searchURL = window.location.search;
    var searchURL = searchURL.substring(1,searchURL.length).split("&");
    var type = searchURL[0].split("=")[1];
    var  id= searchURL[1].split("=")[1];
    switch (type){
        case 'theory':
            $("header .item:eq(1) li:eq(0)").addClass("active");
            break;
        case 'experiment':
            $("header .item:eq(1) li:eq(1)").addClass("active");
            break;
        case 'theatre':
            $("header .item:eq(1) li:eq(2)").addClass("active");
            break;
        case 'notes':
            $("header .item:eq(1) li:eq(3)").addClass("active");
            break;


    }*/
  /* $.ajax({
        'url':,
        type:'get',
        data:{
            _id:"597ee852681a3c1c2420fb56"
        },
        success:function(data){
            console.log(data);
            $(".main .info .title").html(data.data.title);
            $(".main .info .author").html(data.data.author);
            $(".main .info .time").html(data.data.time);
            $(".main .article").append(data.data.content);
        }
    })*/
})(window.jQuery)