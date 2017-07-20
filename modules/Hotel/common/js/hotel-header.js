/**
 * Created by Administrator on 2017/7/20.
 */
(function($){
    var template = `<header>
		<img src="./hotel.png" alt="" class="logo">
		<nav>
			<li class="active">首页
				<div class="borderStyle"></div>
			</li>
			<li>感受酒店
				<div class="borderStyle"></div>
			</li>
			<li>酒店管理知识
				<div class="borderStyle"></div>
			</li>
			<li>关于我们
				<div class="borderStyle"></div>
			</li>
			<li>联系我们
				<div class="borderStyle"></div>
			</li>
		</nav>
	</header>`;

    $("body").prepend(template);
    var href = window.location.href;
    var index = href.lastIndexOf("/");
    var currentPage = href.slice(index);
    var borderStyle = $("nav li .borderStyle");
    var style = {
        animation: "hideBorder .3s linear",
        animationFillMode: "forwards"
    };

    borderStyle.mouseout(function(){
        $(this).css(style);
    });

    switch (currentPage){
        case "/":
        case "/ht-index.html":
            $(borderStyle[0]).addClass("active").siblings().removeClass('active');
            break;
        case "/ht-hotelFell.html":
            $(borderStyle[1]).addClass("active").siblings().removeClass('active');
            break;
        case "/ht-managementKnowledge.html":
            $(borderStyle[2]).addClass("active").siblings().removeClass('active');
            break;
        case "/ht-aboutUs.html":
            $(borderStyle[3]).addClass("active").siblings().removeClass('active');
            break;
        case "/contactUs.html":
            $(borderStyle[4]).addClass("active").siblings().removeClass('active');
            break;
    }
})(window.jQuery)
