(function ($) {
    function Pagination(options) {
        var _this = this;
        _this.PageNum = options.PageNum || 1;
        _this.parent = options.parent;
        _this.articles = options.articles;
        _this.init();
    }

    //文章模板
    var template = ['<section class="articles">     ',
        '        <span class="publisher">{{publisher}}</span><span class="time">{{date}}</span>',
        '        <h3>{{title}}</h3>',
        '        <p class="content">',
        '            {{content}}',
        '        </p>',
        '        <a href="#">影院天堂</a>',
        '    </section>'].join("");

    Pagination.prototype = {
        init: function () {
            var _this = this;
            var url = location.href;
            var re = /page=([\d]+)&?/;
            var reType = /type=([\w]+)&?/;
            _this.type = url.match(reType) && url.match(reType)[1] || "theory";
            _this.base_url = "http://127.0.0.1:8080/build/lr-articles.html?type="+ _this.type+"&page={{page}}";

            _this.index = (url.match(re) && parseInt(url.match(re)[1])) || 1;
            _this.getArticle(_this.index);  //获取文章
            _this.getCount();       //获取总数量
        },
        getCount: function () {
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
        paginationInit: function (index, total) {
            var _this = this;
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
                    callback(results);
                }
            })
        },
        getArticle(){               //获取文章
            var _this = this;
            var url = 'http://127.0.0.1:3000/articles/lrArticle/get'
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
        }
    }
    // new Pagination({
    //     PageNum: 5,
    //     parent: $("#pager"),
    //     articles: $("#articles")
    // })
})(window.jQuery)