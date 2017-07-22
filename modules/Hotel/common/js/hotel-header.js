/**
 * Created by Administrator on 2017/7/20.
 */
(function($){
    var header = ['<header>',
        '        <div class="logo">',
        '            <span></span>',
        '        </div>',
        '		<nav>',
        '			<li><div class="borderStyle"></div>',
        '				<a href="./ht-index.html">首页</a>',
        '			</li>|',
        '			<li><div class="borderStyle"></div>',
        '				<a href="./ht-hotelFell.html">感受酒店</a>',
        '			</li>|',
        '			<li><div class="borderStyle"></div>',
        '				<a href="./ht-managementKnowledge.html">酒店管理知识</a>',
        '			</li>|',
        '			<li><div class="borderStyle"></div>',
        '				<a href="./ht-aboutUs.html">关于我们</a>',
        '			</li>|',
        '			<li><div class="borderStyle"></div>',
        '				<a href="./ht-contactUs.html">联系我们</a>',
        '			</li>',
        '		</nav>',
        '	</header>'].join("");

    //添加头部
    $("body").prepend(header);
    var href = window.location.href;
    var index = href.lastIndexOf("/");
    var currentPage = href.slice(index);
    var li = $("nav li");
    var borderStyle = $("nav li .borderStyle");

    //下划线动画相关
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
            $("header").removeAttr('style');
            $(borderStyle[0]).addClass("active").siblings().removeClass('active');
            break;
        case "/ht-hotelFell.html":
            $("header").removeAttr('style');
            $(borderStyle[1]).addClass("active").siblings().removeClass('active');
            break;
        case "/ht-managementKnowledge.html":
            $("header").attr({style:"background:rgba(0,0,0,0.6)"});
            $(borderStyle[2]).addClass("active").siblings().removeClass('active');
            break;
        case "/ht-aboutUs.html":
            $("header").attr({style:"background:rgba(0,0,0,0.6)"});
            $(borderStyle[3]).addClass("active").siblings().removeClass('active');
            break;
        case "/ht-contactUs.html":
            $("header").attr({style:"background:rgba(0,0,0,0.6)"});
            $(borderStyle[4]).addClass("active").siblings().removeClass('active');
            break;
    }

    var footer = [' <footer>',
        '        <div class="footer-container">',
        '            <ul>',
        '                <li>友情链接</li>',
        '                <li><a href="http://www.hocoohotel.cn">后客智慧酒店</a></li>',
        '                <li><a href="http://www.szpattayahotel.com">深圳芭堤雅酒店</a></li>',
        '            </ul>',
        '            <p class="copyright">Copyright 2017 东莞理工酒店管理 版权所有</p>',
        '        </div>',
        '    </footer>'].join("");
    $('body').append(footer);

})(window.jQuery)
