/**
 * Created by Administrator on 2017/7/20.
 */
(function($){
    var header = `<header>
        <div class="logo">
            <span></span>
        </div>
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

    $("body").prepend(header);
    var href = window.location.href;
    var index = href.lastIndexOf("/");
    var currentPage = href.slice(index);
    var li = $("nav li");
    var borderStyle = $("nav li .borderStyle");

    li.mouseout(function(){
        var currentLi = $(this).find(".borderStyle");
        if(!currentLi.hasClass('active')){
            currentLi.attr({style:"animation:borderanimation-hide .3s linear;animation-fill-mode: forwards"});
        }

    });
    li.mouseover(function(){
        var currentLi = $(this).find(".borderStyle");
            currentLi.removeAttr('style');
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

    var footer = `
    <footer>
        <div class="footer-container">
            <ul>
                <li>友情链接</li>
                <li><a href="http://www.hocoohotel.cn">后客智慧酒店</a></li>
                <li><a href="http://www.szpattayahotel.com">深圳芭堤雅酒店</a></li>
            </ul>
            <p class="copyright">Copyright 2017 东莞理工酒店管理 版权所有</p>
        </div>
    </footer>`;
    $('body').append(footer);

})(window.jQuery)
