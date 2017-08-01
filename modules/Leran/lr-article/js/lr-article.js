/**
 * Created by Administrator on 2017/7/31.
 */
(function ($) {

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
   $.ajax({
        'url':'http://127.0.0.1:3000/articles/lrArticle/find',
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
    })
})(window.jQuery)