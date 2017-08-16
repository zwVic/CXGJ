(function ($) {
    function Pagination(options) {
        var _this = this;
        _this.PageNum = options.PageNum || 1;
        _this.parent = options.parent;
        _this.articles = options.articles;
        _this.navList = options.navList;
        _this.init();
    }

    //文章模板
    var template = ['<section class="articles">     ',
        '  <div class="img-wrapper">',
        '<img src="{{mainImg}}">',
        '</div>',
        '        <span class="publisher">{{publisher}}</span><span class="time">{{date}}</span>',
        '        <h3><a href="./lr-article.html?id={{id}}&type={{type}}">{{title}}</a></h3>',
        '        <div class="intro">',
        '            {{intro}}',
        '        </div>',
        '        <a class="article-footer" href="#">{{artcilesType}}</a>',
        '    </section>'].join("");

    Pagination.prototype = {
        init: function () {
            var _this = this;
            var url = location.href;
            var re = /page=([\d]+)&?/;          //匹配页数正则
            var reType = /type=([\w]+)&?/;      //匹配类型正则
            _this.type = url.match(reType) && url.match(reType)[1] || "theory";
            template = template.replace("{{type}}", _this.type);
            _this.base_url = "http://127.0.0.1:8080/build/lr-articles.html?type=" + _this.type + "&page={{page}}";//获取文章类型和第几页
            _this.changeActive(_this.type)    //改变左侧高亮
            _this.index = (url.match(re) && parseInt(url.match(re)[1])) || 1;   //当前第几页
            _this.getArticle(_this.index);  //获取文章
            _this.getCount();       //获取总数量
        },
        getCount: function () { //获取总共有多少文章
            var _this = this;
            var url = 'http://127.0.0.1:3000/articles/lrArticle/count'
            var type = "GET";
            var data = {type: _this.type};  //文章类型
            var callback = function (results) {
                var count = results.data;   //总数量
                var total = Math.ceil(count / _this.PageNum);   //计算有多少页数
                _this.paginationInit(_this.index, total);       //初始化分页器
            }
            _this.ajaxRequest(url, data, type, callback);
        },
        paginationInit: function (index, total) {       //初始化分页器
            var _this = this;
            console.log(_this.parent[0])
            var pager = new Pager({
                index: index,               //当前索引
                total: total,               //总页数
                parent: _this.parent[0],    //分页器父级元素
                baseUrl: _this.base_url,           //链接地址
                onchange: _this.doChangePage.bind(_this)
            });
        },
        doChangePage: function (index, last, total) {
        },
        ajaxRequest: function (url, data, type, callback) {
            $.ajax({
                url: url,
                data: data,
                type: type,
                success: function (results) {
                    console.log(results)
                    callback(results);
                }
            })
        },
        getArticle(){               //获取文章
            var _this = this;
            var url = 'http://127.0.0.1:3000/articles/lrArticle/get';
            var type = "GET";
            var data = {type: _this.type, count: _this.PageNum, index: _this.index};
            var callback = function (results) {
                _this.articles.empty();             //清空文章列表
                for (var i = 0; i < results.data.length; i++) {
                    var temp = template;    //模板
                    for (var key in results.data[i]) {
                        temp = temp.replace("{{" + key + "}}", results.data[i][key]);
                    }
                    _this.articles.append(temp);
                }

            }
            _this.ajaxRequest(url, data, type, callback);
        },
        changeActive(type){
            var _this = this;
            var li = _this.navList.find("li");

            for (var i = 0; i < li.length; i++) {
                var reType = /type=([\w]+)&?/;
                if (li.eq(i).find("a")[0].href.match(reType)[1] === type) {     //根据type 与li下面的a的href判断
                    li.eq(i).addClass("active").siblings().removeClass("active");
                    template = template.replace("{{artcilesType}}",li.eq(i).find("a").html());  //改变文章下角的类型
                    break;
                }
            }
        }
    }
    new Pagination({
        PageNum: 4,
        parent: $("#pager"),
        articles: $("#articles"),
        navList: $(".navList")
    })
})(window.jQuery)