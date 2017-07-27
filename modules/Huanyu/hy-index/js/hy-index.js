/**
 * Created by admin on 2017/7/24.
 */
(function ($) {
    var mySwiper = new Swiper ('.swiper-container', {
        effect:"coverflow",
        loop: true,
        autoplay: 3000,        //自动播放
        autoplayDisableOnInteraction:false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    })

    var TEMPLATE = {
        list:`<li><a href="./hy-article.html?id={{_id}}"><i class="iconfont icon">&#xe60a;</i><span>{{title}}</span></a></li>`
    }

    ajaxRequext("http://127.0.0.1:3000/articles/hyArticle/all","GET","最新消息",$(".news"));
    ajaxRequext("http://127.0.0.1:3000/articles/hyArticle/all","GET","近期开班",$(".course"));
    ajaxRequext("http://127.0.0.1:3000/articles/hyArticle/all","GET","近期活动",$(".active"));
    function ajaxRequext(url,type,data,element){
        $.ajax({
            url:url,
            type:type,
            data:{
                type:data
            },
            success:function (data) {
                data.data.forEach((function(el,index){
                    var temp = TEMPLATE.list;
                    console.log(el._id);
                    console.log(el.title);
                    temp = temp.replace("{{_id}}",el._id);
                    temp = temp.replace("{{title}}",el.title);
                    element.append(temp);
                }))
            }
        });
    }


})(window.jQuery)