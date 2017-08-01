/**
 * Created by Administrator on 2017/7/31.
 */
(function ($) {

    var searchURL = window.location.href.search;
    var id = searchURL.substring(1,searchURL.length).split("&")[0].split("=")[0];
   /*$.ajax({
        'url':,
        type:'get',
        data:{
            'id':id
        },
        success:function(data){
            $(".main .info .title").html(data.title);
            $(".main .info .author").html(data.author);
            $(".main .info .time").html(data.time);
            $(".main .article").append(data.content);
        }
    })*/
})(window.jQuery)