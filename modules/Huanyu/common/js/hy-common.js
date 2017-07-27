/**
 * Created by admin on 2017/7/24.
 */
(function () {
    var headerTemplate = ['<div id="header">',          //头部模板
        '    <div class="headerWrap">',
        '            <span class="logo"></span><span class="name">深圳市创新工匠投资咨询有限公司</span>',
        '    </div>',
        '</div>'].join("");

    $("body").prepend(headerTemplate);          //插入头部

    var navTemplate = ['<div id="nav"  data-index=\'0\'>',      //导航栏模板
        '    <section class="nav-wrapper">',
        '        <span class="text iconfont" style="float:right">&#xe60b; 咨询电话:0755-82780808</span>',
        '        <ul class="navs">',
        '            <li class="item"><a href="./hy-index.html" class="naver">首页</a>',
        '            </li>',
        '            <li class="item"><a href="./hy-picture.html" class="naver">培训项目</a>',
        // '                <ul>',
        // '                    <li><a href="#">企业内训</a></li>',
        // '                    <li><a href="#">职业技能培训</a></li>',
        // '                </ul>',
        '            </li>',
        '            <li class="item"><a href="./hy-form.html" class="naver">在线报名</a>',
        '                <ul>',
        '                    <li><a href="./hy-form.html">培训报名</a></li>',
        '                    <li><a href="./hy-form.html">竞赛报名</a></li>',
        '                </ul>',
        '            </li>',
        '            <li class="item"><a href="javascript:;" class="naver">在线学习</a>',
        '                <ul>',
        '                    <li><a href="javascript:;">相关资料</a></li>',
        '                    <li><a href="javascript:;">在线视频</a></li>',
        '                    <li><a href="javascript:;">在线测试</a></li>',
        '                </ul>',
        '            </li>',
        '            <li class="item"><a href="javascript:;" class="naver">下载专区</a>',
        '                <ul>',
        '                    <li><a href="javascript:;">竞赛说明</a></li>',
        '                    <li><a href="javascript:;">竞赛报名表</a></li>',
        '                    <li><a href="javascript:;">工作证明模板</a></li>',
        '                    <li><a href="javascript:;">更多下载</a></li>',
        '                </ul>',
        '            </li>',
        '            </li>',
        '            <li class="item"><a href="./hy-about.html" class="naver">了解公司</a>',
        '                <ul>',
        '                    <li><a href="./hy-about.html">关于公司</a></li>',
        '                    <li><a href="#">学校资讯</a></li>',
        // '                    <li><a href="#">学校风采</a></li>',
        '                </ul>',
        '            </li>',
        '            <div class="bg"></div>',
        '        </ul>',
        '    </section>',
        '</div>',
    ].join("");

    $("#header").after(navTemplate);        //在头部下方插入导航栏

    var footerTemplate = ['<footer>',               //尾部模板
        '    <div class="flexBox">',
        '        <div class="left">',
        '            <div class="code"></div>',
        '            环宇培训中心创新办学理念，大力推行与企业及大专院校的人才培养及输出战略合作，采取社会招生、 定单培训、联合办学、政府企业委培、专题讲座等培训方式多层次全方位开展教学。',
        '        </div><!--',
        '             -->',
        '        <div class="center">',
        '            <div class="logo"></div>',
        '            <div class="title">深圳市创新工匠投资咨询有限公司</div>',
        '        </div><!--',
        '             -->',
        '        <div class="right">',
        '            <div class="title">友情链接</div>',
        '            <ul>',
        '                <li><a href="http://www.30c.cn/">中网互联</a></li>',
        '                <li><a href="http://www.beida100.com/">百年教育网</a></li>',
        '                <li><a href="http://www.babyschool.com.cn/zaojiao/list_9.html">幸福家庭网</a></li>',
        '                <li><a href="http://www.jiaoyuda.com/">教育大论文网</a></li>',
        '            </ul>',
        '            <ul>',
        '                <li><a href="http://www.szhuanyupeixun.com/index.asp">深圳市职业培训网</a></li>',
        '                <li><a href="http://www.xykj2007.net/">整合网络营销</a></li>',
        '                <li><a href="http://www.huayiming.com/">华艺名教育网</a></li>',
        '                <li><a href="http://www.xuanke114.com/">天天电脑学习网</a></li>',
        '            </ul>',
        '        </div>',
        '    </div>',
        '    <div class="message">',
        '        <div class="link">在线客服QQ：362628685 2540915119</div>',
        '        /',
        '        <div class="link">电话：0755-82780808</div>',
        '        /',
        '        <div class="link">邮箱：huanyuzypeixun@163.com</div>',
        '        <div class="description">粤ICO备09185067号</div>',
        '    </div>',
        '</footer>'].join("");

    $("body").append(footerTemplate);           //插入尾部
    /******************导航栏动画*********************/
    $('.nav-wrapper .item').mouseover(function () {
        var _this = $(this);
        $(this).find('ul').css({"display": "block"});
        $('.bg').stop().animate({'left': _this.index() * 110 + 'px'}, 100);
        _this.find("ul").addClass('act').stop().animate({"opacity": 1}, 100);
        _this.siblings().find("ul").removeClass('act').stop().animate({"opacity": 0}, 100);
    });
    var index = parseInt($('#nav').attr('data-index'));

    $($('#nav').find('.bg')[0]).css('left', index * 110 + 'px');
    $($('#nav').find('.naver')[index]).css('color', '#3882b0');

    $('#nav').stop().mouseleave(function () {
        $('.bg').stop().animate({'left': index * 110}, 1000);
        $('.item ul').css({"display": "none"});
    });
    /***************************************************/
})()