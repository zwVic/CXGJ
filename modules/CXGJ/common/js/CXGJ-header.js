/**
 * Created by Administrator on 2017/7/19.
 */

(function ($) {
    var template = `<div class="header">
		<div class="left"><span></span></div>
		<div class="center" data-index="0">
			<a href="./index.html" class="nav">首页</a>
			<a href="./subordinateCompany.html" class="nav">下属公司</a>
			<a href="./understand.html" class="nav">公司介绍</a><a href="" class="nav">更多</a>
		</div>
	</div>`;
    $("body").prepend(template);

    var href = window.location.href;
    var index = href.lastIndexOf("/");
    var currentPage = href.slice(index);
    var nav = $(".nav");
    switch (currentPage){
        case "/":
        case "/index.html":
            $(nav[0]).addClass("active").siblings().removeClass('active');
            break;
        case "/subordinateCompany.html":
            $(nav[1]).addClass("active").siblings().removeClass('active');
            break;
        case "/understand.html":
            $(nav[2]).addClass("active").siblings().removeClass('active');
            break;

    }

})(window.jQuery)