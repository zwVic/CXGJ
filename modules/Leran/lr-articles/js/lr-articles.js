/**
 * Created by admin on 2017/7/31.
 */
(function ($) {

    function Pagination(options) {
        var _this = this;
        _this.PageNum = options.PageNum || 1;
        _this.parent = options.parent;
        _this.articles = options.articles;
        _this.init();
    }

    var template = `<section class="articles">
        <span class="publisher">{{publisher}}</span><span class="time">{{date}}</span>
        <h3>{{title}}</h3>
        <p class="content">
            {{content}}
        </p>
        <a href="#">影院天堂</a>
    </section>`

    var base_url = 'http://192.168.232.138:8081/build/lr-articles.html?page={{page}}&type="最新消息"'
    Pagination.prototype = {
        init: function () {
            var _this = this;
            var url = location.href;
            var re = /page=([\d]+)&?/;
            var reType = /type=(.+)&?/;
            console.log(url.match(reType)[1]);
            console.log(url.match(re)[1]);
            _this.type = url.match(reType)[1] && "最新消息";

            _this.index = parseInt(url.match(re)[1]) || 1;

            _this.getArticle(_this.index);
            _this.getCount();       //获取总数量
        },
        getCount: function () {
            var _this = this;
            var url = 'http://127.0.0.1:3000/articles/lrArticle/count'
            var type = "GET";
            var data = {type: _this.type};
            var callback = function (results) {
                var count = results.data;
                var total = Math.ceil(count / _this.PageNum);
                _this.paginationInit(_this.index, total);
            }
            _this.ajaxRequest(url, data, type, callback);
        },
        paginationInit: function (index, total) {
            console.log(index,total);
            var _this = this;
            var pager = new Pager({
                index: index,
                total: total,
                parent: _this.parent[0],
                onchange: _this.doChangePage.bind(_this)
            });
        },
        doChangePage: function (index,last,total) {
            // var url  = base_url.replace("{{page}}",index.index);
            // window.location.href = url;
            //console.log(index,last,total);
            this.index = index.index;
            this.getArticle();
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
        getArticle(){
            var _this = this;
            var url = 'http://127.0.0.1:3000/articles/lrArticle/get'
            var type = "GET";
            var data = {pageNum: _this.PageNum, type: _this.type, count: _this.PageNum, index: _this.index};
            var callback = function (results) {
                _this.articles.empty();
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
    new Pagination({
        PageNum: 5,
        parent: $("#pager"),
        articles: $("#articles")
    })
})(window.jQuery)