/**
 * Created by admin on 2017/7/24.
 */
(function ($) {
    var url = window.location.search;
    console.log(url)
    var re = /\?id=([\w]+)/;

    var id = url.match(re)[1];
    var TEMPLATE = {
        title:`<a href="javascript:;">{{title}}</a>`,
        data:`<span>发布时间：{{date}}</span>`,
        // left:`<div class="left">
        //         <span class="date">{{date}}</span><br>
        //         <span class="month">{{month}}</span><br>
        //         <span class="year">{{year}}</span>
        //     </div>`
    }

    $.ajax({
        url:"http://127.0.0.1:3000/articles/hyArticle/find",
        data:{
            _id:id
        },
        type:"GET",
        success:function (results) {
            var content = results.data.content;
            console.log(results.data);
            $(".content").append(content);
            $(".title").append(TEMPLATE.title.replace("{{title}}",results.data.title));
            // $(".detail").append(TEMPLATE.data.replace("{{date}}",results.data.date));
            // $(".left").prepend(TEMPLATE.data.replace("{{date}}"))
            var date = results.data.createdAt;
            console.log(date);
            $(".detail").append(TEMPLATE.data.replace("{{date}}",date.slice(0,10)));
            // $(".artical").prepend(TEMPLATE.left.replace("{{date}}",date.slice(0,4)).replace("{{month}}",date.slice(5,7)).replace("{{year}}",date.slice(8,10)));
        }
    })
})(window.jQuery)